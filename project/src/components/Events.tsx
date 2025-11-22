import { Calendar, MapPin, Users } from 'lucide-react';

export default function Events() {
  const events = [
    {
      year: '2025',
      month: 'March',
      title: 'Coolest Projects Winner',
      description:
        'Won the healthcare innovation category at Coolest Projects 2025, Ireland\'s largest tech showcase for young innovators.',
      images: ['Award Ceremony', 'Team Presentation', 'Project Demo'],
      location: 'Dublin, Ireland',
      attendees: '500+ attendees',
      color: 'bg-[#3B82F6]',
    },
    {
      year: '2025',
      month: 'February',
      title: 'First Hospital Integration',
      description:
        'Successfully integrated with CWS Hospital, our first partner. Real-time bed updates now available for 200+ beds.',
      images: ['Partnership Signing', 'Hospital Tour', 'Team Meeting'],
      location: 'Rourkela, Odisha',
      attendees: 'CWS Medical Staff',
      color: 'bg-[#10B981]',
    },
    {
      year: '2025',
      month: 'January',
      title: 'Pilot Launch at NIT Rourkela',
      description:
        'Launched beta version with NIT Rourkela community. 1,000+ users tested the platform in the first week.',
      images: ['Launch Event', 'Student Demo', 'Feedback Session'],
      location: 'NIT Rourkela Campus',
      attendees: '1,000+ students',
      color: 'bg-[#F59E0B]',
    },
    {
      year: '2024',
      month: 'December',
      title: 'RGH Government Hospital Partnership',
      description:
        'Partnered with RGH Government Hospital to provide bed availability data for 500+ beds across multiple departments.',
      images: ['MoU Signing', 'System Integration', 'Training Workshop'],
      location: 'Rourkela, Odisha',
      attendees: 'Hospital Administration',
      color: 'bg-[#EF4444]',
    },
  ];

  return (
    <section id="events" className="py-24 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-[#6B7280]">
            Milestones and moments that shaped JEEVA
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#3B82F6]"></div>

          {events.map((event, index) => (
            <div
              key={index}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
              }`}
            >
              <div
                className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full ${event.color} transform -translate-x-1/2 shadow-lg z-10`}
              ></div>

              <div
                className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`${event.color} text-white px-4 py-2 rounded-lg font-bold`}
                    >
                      {event.month} {event.year}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                    {event.title}
                  </h3>

                  <p className="text-[#6B7280] leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {event.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-video bg-gradient-to-br from-[#3B82F6]/20 to-[#10B981]/20 rounded-lg flex items-center justify-center text-sm text-[#6B7280] text-center p-2 hover:scale-105 transition-transform duration-300"
                      >
                        {img}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#3B82F6]" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-[#10B981]" />
                      {event.attendees}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white border border-[#E5E7EB] rounded-2xl p-8">
            <Calendar size={48} className="text-[#3B82F6] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1F2937] mb-2">
              More Coming Soon
            </h3>
            <p className="text-[#6B7280]">
              Follow our journey as we expand across Odisha
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
