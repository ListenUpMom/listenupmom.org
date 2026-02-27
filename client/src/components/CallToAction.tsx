import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Ear, MessageCircle, Smartphone, Stethoscope, ExternalLink, FileText, BookOpen, Globe } from "lucide-react";

export function CallToAction() {
  const [audience, setAudience] = useState<"families" | "policymakers">("families");

  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4" data-testid="text-cta-title">
            Ready to Listen Up?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {audience === "families"
              ? "Taking care of hearing health is an act of love. Here's how you can get started today."
              : "Hearing loss is a solvable public health challenge. Here's how to take action."}
          </p>

          <div className="inline-flex items-center p-1 rounded-full bg-muted border border-border mb-2">
            <Button
              variant={audience === "families" ? "default" : "ghost"}
              size="sm"
              className="rounded-full px-6"
              onClick={() => setAudience("families")}
              data-testid="button-cta-families"
            >
              For Families
            </Button>
            <Button
              variant={audience === "policymakers" ? "default" : "ghost"}
              size="sm"
              className="rounded-full px-6"
              onClick={() => setAudience("policymakers")}
              data-testid="button-cta-policymakers"
            >
              For Policymakers
            </Button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {audience === "families" ? (
            <motion.div
              key="families"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="p-6 h-full text-center hover-elevate border-border/50" data-testid="card-cta-conversation">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-chart-1/10 mb-4">
                    <MessageCircle className="h-7 w-7 text-chart-1" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Start the Conversation</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Talk openly with your mom or daughter about hearing. Notice changes together.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    "Have you noticed anything different lately?"
                  </p>
                </Card>

                <Card className="p-6 h-full text-center hover-elevate border-primary/20 bg-gradient-to-b from-card to-primary/5" data-testid="card-cta-hearing-check">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4">
                    <Ear className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Take a Free Hearing Check</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    The WHO's hearWHO app offers a quick, free screening to help identify if a professional evaluation is needed.
                  </p>
                  <Button
                    size="sm"
                    className="gap-2"
                    onClick={() => window.open('https://www.who.int/teams/noncommunicable-diseases/sensory-functions-disability-and-rehabilitation/hearwho', '_blank')}
                    data-testid="button-cta-hearing-check"
                  >
                    Try hearWHO <span className="sr-only">(opens in new tab)</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </Button>
                </Card>

                <Card className="p-6 h-full text-center hover-elevate border-border/50" data-testid="card-cta-professional">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-chart-5/10 mb-4">
                    <Stethoscope className="h-7 w-7 text-chart-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">See a Professional</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    A professional hearing evaluation gives you accurate results. Ask your doctor for an audiologist referral.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Recommended annually for ages 50+
                  </p>
                </Card>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="policymakers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="p-6 h-full text-center hover-elevate border-chart-5/20 bg-gradient-to-b from-card to-chart-5/5" data-testid="card-cta-framework">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-chart-5/15 mb-4">
                    <BookOpen className="h-7 w-7 text-chart-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Adopt the H.E.A.R.I.N.G. Framework</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    The WHO's evidence-based intervention package provides a roadmap for integrating ear and hearing care into national health plans.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                    onClick={() => window.open('https://www.who.int/publications/i/item/9789240020481', '_blank')}
                    data-testid="button-cta-who-report"
                  >
                    Read the WHO Report <span className="sr-only">(opens in new tab)</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </Button>
                </Card>

                <Card className="p-6 h-full text-center hover-elevate border-border/50" data-testid="card-cta-research">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Globe className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Fund Hearing Health Research</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Invest in population-level studies on hearing loss prevalence, gender disparities, and cost-effective interventions in your country.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    WHO: every $1 invested in ear and hearing care returns $16 in economic benefits over 10 years
                  </p>
                </Card>

                <Card className="p-6 h-full text-center hover-elevate border-border/50" data-testid="card-cta-country-brief">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-chart-1/10 mb-4">
                    <FileText className="h-7 w-7 text-chart-1" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Download a Country Brief</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Get a two-page data summary for your country with key statistics, trends, and recommended actions.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                    onClick={() => {
                      const el = document.getElementById('global-perspective');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    data-testid="button-cta-country-brief"
                  >
                    Explore Country Data
                  </Button>
                </Card>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6 border-border/50 bg-muted/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Device Hearing Features</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Modern smartphones and earbuds often include built-in hearing tests and monitoring.
                  Look for "Hearing" in your device's Health app or Accessibility settings. These tools
                  can help you track changes over time—though they're not a replacement for professional evaluation.
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  We don't endorse specific products or receive any compensation for mentioning device features.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-serif text-xl text-primary italic max-w-lg mx-auto" data-testid="text-closing-tagline">
            "Let's take care of our hearing, together. Because every conversation,
            every moment, and every 'I love you' matters."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
