import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "CodeDevForge",
      description: "Full-stack blog application with rich content management",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      category: "Web Development",
      gradient: "from-primary to-secondary",
    },
    {
      title: "E-Commerce Platform",
      description: "Complete MERN stack online store with JWT authentication",
      tech: ["React", "Express", "MongoDB", "JWT"],
      category: "Web Development",
      gradient: "from-secondary to-accent",
    },
    {
      title: "Applicant Tracking System",
      description: "Comprehensive recruitment management system",
      tech: ["React", "Node.js", "MySQL", "Tailwind"],
      category: "Web Development",
      gradient: "from-accent to-primary",
    },
    {
      title: "Cryptoscope",
      description: "Real-time cryptocurrency data insights dashboard",
      tech: ["React", "API Integration", "Charts.js"],
      category: "Web Development",
      gradient: "from-primary via-secondary to-accent",
    },
    {
      title: "Primetrade.ai",
      description: "AI-powered trading interface with market analytics",
      tech: ["Figma", "UI/UX", "Prototyping"],
      category: "UI/UX Design",
      gradient: "from-secondary to-primary",
    },
    {
      title: "Mix Cloud Mock",
      description: "Audio platform UI design with modern aesthetics",
      tech: ["Figma", "Web Design", "Interaction Design"],
      category: "UI/UX Design",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 glow-border hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}>
                <span className="text-white text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className="mb-2">
                <span className="text-xs text-accent font-semibold">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold mb-2 gradient-text">
                {project.title}
              </h3>

              <p className="text-sm text-foreground/70 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 glass rounded-full text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 glass">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1 glass">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass border-primary/20">
          <DialogHeader>
            <DialogTitle className="gradient-text text-2xl">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className={`w-full h-64 rounded-xl bg-gradient-to-br ${selectedProject?.gradient}`} />
            <p className="text-foreground/80">{selectedProject?.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject?.tech.map((tech: string) => (
                <span key={tech} className="text-xs px-3 py-1 glass rounded-full text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
