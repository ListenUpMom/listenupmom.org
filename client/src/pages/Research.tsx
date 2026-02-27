import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { MapPin, Users, TrendingUp, MessageCircle, FlaskConical } from "lucide-react";

const placeholderAwarenessData = [
  { zipCode: "75001", awareness: 45, name: "Downtown Dallas" },
  { zipCode: "75205", awareness: 62, name: "Highland Park" },
  { zipCode: "76102", awareness: 38, name: "Fort Worth" },
  { zipCode: "75024", awareness: 55, name: "Plano" },
  { zipCode: "75034", awareness: 48, name: "Frisco" },
  { zipCode: "76051", awareness: 42, name: "Grapevine" },
];

const placeholderTreatmentData = [
  { name: "Sought treatment", value: 28 },
  { name: "Aware but no action", value: 35 },
  { name: "Unaware of loss", value: 37 }
];

const placeholderWhoNoticesData = [
  { category: "Daughter noticed first", percentage: 42 },
  { category: "Mom noticed first", percentage: 31 },
  { category: "Other family member", percentage: 18 },
  { category: "Healthcare provider", percentage: 9 }
];

const placeholderCommunicationData = [
  { topic: "Discussed openly", percentage: 23 },
  { topic: "Mentioned casually", percentage: 34 },
  { topic: "Avoided topic", percentage: 43 }
];

const COLORS = ["hsl(340, 65%, 65%)", "hsl(270, 40%, 70%)", "hsl(20, 60%, 75%)", "hsl(200, 50%, 70%)"];

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name?: string; dataKey?: string }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-md p-3 shadow-lg">
        <p className="font-medium text-foreground">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm text-muted-foreground">
            {entry.name || entry.dataKey}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default function Research() {
  useEffect(() => {
    document.title = "Research Data | Listen Up, Mom!";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for keyboard/screen reader users */}
      <a 
        href="#research-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-4">
            <Logo />
            <Badge variant="outline" className="text-xs">Research Preview</Badge>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main id="research-content" className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            <FlaskConical className="h-3 w-3 mr-1" aria-hidden="true" />
            Coming Soon
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            DFW Metroplex Research Data
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In partnership with local university researchers, we're gathering hearing health 
            data across HHS Region 6 and the 270+ zip codes of the DFW Metroplex.
          </p>
        </motion.div>

        <motion.div
          className="p-6 rounded-md bg-primary/5 border border-primary/20 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground mb-2">Research in Progress</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The visualizations below show placeholder data to demonstrate how we'll present 
                real findings once the study is complete. The actual research will include 
                responses from across the DFW Metroplex, examining hearing health awareness, 
                family communication patterns, and treatment-seeking behaviors.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-chart-1/20 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-chart-1" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Awareness by Area</h2>
                  <p className="text-sm text-muted-foreground">% aware of hearing health importance</p>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={placeholderAwarenessData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 10 }}
                      axisLine={{ stroke: 'hsl(340, 20%, 90%)' }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis 
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 12 }}
                      axisLine={{ stroke: 'hsl(340, 20%, 90%)' }}
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="awareness" fill="hsl(340, 65%, 65%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-xs text-muted-foreground mt-2 italic">
                * Placeholder data for demonstration
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-chart-2/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-chart-2" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Treatment Gap</h2>
                  <p className="text-sm text-muted-foreground">Response to hearing changes</p>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={placeholderTreatmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, value }) => `${value}%`}
                    >
                      {placeholderTreatmentData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-xs text-muted-foreground mt-2 italic">
                * Placeholder data for demonstration
              </p>
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-chart-3/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-chart-3" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Who Notices First?</h2>
                  <p className="text-sm text-muted-foreground">Family dynamics in detection</p>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={placeholderWhoNoticesData} layout="vertical" margin={{ top: 10, right: 30, left: 80, bottom: 0 }}>
                    <XAxis 
                      type="number"
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 12 }}
                      axisLine={{ stroke: 'hsl(340, 20%, 90%)' }}
                      domain={[0, 50]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <YAxis 
                      type="category"
                      dataKey="category"
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 11 }}
                      axisLine={{ stroke: 'hsl(340, 20%, 90%)' }}
                      width={75}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="percentage" fill="hsl(20, 60%, 75%)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-xs text-muted-foreground mt-2 italic">
                * Placeholder data for demonstration
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="p-6 border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-chart-4/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-chart-4" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Family Communication</h2>
                  <p className="text-sm text-muted-foreground">How families discuss hearing</p>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={placeholderCommunicationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis 
                      dataKey="topic" 
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 11 }}
                      axisLine={{ stroke: 'hsl(340, 20%, 90%)' }}
                    />
                    <YAxis 
                      tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 12 }}
                      axisLine={{ stroke: 'hsl(340, 20%, 90%)' }}
                      domain={[0, 50]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="percentage" fill="hsl(200, 50%, 70%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-xs text-muted-foreground mt-2 italic">
                * Placeholder data for demonstration
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 p-6 rounded-md bg-muted/30 border border-border/30 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="font-semibold text-foreground mb-3">Proposed Research Questions</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Questions designed for the university norming study — structured to support future grant proposals with data on need, disparity, and intervention potential.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Awareness & Education</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">1.</span>
                  "How did you first learn about hearing health?" <span className="text-xs italic">(Identifies education gaps and effective channels)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">2.</span>
                  "Do you know the connection between untreated hearing loss and dementia risk?" <span className="text-xs italic">(Ties to Lancet Commission data)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Family Dynamics</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">3.</span>
                  "If you or a family member experienced hearing changes, who noticed first?" <span className="text-xs italic">(Mother-daughter detection patterns)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">4.</span>
                  "How comfortable are you discussing hearing health with family members?"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">5.</span>
                  "Has hearing difficulty ever affected your relationship with a family member?" <span className="text-xs italic">(Emotional/social impact — compelling for family health grants)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">6.</span>
                  "What would motivate you to have a conversation about hearing health with your mother/daughter?" <span className="text-xs italic">(Informs program design)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Barriers to Care</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">7.</span>
                  "Have you or a family member ever sought a hearing evaluation? What prompted it?"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">8.</span>
                  "What barriers have prevented you or your family from seeking a hearing evaluation?"
                  <ul className="ml-6 mt-1 space-y-0.5 text-xs text-muted-foreground/80">
                    <li>• Cost / No insurance coverage</li>
                    <li>• Didn't know where to go</li>
                    <li>• Stigma / embarrassment</li>
                    <li>• Didn't think it was serious</li>
                    <li>• Transportation / access issues</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Intervention Interest</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">9.</span>
                  "If free or low-cost hearing screenings were offered in your community, would you attend?" <span className="text-xs italic">(Demonstrates demand for proposed programs)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border/30">
            <p className="text-xs text-muted-foreground italic">
              Note: All questions will include demographic fields (age, zip code, household income range, race/ethnicity) to enable health equity analysis. Respondents may opt in for 12-month follow-up to measure awareness change over time.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
