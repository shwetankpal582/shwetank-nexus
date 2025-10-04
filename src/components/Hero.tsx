import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const roles = ["Frontend Developer", "UI/UX Designer", "Web Designer"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
                Hi, I'm{" "}
                <span className="gradient-text text-shadow-glow">
                  Shwetank Pal
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              <span className="inline-block">
                {roles.map((role, index) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * 2,
                      duration: 0.5,
                    }}
                    className="block"
                  >
                    {role}
                  </motion.span>
                ))}
              </span>
              <p className="mt-4">crafting modern digital experiences.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection("portfolio")}
              >
                View Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass glow-border"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src={profileImage}
                alt="Shwetank Pal"
                className="relative z-10 w-full rounded-full border-4 border-primary/50"
              />
            </div>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-8 right-8 flex flex-col gap-4 z-20"
        >
          <a
            href="https://github.com/shwetankpal"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 rounded-full hover:bg-primary/20 transition-colors glow-border"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/shwetankpal"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 rounded-full hover:bg-primary/20 transition-colors glow-border"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:shwetankpal582@gmail.com"
            className="glass p-3 rounded-full hover:bg-primary/20 transition-colors glow-border"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
