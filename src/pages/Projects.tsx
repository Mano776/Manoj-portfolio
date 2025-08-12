import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
      image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
      image: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps. Integrates with multiple weather APIs for accurate data.",
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      technologies: ["Vue.js", "TypeScript", "Weather APIs", "Chart.js", "PWA"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media managers to track engagement, analyze trends, and schedule posts across multiple platforms.",
      image: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Celery"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "An educational platform with course creation tools, progress tracking, video streaming, and interactive quizzes. Designed for scalability and user engagement.",
      image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      technologies: ["Next.js", "TypeScript", "Prisma", "AWS S3", "Stripe"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills. Built with performance and SEO optimization in mind.",
      image: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      github: "#",
      live: "#",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
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
                <div className={`h-64 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="text-2xl font-bold text-white/80 z-10">{project.title}</div>
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
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
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
                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="text-lg font-bold text-white/80 z-10">{project.title}</div>
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
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 text-xs bg-primary hover:bg-primary/90">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
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
