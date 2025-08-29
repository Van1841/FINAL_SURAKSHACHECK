
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border/40 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-brand-primary" />
              <h3 className="text-2xl font-bold">SurakshaCheck</h3>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Advanced APK security analysis platform powered by AI-driven threat intelligence. 
              Protecting users from fake banking applications and malicious software.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Van1841" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://x.com/ChinmayaMa41331" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vanshika-bhojani-1a459b250/" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Security Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Security Features</h4>
            <ul className="space-y-2 text-foreground/70">
              <li className="hover:text-foreground transition-colors cursor-pointer">Ephemeral Overlay Detection</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">UI Flow Analysis</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Permission Monitoring</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Certificate Validation</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Behavior Analysis</li>
            </ul>
          </div>

          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-foreground/50 text-sm mb-4 md:mb-0">
            © 2025 SurakshaCheck. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-foreground/70">Made</span>
            
            <span className="text-foreground/70">by</span>
            <span className="font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Team Encryption
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
