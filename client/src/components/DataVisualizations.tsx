import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ageProgressionData, treatmentGapData, globalStatistics, keyFacts } from "@/lib/hearing-data";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, Legend
} from "recharts";
import { TrendingUp, Globe, Users, AlertTriangle, ExternalLink } from "lucide-react";

const COLORS = ["hsl(340, 65%, 65%)", "hsl(270, 40%, 70%)", "hsl(20, 60%, 75%)", "hsl(200, 50%, 70%)", "hsl(160, 40%, 65%)"];

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; dataKey: string }>; label?: string }) {
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

function AgeProgressionChart() {
  return (
    <Card className="p-6 border-border/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-chart-1/20 flex items-center justify-center">
          <TrendingUp className="h-5 w-5 text-chart-1" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground" data-testid="text-age-chart-title">Hearing Loss by Age</h3>
          <p className="text-base text-muted-foreground">Percentage of women affected</p>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={ageProgressionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPercentage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(340, 65%, 65%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(340, 65%, 65%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="ageGroup" 
              tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 13 }}
              axisLine={{ stroke: 'hsl(340, 20%, 90%)' }}
            />
            <YAxis 
              tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 13 }}
              axisLine={{ stroke: 'hsl(340, 20%, 90%)' }}
              domain={[0, 70]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="percentage" 
              stroke="hsl(340, 65%, 65%)" 
              fillOpacity={1} 
              fill="url(#colorPercentage)"
              strokeWidth={3}
              name="Affected"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-3 rounded-md bg-primary/5 border border-primary/20">
        <p className="text-base text-foreground">
          <strong>Key insight:</strong> Hearing loss doubles between ages 50-59 and 60-69, making your 50s a critical time 
          to start monitoring hearing health.
        </p>
      </div>
      
      <p className="text-xs text-muted-foreground mt-3">
        Source: <a 
          href="https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
          NIDCD, 2023 <span className="sr-only">(opens in new tab)</span>
        </a>
      </p>
    </Card>
  );
}

function TreatmentGapChart() {
  return (
    <Card className="p-6 border-border/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-chart-2/20 flex items-center justify-center">
          <AlertTriangle className="h-5 w-5 text-chart-2" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground" data-testid="text-gap-chart-title">The Treatment Gap</h3>
          <p className="text-base text-muted-foreground">Women are less likely to seek help</p>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={treatmentGapData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="category" 
              tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 13 }}
              axisLine={{ stroke: 'hsl(340, 20%, 90%)' }}
            />
            <YAxis 
              tick={{ fill: 'hsl(340, 10%, 50%)', fontSize: 13 }}
              axisLine={{ stroke: 'hsl(340, 20%, 90%)' }}
              domain={[0, 30]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="menPercentage" name="Men" fill="hsl(200, 50%, 70%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="womenPercentage" name="Women" fill="hsl(340, 65%, 65%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-3 rounded-md bg-destructive/5 border border-destructive/20">
        <p className="text-base text-foreground">
          <strong>Key insight:</strong> In adults aged 75–84, men are nearly twice as likely as women to use hearing aids 
          (26.7% vs 13.7%), despite similar rates of hearing loss.
        </p>
      </div>
      
      <p className="text-xs text-muted-foreground mt-3">
        Source: <a 
          href="https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
          NIDCD, 2023 <span className="sr-only">(opens in new tab)</span>
        </a>
      </p>
    </Card>
  );
}

function GlobalImpactChart() {
  const pieData = [
    { name: "Affected", value: 1.5 },
    { name: "Unaffected", value: 6.5 }
  ];
  
  return (
    <Card className="p-6 border-border/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-chart-4/20 flex items-center justify-center">
          <Globe className="h-5 w-5 text-chart-4" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground" data-testid="text-global-chart-title">Global Impact</h3>
          <p className="text-base text-muted-foreground">A worldwide health issue</p>
        </div>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === 0 ? COLORS[0] : 'hsl(340, 10%, 90%)'}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-center">
        <p className="text-3xl font-serif font-semibold text-primary">{keyFacts.globalAffected}</p>
        <p className="text-base text-muted-foreground">people worldwide have some degree of hearing loss</p>
      </div>
      
      <div className="mt-4 p-3 rounded-md bg-chart-4/10 border border-chart-4/30">
        <p className="text-base text-foreground">
          <strong>Key insight:</strong> By 2050, nearly 1 in 4 people will have hearing loss—yet most countries lack 
          adequate hearing care services.
        </p>
      </div>
      
      <p className="text-xs text-muted-foreground mt-3">
        Source: <a 
          href="https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
          WHO, 2024 <span className="sr-only">(opens in new tab)</span>
        </a>
      </p>
    </Card>
  );
}

function KeyStats() {
  const stats = [
    { 
      value: keyFacts.projectedBy2050, 
      label: "people will have hearing problems by 2050",
      source: "WHO, 2024",
      url: "https://www.who.int/news/item/02-03-2021-who-1-in-4-people-projected-to-have-hearing-problems-by-2050"
    },
    { 
      value: keyFacts.disablingHearingLoss, 
      label: "require rehabilitation for disabling hearing loss",
      source: "WHO, 2024",
      url: "https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss"
    },
    { 
      value: keyFacts.preventable, 
      label: "of childhood hearing loss is preventable",
      source: "WHO, 2024",
      url: "https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss"
    },
    { 
      value: keyFacts.economicCost, 
      label: "annual global economic cost",
      source: "WHO, 2024",
      url: "https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss"
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-5 h-full text-center hover-elevate border-border/50 flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl font-serif font-semibold text-primary mb-1" data-testid={`text-stat-${index}`}>
              {stat.value}
            </p>
            <p className="text-base text-muted-foreground mb-2">{stat.label}</p>
            <a 
              href={stat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {stat.source} <span className="sr-only">(opens in new tab)</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export function DataVisualizations() {
  return (
    <section id="data" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4" data-testid="text-data-title">
            Hear What the Data Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive visualizations showing the scope of hearing health challenges 
            facing women and families worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AgeProgressionChart />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TreatmentGapChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
