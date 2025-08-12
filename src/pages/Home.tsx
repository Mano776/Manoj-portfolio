import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
              I create beautiful, functional digital experiences that solve real-world problems. 
              Passionate about clean code, intuitive design, and cutting-edge technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Link to="/contact">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-20 px-4 bg-section-bg">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Digital <span className="bg-hero-gradient bg-clip-text text-transparent">Experiences</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                responsive, user-friendly applications using modern technologies like React, 
                Node.js, and TypeScript.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="animate-scale-in">
              <Card className="p-8 shadow-soft border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">30+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer animate-scale-in">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary/30">Project {i}</div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Project Title {i}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Brief description of the project and technologies used.
                </p>
              </Card>
            ))}
          </div>
          
          <Link to="/projects">
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home