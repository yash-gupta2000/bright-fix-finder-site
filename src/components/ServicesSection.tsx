
import { Lightbulb, Settings, Tool, Zap, Clock, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Lightbulb className="h-10 w-10 text-led-blue" />,
    title: "LED Panel Repairs",
    description: "Expert repair of LED panels for commercial and residential applications."
  },
  {
    icon: <Settings className="h-10 w-10 text-led-blue" />,
    title: "Commercial Maintenance",
    description: "Regular maintenance services for commercial LED lighting systems."
  },
  {
    icon: <Tool className="h-10 w-10 text-led-blue" />,
    title: "LED Strip Fixing",
    description: "Repair and replacement services for decorative LED strip lighting."
  },
  {
    icon: <Zap className="h-10 w-10 text-led-blue" />,
    title: "Emergency Lighting",
    description: "24/7 emergency repair services for critical lighting systems."
  },
  {
    icon: <Clock className="h-10 w-10 text-led-blue" />,
    title: "LED Retrofitting",
    description: "Upgrade your old lighting systems to energy-efficient LED solutions."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-led-blue" />,
    title: "Warranty Services",
    description: "Extended warranty and service plans for your LED lighting."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-led-lightGray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our LED Repair Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive repair and maintenance services for all types of LED lighting systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-none hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
