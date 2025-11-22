import { supabase } from '../lib/supabase';

export interface ContactHospitalRequest {
  hospitalId: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  bedType: string;
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  message?: string;
}

export const contactHospital = async (data: ContactHospitalRequest) => {
  const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-hospital`;

  const { data: session } = await supabase.auth.getSession();

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.session?.access_token || ''}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Hospital contact failed: ${response.statusText}`);
  }

  return response.json();
};

export const getHospitalsByCity = async (city: string) => {
  const { data, error } = await supabase
    .from('hospitals')
    .select('*')
    .eq('city', city);

  if (error) throw error;
  return data;
};

export const getHospitalBeds = async (hospitalId: string) => {
  const { data, error } = await supabase
    .from('hospital_beds')
    .select(
      `
      id,
      total_beds,
      available_beds,
      bed_types(name)
    `
    )
    .eq('hospital_id', hospitalId);

  if (error) throw error;

  return (data || []).map((bed: any) => ({
    id: bed.id,
    bed_type: bed.bed_types.name,
    total_beds: bed.total_beds,
    available_beds: bed.available_beds,
  }));
};
