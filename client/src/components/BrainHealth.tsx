import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, TrendingDown, DollarSign, ExternalLink, Heart } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  LineChart, Line, CartesianGrid
} from "recharts";
import grandmotherHugPhoto from "@assets/IMG_7577_1772146436089.jpeg";


const riskFactorData = [
  { factor: "Hearing Loss", percentage: 7, fill: "hsl(340, 65%, 65%)" },
  { factor: "Less Education", percentage: 5, fill: "hsl(340, 40%, 75%)" },
  { factor: "Smoking", percentage: 5, fill: "hsl(270, 40%, 70%)" },
  { factor: "Depression", percentage: 3, fill: "hsl(270, 30%, 75%)" },
  { factor: "Social Isolation", percentage: 3, fill: "hsl(20, 50%, 75%)" },
  { factor: "Inactivity", percentage: 2, fill: "hsl(200, 40%, 70%)" },
];

const dementiaRiskData = [
  { severity: "Normal", riskMultiplier: 1, label: "Baseline" },
  { severity: "Mild", riskMultiplier: 2, label: "2x Risk" },
  { severity: "Moderate", riskMultiplier: 3, label: "3x Risk" },
  { severity: "Severe", riskMultiplier: 5, label: "5x Risk" },
];

const costComparisonData = [
  { category: "Hearing Aids", cost: 5000, label: "$2K-$8K", description: "One-time investment" },
  { category: "Memory Care", cost: 60000, label: "$50K+", description: "Per year" },
];

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey?: string }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-md p-3 shadow-lg">
        <p className="font-medium text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">
          {payload[0].dataKey === 'percentage' ? `${payload[0].value}% of preventable cases` : 
           payload[0].dataKey === 'riskMultiplier' ? `${payload[0].value}x dementia risk` :
           `$${payload[0].value.toLocaleString()}`}
        </p>
      </div>
    );
  }
  return null;
}

