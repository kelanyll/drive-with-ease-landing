
import { Button } from "@/components/ui/button";
import { Car, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
              <Car className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Learn to Drive with
            <span className="block text-yellow-400">Confidence & Safety</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Professional driving instruction with over 10 years of experience. 
            Pass your test the first time with our proven teaching methods.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
              Book Your First Lesson
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              View Packages
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="font-semibold">Local Area</span>
              </div>
              <p className="text-sm text-blue-100">Covering all major routes</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Car className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="font-semibold">Dual Control</span>
              </div>
              <p className="text-sm text-blue-100">Safe learning environment</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Phone className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="font-semibold">24/7 Support</span>
              </div>
              <p className="text-sm text-blue-100">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
