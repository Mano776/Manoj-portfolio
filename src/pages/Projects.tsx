import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SCT Gym Guide",
      description: "A responsive Gym Guide frontend web application built with ReactNative , featuring workout plans, exercise guides, and a clean user interface for an engaging fitness experience..",
      image: "gymGuideImg.jpeg",
      technologies: ["ReactNative", "Node.js", "Typescript", "Stripe"],
      featured: true
    },
    {
      id: 2,
      title: "Full Stack Marketplace Platform with Dynamic Price Optimization using AI",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      featured: true
    },
    {
      id: 3,
      title: "Centralized Database Management System (DBMS)",
      description: "A high-performance centralized database management system focusing on data integrity, security, and seamless administration of distributed databases.",
      image: "DBMS.jpeg",
      technologies: ["Node.js", "Express", "MongoDB", "SQL"],
      featured: false
    },

  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.03]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and creative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group animate-scale-in">
                <div className="h-64 flex items-center justify-center relative overflow-hidden bg-muted">
                  <img src={project.image} alt={project.title} className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">

                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group animate-scale-in">
                <div className="h-48 flex items-center justify-center relative overflow-hidden bg-muted">
                  <img src={project.image} alt={project.title} className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                    {project.description.slice(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">

                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
