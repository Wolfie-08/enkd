-- Remove the overly permissive public SELECT policy for startup profiles
DROP POLICY IF EXISTS "Public can view startup profiles" ON public.profiles;

-- Create a public view that only exposes non-sensitive startup information
CREATE OR REPLACE VIEW public.startup_profiles_public AS
SELECT 
  id,
  user_id,
  created_at,
  name,
  logo_url,
  bio,
  stage,
  industry,
  region,
  industries,
  location,
  account_type,
  founded_year
  -- Note: Explicitly excluding sensitive fields:
  -- email, pitch_deck_url, raising_amount, equity_percent
FROM public.profiles 
WHERE account_type = 'startup';

-- Grant SELECT access to the public view
GRANT SELECT ON public.startup_profiles_public TO authenticated;
GRANT SELECT ON public.startup_profiles_public TO anon;

-- Create a security definer function for admin access to sensitive startup data
CREATE OR REPLACE FUNCTION public.get_startup_admin_data()
RETURNS TABLE (
  id uuid,
  user_id uuid,
  created_at timestamptz,
  updated_at timestamptz,
  name text,
  email text,
  logo_url text,
  bio text,
  stage text,
  industry text,
  region text,
  industries text[],
  location text,
  account_type text,
  founded_year integer,
  pitch_deck_url text,
  raising_amount numeric,
  equity_percent numeric,
  role text,
  full_name text
)
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    p.id,
    p.user_id,
    p.created_at,
    p.updated_at,
    p.name,
    p.email,
    p.logo_url,
    p.bio,
    p.stage,
    p.industry,
    p.region,
    p.industries,
    p.location,
    p.account_type,
    p.founded_year,
    p.pitch_deck_url,
    p.raising_amount,
    p.equity_percent,
    p.role,
    p.full_name
  FROM public.profiles p 
  WHERE p.account_type = 'startup'
  AND EXISTS (
    SELECT 1 FROM public.profiles admin_profile
    WHERE admin_profile.user_id = auth.uid() 
    AND admin_profile.role = 'admin'
  );
$$;

-- Grant execute permission to authenticated users (function will handle authorization)
GRANT EXECUTE ON FUNCTION public.get_startup_admin_data() TO authenticated;

-- Update RLS policies to be more secure:
-- 1. Users can view their own full profiles
CREATE POLICY "Users can view their own full profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Add comments to document the security approach
COMMENT ON VIEW public.startup_profiles_public IS 
'Public view of startup profiles that excludes sensitive information like email addresses and pitch deck URLs. Use this view for public listings and directories.';

COMMENT ON FUNCTION public.get_startup_admin_data() IS 
'Security definer function that allows only admin users to access full startup profile data including sensitive fields like email and pitch_deck_url.';

COMMENT ON POLICY "Users can view their own full profile" ON public.profiles IS 
'Users can view all fields of their own profile including sensitive information. Public access to startup data should use startup_profiles_public view.';

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_account_type ON public.profiles(account_type);
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON public.profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);

-- Document the security model
COMMENT ON TABLE public.profiles IS 
'User profiles with row-level security. Contains sensitive information that should only be accessible to the profile owner or admins. Use startup_profiles_public view for public access to startup information.';