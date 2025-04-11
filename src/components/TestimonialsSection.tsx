
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Jane Smith",
    role: "Business Owner",
    content: "LightFix saved our retail store during the holiday season! Our LED display went out, and their team repaired it within hours. Excellent service!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Property Manager",
    content: "We've been using LightFix for all our commercial building LED maintenance. They're reliable, professional, and always deliver quality work.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Restaurant Owner",
    content: "Our custom LED lighting is crucial for our restaurant's ambiance. When it started malfunctioning, LightFix diagnosed and fixed the issue quickly.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Homeowner",
    content: "I was impressed with how knowledgeable the technician was. He explained the problem with my outdoor LED fixtures and repaired them at a fair price.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers about their experience with LightFix.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="testimonial-card">
              <CardContent className="pt-6">
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
                <p className="mt-4 text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
