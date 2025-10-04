import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Maharaja Surajmal Institute, Delhi",
      period: "2022 - 2025",
      cgpa: "8.88",
    },
    {
      degree: "Intermediate",
      institution: "Shri Mahaprabhu Public School",
      period: "2021",
      cgpa: "8.5",
    },
    {
      degree: "High School",
      institution: "Shri Mahaprabhu Public School",
      period: "2019",
      cgpa: "8.5",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30" />
              <div className="relative glass rounded-3xl p-2">
                <img
                  src={profileImage}
                  alt="Shwetank Pal"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                I'm <span className="text-primary font-semibold">Shwetank Pal</span>, a tech enthusiast and frontend developer currently pursuing a Bachelor's in Computer Applications from{" "}
                <span className="text-secondary font-semibold">Maharaja Surajmal Institute, Delhi</span>.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                With a strong foundation in <span className="text-accent font-semibold">ReactJS, NodeJS, and UI/UX principles</span>, I design and build responsive, intuitive, and visually compelling digital experiences.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity w-full md:w-auto"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold mb-4 flex items-center justify-center gap-2">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="gradient-text">Education</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass rounded-2xl p-6 glow-border hover:bg-card/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-heading font-semibold text-primary">
                    {edu.degree}
                  </h4>
                  <span className="text-sm text-highlight font-bold">
                    {edu.cgpa}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {edu.institution}
                </p>
                <p className="text-xs text-secondary">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
