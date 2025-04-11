
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full led-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-led-blue">LightFix</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-led-blue transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-led-blue transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-led-blue transition-colors">Services</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-led-blue transition-colors">Testimonials</Link>
            <Link to="/contact" className="text-gray-700 hover:text-led-blue transition-colors">Contact</Link>
          </div>
          
          <div className="hidden md:flex">
            <Button className="bg-led-blue hover:bg-led-darkBlue">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-led-blue focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-led-blue transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-led-blue transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/services" className="text-gray-700 hover:text-led-blue transition-colors" onClick={toggleMenu}>Services</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-led-blue transition-colors" onClick={toggleMenu}>Testimonials</Link>
              <Link to="/contact" className="text-gray-700 hover:text-led-blue transition-colors" onClick={toggleMenu}>Contact</Link>
              <Button className="bg-led-blue hover:bg-led-darkBlue w-full">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
