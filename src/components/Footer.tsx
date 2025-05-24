
import { Car, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 rounded-full p-2">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">Drive with Johnson</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional driving instruction in Manchester. Helping students become 
              safe and confident drivers for over 10 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+44 7XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">sarah@drivewithjohnson.co.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Manchester & Surrounding Areas</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Beginner Lessons</li>
              <li>Test Preparation</li>
              <li>Refresher Courses</li>
              <li>Intensive Courses</li>
              <li>Pass Plus</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Sarah</li>
              <li>Lesson Packages</li>
              <li>Testimonials</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Drive with Johnson. All rights reserved. | ADI Registered Instructor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
