
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Driving?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch today to book your first lesson or ask any questions. 
            We're here to help you succeed!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Book Your Lesson</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input 
                    placeholder="Phone Number" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <Input 
                  placeholder="Email Address" 
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Preferred Date" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input 
                    placeholder="Preferred Time" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <Textarea 
                  placeholder="Any specific requirements or questions?"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                />
                
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3">
                  Book My Lesson
                </Button>
                
                <p className="text-sm text-gray-400 text-center">
                  We'll get back to you within 2 hours during business hours
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call or Text</h4>
                    <p className="text-gray-300">+44 7XXX XXX XXX</p>
                    <p className="text-sm text-gray-400">Available 7 days a week</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-300">sarah@drivewithjohnson.co.uk</p>
                    <p className="text-sm text-gray-400">Quick response guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Coverage Area</h4>
                    <p className="text-gray-300">Manchester & Surrounding Areas</p>
                    <p className="text-sm text-gray-400">15-mile radius from city center</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Lesson Hours</h4>
                    <p className="text-gray-300">Mon-Sun: 8:00 AM - 8:00 PM</p>
                    <p className="text-sm text-gray-400">Flexible scheduling available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-yellow-500 text-black border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Car className="w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">Special Offer</h4>
                    <p className="font-medium">First lesson £35 (usually £45)</p>
                    <p className="text-sm">Book this week and save £10!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
