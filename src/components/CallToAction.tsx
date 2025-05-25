
import { Button } from "@/components/ui/button";
import { Phone, Mail, Car } from "lucide-react";

const CallToAction = () => {
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
          
          <div className="mb-12 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Contact Safete directly:</p>
              <p className="font-semibold text-gray-900 mb-1">+44 7477 549134</p>
              <p className="text-gray-600">safetevitija@hotmail.com</p>
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
