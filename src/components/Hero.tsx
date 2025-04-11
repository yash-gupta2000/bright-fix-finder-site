
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-led-blue opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0056b3 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="bg-led-yellow/20 inline-block px-4 py-1 rounded-full mb-4">
              <span className="text-led-darkBlue font-medium">Professional LED Repair Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Bringing Your <span className="text-led-blue">LED Lights</span> Back to Life
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Expert LED repair services for commercial and residential lighting systems. Fast, affordable, and reliable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-led-blue hover:bg-led-darkBlue text-white">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-led-blue text-led-blue hover:bg-led-blue/5">
                <Link to="/services" className="flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-led-blue/10 to-led-yellow/10 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="LED repair specialist working" 
                className="w-full h-auto relative z-10 mix-blend-multiply"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-led-blue to-transparent h-1/4 opacity-30 z-20"></div>
              
              {/* Animated LED elements */}
              <div className="absolute top-10 right-10 w-6 h-6 rounded-full bg-led-yellow animate-pulse-light z-20"></div>
              <div className="absolute top-20 left-14 w-4 h-4 rounded-full bg-led-blue animate-pulse-light z-20" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-14 right-20 w-5 h-5 rounded-full bg-led-yellow animate-pulse-light z-20" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
