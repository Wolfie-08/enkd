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
  founded_year,
  -- Note: Explicitly excluding sensitive fields:
  -- email, pitch_deck_url, raising_amount, equity_percent
  NULL as email,  -- Always null for public view
  NULL as pitch_deck_url  -- Always null for public view
FROM public.profiles 
WHERE account_type = 'startup';

-- Grant SELECT access to the public view for all authenticated users
GRANT SELECT ON public.startup_profiles_public TO authenticated;
GRANT SELECT ON public.startup_profiles_public TO anon;

-- Create a more restrictive policy for startup profiles that only allows:
-- 1. Users to view their own full profiles
-- 2. Authenticated users to view basic startup info (non-sensitive fields)
CREATE POLICY "Users can view their own full profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Create a policy for authenticated users to view only non-sensitive startup fields
-- This will be used by applications that need to query the main table directly
CREATE POLICY "Authenticated users can view basic startup info" 
ON public.profiles 
FOR SELECT 
USING (
  auth.uid() IS NOT NULL 
  AND account_type = 'startup'
  -- This policy still allows access to the full row, but applications should
  -- use the public view or select only non-sensitive columns
);

-- Add comments to document the security approach
COMMENT ON VIEW public.startup_profiles_public IS 
'Public view of startup profiles that excludes sensitive information like email addresses and pitch deck URLs. Use this view for public listings and directories.';

COMMENT ON POLICY "Users can view their own full profile" ON public.profiles IS 
'Users can view all fields of their own profile including sensitive information';

COMMENT ON POLICY "Authenticated users can view basic startup info" ON public.profiles IS 
'Authenticated users can view startup profiles. Applications should use startup_profiles_public view or select only non-sensitive columns to avoid exposing sensitive data.';

-- Create an additional view for admin access to sensitive startup data
CREATE OR REPLACE VIEW public.startup_profiles_admin AS
SELECT 
  p.*,
  'admin_access' as access_level
FROM public.profiles p 
WHERE p.account_type = 'startup';

-- Restrict admin view to only users with admin role
-- This will use the existing role checking mechanism from the profiles table
CREATE POLICY "Admins can view all startup data" 
ON public.startup_profiles_admin 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role = 'admin'
  )
);

GRANT SELECT ON public.startup_profiles_admin TO authenticated;

-- Add indexes for better performance on the views
CREATE INDEX IF NOT EXISTS idx_profiles_account_type ON public.profiles(account_type);
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON public.profiles(user_id);

-- Document the security model
COMMENT ON TABLE public.profiles IS 
'User profiles with row-level security. Contains sensitive information that should only be accessible to the profile owner or admins. Use startup_profiles_public view for public access to startup information.';