import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Ear, MessageCircle } from "lucide-react";

const connectionPoints = [
  {
    icon: Ear,
    title: "Listening Is Love",
    description: "Being a mom means listening. To questions. To worries. To endless backseat stories. Listening is how we show we care. It's how we stay close."
  },
  {
    icon: Heart,
    title: "It Happens Quietly",
    description: "Hearing loss doesn't wait for old age. For many women, it starts quietly in their 30s, 40s, or 50s. You might miss a word here or there."
  },
  {
    icon: MessageCircle,
    title: "Let's Talk About It",
    description: "Most of the time, we don't talk about it. We blame distractions or background noise. But the truth is: it matters. Every conversation matters."
  }
];

export function ListeningConnection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4" data-testid="text-connection-title">
            The Listening Connection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What happens when it gets harder to hear? Hearing loss can quietly add stress 
            to conversations and create space where there should be closeness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {connectionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-6 h-full hover-elevate border-border/50 bg-card/80 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <point.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2" data-testid={`text-connection-${index}`}>
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-8 rounded-md bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg font-medium text-foreground mb-2">Did you know?</p>
          <p className="text-2xl sm:text-3xl font-serif text-primary" data-testid="text-key-stat">
            1 in 10 women in their 40s already experiences hearing loss
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Source: <a 
              href="https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
              data-testid="link-nidcd-stat"
            >
              NIDCD, 2023 <span className="sr-only">(opens in new tab)</span>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
