
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 led-gradient text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Fix Your LED Lighting Issues?
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
          Contact our team today for a free consultation and quote on your LED repair needs.
        </p>
        <Button asChild size="lg" className="bg-white text-led-blue hover:bg-led-yellow hover:text-led-darkBlue">
          <Link to="/contact" className="flex items-center">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
