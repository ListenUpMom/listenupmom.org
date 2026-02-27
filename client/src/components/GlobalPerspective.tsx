import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Globe,
  Users,
  TrendingUp,
  TrendingDown,
  Search,
  Heart,
  Brain,
  AlertTriangle,
  ChevronDown,
  Minus,
  Download,
  Check,
  Circle,
} from "lucide-react";
import {
  countryData,
  DATA_SOURCES,
  type CountryHearingData,
} from "@/lib/country-hearing-data";
import { generateCountryPDF } from "@/lib/generate-country-pdf";

function formatNumber(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + " billion";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + " million";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toLocaleString();
}

function formatRate(rate: number): string {
  return (rate / 1000).toFixed(1) + "%";
}

function getTrendLabel(eapc: number): { text: string; color: string; icon: "up" | "down" | "stable" } {
  if (eapc > 0.1) return { text: "Rising significantly", color: "text-red-600", icon: "up" };
  if (eapc > 0.02) return { text: "Rising", color: "text-orange-500", icon: "up" };
  if (eapc > -0.02) return { text: "Stable", color: "text-muted-foreground", icon: "stable" };
  if (eapc > -0.1) return { text: "Declining", color: "text-green-600", icon: "down" };
  return { text: "Declining significantly", color: "text-green-700", icon: "down" };
}

const countryRanks: Record<string, number> = (() => {
  const sorted = [...countryData].sort((a, b) => b.prevalenceRate - a.prevalenceRate);
  const ranks: Record<string, number> = {};
  sorted.forEach((c, i) => { ranks[c.name] = i + 1; });
  return ranks;
})();

