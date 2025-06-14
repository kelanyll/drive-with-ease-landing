import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePic from "@/assets/profile-pic.jpg";

const About = () => {
  const stats = [
    { number: "500+", label: "Students Passed" },
    { number: "95%", label: "First-Time Pass Rate" },
    { number: "10+", label: "Years Experience" },
    { number: "5★", label: "Average Rating" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
              Certified Instructor
            </Badge>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Your Driving Instructor
            </h2>
            
            <p className="text-xl text-gray-600 mb-6">
              Hi, I'm Safete Vitija, your local driving instructor 
              helping students become confident, safe drivers.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Patient & Understanding</h4>
                  <p className="text-gray-600">Every student learns at their own pace, and I'm here to support you every step of the way.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fully Qualified & Insured</h4>
                  <p className="text-gray-600">ADI registered instructor with comprehensive insurance for your peace of mind.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Modern Teaching Methods</h4>
                  <p className="text-gray-600">Using the latest techniques and technology to make learning effective and enjoyable.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Local Area Coverage</h4>
                  <p className="text-gray-600 mb-3">
                    I provide driving lessons across Hendon, Mill Hill, Pinner and surrounding areas.
                  </p>
                  <p className="text-sm text-gray-500">
                    Don't see your area? Contact me to discuss coverage in nearby locations.
                  </p>
                </div>
              </div>
            </div>
            
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
          
          <div className="relative">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-pink-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <img src={profilePic} alt="Safete Vitija" className="rounded-full object-cover w-full h-full" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Safete Vitija</h3>
                    <p className="text-gray-600">Certified Driving Instructor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="absolute -top-4 -right-4 bg-orange-400 text-white font-bold px-4 py-2 rounded-lg shadow-lg transform rotate-12">
              ADI Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
