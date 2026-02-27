import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { citations } from "@/lib/hearing-data";
import { ExternalLink, BookOpen } from "lucide-react";

export function Citations() {
  return (
    <section id="sources" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
            <BookOpen className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4" data-testid="text-sources-title">
            Our Sources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All information on this site is backed by peer-reviewed research and 
            authoritative health organizations. We believe in transparency and credibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {citations.map((citation, index) => (
            <motion.div
              key={citation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="p-5 h-full hover-elevate border-border/50 bg-card">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">
                      {citation.authors} ({citation.year})
                    </p>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {citation.title}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      {citation.journal}
                    </p>
                  </div>
                  <a 
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3"
                    data-testid={`link-citation-${citation.id}`}
                  >
                    View source <span className="sr-only">(opens in new tab)</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Have a question about our sources? Found research we should include? 
            Email us at <a href="mailto:hello@listenupmom.org" className="text-primary hover:underline">hello@listenupmom.org</a> — 
            we're committed to accuracy and welcome feedback.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
