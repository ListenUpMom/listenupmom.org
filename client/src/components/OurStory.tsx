import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import foundersPhoto from "@/assets/founders.jpg";


export function OurStory() {
  return (
    <section id="our-story" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            <Heart className="h-3 w-3 mr-1" aria-hidden="true" />
            Our Story
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4" data-testid="text-our-story-title">
            It Started With My Mom
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img 
                  src={foundersPhoto}
                  alt="Mother and daughter - founders of Listen Up, Mom!"
                  className="aspect-[4/5] rounded-2xl object-cover object-[25%_top] border-4 border-white dark:border-white/10 shadow-lg"
                  data-testid="photo-founders"
                />
                <div className="absolute -bottom-3 -right-3 bg-background rounded-full p-2 shadow-md border border-border">
                  <Heart className="h-6 w-6 text-primary fill-primary" aria-hidden="true" />
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center italic">
                  Photo by Jenny Watts Photography
                </p>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-3 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  <span className="font-serif text-foreground text-xl">I love my mom more than anything.</span>{" "}
                  She's the person I go to when life feels too big. But lately, I've noticed 
                  something changing—she asks me to repeat myself more often, and doesn't 
                  always catch what I say when I'm not facing her.
                </p>
                
                <p>
                  In my family, hearing health is personal. My uncle wears two hearing aids, 
                  and my mom has to get her hearing checked regularly because she's at risk too. 
                  That's what inspired me to create Listen Up, Mom! as my{" "}
                  <span className="text-foreground font-medium">Girl Scout Silver Award</span> project—a 
                  website to help moms and daughters stay connected through hearing health awareness.
                </p>
                
                <p>
                  But this was never just about my mom.{" "}
                  <span className="text-foreground font-medium italic">It's about all moms and daughters.</span>
                </p>
                
                <p>
                  For my <span className="text-foreground font-medium">Gold Award</span>, I'm working 
                  to build Listen Up, Mom! into a lasting nonprofit organization—with a board of 
                  directors and partnerships that can deepen this mission long after I'm done. I also 
                  serve as a Girl Scout delegate to the United Nations Commission on the Status of 
                  Women (CSW70), where hearing health is gaining recognition as a women's health equity issue.
                </p>
                
                <p>
                  Daughters can support moms, just as much as moms support daughters. When we take 
                  care of our hearing health, we're investing in every conversation, every laugh, 
                  and every precious moment with the people we love most.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-serif text-xl text-primary italic" data-testid="text-story-tagline">
                  Because every "I love you" deserves to be heard.
                </p>
                <p className="font-serif text-lg text-primary/80 mt-2">
                  xo
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
