import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
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
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by{" "}
              <span className="text-primary font-semibold">Shwetank Pal</span>
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* CTA */}
          <p className="text-sm text-center gradient-text font-semibold">
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
