import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { riskFactors, policymakerActions } from "@/lib/hearing-data";
import { Clock, Volume2, Heart, Activity, Pill, ExternalLink, Ear, Shield, Headphones, Users, Subtitles, VolumeX, Globe } from "lucide-react";

const iconMap: Record<string, typeof Clock> = {
  clock: Clock,
  "volume-2": Volume2,
  heart: Heart,
  activity: Activity,
  pill: Pill,
  ear: Ear,
  shield: Shield,
  headphones: Headphones,
  users: Users,
  subtitles: Subtitles,
  "volume-x": VolumeX,
  globe: Globe
};

type Perspective = "daughters" | "moms" | "policymakers";

export function PerspectiveToggle() {
  const [perspective, setPerspective] = useState<Perspective>("daughters");

  return (
    <section id="risks" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            What You Can Do About It
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {perspective === "policymakers"
              ? "Evidence-based interventions from the WHO World Report on Hearing that governments can implement to address hearing loss at scale."
              : "Every cause of hearing loss has a response. Here are real steps mothers and daughters can take together—starting today."}
          </p>

          <div className="inline-flex items-center p-1 rounded-full bg-muted border border-border">
            <Button
              variant={perspective === "daughters" ? "default" : "ghost"}
              size="sm"
              className="rounded-full px-6"
              onClick={() => setPerspective("daughters")}
              data-testid="button-perspective-daughters"
            >
              For Daughters
            </Button>
            <Button
              variant={perspective === "moms" ? "default" : "ghost"}
              size="sm"
              className="rounded-full px-6"
              onClick={() => setPerspective("moms")}
              data-testid="button-perspective-moms"
            >
              For Moms
            </Button>
            <Button
              variant={perspective === "policymakers" ? "default" : "ghost"}
              size="sm"
              className="rounded-full px-6"
              onClick={() => setPerspective("policymakers")}
              data-testid="button-perspective-policymakers"
            >
              For Policymakers
            </Button>
          </div>
        </motion.div>

        {perspective === "policymakers" ? (
          <div>
            <motion.p
              className="text-center text-sm text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Based on the{" "}
              <a
                href="https://www.who.int/publications/i/item/9789240020481"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
                data-testid="link-who-hearing-framework"
              >
                WHO H.E.A.R.I.N.G. framework <span className="sr-only">(opens in new tab)</span>
              </a>{" "}
              from the World Report on Hearing
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <AnimatePresence mode="sync">
                {policymakerActions.map((item, index) => {
                  const Icon = iconMap[item.icon] || Globe;
                  return (
                    <motion.div
                      key={`policy-${item.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <Card className="p-6 h-full hover-elevate border-border/50 bg-card" data-testid={`card-policy-${item.id}`}>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-chart-5/15 flex items-center justify-center relative">
                              <Icon className="h-5 w-5 text-chart-5" aria-hidden="true" />
                              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-chart-5 text-white text-xs font-bold flex items-center justify-center" aria-hidden="true">
                                {item.letter}
                              </span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1" data-testid={`text-policy-${item.id}`}>
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 rounded-md bg-chart-5/5 border border-chart-5/20">
                          <p className="text-sm font-medium text-chart-5 mb-1" style={{ color: 'hsl(160, 55%, 35%)' }}>
                            Recommended action:
                          </p>
                          <p className="text-sm text-foreground leading-relaxed">
                            {item.action}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-border/30">
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                            data-testid={`link-source-${item.id}`}
                          >
                            Source: {item.source} <span className="sr-only">(opens in new tab)</span>
                            <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          </a>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="sync">
              {riskFactors.map((factor, index) => {
                const Icon = iconMap[factor.icon] || Clock;
                return (
                  <motion.div
                    key={`${factor.id}-${perspective}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Card className="p-6 h-full hover-elevate border-border/50 bg-card">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1" data-testid={`text-risk-${factor.id}`}>
                            {factor.title}
                          </h3>
                          <p className="text-base text-muted-foreground">
                            {factor.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-md bg-muted/50 border border-border/30">
                        <p className="text-base font-medium text-primary mb-1">
                          {perspective === "daughters" ? "What you can do:" : "Take care of yourself:"}
                        </p>
                        <p className="text-base text-foreground leading-relaxed">
                          {perspective === "daughters" ? factor.forDaughters : factor.forMoms}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border/30">
                        <a
                          href={factor.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                          data-testid={`link-source-${factor.id}`}
                        >
                          Source: {factor.source} <span className="sr-only">(opens in new tab)</span>
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
