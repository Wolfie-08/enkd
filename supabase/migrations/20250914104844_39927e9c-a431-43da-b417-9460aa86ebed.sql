-- Add SELECT policy for contacts table that only allows administrators to view submitted contacts
CREATE POLICY "Administrators can view all contacts" 
ON public.contacts 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role = 'admin'
  )
);

-- Add UPDATE policy for contacts table so admins can mark contacts as processed
CREATE POLICY "Administrators can update contacts" 
ON public.contacts 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role = 'admin'
  )
);

-- Add a processed column to track contact form status (optional but recommended)
ALTER TABLE public.contacts 
ADD COLUMN IF NOT EXISTS processed BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS processed_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS processed_by UUID REFERENCES auth.users(id);

-- Create index for better performance on admin queries
CREATE INDEX IF NOT EXISTS idx_contacts_processed ON public.contacts(processed);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at);

-- Update the profiles table to ensure we can identify admins
-- Add a unique constraint to prevent duplicate user profiles
ALTER TABLE public.profiles 
ADD CONSTRAINT unique_user_profile UNIQUE (user_id);

COMMENT ON POLICY "Administrators can view all contacts" ON public.contacts IS 
'Only users with admin role in profiles table can view submitted contact forms';

COMMENT ON POLICY "Administrators can update contacts" ON public.contacts IS 
'Only users with admin role can update contact status and mark as processed';

COMMENT ON COLUMN public.contacts.processed IS 
'Tracks whether an admin has processed this contact form';

COMMENT ON COLUMN public.contacts.processed_at IS 
'Timestamp when the contact was marked as processed';

COMMENT ON COLUMN public.contacts.processed_by IS 
'User ID of the admin who processed this contact';