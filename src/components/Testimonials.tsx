import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import ertritPic from "@/assets/ertrit.jpg";
import amnorPic from "@/assets/amnor.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ertrit",
      text: "Saf is a wonderful teacher who managed to help me pass on the first try! She is very approachable and is able to adapt different teaching styles to help me understand in the best way possible. I recommend Saf to anyone!",
      testDate: "Passed in March 2024",
      photo: ertritPic
    },
    // {
    //   name: "Amnor",
    //   text: "",
    //   testDate: "Passed in September 2024",
    //   photo: amnorPic
    // },
    {
      name: "Sameer",
      text: "Saf is a super friendly driving instructor. She is a great teacher, was always on time for my lessons and helped me pass my test first time! Thank you Saf 🥳",
      testDate: "Passed in February 2024"
    },
    {
      name: "Qasim",
      text: "Very friendly and always explained any mistakes I made in an easy to understand way and helped me passed in no time at all.",
      testDate: "Passed in September 2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What My Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my successful students 
            have to say about their learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 items-start">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
              <CardContent className="p-6">
                {testimonial.photo && (
                  <div className="mb-4">
                    <img 
                      src={testimonial.photo} 
                      alt={`${testimonial.name} celebrating their driving test pass`}
                      className="w-full object-cover rounded-lg"
                    />
                  </div>
                )}
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-green-600 font-medium mt-1">{testimonial.testDate}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
