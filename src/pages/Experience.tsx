
import { Calendar, Briefcase, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "MERN Stack Developer ",
            company: "Besant Technologies",
            location: "chennai, TN",
            period: "2026 - Present",
            description: "Working on full-stack web applications using MongoDB, Express.js, React, and Node.js. Collaborating with senior developers to build scalable solutions.",
            skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
            type: "Internship"
        },
        {
            id: 2,
            role: "Front-End Developer",
            company: "Self-Employed",
            location: "Remote",
            period: "2025 - 2026",
            description: "Designed and developed responsive websites for small businesses and personal portfolios. Managed client requirements and delivered projects on time.",
            skills: ["HTML/CSS", "JavaScript", "React", "UI/UX Design"],
            type: "Freelance"
        },
        {
            id: 3,
            role: "Full Stack Developer",
            company: "Accent Tech Soft",
            location: "Coimbatore, TN",
            period: "June 2025 - July 2025",
            description: "Developed and maintained full-stack web applications using React, Node.js, Express, and MongoDB. Collaborated with the team to build scalable APIs and user-friendly interfaces styled with Tailwind CSS.",
            skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            type: "Internship"
        }
    ]

    const achievements = [
        {
            id: 1,
            title: "FSWD course completion",
            description: "Completed the Full Stack Web Development course with a focus on MERN stack technologies."
        },
        {
            id: 2,
            title: "python Course completion",
            description: "I was complete the python programming course."
        }
    ]

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        My <span className="bg-hero-gradient bg-clip-text text-transparent">Experience</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A journey through my professional growth, projects, and achievements.
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-primary" />
                        Professional Experience
                    </h2>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-slide-in`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <Calendar className="w-5 h-5 text-primary" />
                                </div>

                                {/* Content Card */}
                                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 shadow-soft hover:shadow-medium transition-all duration-300 border-primary/10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                        <Badge variant="outline" className="w-fit">{exp.type}</Badge>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                        <span className="font-medium text-primary">{exp.company}</span>
                                        <span>•</span>
                                        <span>{exp.location}</span>
                                        <span>•</span>
                                        <span>{exp.period}</span>
                                    </div>

                                    <p className="text-foreground/80 mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="text-xs hover:bg-primary/10 transition-colors">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="max-w-4xl mx-auto animate-fade-in">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <Award className="h-6 w-6 text-primary" />
                        Key Achievements
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {achievements.map((achievement) => (
                            <Card key={achievement.id} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                    <Award className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                                <p className="text-muted-foreground">{achievement.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
