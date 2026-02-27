import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ArrowDown } from "lucide-react";


export function Hero() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          data-testid="text-hero-title"
        >
          Listen Up, Mom!
        </motion.h1>

        <motion.p
          className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 leading-relaxed mb-12 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          data-testid="text-tagline"
        >
          Celebrating the bond between mothers and daughters and shining a light on women's hearing health because every <span className="italic text-primary font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">"I love you"</span> deserves to be heard.
          <span className="inline-flex items-end ml-1 translate-y-0.5">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/60 fill-primary/40" aria-hidden="true" />
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary/50 fill-primary/30 -ml-2" aria-hidden="true" />
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button 
            size="lg" 
            className="text-base px-8"
            data-testid="button-explore-data"
            onClick={() => document.getElementById('data')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the Data
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base px-8"
            data-testid="button-learn-signs"
            onClick={() => document.getElementById('risks')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn the Signs
          </Button>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 0.5 },
            y: { delay: 1, duration: 2, repeat: Infinity }
          }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
