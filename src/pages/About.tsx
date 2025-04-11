
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-led-yellow/20 inline-block px-4 py-1 rounded-full mb-4">
                <span className="text-led-darkBlue font-medium">About LightFix</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Leading LED Repair Specialists Since 2010
              </h1>
              
              <p className="text-gray-700 mb-6">
                At LightFix, we specialize in the repair and maintenance of all types of LED lighting systems. With over a decade of experience, our skilled technicians have the expertise to diagnose and fix any LED-related problems quickly and efficiently.
              </p>
              
              <p className="text-gray-700 mb-6">
                We understand that lighting plays a critical role in both commercial and residential settings. That's why we are committed to providing prompt, reliable service to minimize downtime and ensure your lighting systems are functioning at their best.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-led-blue mr-2" />
                  <span className="text-gray-700">10+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-led-blue mr-2" />
                  <span className="text-gray-700">Certified Technicians</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-led-blue mr-2" />
                  <span className="text-gray-700">Warranty on Repairs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-led-blue mr-2" />
                  <span className="text-gray-700">Eco-Friendly Solutions</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
                  alt="Our LED repair team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg max-w-[200px]">
                <div className="text-led-blue font-bold text-5xl mb-2">500+</div>
                <div className="text-gray-700">Happy customers served annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-led-lightGray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality LED repair services with exceptional customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Award className="h-16 w-16 text-led-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Workmanship</h3>
                <p className="text-gray-600">
                  We take pride in our work and ensure every repair meets our high standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Zap className="h-16 w-16 text-led-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Fast Response Time</h3>
                <p className="text-gray-600">
                  We understand the urgency of lighting issues and respond quickly to all service calls.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Users className="h-16 w-16 text-led-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our technicians are factory-trained and certified in LED lighting repair.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <CheckCircle className="h-16 w-16 text-led-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">
                  We're not satisfied until you're completely happy with our work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
