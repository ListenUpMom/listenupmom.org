import type { HearingStatistic, GlobalStatistic, TreatmentGapData, RiskFactor, Citation, PolicymakerAction } from "@shared/schema";

export const ageProgressionData: HearingStatistic[] = [
  {
    id: "age-30s",
    ageGroup: "30s",
    percentage: 5,
    description: "5–6% of adults under 40 report some trouble hearing",
    source: "NIDCD, 2023",
    sourceUrl: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing"
  },
  {
    id: "age-40s",
    ageGroup: "40s",
    percentage: 10,
    description: "1 in 10 women in their 40s and early 50s report hearing difficulties",
    source: "NIDCD, 2023",
    sourceUrl: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing"
  },
  {
    id: "age-50s",
    ageGroup: "50s",
    percentage: 20,
    description: "About 1 in 5 women experience some form of hearing loss",
    source: "NIDCD, 2023",
    sourceUrl: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing"
  },
  {
    id: "age-60s",
    ageGroup: "60s",
    percentage: 39,
    description: "39.3% experience measurable hearing difficulty",
    source: "NIDCD, 2023",
    sourceUrl: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing"
  },
  {
    id: "age-70s",
    ageGroup: "70+",
    percentage: 65,
    description: "65.3% of adults 71+ have hearing loss",
    source: "NIDCD, 2023",
    sourceUrl: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing"
  }
];

export const globalStatistics: GlobalStatistic[] = [
  {
    id: "global",
    region: "Worldwide",
    affected: 1500000000,
    population: 8000000000,
    percentage: 18.75,
    projectedBy2050: 2500000000,
    source: "WHO, 2024",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss"
  },
  {
    id: "disabling",
    region: "Disabling Hearing Loss",
    affected: 430000000,
    population: 8000000000,
    percentage: 5.4,
    projectedBy2050: 700000000,
    source: "WHO, 2024",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss"
  },
  {
    id: "americas",
    region: "Americas",
    affected: 217000000,
    population: 1010000000,
    percentage: 21.5,
    projectedBy2050: 322000000,
    source: "PAHO/WHO, 2024",
    sourceUrl: "https://www.paho.org/en/topics/hearing-health"
  }
];

export const treatmentGapData: TreatmentGapData[] = [
  {
    id: "hearing-aid-45plus",
    category: "Hearing Aid Use (45+)",
    menPercentage: 9,
    womenPercentage: 5,
    description: "Among adults 45 and older, 9% of men report using hearing aids compared to only 5% of women",
    source: "NIDCD, 2023",
    sourceUrl: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing"
  },
  {
    id: "hearing-aid-75plus",
    category: "Hearing Aid Use (75-84)",
    menPercentage: 26.7,
    womenPercentage: 13.7,
    description: "In adults aged 75–84, 26.7% of men versus only 13.7% of women use hearing aids",
    source: "NIDCD, 2023",
    sourceUrl: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing"
  }
];

