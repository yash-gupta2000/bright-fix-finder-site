
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Extended testimonials for the dedicated page
const extendedTestimonials = [
  {
    id: 1,
    name: "Jane Smith",
    role: "Business Owner",
    content: "LightFix saved our retail store during the holiday season! Our LED display went out, and their team repaired it within hours. Excellent service that kept our holiday promotions on track and customers engaged.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Property Manager",
    content: "We've been using LightFix for all our commercial building LED maintenance. They're reliable, professional, and always deliver quality work. Their preventative maintenance program has reduced our lighting failures by over 70%.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Restaurant Owner",
    content: "Our custom LED lighting is crucial for our restaurant's ambiance. When it started malfunctioning, LightFix diagnosed and fixed the issue quickly. They understood how important proper lighting is for our dining experience.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Homeowner",
    content: "I was impressed with how knowledgeable the technician was. He explained the problem with my outdoor LED fixtures and repaired them at a fair price. I'll definitely call LightFix again for any future lighting issues.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Retail Manager",
    content: "The team at LightFix saved us thousands by repairing our custom LED display wall instead of replacing it. Their expertise with complex lighting systems is unmatched, and their customer service is top-notch.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Office Building Supervisor",
    content: "We had flickering LEDs throughout our office building that were causing headaches - literally! LightFix identified the power supply issue and resolved it quickly. Our team is much happier now with stable lighting.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 7,
    name: "Amanda Taylor",
    role: "Theater Director",
    content: "The specialized stage lighting in our theater is crucial for our productions. When our LED stage lights failed before opening night, LightFix worked overtime to repair them. They saved our opening performance!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 8,
    name: "Thomas Wilson",
    role: "Hotel Manager",
    content: "Our hotel atrium features complex LED installations that needed expert attention. The LightFix team handled the repair efficiently even while working around our guests. Professional, quiet, and effective service.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="bg-led-yellow/20 inline-block px-4 py-1 rounded-full mb-4">
              <span className="text-led-darkBlue font-medium">Customer Testimonials</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Customers Say About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read about real experiences from our satisfied customers. These testimonials reflect our commitment to quality service and customer satisfaction.
            </p>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="bg-led-lightGray rounded-lg p-8 max-w-3xl relative">
              <Quote className="absolute text-led-blue/10 h-32 w-32 -top-6 -left-6" />
              <p className="text-2xl text-gray-700 italic font-light text-center relative z-10">
                "LightFix has been our go-to LED repair service for years. Their expert technicians, quick response times, and fair pricing keep us coming back whenever we need help with our lighting systems."
              </p>
              <div className="flex items-center justify-center mt-8">
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-led-yellow text-led-yellow" />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold">John Anderson</h4>
                <p className="text-gray-600">Facilities Manager, TechCorp Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Testimonials */}
      <TestimonialsSection />
      
      {/* All Testimonials */}
      <section className="py-20 bg-led-lightGray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped hundreds of customers with their LED lighting needs. Here are more of their experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extendedTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-led-blue"
                      />
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-led-yellow text-led-yellow" />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i + testimonial.rating} className="h-4 w-4 text-gray-300" />
                        ))}
                      </div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 italic flex-grow">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Testimonials;
