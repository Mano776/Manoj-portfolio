import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const About = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Database Design", level: 80 },
  ]

  const technologies = [
    "React", "TypeScript", "Next.js", "Node.js", "Express", "Python", "Django",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Figma", "Tailwind CSS"
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Story */}
          <div className="animate-slide-in">
            <h2 className="text-2xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I started my journey in web development 5 years ago, driven by a curiosity to understand 
                how digital products that shape our daily lives are built. What began as a hobby quickly 
                became a passion as I discovered the perfect blend of creativity and logic that programming offers.
              </p>
              <p>
                Throughout my career, I've had the privilege of working with startups and established companies, 
                helping them bring their digital visions to life. I specialize in full-stack development with 
                a strong focus on user experience and modern web technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and mentoring fellow developers.
              </p>
            </div>
          </div>

          {/* Profile Card */}
          <div className="animate-scale-in">
            <Card className="p-8 shadow-soft">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">JD</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-muted-foreground">Full Stack Developer</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span>5+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="text-green-500">Available for freelance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Languages:</span>
                  <span>English, Spanish</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-8 text-center">Technologies & Tools</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
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