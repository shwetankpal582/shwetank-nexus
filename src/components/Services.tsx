import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Layout } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Layout,
      title: "Web Design",
      description: "Clean, responsive, conversion-focused designs that enhance user engagement and drive business results.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting intuitive user experiences and prototypes that balance aesthetics with functionality.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building high-performance ReactJS interfaces with modern best practices and optimal user experience.",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8 glow-border hover:bg-card/50 transition-all"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 mx-auto`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-center mb-4 gradient-text">
                {service.title}
              </h3>

              <p className="text-center text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
