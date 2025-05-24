
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CarFront, MapPin, Navigation, Car } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CarFront,
      title: "Beginner Lessons",
      description: "Perfect for first-time drivers. Start with the basics and build confidence behind the wheel.",
      features: ["Vehicle familiarization", "Basic controls", "Road safety", "Parking fundamentals"],
      price: "From $45/hour"
    },
    {
      icon: Navigation,
      title: "Test Preparation",
      description: "Intensive preparation for your driving test with practice routes and mock examinations.",
      features: ["Mock driving tests", "Test route practice", "Maneuver training", "Theory support"],
      price: "From $50/hour"
    },
    {
      icon: Car,
      title: "Refresher Courses",
      description: "Get back on the road with confidence. Perfect for drivers returning after a break.",
      features: ["Confidence building", "Highway driving", "City navigation", "Parking practice"],
      price: "From $48/hour"
    },
    {
      icon: MapPin,
      title: "Intensive Courses",
      description: "Fast-track your learning with concentrated lesson packages designed for quick progress.",
      features: ["5-10 day courses", "Daily lessons", "Fast-track to test", "Guaranteed progress"],
      price: "Packages from $400"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Driving Lessons Tailored to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professional driving instruction services, 
            each designed to help you become a safe and confident driver.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <p className="text-lg font-bold text-blue-600 text-center mb-4">{service.price}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
