/*
  # JEEVA Hospital Management System - Database Schema

  1. New Tables
    - `hospitals`: Main hospital directory with location and metadata
    - `bed_types`: Types of beds available (ICU, General, etc.)
    - `hospital_beds`: Current bed inventory per hospital
    - `bed_availability`: Real-time bed status tracking
    - `users`: Extended user profiles with hospital assignments
    - `user_roles`: Define user types (patient, hospital_staff, admin)

  2. Security
    - Enable RLS on all tables
    - Patients can view hospital data but cannot modify it
    - Hospital staff can only manage their own hospital's beds
    - Admin can manage all hospitals

  3. Key Features
    - Automatic timestamp tracking
    - Real-time availability updates
    - Hospital search capabilities
    - Role-based access control
*/

-- Create user_roles enum
CREATE TYPE user_role AS ENUM ('patient', 'hospital_staff', 'admin');

-- Create hospitals table
CREATE TABLE IF NOT EXISTS hospitals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  pincode text NOT NULL,
  latitude numeric NOT NULL,
  longitude numeric NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  website text,
  image_url text,
  rating numeric DEFAULT 0,
  total_reviews integer DEFAULT 0,
  emergency_available boolean DEFAULT true,
  radiology_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bed_types table
CREATE TABLE IF NOT EXISTS bed_types (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create hospital_beds table
CREATE TABLE IF NOT EXISTS hospital_beds (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hospital_id uuid NOT NULL REFERENCES hospitals(id) ON DELETE CASCADE,
  bed_type_id uuid NOT NULL REFERENCES bed_types(id) ON DELETE RESTRICT,
  total_beds integer NOT NULL DEFAULT 0,
  available_beds integer NOT NULL DEFAULT 0,
  updated_at timestamptz DEFAULT now(),
  UNIQUE(hospital_id, bed_type_id)
);

-- Create bed_availability table for historical tracking
CREATE TABLE IF NOT EXISTS bed_availability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hospital_id uuid NOT NULL REFERENCES hospitals(id) ON DELETE CASCADE,
  available_beds_count integer NOT NULL,
  timestamp timestamptz DEFAULT now()
);

-- Create extended users table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role DEFAULT 'patient',
  hospital_id uuid REFERENCES hospitals(id) ON DELETE SET NULL,
  phone text,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_hospitals_city ON hospitals(city);
CREATE INDEX IF NOT EXISTS idx_hospitals_state ON hospitals(state);
CREATE INDEX IF NOT EXISTS idx_hospital_beds_hospital_id ON hospital_beds(hospital_id);
CREATE INDEX IF NOT EXISTS idx_bed_availability_hospital_id ON bed_availability(hospital_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_hospital_id ON user_profiles(hospital_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_role ON user_profiles(role);

-- Enable RLS on all tables
ALTER TABLE hospitals ENABLE ROW LEVEL SECURITY;
ALTER TABLE bed_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE hospital_beds ENABLE ROW LEVEL SECURITY;
ALTER TABLE bed_availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Hospitals: Everyone can view, only admins can modify
CREATE POLICY "Hospitals are viewable by all"
  ON hospitals FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Only admins can insert hospitals"
  ON hospitals FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

CREATE POLICY "Only admins can update hospitals"
  ON hospitals FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Bed Types: Everyone can view
CREATE POLICY "Bed types are viewable by all"
  ON bed_types FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Only admins can manage bed types"
  ON bed_types FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Hospital Beds: Everyone can view, hospital staff can update their own
CREATE POLICY "Hospital beds are viewable by all"
  ON hospital_beds FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Hospital staff can update their own beds"
  ON hospital_beds FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.hospital_id = hospital_beds.hospital_id
      AND user_profiles.role = 'hospital_staff'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.hospital_id = hospital_beds.hospital_id
      AND user_profiles.role = 'hospital_staff'
    )
  );

CREATE POLICY "Hospital staff can insert beds for their hospital"
  ON hospital_beds FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.hospital_id = hospital_beds.hospital_id
      AND user_profiles.role = 'hospital_staff'
    )
  );

-- Bed Availability: Everyone can view, hospital staff can insert
CREATE POLICY "Bed availability is viewable by all"
  ON bed_availability FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Hospital staff can log availability"
  ON bed_availability FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles up
      INNER JOIN hospital_beds hb ON up.hospital_id = hb.hospital_id
      WHERE up.id = auth.uid()
      AND up.role = 'hospital_staff'
      AND hb.hospital_id = bed_availability.hospital_id
    )
  );

-- User Profiles: Users can view their own, admins can view all
CREATE POLICY "Users can view their own profile"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON user_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Insert bed types
INSERT INTO bed_types (name, description) VALUES
  ('ICU', 'Intensive Care Unit'),
  ('HDU', 'High Dependency Unit'),
  ('General Ward', 'General Hospital Ward'),
  ('Emergency', 'Emergency/Casualty Beds'),
  ('Isolation', 'Isolation Ward'),
  ('Pediatric', 'Pediatric Ward')
ON CONFLICT (name) DO NOTHING;
