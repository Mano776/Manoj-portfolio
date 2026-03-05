import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Monitor, Server, Database } from "lucide-react"

const About = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6 text-primary" />,
      skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      description: "Building responsive, accessible, and dynamic user interfaces."
    },
    {
      title: "Backend Engineering",
      icon: <Server className="w-6 h-6 text-primary" />,
      skills: ["Node.js", "Express.js", "Python", "Django", "RESTful APIs"],
      description: "Developing robust server-side architecture and APIs."
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["MongoDB", "SQL", "PostgreSQL", "Mongoose"],
      description: "Designing efficient data structures and scaling databases."
    }
  ]


  const technologies = [
    "React", "JavaScript", "Node.js", "Express", "Python", "Django",
    "MongoDB", "Git"
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.03]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer focused on building clean, user-friendly, and functional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Story */}
          <div className="animate-slide-in">
            <h2 className="text-2xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I started my journey in web development driven by a curiosity to understand how digital products are built. What began as learning quickly grew into a passion, as I discovered the perfect blend of creativity and logic that programming offers.
              </p>
              <p>
                I’m an aspiring MERN Stack Developer with hands-on experience building full-stack web applications using React, Node.js, Express, and MongoDB, with a strong focus on clean code and user-friendly interfaces.
              </p>
              <p>
                I enjoy continuously learning new technologies, building personal projects, and improving my skills by experimenting with modern tools. When I’m not coding, I explore new tech trends and work on projects that help me grow as a developer.
              </p>
            </div>
          </div>

          {/* Profile Card */}
          <div className="animate-scale-in">
            <Card className="p-8 shadow-soft">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">MK</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Manoj Kumar P</h3>
                <p className="text-muted-foreground">MERN Stack Developer</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>Salem , TN</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span>Fresher</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="text-green-500">Available for freelance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Languages:</span>
                  <span>English, Tamil </span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24 animate-slide-in" style={{ animationDelay: '200ms' }}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Core <span className="text-primary">Competencies</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and focus areas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.title} className="p-8 shadow-soft border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs font-medium rounded-md border border-primary/5 hover:border-primary/20 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="animate-slide-in pb-10" style={{ animationDelay: '300ms' }}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Tools & <span className="text-primary">Ecosystem</span></h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-5 py-2.5 text-sm font-medium border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About