function CountrySpotlight({ country }: { country: CountryHearingData }) {
  const trend = getTrendLabel(country.trend);
  const rank = countryRanks[country.name] || 0;
  const estimatedWomen = Math.round(country.estimatedAffected * 0.445);
  const youthAtRisk = Math.round(country.population * 1e6 * 0.24 * 0.35);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="mb-2">
        <h3 className="font-serif text-2xl font-semibold text-foreground" data-testid="text-country-name">
          {country.name}
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card className="p-5 border-border/50 bg-gradient-to-br from-card to-primary/5">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-4 w-4 text-primary" aria-hidden="true" />
            <h4 className="font-semibold text-base text-foreground">Hearing Loss Overview</h4>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-2xl font-serif font-semibold text-foreground" data-testid="text-affected-count">
                {formatNumber(country.estimatedAffected)}
              </p>
              <p className="text-sm text-muted-foreground">people affected</p>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-muted/50">
              <span className="text-sm text-muted-foreground">Prevalence Rate</span>
              <span className="text-base font-semibold text-foreground" data-testid="text-prevalence-rate">{formatRate(country.prevalenceRate)}</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-muted/50">
              <span className="text-sm text-muted-foreground">Prevalence Rank</span>
              <span className="text-base font-semibold text-foreground" data-testid="text-country-rank">{rank} of {countryData.length} countries</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-muted/50">
              <span className="text-sm text-muted-foreground">30-Year Prevalence Trend</span>
              <span className={`text-base font-semibold flex items-center gap-1 ${trend.color}`} data-testid="text-trend">
                {trend.icon === "up" && <TrendingUp className="h-3 w-3" aria-hidden="true" />}
                {trend.icon === "down" && <TrendingDown className="h-3 w-3" aria-hidden="true" />}
                {trend.icon === "stable" && <Minus className="h-3 w-3" aria-hidden="true" />}
                {trend.text}
              </span>
            </div>
            {country.hearingAidAdoption !== null && (
              <div className="flex justify-between items-center p-2 rounded-md bg-primary/10 border border-primary/20">
                <span className="text-sm text-foreground font-medium">Hearing Aid Adoption</span>
                <span className="text-base font-semibold text-primary" data-testid="text-hearing-aid-adoption">{country.hearingAidAdoption}%</span>
              </div>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Source: <a
              href={DATA_SOURCES.gbd2021.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              GBD 2021, {DATA_SOURCES.gbd2021.journal} <span className="sr-only">(opens in new tab)</span>
            </a>
            {country.hearingAidAdoption !== null && (
              <span>
                {" · "}Adoption: <a
                  href={DATA_SOURCES.ehima2024.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  EHIMA, 2024 <span className="sr-only">(opens in new tab)</span>
                </a>
              </span>
            )}
          </p>
        </Card>

        <Card className="p-5 border-border/50 bg-gradient-to-br from-card to-secondary/10">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
            <h4 className="font-semibold text-base text-foreground">Women & Girls</h4>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-2xl font-serif font-semibold text-foreground" data-testid="text-women-affected">
                ~{formatNumber(estimatedWomen)}
              </p>
              <p className="text-sm text-muted-foreground">women & girls affected</p>
            </div>
            <div className="p-2 rounded-md bg-muted/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Treatment gap:</span> Women use hearing aids at roughly half the rate of men in older age groups
              </p>
            </div>
            <div className="p-2 rounded-md bg-muted/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">~{formatNumber(youthAtRisk)}</span> young people at risk from unsafe listening practices (earbuds, concerts)
              </p>
            </div>
            <div className="p-2 rounded-md bg-muted/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">After menopause:</span> hearing decline accelerates due to reduced estrogen protection
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Sources: <a
              href={DATA_SOURCES.gbd2021.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              GBD 2021 <span className="sr-only">(opens in new tab)</span>
            </a>
            {" · "}<a
              href="https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              NIDCD, 2023 <span className="sr-only">(opens in new tab)</span>
            </a>
            {" · "}<a
              href={DATA_SOURCES.whoWorldReport.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              WHO, 2021 <span className="sr-only">(opens in new tab)</span>
            </a>
          </p>
        </Card>
      </div>

      <Card className="p-5 border-border/50 bg-gradient-to-br from-card to-accent/30">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="h-4 w-4 text-primary" aria-hidden="true" />
          <h4 className="font-semibold text-base text-foreground">The Dementia Connection</h4>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-md bg-muted/50 text-center">
            <p className="text-3xl font-serif font-bold text-primary">#1</p>
            <p className="text-sm text-muted-foreground mt-1">modifiable dementia risk factor</p>
          </div>
          <div className="p-4 rounded-md bg-muted/50 text-center">
            <p className="text-3xl font-serif font-bold text-primary">2–5×</p>
            <p className="text-sm text-muted-foreground mt-1">increased dementia risk with untreated hearing loss</p>
          </div>
          <div className="p-4 rounded-md bg-muted/50 text-center">
            <p className="text-2xl font-serif font-bold text-primary">Stronger in women</p>
            <p className="text-sm text-muted-foreground mt-1">untreated hearing loss linked more to cognitive decline in women</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Source: <a
            href={DATA_SOURCES.lancet2024.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            Lancet Commission, 2024 <span className="sr-only">(opens in new tab)</span>
          </a>
        </p>
      </Card>

      {country.enrichedFindings && country.enrichedFindings.length > 0 && (
        <Card className="p-5 border-primary/20 bg-gradient-to-br from-primary/5 to-card">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-primary" aria-hidden="true" />
            <h4 className="font-semibold text-base text-foreground">Notable Findings for {country.name}</h4>
          </div>
          <div className="space-y-2">
            {country.enrichedFindings.map((finding, i) => (
              <div key={i} className="p-3 rounded-md bg-muted/50">
                <p className="text-base text-foreground">{finding.text}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {finding.url ? (
                    <a
                      href={finding.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary transition-colors"
                    >
                      {finding.source} <span className="sr-only">(opens in new tab)</span>
                    </a>
                  ) : (
                    <span>{finding.source}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {country.hearingAdoption && (
        <Card className="p-5 border-chart-5/20 bg-gradient-to-br from-chart-5/5 to-card" data-testid="card-hearing-adoption">
          <div className="flex items-center gap-2 mb-3">
            <Check className="h-4 w-4 text-chart-5" aria-hidden="true" />
            <h4 className="font-semibold text-base text-foreground">H.E.A.R.I.N.G. Framework Progress</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {([
              { key: "hearingScreening" as const, letter: "H", name: "Hearing Screening" },
              { key: "earDiseasePrevention" as const, letter: "E", name: "Ear Disease Prevention" },
              { key: "accessTechnology" as const, letter: "A", name: "Access to Technology" },
              { key: "rehabilitation" as const, letter: "R", name: "Rehabilitation Services" },
              { key: "improvedCommunication" as const, letter: "I", name: "Improved Communication" },
              { key: "noiseReduction" as const, letter: "N", name: "Noise Reduction" },
              { key: "communityEngagement" as const, letter: "G", name: "Community Engagement" },
            ]).map(pillar => {
              const adopted = country.hearingAdoption![pillar.key];
              return (
                <div
                  key={pillar.key}
                  className={`flex items-center gap-2 p-2 rounded-md text-sm ${
                    adopted
                      ? "bg-chart-5/10 text-foreground"
                      : "bg-muted/30 text-muted-foreground"
                  }`}
                  data-testid={`adoption-${pillar.key}`}
                >
                  {adopted ? (
                    <Check className="h-4 w-4 text-chart-5 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" aria-hidden="true" />
                  )}
                  <span className="font-bold text-xs w-5">{pillar.letter}</span>
                  <span>{pillar.name}</span>
                  {adopted ? (
                    <Badge variant="outline" className="ml-auto text-xs border-chart-5/30 text-chart-5">Adopted</Badge>
                  ) : (
                    <Badge variant="outline" className="ml-auto text-xs border-orange-300 text-orange-600">Opportunity</Badge>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Source: <a
              href={DATA_SOURCES.whoWorldReport.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              WHO World Report on Hearing, 2021 <span className="sr-only">(opens in new tab)</span>
            </a>; national health plan reviews
          </p>
        </Card>
      )}

      <p className="text-xs text-muted-foreground text-center">
        Prevalence data: <a
          href={DATA_SOURCES.gbd2021.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
          GBD 2021, {DATA_SOURCES.gbd2021.journal} <span className="sr-only">(opens in new tab)</span>
        </a>
        {country.hearingAidAdoption !== null && (
          <span>
            {" · "}Adoption data: <a
              href={DATA_SOURCES.ehima2024.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              EHIMA, 2024 <span className="sr-only">(opens in new tab)</span>
            </a>
          </span>
        )}
      </p>
    </motion.div>
  );
}

export function GlobalPerspective() {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryHearingData | null>(null);

  return (
    <section id="global-perspective" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            <Globe className="h-3 w-3 mr-1" aria-hidden="true" />
            Global Perspective
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4" data-testid="text-global-title">
            A Women's Health Equity Issue
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hearing health is a global concern that disproportionately affects women who are
            less likely to seek treatment, impacting family communication and quality of life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full border-border/50 bg-gradient-to-br from-card to-primary/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Global Overview</h3>
                  <p className="text-sm text-muted-foreground">The scale of the challenge</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-md bg-muted/50">
                  <span className="text-foreground/70">People with hearing loss</span>
                  <span className="font-semibold text-foreground">1.5 billion</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-md bg-muted/50">
                  <span className="text-foreground/70">Annual economic cost</span>
                  <span className="font-semibold text-foreground">$980 billion</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-md bg-muted/50">
                  <span className="text-foreground/70">Need rehabilitation</span>
                  <span className="font-semibold text-foreground">430 million</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-md bg-primary/10 border border-primary/20">
                  <span className="text-foreground font-medium">Projected by 2050</span>
                  <span className="font-semibold text-primary">1 in 4 will have hearing loss</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full border-border/50 bg-gradient-to-br from-card to-secondary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-secondary-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">The Path Forward</h3>
                  <p className="text-sm text-muted-foreground">Hope & action</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-md bg-primary/10 border border-primary/20">
                  <p className="text-3xl font-serif font-semibold text-primary mb-1">60%</p>
                  <p className="text-sm text-foreground/70 font-medium">
                    of childhood hearing loss is due to preventable causes
                  </p>
                </div>
                <div className="p-4 rounded-md bg-muted/50">
                  <p className="text-2xl font-serif font-semibold text-primary mb-1">$16</p>
                  <p className="text-sm text-foreground/70">
                    return for every $1 invested in ear and hearing care
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                Source: <a
                  href="https://www.who.int/publications/i/item/9789240020481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  WHO World Report on Hearing, 2021 <span className="sr-only">(opens in new tab)</span>
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
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 sm:p-8 border-border/50" data-testid="country-spotlight-section">
            <div className="text-center mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-2">
                Country Spotlight
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore hearing health data across {countryData.length} countries
              </p>

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    aria-label="Select a country"
                    className="w-full sm:w-80 justify-between text-left font-normal"
                    data-testid="button-country-selector"
                  >
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />
                      <span className={selectedCountry ? "text-foreground" : "text-muted-foreground"}>
                        {selectedCountry ? selectedCountry.name : "Select a country..."}
                      </span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search countries..." />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countryData.map((c) => (
                          <CommandItem
                            key={c.name}
                            value={c.name}
                            onSelect={() => {
                              setSelectedCountry(c);
                              setOpen(false);
                            }}
                            data-testid={`option-country-${c.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <span>{c.name}</span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              {formatRate(c.prevalenceRate)}
                            </span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {selectedCountry && (
              <div className="flex justify-center mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => generateCountryPDF(selectedCountry)}
                  aria-label={`Download hearing health brief for ${selectedCountry.name}`}
                  data-testid="button-download-country-brief"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Country Brief
                </Button>
              </div>
            )}

            {selectedCountry ? (
              <CountrySpotlight country={selectedCountry} />
            ) : (
              <div className="text-center py-8 space-y-4">
                <Globe className="h-12 w-12 text-muted-foreground/30 mx-auto" aria-hidden="true" />
                <div className="space-y-2 max-w-md mx-auto">
                  <p className="text-sm text-muted-foreground">
                    Select a country to see hearing health data, women & girls impact, and the dementia connection.
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    Prevalence data from the Global Burden of Disease Study 2021 covering {countryData.length} countries and territories.
                  </p>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
