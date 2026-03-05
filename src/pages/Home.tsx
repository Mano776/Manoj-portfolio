import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              Manoj kumar P
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              MERN STACK developer
            </p>
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
              MERN Stack Developer crafting clean, modern web apps with React, Node.js, Express, and MongoDB — focused on real-world problem solving and smooth user experiences..
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
                <a href="/resume MERN.pdf" target="_blank" rel="noopener noreferrer" className="ml-2">
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <Link to="https://github.com/dashboard">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="https://www.linkedin.com/feed/">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
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
                MERN Stack  <span className="bg-hero-gradient bg-clip-text text-transparent">Fresher</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Aspiring <b>MERN Stack Developer</b> with hands-on experience in building responsive, user-friendly web applications using modern technologies like <b>React, Node.js, Express, MongoDB, and JavaScript</b>. Passionate about clean code, intuitive design, and solving real-world problems.
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
                    <div className="text-3xl font-bold text-primary mb-2">2+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">Fresher</div>
                    <div className="text-sm text-muted-foreground"> Experience</div>
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

          <div className="container mx-auto text-center">
            {[1].map((i) => (
              <Card key={i} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer animate-scale-in">
                <div
                  className="h-48 rounded-lg mb-4 flex items-center justify-center bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: "url('/DBMS.jpeg')" }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="text-4xl font-bold text-white/90 relative z-10 drop-shadow-lg scale-95 group-hover:scale-100 transition-transform duration-300">Project {i}</div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Centralized Database Management System (DBMS)
                </h3>
                <p className="text-sm text-muted-foreground">
                  A high-performance centralized database management system focusing on data integrity, security, and seamless administration of distributed databases.
                </p>
              </Card>
            ))}
          </div><br />

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