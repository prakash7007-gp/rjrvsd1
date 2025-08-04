import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Target, Heart, Award, BookOpen } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  const trustees = [
    { name: "Dr. Sarah Williams", role: "Chairman", experience: "20+ years in Education Policy" },
    { name: "Prof. Michael Johnson", role: "Academic Director", experience: "15+ years in Higher Education" },
    { name: "Ms. Emily Chen", role: "Operations Director", experience: "12+ years in Educational Management" },
    { name: "Dr. Robert Davis", role: "Research Head", experience: "18+ years in Educational Research" },
  ];

  const milestones = [
    { year: "2010", title: "Foundation", description: "Education Trust was established with a vision to democratize quality education" },
    { year: "2015", title: "First 1000 Graduates", description: "Celebrated our first milestone of 1000 successful graduates" },
    { year: "2018", title: "Digital Transformation", description: "Launched online learning platforms and digital resources" },
    { year: "2020", title: "Global Expansion", description: "Extended our reach to international students and partnerships" },
    { year: "2023", title: "Innovation Hub", description: "Opened state-of-the-art innovation and research facilities" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                About Education Trust
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2010, Education Trust has been at the forefront of educational innovation, 
                providing accessible, high-quality education to students worldwide. Our commitment to 
                excellence has made us a trusted partner in shaping the future of education.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Est. 2010</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">10,000+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">50+ Courses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Global Reach</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutTeam}
                alt="Education Trust Team"
                className="rounded-lg shadow-strong w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, innovative, and high-quality education that empowers individuals 
                  to achieve their full potential and contribute meaningfully to society. We believe that 
                  education is the key to unlocking human potential and creating positive change in the world.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading global education trust that transforms lives through innovative learning 
                  experiences, fostering a world where quality education is accessible to all, regardless of 
                  background or circumstances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Message from Our Founder
          </h2>
          <div className="bg-white rounded-lg shadow-soft p-8 md:p-12">
            <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
              "Education is not just about acquiring knowledge; it's about transforming lives and 
              building a better future for all. When we founded Education Trust, our vision was simple 
              yet profound: to create an institution that would break down barriers to quality education 
              and provide opportunities for everyone to learn, grow, and succeed."
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">DW</span>
              </div>
              <div className="font-semibold text-foreground">Dr. Sarah Williams</div>
              <div className="text-sm text-muted-foreground">Founder & Chairman</div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Board of Trustees
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership team brings together decades of expertise in education, 
              management, and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustees.map((trustee, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">
                      {trustee.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{trustee.name}</h3>
                  <p className="text-primary font-medium mb-2">{trustee.role}</p>
                  <p className="text-sm text-muted-foreground">{trustee.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our mission to transform education
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <div className="flex-1 bg-white rounded-lg shadow-soft p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;