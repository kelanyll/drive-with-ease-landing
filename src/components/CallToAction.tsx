
import { Button } from "@/components/ui/button";
import { Phone, Mail, Car } from "lucide-react";

const CallToAction = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-orange-200 rounded-full p-6">
              <Car className="w-16 h-16 text-orange-600" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your
            <span className="block text-orange-600">Driving Journey?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your first lesson today and take the first step towards becoming a confident, 
            safe driver with professional instruction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg"
              onClick={scrollToContact}
            >
              Book Your First Lesson
            </Button>
            <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
              Call Now
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-orange-600 mr-2" />
                <span className="font-semibold text-gray-900">Quick Response</span>
              </div>
              <p className="text-sm text-gray-600">Get back to you within 2 hours</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <Car className="w-6 h-6 text-green-600 mr-2" />
                <span className="font-semibold text-gray-900">First Lesson</span>
              </div>
              <p className="text-sm text-gray-600">Special offer: £35 instead of £45</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-purple-600 mr-2" />
                <span className="font-semibold text-gray-900">Flexible Booking</span>
              </div>
              <p className="text-sm text-gray-600">7 days a week availability</p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Contact Sarah directly:</p>
              <p className="font-semibold text-gray-900 mb-1">+44 7XXX XXX XXX</p>
              <p className="text-gray-600">sarah@drivewithjohnson.co.uk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
