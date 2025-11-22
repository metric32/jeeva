/*
  # Seed Sample Hospital Data

  1. Insert sample hospitals with realistic Odisha locations
  2. Add bed inventory for each hospital
  3. Initialize availability tracking
*/

-- Insert sample hospitals in Odisha
INSERT INTO hospitals (name, address, city, state, pincode, latitude, longitude, phone, email, website, image_url, emergency_available, radiology_available) VALUES
  ('CWS Hospital', '123 Hospital Road, Rourkela', 'Rourkela', 'Odisha', '769012', 22.2047, 84.8537, '+91-9999999999', 'contact@cwshospital.com', 'cwshospital.com', 'https://images.pexels.com/photos/263402/pictures-of-children-playing-649153.jpeg?w=500&h=350&fit=crop', true, true),
  ('RGH - Rourkela General Hospital', '456 Main Street, Rourkela', 'Rourkela', 'Odisha', '769001', 22.2100, 84.8600, '+91-8888888888', 'info@rghhospital.in', 'rghhospital.in', 'https://images.pexels.com/photos/279759/medical-doctor-healthcare-hospital-279759.jpeg?w=500&h=350&fit=crop', true, true),
  ('Hi-Tech Medical Centre', '789 Healthcare Hub, Rourkela', 'Rourkela', 'Odisha', '769003', 22.2150, 84.8450, '+91-7777777777', 'support@hitechmedical.in', 'hitechmedical.in', 'https://images.pexels.com/photos/1831217/pexels-photo-1831217.jpeg?w=500&h=350&fit=crop', true, true),
  ('Apollo Hospitals Bhubaneswar', '321 Platinum Avenue, Bhubaneswar', 'Bhubaneswar', 'Odisha', '751007', 20.2961, 85.8245, '+91-6666666666', 'apollo@bhubaneswar.com', 'apollo.com', 'https://images.pexels.com/photos/1310525/pexels-photo-1310525.jpeg?w=500&h=350&fit=crop', true, true),
  ('Care Hospital', '654 Medical Plaza, Bhubaneswar', 'Bhubaneswar', 'Odisha', '751006', 20.2800, 85.8300, '+91-5555555555', 'care@hospital.in', 'carehospital.in', 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?w=500&h=350&fit=crop', true, false),
  ('AIIMS Bhubaneswar', '987 Government Campus, Bhubaneswar', 'Bhubaneswar', 'Odisha', '751024', 20.2550, 85.7850, '+91-4444444444', 'aiims@bhubaneswar.in', 'aiims.edu.in', 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=500&h=350&fit=crop', true, true);

-- Get the hospital IDs and bed type IDs for insertion
-- Note: Using dynamic queries with CTEs for bed insertion

DO $$
DECLARE
  v_cwsid uuid;
  v_rghid uuid;
  v_hitechid uuid;
  v_apolloid uuid;
  v_careid uuid;
  v_aimsid uuid;
  v_icu_bed_type_id uuid;
  v_hdu_bed_type_id uuid;
  v_general_bed_type_id uuid;
  v_emergency_bed_type_id uuid;
BEGIN
  -- Get hospital IDs
  SELECT id INTO v_cwsid FROM hospitals WHERE name = 'CWS Hospital' LIMIT 1;
  SELECT id INTO v_rghid FROM hospitals WHERE name = 'RGH - Rourkela General Hospital' LIMIT 1;
  SELECT id INTO v_hitechid FROM hospitals WHERE name = 'Hi-Tech Medical Centre' LIMIT 1;
  SELECT id INTO v_apolloid FROM hospitals WHERE name = 'Apollo Hospitals Bhubaneswar' LIMIT 1;
  SELECT id INTO v_careid FROM hospitals WHERE name = 'Care Hospital' LIMIT 1;
  SELECT id INTO v_aimsid FROM hospitals WHERE name = 'AIIMS Bhubaneswar' LIMIT 1;

  -- Get bed type IDs
  SELECT id INTO v_icu_bed_type_id FROM bed_types WHERE name = 'ICU' LIMIT 1;
  SELECT id INTO v_hdu_bed_type_id FROM bed_types WHERE name = 'HDU' LIMIT 1;
  SELECT id INTO v_general_bed_type_id FROM bed_types WHERE name = 'General Ward' LIMIT 1;
  SELECT id INTO v_emergency_bed_type_id FROM bed_types WHERE name = 'Emergency' LIMIT 1;

  -- Insert beds for CWS Hospital
  INSERT INTO hospital_beds (hospital_id, bed_type_id, total_beds, available_beds) VALUES
    (v_cwsid, v_icu_bed_type_id, 15, 8),
    (v_cwsid, v_hdu_bed_type_id, 20, 12),
    (v_cwsid, v_general_bed_type_id, 50, 25),
    (v_cwsid, v_emergency_bed_type_id, 10, 6);

  -- Insert beds for RGH
  INSERT INTO hospital_beds (hospital_id, bed_type_id, total_beds, available_beds) VALUES
    (v_rghid, v_icu_bed_type_id, 12, 5),
    (v_rghid, v_general_bed_type_id, 45, 15),
    (v_rghid, v_emergency_bed_type_id, 8, 3);

  -- Insert beds for Hi-Tech
  INSERT INTO hospital_beds (hospital_id, bed_type_id, total_beds, available_beds) VALUES
    (v_hitechid, v_icu_bed_type_id, 20, 10),
    (v_hitechid, v_hdu_bed_type_id, 25, 18),
    (v_hitechid, v_general_bed_type_id, 60, 35);

  -- Insert beds for Apollo
  INSERT INTO hospital_beds (hospital_id, bed_type_id, total_beds, available_beds) VALUES
    (v_apolloid, v_icu_bed_type_id, 30, 12),
    (v_apolloid, v_hdu_bed_type_id, 35, 22),
    (v_apolloid, v_general_bed_type_id, 100, 55),
    (v_apolloid, v_emergency_bed_type_id, 15, 8);

  -- Insert beds for Care Hospital
  INSERT INTO hospital_beds (hospital_id, bed_type_id, total_beds, available_beds) VALUES
    (v_careid, v_icu_bed_type_id, 18, 9),
    (v_careid, v_general_bed_type_id, 55, 28);

  -- Insert beds for AIIMS
  INSERT INTO hospital_beds (hospital_id, bed_type_id, total_beds, available_beds) VALUES
    (v_aimsid, v_icu_bed_type_id, 40, 18),
    (v_aimsid, v_hdu_bed_type_id, 45, 25),
    (v_aimsid, v_general_bed_type_id, 120, 60),
    (v_aimsid, v_emergency_bed_type_id, 20, 10);
END $$;
