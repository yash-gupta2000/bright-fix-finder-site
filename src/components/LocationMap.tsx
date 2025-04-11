
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const LocationMap = () => {
  // This would normally be fed from your CMS or application state
  const [mapKey, setMapKey] = useState<string>("");
  
  const handleKeySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('mapboxKey') as HTMLInputElement;
    setMapKey(input.value);
  };
  
  return (
    <section className="py-20 bg-led-lightGray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our repair center or contact us directly. We service the entire city and surrounding areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-led-blue mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">123 LED Street, Lightville, LV 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-led-blue mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-led-blue mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@lightfix.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-led-blue mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Business Hours</h4>
                  <ul className="text-gray-600">
                    <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                    <li>Saturday: 9:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
              
              <Button className="w-full bg-led-blue hover:bg-led-darkBlue">
                Get Directions
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <div className="lg:col-span-2">
            {mapKey ? (
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJWbHpw8WhYARKkgp2lFCnf0&key=${mapKey}`}
                  title="LED Repair Shop Location" 
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <Card className="h-[400px] flex flex-col items-center justify-center p-6">
                <p className="text-gray-700 mb-6 text-center">
                  To display the map, please enter your Google Maps API key below:
                </p>
                <form onSubmit={handleKeySubmit} className="w-full max-w-md">
                  <div className="flex flex-col space-y-4">
                    <input
                      type="text"
                      name="mapboxKey"
                      placeholder="Enter your Google Maps API key"
                      className="px-4 py-2 border border-gray-300 rounded-md"
                      required
                    />
                    <Button type="submit" className="bg-led-blue hover:bg-led-darkBlue">
                      Display Map
                    </Button>
                  </div>
                </form>
                <p className="mt-4 text-sm text-gray-500 text-center">
                  For demonstration purposes only. In a production application, this would be configured server-side.
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
