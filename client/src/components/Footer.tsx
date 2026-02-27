import { LogoMark } from "./Logo";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <LogoMark size={32} />
            <div>
              <p className="font-serif font-semibold text-foreground">Listen Up, Mom!</p>
              <p className="text-sm text-muted-foreground italic">
                Because every "I love you" deserves to be heard.
              </p>
            </div>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-link-about"
            >
              About
            </a>
            <a 
              href="#data" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-link-data"
            >
              The Data
            </a>
            <a 
              href="#risks" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-link-risks"
            >
              Risk Factors
            </a>
            <a 
              href="#sources" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-link-sources"
            >
              Sources
            </a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary" aria-hidden="true" /> by a mother-daughter team
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            A Girl Scout Gold Award Project
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} Listen Up, Mom! All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
