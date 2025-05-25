
import { Card, CardContent } from "@/components/ui/card";
import { Star, Image } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Thompson",
      age: 18,
      text: "Sarah made learning to drive so much easier! I was really nervous at first, but her patient teaching style helped me gain confidence. Passed first time!",
      rating: 5,
      testDate: "Passed in March 2024"
    },
    {
      name: "Mike Chen",
      age: 25,
      text: "After moving from abroad, I needed to learn UK driving rules. Sarah's refresher course was perfect. Professional, thorough, and great value for money.",
      rating: 5,
      testDate: "Passed in January 2024"
    },
    {
      name: "Lisa Rodriguez",
      age: 22,
      text: "I had failed my test twice before finding Sarah. Her test preparation sessions made all the difference. Thank you for helping me finally pass!",
      rating: 5,
      testDate: "Passed in February 2024"
    },
    {
      name: "James Wilson",
      age: 17,
      text: "Best driving instructor in the area! Sarah explains everything clearly and makes you feel at ease. Would definitely recommend to anyone learning to drive.",
      rating: 5,
      testDate: "Passed in April 2024"
    }
  ];

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      alt: "Student celebrating passing driving test",
      caption: "Emma celebrating her first-time pass!"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      alt: "Successful driving lesson",
      caption: "Mike after his successful refresher course"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      alt: "Happy student with driving instructor",
      caption: "Lisa with her test pass certificate"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      alt: "Driving lesson in progress",
      caption: "James during his final lesson before the test"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students 
            have to say about their learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">Age {testimonial.age}</div>
                  <div className="text-sm text-green-600 font-medium mt-1">{testimonial.testDate}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Image className="w-8 h-8 text-orange-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Success Stories in Pictures</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating our students' achievements and memorable moments from their driving journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-600 mb-6">
              Book your first lesson today and start your journey to becoming a confident driver.
            </p>
            <div className="flex items-center justify-center space-x-4 text-lg">
              <span className="font-semibold text-orange-600">95% Pass Rate</span>
              <span className="text-gray-400">•</span>
              <span className="font-semibold text-green-600">500+ Students</span>
              <span className="text-gray-400">•</span>
              <span className="font-semibold text-pink-600">5-Star Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
