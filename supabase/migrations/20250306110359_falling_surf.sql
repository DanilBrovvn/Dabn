/*
  # Create storage buckets for media files

  1. New Storage Buckets
    - `gallery` for storing images
    - `videos` for storing video files
  
  2. Security
    - Enable public access for both buckets
    - Add policy for admin to manage files
*/

-- Create gallery bucket for images
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery', 'gallery', true);

-- Create videos bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('videos', 'videos', true);

-- Allow public access to view files
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id IN ('gallery', 'videos'));

-- Allow authenticated users (admin) to manage files
CREATE POLICY "Admin Access"
ON storage.objects FOR ALL
TO authenticated
USING (bucket_id IN ('gallery', 'videos'))
WITH CHECK (bucket_id IN ('gallery', 'videos'));