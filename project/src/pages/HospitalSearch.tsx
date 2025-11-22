import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { contactHospital } from '../services/hospital';
import { MapPin, Phone, Clock, AlertCircle, Loader, Star, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  image_url: string;
  rating: number;
  emergency_available: boolean;
}

interface HospitalWithBeds extends Hospital {
  beds: Array<{
    bed_type: string;
    available_beds: number;
    total_beds: number;
  }>;
}

export default function HospitalSearch() {
  const [hospitals, setHospitals] = useState<HospitalWithBeds[]>([]);
  const [filteredHospitals, setFilteredHospitals] = useState<HospitalWithBeds[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<HospitalWithBeds | null>(null);
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const { user, userProfile } = useAuth();
  const { revealElements } = useScrollReveal();
  const [contactForm, setContactForm] = useState({
    bedType: '',
    urgency: 'emergency' as const,
    message: '',
  });

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const { data: hospitalsData, error: hospitalsError } = await supabase
        .from('hospitals')
        .select('*');

      if (hospitalsError) throw hospitalsError;

      const hospitalsWithBeds = await Promise.all(
        (hospitalsData || []).map(async (hospital) => {
          const { data: bedsData, error: bedsError } = await supabase
            .from('hospital_beds')
            .select(`
              bed_types(name),
              available_beds,
              total_beds
            `)
            .eq('hospital_id', hospital.id);

          if (bedsError) throw bedsError;

          return {
            ...hospital,
            beds: (bedsData || []).map((bed: any) => ({
              bed_type: bed.bed_types.name,
              available_beds: bed.available_beds,
              total_beds: bed.total_beds,
            })),
          };
        })
      );

      setHospitals(hospitalsWithBeds);
      setFilteredHospitals(hospitalsWithBeds);

      const uniqueCities = Array.from(new Set(hospitalsWithBeds.map((h) => h.city)));
      setCities(uniqueCities as string[]);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = hospitals;

    if (selectedCity) {
      filtered = filtered.filter((h) => h.city === selectedCity);
    }

    if (searchLocation) {
      filtered = filtered.filter(
        (h) =>
          h.name.toLowerCase().includes(searchLocation.toLowerCase()) ||
          h.address.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    setFilteredHospitals(filtered);
  }, [selectedCity, searchLocation, hospitals]);

  useEffect(() => {
    revealElements();
  }, [filteredHospitals]);

  const getTotalAvailableBeds = (beds: HospitalWithBeds['beds']) => {
    return beds.reduce((sum, bed) => sum + bed.available_beds, 0);
  };

  const getAvailabilityStatus = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage >= 50) return { color: 'text-green-600', bg: 'bg-green-50', label: 'Available' };
    if (percentage >= 20) return { color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Limited' };
    return { color: 'text-red-600', bg: 'bg-red-50', label: 'Full' };
  };

  const handleOpenContactModal = (hospital: HospitalWithBeds) => {
    if (!user) {
      alert('Please sign in to contact hospitals');
      return;
    }
    setSelectedHospital(hospital);
    setContactForm({ bedType: hospital.beds[0]?.bed_type || '', urgency: 'emergency', message: '' });
    setShowContactModal(true);
  };

  const handleSubmitContact = async () => {
    if (!selectedHospital || !user || !userProfile) return;

    setContactLoading(true);
    try {
      await contactHospital({
        hospitalId: selectedHospital.id,
        patientName: userProfile.full_name || user.email || '',
        patientPhone: userProfile.phone || '',
        patientEmail: user.email || '',
        bedType: contactForm.bedType,
        urgency: contactForm.urgency,
        message: contactForm.message,
      });
      setContactSuccess(true);
      setTimeout(() => {
        setShowContactModal(false);
        setContactSuccess(false);
      }, 2000);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to contact hospital');
    } finally {
      setContactLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find a Hospital</h1>
          <p className="text-gray-600 max-w-2xl">
            Search available hospitals and check real-time bed availability in your area
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 sticky top-20 z-10 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Hospital Name or Location
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search hospital..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <select
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredHospitals.length === 0 ? (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No hospitals found matching your criteria</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal>
            {filteredHospitals.map((hospital) => {
              const totalAvailable = getTotalAvailableBeds(hospital.beds);
              const totalBeds = hospital.beds.reduce((sum, bed) => sum + bed.total_beds, 0);
              const status = getAvailabilityStatus(totalAvailable, totalBeds);

              return (
                <div
                  key={hospital.id}
                  className="scroll-reveal bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={hospital.image_url}
                      alt={hospital.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${status.bg} ${status.color}`}>
                      {status.label}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{hospital.name}</h3>

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>{hospital.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <a href={`tel:${hospital.phone}`} className="hover:text-blue-600">
                          {hospital.phone}
                        </a>
                      </div>
                    </div>

                    <div className="mb-4 pb-4 border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold text-gray-900">Available Beds</p>
                        <span className={`text-lg font-bold ${status.color}`}>
                          {totalAvailable}/{totalBeds}
                        </span>
                      </div>

                      <div className="space-y-1 text-xs">
                        {hospital.beds.map((bed, idx) => (
                          <div key={idx} className="flex justify-between text-gray-600">
                            <span>{bed.bed_type}:</span>
                            <span className="font-medium">{bed.available_beds}/{bed.total_beds}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleOpenContactModal(hospital)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition flex items-center justify-center"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Contact
                      </button>
                      <a
                        href={`tel:${hospital.phone}`}
                        className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg font-semibold transition flex items-center justify-center"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {showContactModal && selectedHospital && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900">Contact {selectedHospital.name}</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {contactSuccess ? (
                <div className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-green-600 text-xl">✓</span>
                    </div>
                  </div>
                  <p className="text-gray-900 font-semibold">Request Submitted</p>
                  <p className="text-gray-600 text-sm mt-2">The hospital will contact you shortly</p>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bed Type</label>
                    <select
                      value={contactForm.bedType}
                      onChange={(e) => setContactForm({ ...contactForm, bedType: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {selectedHospital.beds.map((bed) => (
                        <option key={bed.bed_type} value={bed.bed_type}>
                          {bed.bed_type} ({bed.available_beds}/{bed.total_beds})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
                    <select
                      value={contactForm.urgency}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          urgency: e.target.value as 'low' | 'medium' | 'high' | 'emergency',
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={3}
                      placeholder="Any additional details..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setShowContactModal(false)}
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmitContact}
                      disabled={contactLoading}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 px-4 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                    >
                      {contactLoading && <Loader className="w-4 h-4 animate-spin" />}
                      {contactLoading ? 'Sending...' : 'Send Request'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
