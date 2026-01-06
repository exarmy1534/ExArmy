import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Amit Sharma",
    location: "Delhi",
    rating: 4,
    text: "Excellent service! The driver was punctual and professional. Made our Varanasi temple tour memorable.",
    date: "March 2025",
  },
  {
    id: 2,
    name: "Priya Gupta",
    location: "Mumbai",
    rating: 5,
    text: "Booked an Innova for family trip. Clean car, courteous driver. Highly recommend Ex Army Travels!",
    date: "February 2025",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    location: "Kolkata",
    rating: 5,
    text: "Best car rental in Varanasi. Used their airport transfer service - hassle-free experience.",
    date: "January 2025",
  },
  {
    id: 4,
    name: "Vishvesh Singh",
    location: "Varanasi",
    rating: 3,
    text: "As a tourist, Ex Army Travels made our Varanasi visit comfortable and stress-free.",
    date: "December 2024",
  },
];

const stats = [
  { label: "Happy Customers", value: "500+" },
  { label: "Years of Service", value: "5+" },
  { label: "Fleet Vehicles", value: "20+" },
  { label: "Cities Covered", value: "25+" },
];

const Testimonial = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[0.7rem] md:text-2xl font-bold text-[#D97706] mb-5">
          Client Reviews
        </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from travelers who chose RajTravel
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 p-6"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{r.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.location}</p>
                </div>
              </div>

              {/* Date */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">{r.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;