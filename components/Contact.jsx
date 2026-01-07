"use client"

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Nav from "./Nav";
import Side from "./Side";
import Footer from "./Footer";

const Contact2 = () => {
  const searchParams = useSearchParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    setCar(searchParams.get("car"));
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "personal", // ✅ DEFAULT SELECTED
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917830931514";
    const carText = car ? `\nCar: ${car}` : "";

    const finalMessage = encodeURIComponent(
      `Hey, I want to rent a car.
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Pickup Date: ${formData.date}${carText}`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${finalMessage}`,
      "_blank"
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "personal", // keep default after submit
      date: "",
      message: "",
    });
  };

  return (
    <>
      <Nav />
      <Side />

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Book Your Ride
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Fill out the form below or contact us directly for reservations and inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="space-y-6">
              <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+917830931514" className="text-gray-700 hover:underline">
                        +91 78309 31514
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:exarmy1534@gmail.com" className="text-gray-700 hover:underline">
                        exarmy1534@gmail.com
                      </a>
                      <p className="text-gray-700">exarmytravels.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-700">Varanasi, Uttar Pradesh</p>
                      <p className="text-gray-700">India - 221001</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-amber-200">
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-700">24/7 Available</p>
                  <p className="text-sm text-gray-600">For Services</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-xl bg-white shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium">Full Name *</label>
                      <input
                        name="name"
                        placeholder="Enter Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 w-full h-10 border rounded-md px-3"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Phone *</label>
                      <input
                        name="phone"
                        placeholder="Mobile Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 w-full h-10 border rounded-md px-3"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 w-full h-10 border rounded-md px-3"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Service *</label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-2 w-full h-10 border rounded-md px-3"
                      >
                        <option value="">Select a service</option>
                        <option value="airport">Airport Transfer</option>
                        <option value="temple">Temple Tour</option>
                        <option value="outstation">Outstation Trip</option>
                        <option value="corporate">Corporate Rental</option>
                        <option value="wedding">Wedding & Events</option>
                        <option value="hourly">Hourly Rental</option>
                        <option value="personal">Personal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Pickup Date *</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      onClick={(e) => e.target.showPicker?.()}
                      onFocus={(e) => e.target.showPicker?.()}
                      className="mt-2 w-full h-10 border rounded-md px-3"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 w-full min-h-[120px] border rounded-md px-3 py-2"
                      placeholder="Optional"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 bg-amber-600 hover:bg-amber-700 text-white rounded-md flex items-center justify-center gap-2"
                  >
                    Submit Booking Request
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact2;
