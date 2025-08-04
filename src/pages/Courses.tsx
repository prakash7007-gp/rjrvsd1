import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, CheckCircle, BookOpen } from "lucide-react";
import coursesCampus from "@/assets/courses-campus.jpg";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Computer Science & Technology",
      description: "Comprehensive program covering software development, data structures, algorithms, and modern technologies.",
      duration: "4 Years",
      eligibility: "High School Graduate",
      students: "500+",
      semesters: [
        {
          name: "Semester 1",
          subjects: [
            "Programming Fundamentals",
            "Mathematics for Computer Science",
            "Digital Logic Design",
            "English Communication",
            "Physics for Engineers"
          ]
        },
        {
          name: "Semester 2",
          subjects: [
            "Object-Oriented Programming",
            "Data Structures",
            "Computer Organization",
            "Statistics",
            "Environmental Science"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Business Administration",
      description: "Strategic business education covering management, finance, marketing, and entrepreneurship.",
      duration: "3 Years",
      eligibility: "High School Graduate",
      students: "750+",
      semesters: [
        {
          name: "Semester 1",
          subjects: [
            "Principles of Management",
            "Business Mathematics",
            "Financial Accounting",
            "Business Communication",
            "Economics"
          ]
        },
        {
          name: "Semester 2",
          subjects: [
            "Organizational Behavior",
            "Marketing Management",
            "Business Statistics",
            "Business Law",
            "Human Resource Management"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Modern marketing strategies including social media, SEO, content marketing, and analytics.",
      duration: "2 Years",
      eligibility: "Any Graduate",
      students: "300+",
      semesters: [
        {
          name: "Semester 1",
          subjects: [
            "Digital Marketing Fundamentals",
            "Social Media Marketing",
            "Search Engine Optimization",
            "Content Creation",
            "Web Analytics"
          ]
        },
        {
          name: "Semester 2",
          subjects: [
            "Pay-Per-Click Advertising",
            "Email Marketing",
            "Mobile Marketing",
            "E-commerce Marketing",
            "Marketing Automation"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Data Science & Analytics",
      description: "Advanced program in data analysis, machine learning, and business intelligence.",
      duration: "2 Years",
      eligibility: "Bachelor's Degree",
      students: "200+",
      semesters: [
        {
          name: "Semester 1",
          subjects: [
            "Statistics and Probability",
            "Python Programming",
            "Data Visualization",
            "Database Management",
            "Research Methodology"
          ]
        },
        {
          name: "Semester 2",
          subjects: [
            "Machine Learning",
            "Deep Learning",
            "Big Data Technologies",
            "Business Intelligence",
            "Capstone Project"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Graphic Design",
      description: "Creative design program covering visual communication, branding, and digital design.",
      duration: "1.5 Years",
      eligibility: "High School Graduate",
      students: "150+",
      semesters: [
        {
          name: "Semester 1",
          subjects: [
            "Design Fundamentals",
            "Typography",
            "Color Theory",
            "Adobe Creative Suite",
            "Drawing and Illustration"
          ]
        },
        {
          name: "Semester 2",
          subjects: [
            "Brand Identity Design",
            "Web Design",
            "Print Design",
            "Motion Graphics",
            "Portfolio Development"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Project Management",
      description: "Professional certification program in project management methodologies and tools.",
      duration: "1 Year",
      eligibility: "Any Graduate",
      students: "400+",
      semesters: [
        {
          name: "Semester 1",
          subjects: [
            "Project Management Fundamentals",
            "Agile and Scrum",
            "Risk Management",
            "Quality Management",
            "Leadership Skills"
          ]
        },
        {
          name: "Semester 2",
          subjects: [
            "Advanced Project Planning",
            "Stakeholder Management",
            "Project Tools and Software",
            "Case Studies",
            "Certification Preparation"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${coursesCampus})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Explore Our Courses
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover comprehensive programs designed to equip you with the skills and knowledge 
            needed for success in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-foreground mb-2">
                    {course.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Course Info */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Certified</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="font-medium">Eligibility:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.eligibility}</p>
                  </div>

                  {/* Semester Breakdown */}
                  <Accordion type="single" collapsible className="w-full">
                    {course.semesters.map((semester, index) => (
                      <AccordionItem key={index} value={`semester-${index}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {semester.name} - Curriculum
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {semester.subjects.map((subject, subIndex) => (
                              <div key={subIndex} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span className="text-sm text-muted-foreground">{subject}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <Button className="w-full">
                    Apply Now
                  </Button>
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
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our comprehensive educational programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-hero" size="xl">
              Download Brochure
            </Button>
            <Button variant="outline-hero" size="xl">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;