export function BrainHealth() {
  return (
    <section id="brain-health" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            <Brain className="h-3 w-3 mr-1" aria-hidden="true" />
            The Connection
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4" data-testid="text-brain-health-title">
            Hearing Health is Brain Health
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="p-8 border-primary/20 bg-gradient-to-br from-card via-primary/5 to-card">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md border-4 border-primary/10">
                  <img
                    src={grandmotherHugPhoto}
                    alt="Grandmother and granddaughter sharing a warm embrace"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    style={{ filter: "brightness(1.05) saturate(0.7)" }}
                    loading="lazy"
                    data-testid="img-brain-health-photo"
                  />
                </div>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed mb-4">
                  What if protecting your memories started with protecting your hearing?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  New research reveals something remarkable: treating hearing loss in midlife may be one of the most powerful things you can do to protect your brain. Every conversation you preserve, every "I love you" you hear clearly—it's not just connection. It's cognitive protection.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 h-full border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-chart-1/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-chart-1" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">The #1 Modifiable Risk Factor</h3>
                  <p className="text-sm text-muted-foreground">For dementia prevention</p>
                </div>
              </div>
              
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={riskFactorData} 
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                  >
                    <XAxis 
                      type="number" 
                      domain={[0, 8]}
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 13 }}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="factor"
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 12 }}
                      width={120}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
                      {riskFactorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="p-3 rounded-md bg-primary/10 border border-primary/20 mb-3">
                <p className="text-base font-medium text-foreground">
                  Hearing loss accounts for <span className="text-primary font-bold text-xl">7%</span> of preventable dementia cases—more than any other single factor.
                </p>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Source: <a 
                  href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)01296-0/fulltext" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors inline-flex items-center gap-1"
                  data-testid="link-lancet-2024"
                >
                  Lancet Commission, 2024 <span className="sr-only">(opens in new tab)</span>
                  <ExternalLink className="h-2.5 w-2.5" aria-hidden="true" />
                </a>
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 h-full border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-chart-2/20 flex items-center justify-center">
                  <TrendingDown className="h-5 w-5 text-chart-2" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">The Risk Multiplier</h3>
                  <p className="text-sm text-muted-foreground">Hearing loss severity → dementia risk</p>
                </div>
              </div>
              
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={dementiaRiskData}
                    margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(340, 20%, 90%)" />
                    <XAxis 
                      dataKey="severity"
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 13 }}
                    />
                    <YAxis 
                      domain={[0, 6]}
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 13 }}
                      tickFormatter={(v) => `${v}x`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="riskMultiplier" 
                      stroke="hsl(340, 65%, 65%)" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(340, 65%, 65%)', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="p-3 rounded-md bg-chart-2/10 border border-chart-2/20 mb-3">
                <p className="text-base font-medium text-foreground">
                  Severe hearing loss increases dementia risk by <span className="text-chart-2 font-bold text-xl">5x</span> compared to normal hearing.
                </p>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Source: <a 
                  href="https://publichealth.jhu.edu/2021/hearing-loss-and-the-dementia-connection" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors inline-flex items-center gap-1"
                  data-testid="link-hopkins"
                >
                  Johns Hopkins, 2021 <span className="sr-only">(opens in new tab)</span>
                  <ExternalLink className="h-2.5 w-2.5" aria-hidden="true" />
                </a>
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 h-full border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-chart-5/20 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-chart-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">The Investment Comparison</h3>
                  <p className="text-sm text-muted-foreground">Prevention vs. crisis care</p>
                </div>
              </div>
              
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={costComparisonData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
                  >
                    <XAxis 
                      dataKey="category"
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 13 }}
                    />
                    <YAxis 
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 13 }}
                      tickFormatter={(v) => `$${v/1000}K`}
                      domain={[0, 70000]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                      <Cell fill="hsl(150, 50%, 50%)" />
                      <Cell fill="hsl(0, 50%, 60%)" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between items-center p-2 rounded bg-green-500/10 border border-green-500/20">
                  <span className="text-sm text-foreground">Hearing Aids</span>
                  <span className="text-sm font-bold text-green-600">$2K-$8K once</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-red-500/10 border border-red-500/20">
                  <span className="text-sm text-foreground">Memory Care</span>
                  <span className="text-sm font-bold text-red-500">$50K+/year</span>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Source: <a 
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6800143/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors inline-flex items-center gap-1"
                  data-testid="link-pmc-cost"
                >
                  PMC Cost-Benefit Analysis <span className="sr-only">(opens in new tab)</span>
                  <ExternalLink className="h-2.5 w-2.5" aria-hidden="true" />
                </a>
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="p-6 border-chart-5/30 bg-gradient-to-r from-chart-5/5 via-chart-5/10 to-chart-5/5">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-serif font-bold mb-1" style={{ color: 'hsl(160, 55%, 35%)' }}>48%</p>
                <p className="text-base text-muted-foreground">Slower cognitive decline with hearing aids</p>
                <p className="text-xs text-muted-foreground mt-1">
                  <a 
                    href="https://www.nih.gov/news-events/nih-research-matters/hearing-aids-slow-cognitive-decline-people-high-risk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-primary transition-colors"
                    data-testid="link-achieve-trial"
                  >
                    ACHIEVE Trial, NIH 2023 <span className="sr-only">(opens in new tab)</span>
                  </a>
                </p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold mb-1" style={{ color: 'hsl(160, 55%, 35%)' }}>$30</p>
                <p className="text-base text-muted-foreground">saved in dementia-related care costs for every $1 spent on hearing treatment</p>
                <p className="text-xs text-muted-foreground mt-1">
                  <a 
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6800143/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-primary transition-colors"
                  >
                    PMC Analysis <span className="sr-only">(opens in new tab)</span>
                  </a>
                </p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold mb-1" style={{ color: 'hsl(160, 55%, 35%)' }}>45%</p>
                <p className="text-base text-muted-foreground">Of dementia cases are potentially preventable</p>
                <p className="text-xs text-muted-foreground mt-1">
                  <a 
                    href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)01296-0/fulltext" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-primary transition-colors"
                  >
                    Lancet Commission, 2024 <span className="sr-only">(opens in new tab)</span>
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
