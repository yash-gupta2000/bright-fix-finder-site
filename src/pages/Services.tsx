
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServicesSection from '@/components/ServicesSection';
import { Lightbulb, Settings, Wrench, Zap, Clock, ShieldCheck } from 'lucide-react';

const serviceDetails = [
  {
    id: 1,
    icon: <Lightbulb className="h-16 w-16 text-led-blue" />,
    title: "LED Panel Repairs",
    description: "Our expert technicians specialize in repairing all types of LED panels, from small displays to large commercial signage. We diagnose and fix issues like flickering, dead spots, power problems, and controller malfunctions.",
    features: [
      "Repair of all brands and models",
      "Component-level troubleshooting",
      "Power supply replacement",
      "Controller board repair",
      "Full panel refurbishment"
    ]
  },
  {
    id: 2,
    icon: <Settings className="h-16 w-16 text-led-blue" />,
    title: "Commercial Maintenance",
    description: "Keep your commercial LED lighting systems running at peak efficiency with our scheduled maintenance services. We offer comprehensive inspection, cleaning, and preventative maintenance to extend the life of your lighting investment.",
    features: [
      "Scheduled maintenance plans",
      "Detailed inspection reports",
      "Cleaning and realignment",
      "Firmware and software updates",
      "Energy efficiency optimization"
    ]
  },
  {
    id: 3,
    icon: <Wrench className="h-16 w-16 text-led-blue" />,
    title: "LED Strip Fixing",
    description: "We repair and restore LED strip lighting for architectural, decorative, and accent applications. Our specialists can fix connection issues, replace damaged sections, and restore full functionality to your LED strip installations.",
    features: [
      "Section replacement",
      "Controller and dimmer repair",
      "Waterproofing restoration",
      "Power distribution fixes",
      "Color synchronization adjustment"
    ]
  },
  {
    id: 4,
    icon: <Zap className="h-16 w-16 text-led-blue" />,
    title: "Emergency Lighting",
    description: "When your critical lighting systems fail, we're available 24/7 to restore service. Our emergency response team can quickly diagnose and repair essential lighting for safety and security applications.",
    features: [
      "24/7 emergency service",
      "Priority response for critical systems",
      "Temporary lighting solutions",
      "Safety and compliance checks",
      "Post-emergency maintenance plans"
    ]
  },
  {
    id: 5,
    icon: <Clock className="h-16 w-16 text-led-blue" />,
    title: "LED Retrofitting",
    description: "Upgrade your existing lighting to energy-efficient LED systems. We handle the entire process from assessment to installation, ensuring a smooth transition to cost-effective, eco-friendly lighting.",
    features: [
      "Site assessment and planning",
      "Energy usage analysis",
      "Custom retrofit solutions",
      "Installation and programming",
      "Rebate and incentive assistance"
    ]
  },
  {
    id: 6,
    icon: <ShieldCheck className="h-16 w-16 text-led-blue" />,
    title: "Warranty Services",
    description: "Protect your LED lighting investment with our extended warranty and service plans. We offer comprehensive coverage beyond manufacturer warranties, giving you peace of mind and rapid response when issues arise.",
    features: [
      "Extended coverage plans",
      "Priority service scheduling",
      "Parts and labor included",
      "Annual maintenance visits",
      "Transferable warranty options"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="bg-led-yellow/20 inline-block px-4 py-1 rounded-full mb-4">
              <span className="text-led-darkBlue font-medium">Professional LED Services</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Comprehensive LED Repair Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple fixes to complex system overhauls, our team of experts provides the highest quality LED repair and maintenance services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <ServicesSection />
      
      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {serviceDetails.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h2 className="text-3xl font-bold text-gray-900 ml-4">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-700 mb-8">
                    {service.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">What We Offer:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-led-blue flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`bg-led-lightGray rounded-lg p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={`https://source.unsplash.com/random/600x400?led,lights,${index}`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