export const riskFactors: RiskFactor[] = [
  {
    id: "aging",
    title: "Natural Aging",
    description: "Women over 40 begin to experience age-related hearing loss (presbycusis), even if mild at first.",
    icon: "clock",
    forDaughters: "Notice if Mom asks you to repeat yourself more often, or turns up the TV volume higher than before.",
    forMoms: "Pay attention to moments when you're straining to hear in crowded places or missing parts of phone conversations.",
    source: "Tsai Do, et al., 2024",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/38682789/"
  },
  {
    id: "noise",
    title: "Noise Exposure",
    description: "Years of concerts, headphone use, or everyday noise (hairdryers, blenders) can damage hearing over time.",
    icon: "volume-2",
    forDaughters: "Talk with Mom about protecting her hearing at events and encourage lower headphone volumes.",
    forMoms: "Consider earplugs at concerts and be mindful of prolonged exposure to loud household appliances.",
    source: "Tsai Do, et al., 2024",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/38682789/"
  },
  {
    id: "hormones",
    title: "Hormonal Changes",
    description: "Estrogen plays a role in ear health, and drops during menopause may contribute to hearing loss.",
    icon: "heart",
    forDaughters: "Understand that Mom may be going through changes that affect more than just her mood.",
    forMoms: "Discuss hearing changes with your doctor, especially during perimenopause and menopause.",
    source: "Lien & Yang, 2021",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34360877/"
  },
  {
    id: "chronic-conditions",
    title: "Chronic Conditions",
    description: "Diabetes, high blood pressure, thyroid disorders, and autoimmune diseases are linked to hearing loss.",
    icon: "activity",
    forDaughters: "Encourage Mom to mention hearing to her doctor during regular checkups for these conditions.",
    forMoms: "Managing these conditions well can help protect your hearing—ask your doctor about the connection.",
    source: "Tsai et al., 2024",
    sourceUrl: "https://doi.org/10.1002/ohn.750"
  },
  {
    id: "medications",
    title: "Ototoxic Medications",
    description: "Certain drugs, including chemotherapy, long-term NSAID use, and some antibiotics, can damage hearing.",
    icon: "pill",
    forDaughters: "Help Mom keep track of medications and ask doctors about hearing-related side effects.",
    forMoms: "Always ask your doctor or pharmacist if a new medication could affect your hearing.",
    source: "Joo et al., 2020",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/31282945/"
  }
];

export const citations: Citation[] = [
  {
    id: "nidcd-2023",
    authors: "National Institute on Deafness and Other Communication Disorders",
    year: 2023,
    title: "Quick Statistics About Hearing, Balance, & Dizziness",
    journal: "NIDCD",
    url: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing"
  },
  {
    id: "who-2024",
    authors: "World Health Organization",
    year: 2024,
    title: "Deafness and Hearing Loss Fact Sheet",
    journal: "WHO",
    url: "https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss"
  },
  {
    id: "tsai-2024",
    authors: "Tsai Do BS, et al.",
    year: 2024,
    title: "Age-Related Hearing Loss Guidelines",
    journal: "Otolaryngology–Head and Neck Surgery",
    url: "https://pubmed.ncbi.nlm.nih.gov/38682789/"
  },
  {
    id: "lien-2021",
    authors: "Lien YC, Yang PS",
    year: 2021,
    title: "Female Sex Hormones and Hearing Loss",
    journal: "International Journal of Environmental Research and Public Health",
    url: "https://pubmed.ncbi.nlm.nih.gov/34360877/"
  },
  {
    id: "joo-2020",
    authors: "Joo Y, et al.",
    year: 2020,
    title: "Association of Ototoxic Medications with Hearing Loss",
    journal: "JAMA Otolaryngology–Head & Neck Surgery",
    url: "https://pubmed.ncbi.nlm.nih.gov/31282945/"
  },
  {
    id: "who-report-2021",
    authors: "World Health Organization",
    year: 2021,
    title: "World Report on Hearing",
    journal: "WHO Publications",
    url: "https://www.who.int/publications/i/item/9789240020481"
  },
  {
    id: "lancet-2024",
    authors: "Livingston G, et al.",
    year: 2024,
    title: "Dementia prevention, intervention, and care: 2024 report of the Lancet standing Commission",
    journal: "The Lancet",
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)01296-0/fulltext"
  },
  {
    id: "achieve-2023",
    authors: "Lin FR, et al.",
    year: 2023,
    title: "Hearing intervention versus health education control to reduce cognitive decline in older adults (ACHIEVE)",
    journal: "The Lancet / NIH",
    url: "https://www.nih.gov/news-events/nih-research-matters/hearing-aids-slow-cognitive-decline-people-high-risk"
  },
  {
    id: "hopkins-2021",
    authors: "Johns Hopkins Bloomberg School of Public Health",
    year: 2021,
    title: "Hearing Loss and the Dementia Connection",
    journal: "Johns Hopkins",
    url: "https://publichealth.jhu.edu/2021/hearing-loss-and-the-dementia-connection"
  },
  {
    id: "pmc-cost-2019",
    authors: "Humes LE, et al.",
    year: 2019,
    title: "A Cost-Benefit Analysis of Hearing Aids, Including the Benefits of Reducing the Symptoms of Dementia",
    journal: "Ear and Hearing (PMC)",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6800143/"
  }
];

