import { MapPin, Phone, Star } from 'lucide-react';

export default function LiveDemo() {
  const hospitals = [
    {
      name: 'CWS Hospital',
      beds: '50 beds available',
      status: 'available',
      distance: '2 km',
      time: '8 mins',
      rating: '4.8',
    },
    {
      name: 'RGH Government Hospital',
      beds: '5 beds limited',
      status: 'limited',
      distance: '8 km',
      time: '12 mins',
      rating: '4.5',
    },
    {
      name: 'Hi-Tech Medical College',
      beds: 'No beds',
      status: 'unavailable',
      distance: '15 km',
      time: '20 mins',
      rating: '4.7',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-[#10B981]';
      case 'limited':
        return 'bg-[#F59E0B]';
      case 'unavailable':
        return 'bg-[#EF4444]';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <section id="demo" className="py-24 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-[#6B7280]">
            Find nearby hospitals with available beds in seconds
          </p>
        </div>

        <div className="bg-[#E5E7EB] rounded-2xl p-1 shadow-2xl">
          <div className="bg-white rounded-t-xl px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
            </div>
            <div className="flex-1 text-center text-sm text-[#6B7280] font-medium">
              jeeva.care/search
            </div>
          </div>

          <div className="bg-white rounded-b-xl p-8">
            <div className="mb-6 flex items-center gap-3 bg-[#F3F4F6] rounded-xl px-4 py-4">
              <MapPin size={24} className="text-[#3B82F6]" />
              <input
                type="text"
                placeholder="Rourkela, 5km"
                className="flex-1 bg-transparent outline-none text-[#1F2937] text-lg"
                defaultValue="Rourkela, 5km"
              />
              <button className="bg-[#3B82F6] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB] transition-colors font-medium">
                Search
              </button>
            </div>

            <div className="space-y-4">
              {hospitals.map((hospital, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#3B82F6]"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                        {hospital.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1 ${getStatusColor(
                            hospital.status
                          )} text-white px-3 py-1 rounded-full text-sm font-medium`}
                        >
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                          {hospital.beds}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                        <span>{hospital.distance}</span>
                        <span>•</span>
                        <span>{hospital.time}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Star size={16} className="text-[#F59E0B] fill-[#F59E0B]" />
                          {hospital.rating}
                        </span>
                      </div>
                    </div>
                    <button className="bg-[#3B82F6] text-white px-6 py-3 rounded-xl hover:bg-[#2563EB] transition-all duration-300 hover:shadow-lg flex items-center gap-2 font-medium whitespace-nowrap">
                      <Phone size={18} />
                      Call Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
