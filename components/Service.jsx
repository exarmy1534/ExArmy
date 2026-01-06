import { Plane, Landmark, Map, Briefcase, Heart, Clock } from "lucide-react";

// Services data (directly inside component file)
const services = [
  {
    id: 1,
    icon: "plane",
    title: "Airport Transfers",
    description: "Comfortable and on-time airport pickup and drop services."
  },
  {
    id: 2,
    icon: "landmark",
    title: "City Tours",
    description: "Explore Varanasi with experienced local drivers."
  },
  {
    id: 3,
    icon: "map",
    title: "Outstation Trips",
    description: "Reliable long-distance travel across cities."
  },
  {
    id: 4,
    icon: "briefcase",
    title: "Business Travel",
    description: "Professional car rentals for corporate needs."
  },
  {
    id: 5,
    icon: "heart",
    title: "Wedding Services",
    description: "Luxury cars for weddings and special occasions."
  },
  {
    id: 6,
    icon: "clock",
    title: "Hourly Rentals",
    description: "Flexible hourly car rental services."
  }
];

// Simple Card components (same UI)
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl bg-white shadow ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const iconMap = {
  plane: Plane,
  landmark: Landmark,
  map: Map,
  briefcase: Briefcase,
  heart: Heart,
  clock: Clock
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
        
           <h3 className="text-xl md:text-2xl font-bold text-[#D97706] mb-5">
         What We Offer
        </h3>
          

          <h2 className="text-[1.4rem] md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive car rental solutions tailored to your travel needs in and around Varanasi
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;