export const keyFacts = {
  globalAffected: "1.5 billion",
  disablingHearingLoss: "430 million",
  projectedBy2050: "1 in 4",
  economicCost: "$980 billion",
  preventable: "60%",
  youngAtRisk: "1.35 billion"
};

export const policymakerActions: PolicymakerAction[] = [
  {
    id: "hearing-screening",
    letter: "H",
    title: "Hearing Screening",
    description: "Only 17% of those who need hearing aids have access. Early detection at key life stages is the first step to closing this gap.",
    action: "Mandate universal newborn hearing screening and integrate hearing checks into school health programs and annual wellness visits for adults over 50.",
    icon: "ear",
    source: "WHO World Report on Hearing, 2021",
    sourceUrl: "https://www.who.int/publications/i/item/9789240020481"
  },
  {
    id: "ear-disease-prevention",
    letter: "E",
    title: "Ear Disease Prevention",
    description: "60% of childhood hearing loss is caused by preventable conditions like ear infections, maternal complications, and vaccine-preventable diseases.",
    action: "Fund public health campaigns on childhood ear infections and maternal ear care. Expand immunization programs that prevent hearing-damaging diseases like rubella and meningitis.",
    icon: "shield",
    source: "WHO World Report on Hearing, 2021",
    sourceUrl: "https://www.who.int/publications/i/item/9789240020481"
  },
  {
    id: "access-technology",
    letter: "A",
    title: "Access to Technology",
    description: "Globally, only 17% of people who could benefit from hearing aids actually use them. In low-income countries, the figure drops below 3%.",
    action: "Include hearing aids in national health insurance or subsidy programs. Reduce import tariffs on hearing devices. Establish hearing aid fitting and maintenance services at community health centers.",
    icon: "headphones",
    source: "WHO World Report on Hearing, 2021",
    sourceUrl: "https://www.who.int/publications/i/item/9789240020481"
  },
  {
    id: "rehabilitation",
    letter: "R",
    title: "Rehabilitation Services",
    description: "Most countries have fewer than 1 audiologist per million people. Without trained professionals, hearing devices go unfitted and unused.",
    action: "Train primary care workers to deliver basic hearing rehabilitation. Integrate speech therapy and audiology into community health centers. Fund audiology training programs at universities.",
    icon: "users",
    source: "WHO World Report on Hearing, 2021",
    sourceUrl: "https://www.who.int/publications/i/item/9789240020481"
  },
  {
    id: "improved-communication",
    letter: "I",
    title: "Improved Communication",
    description: "430 million people worldwide have disabling hearing loss. Without accessible communication, they are excluded from education, employment, and civic life.",
    action: "Require captioning in public broadcasts, government services, and emergency communications. Fund sign language interpreter training programs. Mandate accessibility standards for public spaces.",
    icon: "subtitles",
    source: "WHO World Report on Hearing, 2021",
    sourceUrl: "https://www.who.int/publications/i/item/9789240020481"
  },
  {
    id: "noise-reduction",
    letter: "N",
    title: "Noise Reduction",
    description: "1.1 billion young people are at risk of hearing loss from unsafe listening practices. Noise-induced hearing loss is entirely preventable.",
    action: "Legislate maximum venue sound levels at 100dB. Require hearing protection in workplaces exceeding 85dB. Regulate personal audio device output and require safe-listening warnings.",
    icon: "volume-x",
    source: "WHO World Report on Hearing, 2021",
    sourceUrl: "https://www.who.int/publications/i/item/9789240020481"
  },
  {
    id: "community-engagement",
    letter: "G",
    title: "Greater Community Engagement",
    description: "Stigma remains the biggest barrier to hearing aid adoption. In many cultures, hearing loss is seen as a sign of aging rather than a treatable condition.",
    action: "Partner with schools, employers, and community organizations to normalize hearing checks. Launch public awareness campaigns that reframe hearing health as preventive care, not a sign of decline.",
    icon: "globe",
    source: "WHO World Report on Hearing, 2021",
    sourceUrl: "https://www.who.int/publications/i/item/9789240020481"
  }
];
