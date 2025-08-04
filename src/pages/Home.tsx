import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import { Users, BookOpen, Award, TrendingUp, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import certificatesCollection from "@/assets/certificates-collection.jpg";
import logo from "../assets/logovsd.png"; // 👈 Import your logo
import TopBar from "@/components/Topbar";

const Home = () => {
  const stats = [
    { icon: Users, label: "Students Supported", value: "10,000+" },
    { icon: BookOpen, label: "Courses Offered", value: "50+" },
    { icon: Award, label: "Success Stories", value: "95%" },
    { icon: TrendingUp, label: "Employment Rate", value: "92%" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Graduate, Computer Science",
      content: "The Education Trust changed my life. The quality of education and support I received was exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Graduate, Business Administration",
      content: "Thanks to the comprehensive programs, I was able to secure my dream job right after graduation.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Graduate, Digital Marketing",
      content: "The practical approach to learning and industry connections made all the difference in my career.",
      rating: 5
    }
  ];

  return (
    <>
  
    <div className="min-h-screen">
    
      <Hero />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Logo */}
            <div className="flex justify-center">
              <img
                src={logo}
                alt="About Us Logo"
                className="max-w-xs w-full h-auto object-contain"
              />
            </div>

            {/* Right: About Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                About Our Institution
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are dedicated to delivering exceptional education that empowers learners to achieve success in their chosen fields.
                With years of experience and a commitment to quality, our programs are designed to be practical, industry-relevant, 
                and student-focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are committed to providing accessible, high-quality education that empowers individuals 
              and communities to achieve their full potential and contribute meaningfully to society.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardContent className="p-8 text-center group-hover:bg-accent/20 transition-colors duration-300">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">Quality Education</h3>
                <p className="text-muted-foreground">
                  Delivering world-class curriculum designed by industry experts and academic professionals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardContent className="p-8 text-center group-hover:bg-accent/20 transition-colors duration-300">
                <Users className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">Inclusive Access</h3>
                <p className="text-muted-foreground">
                  Breaking down barriers to education and creating opportunities for learners from all backgrounds.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardContent className="p-8 text-center group-hover:bg-accent/20 transition-colors duration-300">
                <Award className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Maintaining the highest standards in education delivery and student support services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              See how we're making a difference in the lives of students and communities worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-white/80" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Our Providing Certificate Samples
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide industry-recognized certificates and diplomas that enhance your career prospects and validate your skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <Award className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-semibold">Professional Certificates</h3>
                    <p className="text-muted-foreground">Industry-recognized certification programs</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-semibold">Diploma Programs</h3>
                    <p className="text-muted-foreground">Comprehensive diploma courses with practical training</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-semibold">Skill Development</h3>
                    <p className="text-muted-foreground">Specialized skill development certifications</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={certificatesCollection} 
                alt="Certificate Collection" 
                className="rounded-lg shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who have transformed their lives through education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have chosen excellence. Explore our courses and take the first step towards your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline-hero" size="xl">
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button asChild variant="outline-hero" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
