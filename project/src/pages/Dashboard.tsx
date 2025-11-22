import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { LogOut, Edit2, Loader, AlertCircle, CheckCircle } from 'lucide-react';

interface HospitalBed {
  id: string;
  bed_type_name: string;
  total_beds: number;
  available_beds: number;
}

export default function Dashboard() {
  const { user, userProfile, signOut } = useAuth();
  const navigate = useNavigate();
  const [beds, setBeds] = useState<HospitalBed[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBedId, setEditingBedId] = useState<string | null>(null);
  const [editingBedValue, setEditingBedValue] = useState<number>(0);
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    fetchBedData();
  }, [user, navigate]);

  const fetchBedData = async () => {
    if (!userProfile?.hospital_id) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('hospital_beds')
        .select(`
          id,
          total_beds,
          available_beds,
          bed_types(name)
        `)
        .eq('hospital_id', userProfile.hospital_id);

      if (error) throw error;

      const formattedBeds = (data || []).map((bed: any) => ({
        id: bed.id,
        bed_type_name: bed.bed_types.name,
        total_beds: bed.total_beds,
        available_beds: bed.available_beds,
      }));

      setBeds(formattedBeds);
    } catch (error) {
      console.error('Error fetching beds:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateBeds = async (bedId: string) => {
    if (editingBedValue < 0 || editingBedValue > (beds.find((b) => b.id === bedId)?.total_beds || 0)) {
      alert('Invalid bed count');
      return;
    }

    setSaving(true);
    try {
      const { error } = await supabase
        .from('hospital_beds')
        .update({ available_beds: editingBedValue })
        .eq('id', bedId);

      if (error) throw error;

      setBeds((prev) =>
        prev.map((bed) =>
          bed.id === bedId ? { ...bed, available_beds: editingBedValue } : bed
        )
      );

      setEditingBedId(null);
      setSuccessMessage('Bed availability updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error updating beds:', error);
      alert('Failed to update bed count');
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (userProfile?.role === 'patient') {
    return (
      <div className="min-h-screen bg-white pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center py-12">
          <AlertCircle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Restricted</h1>
          <p className="text-gray-600">This dashboard is only for hospital staff and administrators.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hospital Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage bed availability in real-time</p>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-gray-600 text-sm">Hospital Name</p>
              <p className="text-lg font-semibold text-gray-900">
                {userProfile?.full_name || 'Hospital'}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Role</p>
              <p className="text-lg font-semibold text-gray-900 capitalize">{userProfile?.role}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Email</p>
              <p className="text-lg font-semibold text-gray-900 text-sm">{user?.email}</p>
            </div>
          </div>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-green-700">{successMessage}</p>
          </div>
        )}

        <div className="grid gap-6">
          {beds.map((bed) => (
            <div
              key={bed.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{bed.bed_type_name}</h3>
                  <p className="text-sm text-gray-600">
                    Total beds: {bed.total_beds}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">{bed.available_beds}</p>
                  <p className="text-sm text-gray-600">Available</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(bed.available_beds / bed.total_beds) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {editingBedId === bed.id ? (
                <div className="mt-4 flex gap-2">
                  <input
                    type="number"
                    min="0"
                    max={bed.total_beds}
                    value={editingBedValue}
                    onChange={(e) => setEditingBedValue(Math.max(0, parseInt(e.target.value) || 0))}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => handleUpdateBeds(bed.id)}
                    disabled={saving}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 px-4 rounded-lg font-semibold transition flex items-center gap-2"
                  >
                    {saving && <Loader className="w-4 h-4 animate-spin" />}
                    Save
                  </button>
                  <button
                    onClick={() => setEditingBedId(null)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-lg font-semibold transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setEditingBedId(bed.id);
                    setEditingBedValue(bed.available_beds);
                  }}
                  className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
                >
                  <Edit2 className="w-4 h-4" />
                  Update Availability
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
