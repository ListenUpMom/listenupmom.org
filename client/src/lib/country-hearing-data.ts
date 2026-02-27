export interface HearingFrameworkAdoption {
  hearingScreening: boolean;
  earDiseasePrevention: boolean;
  accessTechnology: boolean;
  rehabilitation: boolean;
  improvedCommunication: boolean;
  noiseReduction: boolean;
  communityEngagement: boolean;
}

export interface CountryHearingData {
  name: string;
  region: string;
  population: number;
  prevalenceRate: number;
  prevalenceRate1990: number;
  estimatedAffected: number;
  trend: number;
  hearingAidAdoption: number | null;
  enrichedFindings: EnrichedFinding[] | null;
  hearingAdoption: HearingFrameworkAdoption | null;
}

export interface EnrichedFinding {
  text: string;
  source: string;
  url: string;
}

export const GLOBAL_AVERAGE_ASPR = 18100;

export const WOMEN_GIRLS_FACTS = {
  globalFemalePrevalence: 9.8,
  globalMalePrevalence: 12.2,
  youthAtRiskGlobally: 1.1e9,
  hearingAidGenderGap: "Women aged 75-84 use hearing aids at half the rate of men in most countries studied",
  dementiaRiskFactor: 7,
  dementiaRiskMultiplierMild: 2,
  dementiaRiskMultiplierModerate: 3,
  dementiaRiskMultiplierSevere: 5,
  achieveTrialReduction: 48,
  menopauseConnection: "Hearing decline accelerates after menopause due to reduced estrogen, which protects cochlear function",
  womenReportMore: "Women report hearing symptoms 64% more often than men despite lower measured prevalence",
  strongerDementiaLinkInWomen: "Multiple studies show untreated hearing loss has a stronger association with cognitive decline in women than men",
};

export const DATA_SOURCES = {
  gbd2021: {
    title: "Global Burden of Disease Study 2021",
    journal: "PLOS ONE",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0330690",
  },
  whoWorldReport: {
    title: "WHO World Report on Hearing",
    year: 2021,
    url: "https://www.who.int/publications/i/item/9789240020481",
  },
  ehima2024: {
    title: "Getting the Numbers Right on Hearing Loss in Europe",
    organization: "EHIMA",
    year: 2024,
    url: "https://www.ehima.com/wp-content/uploads/2024/03/Getting-the-numbers-right-on-Hearing-Loss-Hearing-Care-and-Hearing-Aid-Use-in-Europe-2024.pdf",
  },
  lancet2024: {
    title: "Dementia prevention, intervention, and care: 2024 report of the Lancet standing Commission",
    journal: "The Lancet",
    year: 2024,
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)01296-0/fulltext",
  },
};

export const countryData: CountryHearingData[] = [
  { name: "Afghanistan", region: "Eastern Mediterranean", population: 42.2, prevalenceRate: 13787, prevalenceRate1990: 13869, estimatedAffected: 1965649, trend: 0.013, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Albania", region: "Europe", population: 2.8, prevalenceRate: 16076, prevalenceRate1990: 15847, estimatedAffected: 622504, trend: 0.061, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Algeria", region: "Africa", population: 45.6, prevalenceRate: 14422, prevalenceRate1990: 14376, estimatedAffected: 5654812, trend: 0.019, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "American Samoa", region: "Western Pacific", population: 0.044, prevalenceRate: 19968, prevalenceRate1990: 19863, estimatedAffected: 10038, trend: -0.047, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Andorra", region: "Europe", population: 0.08, prevalenceRate: 11710, prevalenceRate1990: 11681, estimatedAffected: 16141, trend: -0.003, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Angola", region: "Africa", population: 36.7, prevalenceRate: 15998, prevalenceRate1990: 15869, estimatedAffected: 2859456, trend: 0.053, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Antigua and Barbuda", region: "Americas", population: 0.094, prevalenceRate: 15762, prevalenceRate1990: 15671, estimatedAffected: 16887, trend: 0.023, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Argentina", region: "Americas", population: 46.7, prevalenceRate: 13205, prevalenceRate1990: 13130, estimatedAffected: 7087199, trend: 0.021, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Armenia", region: "Europe", population: 2.8, prevalenceRate: 15968, prevalenceRate1990: 15813, estimatedAffected: 639678, trend: 0.059, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Australia", region: "Western Pacific", population: 26.4, prevalenceRate: 14381, prevalenceRate1990: 13903, estimatedAffected: 5717837, trend: 0.167, hearingAidAdoption: 35, enrichedFindings: null, hearingAdoption: { hearingScreening: true, earDiseasePrevention: true, accessTechnology: true, rehabilitation: true, improvedCommunication: true, noiseReduction: true, communityEngagement: true } },
  { name: "Austria", region: "Europe", population: 9.1, prevalenceRate: 11570, prevalenceRate1990: 11387, estimatedAffected: 1727539, trend: 0.048, hearingAidAdoption: 37, enrichedFindings: null, hearingAdoption: null },
  { name: "Azerbaijan", region: "Europe", population: 10.4, prevalenceRate: 16133, prevalenceRate1990: 15961, estimatedAffected: 1782508, trend: 0.063, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Bahamas", region: "Americas", population: 0.41, prevalenceRate: 15789, prevalenceRate1990: 15800, estimatedAffected: 67020, trend: 0.006, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Bahrain", region: "Eastern Mediterranean", population: 1.5, prevalenceRate: 14859, prevalenceRate1990: 14718, estimatedAffected: 196996, trend: 0.035, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Bangladesh", region: "South-East Asia", population: 173, prevalenceRate: 18498, prevalenceRate1990: 18091, estimatedAffected: 27910254, trend: 0.079, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Barbados", region: "Americas", population: 0.28, prevalenceRate: 15640, prevalenceRate1990: 15627, estimatedAffected: 70894, trend: 0.003, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Belarus", region: "Europe", population: 9.2, prevalenceRate: 16028, prevalenceRate1990: 15918, estimatedAffected: 2273047, trend: 0.039, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Belgium", region: "Europe", population: 11.7, prevalenceRate: 11642, prevalenceRate1990: 11494, estimatedAffected: 2205920, trend: 0.04, hearingAidAdoption: 38, enrichedFindings: null, hearingAdoption: null },
  { name: "Belize", region: "Americas", population: 0.44, prevalenceRate: 15585, prevalenceRate1990: 15499, estimatedAffected: 53978, trend: 0.017, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Benin", region: "Africa", population: 13.7, prevalenceRate: 12864, prevalenceRate1990: 13043, estimatedAffected: 936965, trend: -0.015, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Bermuda", region: "Americas", population: 0.064, prevalenceRate: 15925, prevalenceRate1990: 15856, estimatedAffected: 17684, trend: 0.024, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Bhutan", region: "South-East Asia", population: 0.78, prevalenceRate: 18649, prevalenceRate1990: 18160, estimatedAffected: 128688, trend: 0.084, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Bolivia", region: "Americas", population: 12.4, prevalenceRate: 14369, prevalenceRate1990: 14178, estimatedAffected: 1454672, trend: 0.056, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Bosnia and Herzegovina", region: "Europe", population: 3.2, prevalenceRate: 16054, prevalenceRate1990: 15529, estimatedAffected: 852851, trend: 0.127, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Botswana", region: "Africa", population: 2.7, prevalenceRate: 15527, prevalenceRate1990: 15323, estimatedAffected: 304938, trend: 0.055, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Brazil", region: "Americas", population: 216, prevalenceRate: 17704, prevalenceRate1990: 17626, estimatedAffected: 44330237, trend: 0.008, hearingAidAdoption: 10, enrichedFindings: [
      { text: "31% hearing loss prevalence among adults 50+ with limited access to audiology services in rural areas", source: "BMJ Global Health, 2025", url: "https://pubmed.ncbi.nlm.nih.gov/41038673/" }
    ], hearingAdoption: { hearingScreening: true, earDiseasePrevention: true, accessTechnology: true, rehabilitation: true, improvedCommunication: false, noiseReduction: true, communityEngagement: false } },
  { name: "Brunei", region: "Western Pacific", population: 0.45, prevalenceRate: 14047, prevalenceRate1990: 14193, estimatedAffected: 57951, trend: -0.03, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Bulgaria", region: "Europe", population: 6.5, prevalenceRate: 16151, prevalenceRate1990: 16044, estimatedAffected: 1885606, trend: 0.028, hearingAidAdoption: 15, enrichedFindings: null, hearingAdoption: null },
  { name: "Burkina Faso", region: "Africa", population: 23, prevalenceRate: 12797, prevalenceRate1990: 12868, estimatedAffected: 1595782, trend: 0.007, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Burundi", region: "Africa", population: 13.2, prevalenceRate: 20505, prevalenceRate1990: 19883, estimatedAffected: 1451877, trend: 0.126, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Cabo Verde", region: "Africa", population: 0.6, prevalenceRate: 13212, prevalenceRate1990: 13058, estimatedAffected: 67481, trend: 0.061, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Cambodia", region: "Western Pacific", population: 17, prevalenceRate: 20673, prevalenceRate1990: 20054, estimatedAffected: 2963294, trend: 0.055, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Cameroon", region: "Africa", population: 28.6, prevalenceRate: 12664, prevalenceRate1990: 12995, estimatedAffected: 2262497, trend: -0.092, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Canada", region: "Americas", population: 39.6, prevalenceRate: 13085, prevalenceRate1990: 13280, estimatedAffected: 8233444, trend: -0.084, hearingAidAdoption: 32, enrichedFindings: null, hearingAdoption: null },
  { name: "Central African Republic", region: "Africa", population: 5.7, prevalenceRate: 15196, prevalenceRate1990: 15368, estimatedAffected: 484155, trend: -0.035, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Chad", region: "Africa", population: 18.3, prevalenceRate: 12893, prevalenceRate1990: 12899, estimatedAffected: 1074202, trend: 0.028, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Chile", region: "Americas", population: 19.6, prevalenceRate: 13296, prevalenceRate1990: 13102, estimatedAffected: 3229026, trend: 0.051, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "China", region: "Western Pacific", population: 1410, prevalenceRate: 22005, prevalenceRate1990: 20719, estimatedAffected: 445413952, trend: 0.208, hearingAidAdoption: 1, enrichedFindings: [
      { text: "65% hearing loss prevalence but only 1% hearing aid adoption — the world's largest treatment gap", source: "BMJ Global Health, 2025", url: "https://pubmed.ncbi.nlm.nih.gov/41038673/" },
      { text: "62.3% increase in complete hearing loss prevalence from 1992-2021", source: "GBD 2021 via Frontiers in Public Health, 2025", url: "https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1526719/full" }
    ], hearingAdoption: { hearingScreening: true, earDiseasePrevention: false, accessTechnology: false, rehabilitation: false, improvedCommunication: false, noiseReduction: true, communityEngagement: false } },
  { name: "Colombia", region: "Americas", population: 52.1, prevalenceRate: 15560, prevalenceRate1990: 15479, estimatedAffected: 8532718, trend: 0.022, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Comoros", region: "Africa", population: 0.84, prevalenceRate: 20920, prevalenceRate1990: 20251, estimatedAffected: 122994, trend: 0.092, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Cook Islands", region: "Western Pacific", population: 0.017, prevalenceRate: 20070, prevalenceRate1990: 19806, estimatedAffected: 4742, trend: -0.026, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Costa Rica", region: "Americas", population: 5.2, prevalenceRate: 15569, prevalenceRate1990: 15506, estimatedAffected: 846568, trend: 0.022, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Croatia", region: "Europe", population: 3.9, prevalenceRate: 16191, prevalenceRate1990: 16069, estimatedAffected: 1162366, trend: 0.032, hearingAidAdoption: 18, enrichedFindings: null, hearingAdoption: null },
  { name: "Cuba", region: "Americas", population: 11.1, prevalenceRate: 15577, prevalenceRate1990: 15591, estimatedAffected: 2694584, trend: 0.02, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Cyprus", region: "Europe", population: 1.3, prevalenceRate: 11514, prevalenceRate1990: 11418, estimatedAffected: 218931, trend: 0.022, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Czech Republic", region: "Europe", population: 10.9, prevalenceRate: 16269, prevalenceRate1990: 16153, estimatedAffected: 2846913, trend: 0.031, hearingAidAdoption: 20, enrichedFindings: null, hearingAdoption: null },
  { name: "Côte d'Ivoire", region: "Africa", population: 28.9, prevalenceRate: 13158, prevalenceRate1990: 13542, estimatedAffected: 2153161, trend: -0.077, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "DR Congo", region: "Africa", population: 102, prevalenceRate: 15320, prevalenceRate1990: 15663, estimatedAffected: 7978278, trend: -0.066, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Denmark", region: "Europe", population: 5.9, prevalenceRate: 11379, prevalenceRate1990: 11240, estimatedAffected: 1102782, trend: 0.037, hearingAidAdoption: 45, enrichedFindings: null, hearingAdoption: { hearingScreening: true, earDiseasePrevention: true, accessTechnology: true, rehabilitation: true, improvedCommunication: true, noiseReduction: true, communityEngagement: true } },
  { name: "Djibouti", region: "Eastern Mediterranean", population: 1.1, prevalenceRate: 21087, prevalenceRate1990: 20329, estimatedAffected: 192222, trend: 0.139, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Dominica", region: "Americas", population: 0.073, prevalenceRate: 15627, prevalenceRate1990: 15466, estimatedAffected: 12682, trend: 0.044, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Dominican Republic", region: "Americas", population: 11.3, prevalenceRate: 15734, prevalenceRate1990: 15508, estimatedAffected: 1650214, trend: 0.058, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Ecuador", region: "Americas", population: 18.2, prevalenceRate: 14850, prevalenceRate1990: 14816, estimatedAffected: 2536801, trend: 0.045, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Egypt", region: "Eastern Mediterranean", population: 112.7, prevalenceRate: 14385, prevalenceRate1990: 14138, estimatedAffected: 10882159, trend: 0.06, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "El Salvador", region: "Americas", population: 6.3, prevalenceRate: 15368, prevalenceRate1990: 15288, estimatedAffected: 956312, trend: 0.023, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Equatorial Guinea", region: "Africa", population: 1.7, prevalenceRate: 16296, prevalenceRate1990: 15550, estimatedAffected: 141187, trend: 0.196, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Eritrea", region: "Africa", population: 3.7, prevalenceRate: 20745, prevalenceRate1990: 19812, estimatedAffected: 840540, trend: 0.116, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Estonia", region: "Europe", population: 1.4, prevalenceRate: 16153, prevalenceRate1990: 15914, estimatedAffected: 349002, trend: 0.059, hearingAidAdoption: 20, enrichedFindings: null, hearingAdoption: null },
  { name: "Eswatini", region: "Africa", population: 1.2, prevalenceRate: 15368, prevalenceRate1990: 15261, estimatedAffected: 120521, trend: 0.031, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Ethiopia", region: "Africa", population: 126.5, prevalenceRate: 21065, prevalenceRate1990: 19790, estimatedAffected: 13035732, trend: 0.226, hearingAidAdoption: null, enrichedFindings: [
      { text: "Highest rate of increase in hearing loss prevalence globally (EAPC: 0.226)", source: "GBD 2021", url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0330690" }
    ], hearingAdoption: null },
  { name: "Fiji", region: "Western Pacific", population: 0.93, prevalenceRate: 19887, prevalenceRate1990: 19548, estimatedAffected: 168886, trend: -0.009, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Finland", region: "Europe", population: 5.6, prevalenceRate: 11188, prevalenceRate1990: 11037, estimatedAffected: 1171765, trend: 0.063, hearingAidAdoption: 35, enrichedFindings: null, hearingAdoption: null },
  { name: "France", region: "Europe", population: 64.8, prevalenceRate: 12682, prevalenceRate1990: 12566, estimatedAffected: 13751855, trend: 0.029, hearingAidAdoption: 47, enrichedFindings: null, hearingAdoption: { hearingScreening: true, earDiseasePrevention: true, accessTechnology: true, rehabilitation: true, improvedCommunication: true, noiseReduction: true, communityEngagement: false } },
  { name: "Gabon", region: "Africa", population: 2.4, prevalenceRate: 16229, prevalenceRate1990: 16230, estimatedAffected: 217573, trend: 0.002, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Gambia", region: "Africa", population: 2.7, prevalenceRate: 12815, prevalenceRate1990: 13280, estimatedAffected: 173309, trend: -0.089, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Georgia", region: "Europe", population: 3.7, prevalenceRate: 16012, prevalenceRate1990: 15981, estimatedAffected: 835931, trend: 0.033, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Germany", region: "Europe", population: 83.8, prevalenceRate: 11607, prevalenceRate1990: 11412, estimatedAffected: 17804500, trend: 0.047, hearingAidAdoption: 55, enrichedFindings: null, hearingAdoption: { hearingScreening: true, earDiseasePrevention: true, accessTechnology: true, rehabilitation: true, improvedCommunication: true, noiseReduction: true, communityEngagement: true } },
  { name: "Ghana", region: "Africa", population: 34, prevalenceRate: 13090, prevalenceRate1990: 13192, estimatedAffected: 2953590, trend: -0.005, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Greece", region: "Europe", population: 10.3, prevalenceRate: 11618, prevalenceRate1990: 11524, estimatedAffected: 2178619, trend: 0.029, hearingAidAdoption: 18, enrichedFindings: [
      { text: "Among 8 worst EU countries for hearing aid reimbursement", source: "EFHOH Hearing Aid Reimbursement Report, 2022", url: "https://efhoh.org/wp-content/uploads/2022/11/Hearing-Aids-Reimbursement-2022-edited-version-final-for-publication.pdf" },
      { text: "89.5% of Greek teenagers cannot identify how to access hearing aids", source: "Audiology Research (MDPI), 2025", url: "https://pubmed.ncbi.nlm.nih.gov/40407672/" },
      { text: "People with hearing disabilities are systematically excluded in health policy and planning", source: "Archives of Public Health, 2018", url: "https://pubmed.ncbi.nlm.nih.gov/30338066/" }
    ], hearingAdoption: { hearingScreening: true, earDiseasePrevention: false, accessTechnology: false, rehabilitation: false, improvedCommunication: false, noiseReduction: true, communityEngagement: false } },
  { name: "Greenland", region: "Europe", population: 0.057, prevalenceRate: 13972, prevalenceRate1990: 13970, estimatedAffected: 9608, trend: 0.007, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Grenada", region: "Americas", population: 0.125, prevalenceRate: 15694, prevalenceRate1990: 15470, estimatedAffected: 18077, trend: 0.053, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Guam", region: "Western Pacific", population: 0.172, prevalenceRate: 20181, prevalenceRate1990: 20034, estimatedAffected: 39878, trend: -0.038, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Guatemala", region: "Americas", population: 18.1, prevalenceRate: 15428, prevalenceRate1990: 15396, estimatedAffected: 1902658, trend: 0.017, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Guinea", region: "Africa", population: 14.2, prevalenceRate: 12848, prevalenceRate1990: 13125, estimatedAffected: 960905, trend: -0.064, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Guinea-Bissau", region: "Africa", population: 2.1, prevalenceRate: 12689, prevalenceRate1990: 12941, estimatedAffected: 138076, trend: -0.047, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Guyana", region: "Americas", population: 0.81, prevalenceRate: 15586, prevalenceRate1990: 15364, estimatedAffected: 108203, trend: 0.046, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Haiti", region: "Americas", population: 11.7, prevalenceRate: 15089, prevalenceRate1990: 15176, estimatedAffected: 1338428, trend: -0.009, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Honduras", region: "Americas", population: 10.6, prevalenceRate: 15322, prevalenceRate1990: 15275, estimatedAffected: 1135402, trend: 0.015, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Hungary", region: "Europe", population: 9.6, prevalenceRate: 16189, prevalenceRate1990: 16037, estimatedAffected: 2588943, trend: 0.031, hearingAidAdoption: 20, enrichedFindings: null, hearingAdoption: null },
  { name: "Iceland", region: "Europe", population: 0.38, prevalenceRate: 11612, prevalenceRate1990: 11508, estimatedAffected: 58351, trend: 0.03, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "India", region: "South-East Asia", population: 1429, prevalenceRate: 19214, prevalenceRate1990: 18640, estimatedAffected: 253239805, trend: 0.021, hearingAidAdoption: 5, enrichedFindings: [
      { text: "Over 253 million people affected — one of the highest absolute burdens globally", source: "GBD 2021", url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0330690" },
      { text: "Only ~5% hearing aid adoption among those who need them", source: "WHO World Report on Hearing, 2021", url: "https://www.who.int/publications/i/item/9789240020481" }
    ], hearingAdoption: { hearingScreening: false, earDiseasePrevention: false, accessTechnology: false, rehabilitation: false, improvedCommunication: false, noiseReduction: true, communityEngagement: false } },
  { name: "Indonesia", region: "South-East Asia", population: 277, prevalenceRate: 20698, prevalenceRate1990: 20235, estimatedAffected: 56566991, trend: 0.009, hearingAidAdoption: 3, enrichedFindings: null, hearingAdoption: null },
  { name: "Iran", region: "Eastern Mediterranean", population: 88.6, prevalenceRate: 15855, prevalenceRate1990: 15756, estimatedAffected: 13546893, trend: 0.022, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Iraq", region: "Eastern Mediterranean", population: 44.5, prevalenceRate: 14464, prevalenceRate1990: 14360, estimatedAffected: 4271259, trend: 0.049, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Ireland", region: "Europe", population: 5.1, prevalenceRate: 11637, prevalenceRate1990: 11393, estimatedAffected: 810113, trend: 0.062, hearingAidAdoption: 33, enrichedFindings: null, hearingAdoption: null },
  { name: "Israel", region: "Europe", population: 9.8, prevalenceRate: 11551, prevalenceRate1990: 11417, estimatedAffected: 1292691, trend: 0.036, hearingAidAdoption: 30, enrichedFindings: null, hearingAdoption: null },
  { name: "Italy", region: "Europe", population: 58.9, prevalenceRate: 11920, prevalenceRate1990: 11770, estimatedAffected: 13496615, trend: 0.037, hearingAidAdoption: 30, enrichedFindings: null, hearingAdoption: null },
  { name: "Jamaica", region: "Americas", population: 2.8, prevalenceRate: 15563, prevalenceRate1990: 15504, estimatedAffected: 481863, trend: 0.015, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Japan", region: "Western Pacific", population: 123.3, prevalenceRate: 14101, prevalenceRate1990: 13981, estimatedAffected: 37582600, trend: 0.023, hearingAidAdoption: 15, enrichedFindings: [
      { text: "Despite advanced healthcare, only 15% hearing aid adoption — significant cultural stigma barrier", source: "JapanTrak 2022, EHIMA", url: "https://www.ehima.com/wp-content/uploads/2023/02/JapanTrak_2022.pdf" }
    ], hearingAdoption: { hearingScreening: true, earDiseasePrevention: false, accessTechnology: false, rehabilitation: false, improvedCommunication: false, noiseReduction: true, communityEngagement: false } },
  { name: "Jordan", region: "Eastern Mediterranean", population: 11.4, prevalenceRate: 14375, prevalenceRate1990: 14271, estimatedAffected: 1335597, trend: 0.036, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Kazakhstan", region: "Europe", population: 19.8, prevalenceRate: 16165, prevalenceRate1990: 15980, estimatedAffected: 3030103, trend: 0.05, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Kenya", region: "Africa", population: 55.1, prevalenceRate: 21284, prevalenceRate1990: 20538, estimatedAffected: 6799117, trend: 0.092, hearingAidAdoption: 4, enrichedFindings: null, hearingAdoption: null },
  { name: "Kiribati", region: "Western Pacific", population: 0.132, prevalenceRate: 19409, prevalenceRate1990: 19180, estimatedAffected: 17007, trend: -0.022, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Kuwait", region: "Eastern Mediterranean", population: 4.3, prevalenceRate: 14796, prevalenceRate1990: 14901, estimatedAffected: 614803, trend: -0.024, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Kyrgyzstan", region: "Europe", population: 7, prevalenceRate: 15788, prevalenceRate1990: 15791, estimatedAffected: 869101, trend: 0.002, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Laos", region: "Western Pacific", population: 7.6, prevalenceRate: 20882, prevalenceRate1990: 20221, estimatedAffected: 1188810, trend: 0.053, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Latvia", region: "Europe", population: 1.8, prevalenceRate: 16119, prevalenceRate1990: 15945, estimatedAffected: 513577, trend: 0.048, hearingAidAdoption: 18, enrichedFindings: null, hearingAdoption: null },
  { name: "Lebanon", region: "Eastern Mediterranean", population: 5.5, prevalenceRate: 14351, prevalenceRate1990: 14323, estimatedAffected: 862386, trend: 0.013, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Lesotho", region: "Africa", population: 2.3, prevalenceRate: 15083, prevalenceRate1990: 14808, estimatedAffected: 204395, trend: 0.072, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Liberia", region: "Africa", population: 5.4, prevalenceRate: 12655, prevalenceRate1990: 13190, estimatedAffected: 396632, trend: -0.053, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Libya", region: "Eastern Mediterranean", population: 6.9, prevalenceRate: 14401, prevalenceRate1990: 14710, estimatedAffected: 894085, trend: -0.063, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Lithuania", region: "Europe", population: 2.7, prevalenceRate: 16124, prevalenceRate1990: 15952, estimatedAffected: 749624, trend: 0.051, hearingAidAdoption: 18, enrichedFindings: null, hearingAdoption: null },
  { name: "Luxembourg", region: "Europe", population: 0.66, prevalenceRate: 11578, prevalenceRate1990: 11386, estimatedAffected: 109275, trend: 0.051, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Madagascar", region: "Africa", population: 30.3, prevalenceRate: 22034, prevalenceRate1990: 21319, estimatedAffected: 3732435, trend: 0.085, hearingAidAdoption: null, enrichedFindings: [
      { text: "Highest hearing loss prevalence rate in the world (22,034 per 100,000)", source: "GBD 2021", url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0330690" }
    ], hearingAdoption: null },
  { name: "Malawi", region: "Africa", population: 20.9, prevalenceRate: 21762, prevalenceRate1990: 21432, estimatedAffected: 2327321, trend: 0.048, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Malaysia", region: "Western Pacific", population: 34.3, prevalenceRate: 21139, prevalenceRate1990: 20741, estimatedAffected: 6544893, trend: 0.002, hearingAidAdoption: 12, enrichedFindings: null, hearingAdoption: null },
  { name: "Maldives", region: "South-East Asia", population: 0.52, prevalenceRate: 21237, prevalenceRate1990: 20732, estimatedAffected: 98462, trend: 0.02, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Mali", region: "Africa", population: 23.3, prevalenceRate: 12940, prevalenceRate1990: 12931, estimatedAffected: 1584583, trend: 0.022, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Malta", region: "Europe", population: 0.54, prevalenceRate: 11579, prevalenceRate1990: 11314, estimatedAffected: 90495, trend: 0.067, hearingAidAdoption: 20, enrichedFindings: null, hearingAdoption: null },
  { name: "Marshall Islands", region: "Western Pacific", population: 0.042, prevalenceRate: 19661, prevalenceRate1990: 19395, estimatedAffected: 8487, trend: -0.024, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Mauritania", region: "Africa", population: 4.9, prevalenceRate: 13103, prevalenceRate1990: 13266, estimatedAffected: 358381, trend: -0.024, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Mauritius", region: "Africa", population: 1.3, prevalenceRate: 21068, prevalenceRate1990: 20679, estimatedAffected: 364898, trend: -0.001, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Mexico", region: "Americas", population: 128.9, prevalenceRate: 15894, prevalenceRate1990: 15848, estimatedAffected: 20916641, trend: 0.015, hearingAidAdoption: 8, enrichedFindings: [
      { text: "33% hearing loss prevalence among adults 50+ but only 8% hearing aid adoption", source: "BMJ Global Health, 2025", url: "https://pubmed.ncbi.nlm.nih.gov/41038673/" }
    ], hearingAdoption: null },
  { name: "Micronesia", region: "Western Pacific", population: 0.115, prevalenceRate: 19623, prevalenceRate1990: 19363, estimatedAffected: 16786, trend: -0.02, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Moldova", region: "Europe", population: 2.5, prevalenceRate: 15804, prevalenceRate1990: 15748, estimatedAffected: 853124, trend: 0.028, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Monaco", region: "Europe", population: 0.04, prevalenceRate: 11812, prevalenceRate1990: 11707, estimatedAffected: 8758, trend: 0.025, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Mongolia", region: "Western Pacific", population: 3.4, prevalenceRate: 16051, prevalenceRate1990: 15772, estimatedAffected: 438419, trend: 0.072, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Montenegro", region: "Europe", population: 0.62, prevalenceRate: 16130, prevalenceRate1990: 16048, estimatedAffected: 141498, trend: 0.029, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Morocco", region: "Eastern Mediterranean", population: 37.8, prevalenceRate: 14299, prevalenceRate1990: 14117, estimatedAffected: 5138086, trend: 0.04, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Mozambique", region: "Africa", population: 33.9, prevalenceRate: 20667, prevalenceRate1990: 19472, estimatedAffected: 3330765, trend: 0.193, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Myanmar", region: "South-East Asia", population: 54.6, prevalenceRate: 21162, prevalenceRate1990: 20414, estimatedAffected: 11247835, trend: 0.073, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Namibia", region: "Africa", population: 2.6, prevalenceRate: 15424, prevalenceRate1990: 15319, estimatedAffected: 277920, trend: 0.042, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Nauru", region: "Western Pacific", population: 0.013, prevalenceRate: 19902, prevalenceRate1990: 19927, estimatedAffected: 1457, trend: -0.061, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Nepal", region: "South-East Asia", population: 30.9, prevalenceRate: 18065, prevalenceRate1990: 17730, estimatedAffected: 4711725, trend: 0.052, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Netherlands", region: "Europe", population: 17.6, prevalenceRate: 11539, prevalenceRate1990: 11393, estimatedAffected: 3327741, trend: 0.045, hearingAidAdoption: 40, enrichedFindings: null, hearingAdoption: null },
  { name: "New Zealand", region: "Western Pacific", population: 5.2, prevalenceRate: 14130, prevalenceRate1990: 14043, estimatedAffected: 1066609, trend: 0.021, hearingAidAdoption: 33, enrichedFindings: null, hearingAdoption: null },
  { name: "Nicaragua", region: "Americas", population: 7, prevalenceRate: 15325, prevalenceRate1990: 15277, estimatedAffected: 843697, trend: 0.028, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Niger", region: "Africa", population: 27, prevalenceRate: 12550, prevalenceRate1990: 12865, estimatedAffected: 1444230, trend: -0.045, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Nigeria", region: "Africa", population: 224, prevalenceRate: 13996, prevalenceRate1990: 14435, estimatedAffected: 18511471, trend: -0.056, hearingAidAdoption: 3, enrichedFindings: [
      { text: "Only 3% hearing aid adoption — 90% of those in need in Africa lack hearing aids", source: "WHO World Report on Hearing, 2021", url: "https://www.who.int/publications/i/item/9789240020481" }
    ], hearingAdoption: null },
  { name: "Niue", region: "Western Pacific", population: 0.002, prevalenceRate: 19938, prevalenceRate1990: 19601, estimatedAffected: 411, trend: -0.0, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "North Korea", region: "South-East Asia", population: 26.2, prevalenceRate: 19018, prevalenceRate1990: 18928, estimatedAffected: 6260033, trend: -0.007, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "North Macedonia", region: "Europe", population: 2.1, prevalenceRate: 16111, prevalenceRate1990: 16009, estimatedAffected: 496779, trend: 0.027, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Northern Mariana Islands", region: "Western Pacific", population: 0.047, prevalenceRate: 20142, prevalenceRate1990: 20119, estimatedAffected: 11222, trend: -0.063, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Norway", region: "Europe", population: 5.5, prevalenceRate: 11994, prevalenceRate1990: 11805, estimatedAffected: 1008388, trend: 0.067, hearingAidAdoption: 42, enrichedFindings: null, hearingAdoption: { hearingScreening: true, earDiseasePrevention: true, accessTechnology: true, rehabilitation: true, improvedCommunication: true, noiseReduction: true, communityEngagement: true } },
  { name: "Oman", region: "Eastern Mediterranean", population: 4.6, prevalenceRate: 13727, prevalenceRate1990: 13669, estimatedAffected: 444630, trend: 0.048, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Pakistan", region: "Eastern Mediterranean", population: 240.5, prevalenceRate: 18335, prevalenceRate1990: 18156, estimatedAffected: 29335976, trend: 0.028, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Palau", region: "Western Pacific", population: 0.018, prevalenceRate: 20060, prevalenceRate1990: 19708, estimatedAffected: 4711, trend: -0.011, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Palestine", region: "Eastern Mediterranean", population: 5.5, prevalenceRate: 14127, prevalenceRate1990: 13900, estimatedAffected: 460126, trend: 0.043, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Panama", region: "Americas", population: 4.5, prevalenceRate: 15702, prevalenceRate1990: 15515, estimatedAffected: 692974, trend: 0.049, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Papua New Guinea", region: "Western Pacific", population: 10.3, prevalenceRate: 19710, prevalenceRate1990: 19388, estimatedAffected: 1323246, trend: -0.022, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Paraguay", region: "Americas", population: 6.9, prevalenceRate: 17505, prevalenceRate1990: 17383, estimatedAffected: 1111203, trend: 0.027, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Peru", region: "Americas", population: 34.4, prevalenceRate: 14182, prevalenceRate1990: 14034, estimatedAffected: 4992458, trend: 0.056, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Philippines", region: "Western Pacific", population: 117.3, prevalenceRate: 21069, prevalenceRate1990: 20684, estimatedAffected: 20048451, trend: 0.005, hearingAidAdoption: 5, enrichedFindings: null, hearingAdoption: null },
  { name: "Poland", region: "Europe", population: 36.8, prevalenceRate: 16556, prevalenceRate1990: 16297, estimatedAffected: 9983399, trend: 0.053, hearingAidAdoption: 25, enrichedFindings: null, hearingAdoption: null },
  { name: "Portugal", region: "Europe", population: 10.2, prevalenceRate: 11513, prevalenceRate1990: 11381, estimatedAffected: 2243686, trend: 0.032, hearingAidAdoption: 22, enrichedFindings: null, hearingAdoption: null },
  { name: "Puerto Rico", region: "Americas", population: 3.2, prevalenceRate: 15813, prevalenceRate1990: 15760, estimatedAffected: 894645, trend: 0.015, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Qatar", region: "Eastern Mediterranean", population: 2.7, prevalenceRate: 15101, prevalenceRate1990: 15068, estimatedAffected: 340013, trend: 0.039, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Republic of the Congo", region: "Africa", population: 6.1, prevalenceRate: 15988, prevalenceRate1990: 15855, estimatedAffected: 603666, trend: 0.043, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Romania", region: "Europe", population: 19, prevalenceRate: 16190, prevalenceRate1990: 16012, estimatedAffected: 4989132, trend: 0.045, hearingAidAdoption: 15, enrichedFindings: null, hearingAdoption: null },
  { name: "Russia", region: "Europe", population: 143.8, prevalenceRate: 16334, prevalenceRate1990: 16254, estimatedAffected: 34779653, trend: 0.03, hearingAidAdoption: 8, enrichedFindings: null, hearingAdoption: null },
  { name: "Rwanda", region: "Africa", population: 14, prevalenceRate: 20866, prevalenceRate1990: 19900, estimatedAffected: 1785415, trend: 0.151, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Saint Kitts and Nevis", region: "Americas", population: 0.048, prevalenceRate: 15810, prevalenceRate1990: 15633, estimatedAffected: 11315, trend: 0.04, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Saint Lucia", region: "Americas", population: 0.18, prevalenceRate: 15659, prevalenceRate1990: 15545, estimatedAffected: 36283, trend: 0.03, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Saint Vincent and the Grenadines", region: "Americas", population: 0.1, prevalenceRate: 15680, prevalenceRate1990: 15463, estimatedAffected: 21627, trend: 0.051, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Samoa", region: "Western Pacific", population: 0.22, prevalenceRate: 19784, prevalenceRate1990: 19455, estimatedAffected: 31924, trend: -0.008, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "San Marino", region: "Europe", population: 0.034, prevalenceRate: 11584, prevalenceRate1990: 11557, estimatedAffected: 6886, trend: 0.003, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Saudi Arabia", region: "Eastern Mediterranean", population: 36.9, prevalenceRate: 14841, prevalenceRate1990: 14823, estimatedAffected: 4414674, trend: 0.01, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Senegal", region: "Africa", population: 17.9, prevalenceRate: 12996, prevalenceRate1990: 13261, estimatedAffected: 1298513, trend: -0.041, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Serbia", region: "Europe", population: 6.6, prevalenceRate: 16116, prevalenceRate1990: 16049, estimatedAffected: 2248083, trend: 0.025, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Seychelles", region: "Africa", population: 0.107, prevalenceRate: 21173, prevalenceRate1990: 20795, estimatedAffected: 25572, trend: 0.001, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Sierra Leone", region: "Africa", population: 8.6, prevalenceRate: 12723, prevalenceRate1990: 13120, estimatedAffected: 652937, trend: -0.074, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Singapore", region: "Western Pacific", population: 6, prevalenceRate: 14096, prevalenceRate1990: 13808, estimatedAffected: 1158294, trend: 0.072, hearingAidAdoption: 25, enrichedFindings: null, hearingAdoption: null },
  { name: "Slovakia", region: "Europe", population: 5.4, prevalenceRate: 16233, prevalenceRate1990: 16068, estimatedAffected: 1344307, trend: 0.039, hearingAidAdoption: 18, enrichedFindings: null, hearingAdoption: null },
  { name: "Slovenia", region: "Europe", population: 2.1, prevalenceRate: 16107, prevalenceRate1990: 16008, estimatedAffected: 571498, trend: 0.027, hearingAidAdoption: 22, enrichedFindings: null, hearingAdoption: null },
  { name: "Solomon Islands", region: "Western Pacific", population: 0.74, prevalenceRate: 19548, prevalenceRate1990: 19335, estimatedAffected: 85670, trend: -0.039, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Somalia", region: "Eastern Mediterranean", population: 18.1, prevalenceRate: 19609, prevalenceRate1990: 19232, estimatedAffected: 1878217, trend: 0.038, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "South Africa", region: "Africa", population: 60.4, prevalenceRate: 16381, prevalenceRate1990: 16038, estimatedAffected: 8734864, trend: 0.098, hearingAidAdoption: 7, enrichedFindings: null, hearingAdoption: null },
  { name: "South Korea", region: "Western Pacific", population: 51.7, prevalenceRate: 13926, prevalenceRate1990: 13531, estimatedAffected: 11770776, trend: 0.096, hearingAidAdoption: 12, enrichedFindings: [
      { text: "39% hearing loss prevalence among adults 50+ but only 12% hearing aid adoption", source: "BMJ Global Health, 2025", url: "https://pubmed.ncbi.nlm.nih.gov/41038673/" },
      { text: "Untreated hearing loss is a significant predictor of cognitive impairment specifically in women aged 65+", source: "Korean Longitudinal Study of Aging (KLoSA)", url: "https://pubmed.ncbi.nlm.nih.gov/31257714/" }
    ], hearingAdoption: { hearingScreening: true, earDiseasePrevention: false, accessTechnology: true, rehabilitation: true, improvedCommunication: false, noiseReduction: true, communityEngagement: false } },
  { name: "South Sudan", region: "Africa", population: 11.1, prevalenceRate: 20809, prevalenceRate1990: 20394, estimatedAffected: 1141070, trend: 0.067, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Spain", region: "Europe", population: 47.5, prevalenceRate: 11663, prevalenceRate1990: 11497, estimatedAffected: 9263930, trend: 0.046, hearingAidAdoption: 28, enrichedFindings: null, hearingAdoption: null },
  { name: "Sri Lanka", region: "South-East Asia", population: 22.2, prevalenceRate: 20984, prevalenceRate1990: 20512, estimatedAffected: 5516195, trend: 0.014, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Sudan", region: "Eastern Mediterranean", population: 48, prevalenceRate: 14135, prevalenceRate1990: 13905, estimatedAffected: 3623633, trend: 0.07, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Suriname", region: "Americas", population: 0.62, prevalenceRate: 15680, prevalenceRate1990: 15647, estimatedAffected: 99525, trend: 0.023, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Sweden", region: "Europe", population: 10.6, prevalenceRate: 10107, prevalenceRate1990: 9986, estimatedAffected: 1690494, trend: 0.007, hearingAidAdoption: 36, enrichedFindings: [
      { text: "Lowest hearing loss prevalence rate in the world (10,107 per 100,000)", source: "GBD 2021", url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0330690" },
      { text: "Untreated hearing loss shows stronger association with cognitive impairment in women than men", source: "Good Aging in Skane (GAS) study, 2024", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11050994/" }
    ], hearingAdoption: { hearingScreening: true, earDiseasePrevention: true, accessTechnology: true, rehabilitation: true, improvedCommunication: true, noiseReduction: true, communityEngagement: true } },
  { name: "Switzerland", region: "Europe", population: 8.8, prevalenceRate: 11482, prevalenceRate1990: 11353, estimatedAffected: 1708446, trend: 0.029, hearingAidAdoption: 43, enrichedFindings: [
      { text: "Women are more likely to use hearing aids regularly and for longer daily periods than men", source: "Ear and Hearing, 2011", url: "https://pubmed.ncbi.nlm.nih.gov/21795978/" }
    ], hearingAdoption: { hearingScreening: true, earDiseasePrevention: true, accessTechnology: true, rehabilitation: true, improvedCommunication: true, noiseReduction: true, communityEngagement: false } },
  { name: "Syria", region: "Eastern Mediterranean", population: 23.2, prevalenceRate: 14069, prevalenceRate1990: 14114, estimatedAffected: 1931559, trend: -0.002, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "São Tomé and Príncipe", region: "Africa", population: 0.23, prevalenceRate: 13062, prevalenceRate1990: 13190, estimatedAffected: 19343, trend: -0.008, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Taiwan", region: "Western Pacific", population: 23.9, prevalenceRate: 18173, prevalenceRate1990: 17787, estimatedAffected: 6833001, trend: 0.036, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Tajikistan", region: "Europe", population: 10.1, prevalenceRate: 15770, prevalenceRate1990: 15838, estimatedAffected: 1132037, trend: 0.005, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Tanzania", region: "Africa", population: 67.4, prevalenceRate: 20196, prevalenceRate1990: 19285, estimatedAffected: 6961247, trend: 0.163, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Thailand", region: "South-East Asia", population: 71.8, prevalenceRate: 20968, prevalenceRate1990: 20540, estimatedAffected: 20826699, trend: 0.004, hearingAidAdoption: 8, enrichedFindings: null, hearingAdoption: null },
  { name: "Timor-Leste", region: "South-East Asia", population: 1.4, prevalenceRate: 20843, prevalenceRate1990: 20440, estimatedAffected: 204941, trend: 0.02, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Togo", region: "Africa", population: 9, prevalenceRate: 12661, prevalenceRate1990: 12996, estimatedAffected: 663553, trend: -0.064, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Tokelau", region: "Western Pacific", population: 0.002, prevalenceRate: 19817, prevalenceRate1990: 19426, estimatedAffected: 286, trend: 0.008, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Tonga", region: "Western Pacific", population: 0.107, prevalenceRate: 19734, prevalenceRate1990: 19404, estimatedAffected: 16839, trend: -0.013, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Trinidad and Tobago", region: "Americas", population: 1.5, prevalenceRate: 15857, prevalenceRate1990: 15688, estimatedAffected: 288903, trend: 0.056, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Tunisia", region: "Eastern Mediterranean", population: 12.5, prevalenceRate: 14336, prevalenceRate1990: 14224, estimatedAffected: 1897584, trend: 0.023, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Turkey", region: "Europe", population: 85.8, prevalenceRate: 14523, prevalenceRate1990: 14381, estimatedAffected: 13565686, trend: 0.042, hearingAidAdoption: 10, enrichedFindings: null, hearingAdoption: null },
  { name: "Turkmenistan", region: "Europe", population: 6.5, prevalenceRate: 16193, prevalenceRate1990: 15928, estimatedAffected: 726923, trend: 0.07, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Tuvalu", region: "Western Pacific", population: 0.011, prevalenceRate: 19685, prevalenceRate1990: 19140, estimatedAffected: 2184, trend: 0.018, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "US Virgin Islands", region: "Americas", population: 0.087, prevalenceRate: 15887, prevalenceRate1990: 15788, estimatedAffected: 23749, trend: 0.026, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Uganda", region: "Africa", population: 48.6, prevalenceRate: 19477, prevalenceRate1990: 18200, estimatedAffected: 4227480, trend: 0.221, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Ukraine", region: "Europe", population: 36.7, prevalenceRate: 16158, prevalenceRate1990: 16166, estimatedAffected: 11002466, trend: 0.012, hearingAidAdoption: 6, enrichedFindings: null, hearingAdoption: null },
  { name: "United Arab Emirates", region: "Eastern Mediterranean", population: 9.4, prevalenceRate: 15143, prevalenceRate1990: 15130, estimatedAffected: 1339247, trend: -0.001, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "United Kingdom", region: "Europe", population: 67.7, prevalenceRate: 12621, prevalenceRate1990: 12882, estimatedAffected: 13715579, trend: -0.163, hearingAidAdoption: 42, enrichedFindings: null, hearingAdoption: { hearingScreening: true, earDiseasePrevention: true, accessTechnology: true, rehabilitation: true, improvedCommunication: true, noiseReduction: true, communityEngagement: true } },
  { name: "United States", region: "Americas", population: 339.9, prevalenceRate: 13732, prevalenceRate1990: 14198, estimatedAffected: 71684751, trend: -0.155, hearingAidAdoption: 30, enrichedFindings: [
      { text: "Women aged 75-84 use hearing aids at half the rate of men (13.7% vs 26.7%)", source: "NIDCD, 2023", url: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing" },
      { text: "Only 30% of adults who could benefit from hearing aids actually use them", source: "NIDCD, 2023", url: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing" },
      { text: "1 in 5 women overall and 1 in 10 women in their 40s-50s experience hearing difficulty", source: "NIDCD, 2023", url: "https://www.nidcd.nih.gov/health/statistics/quick-statistics-hearing" }
    ], hearingAdoption: { hearingScreening: true, earDiseasePrevention: true, accessTechnology: true, rehabilitation: true, improvedCommunication: true, noiseReduction: true, communityEngagement: true } },
  { name: "Uruguay", region: "Americas", population: 3.4, prevalenceRate: 13213, prevalenceRate1990: 13101, estimatedAffected: 643185, trend: 0.029, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Uzbekistan", region: "Europe", population: 35.6, prevalenceRate: 15982, prevalenceRate1990: 15789, estimatedAffected: 4759473, trend: 0.05, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Vanuatu", region: "Western Pacific", population: 0.33, prevalenceRate: 19581, prevalenceRate1990: 19407, estimatedAffected: 41695, trend: -0.035, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Venezuela", region: "Americas", population: 28.4, prevalenceRate: 15524, prevalenceRate1990: 15590, estimatedAffected: 4651348, trend: 0.007, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Vietnam", region: "Western Pacific", population: 99.5, prevalenceRate: 20887, prevalenceRate1990: 20215, estimatedAffected: 22095227, trend: 0.05, hearingAidAdoption: 5, enrichedFindings: null, hearingAdoption: null },
  { name: "Yemen", region: "Eastern Mediterranean", population: 34.4, prevalenceRate: 13903, prevalenceRate1990: 13988, estimatedAffected: 2598556, trend: -0.0, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Zambia", region: "Africa", population: 20.6, prevalenceRate: 21012, prevalenceRate1990: 20152, estimatedAffected: 2243477, trend: 0.138, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
  { name: "Zimbabwe", region: "Africa", population: 16.7, prevalenceRate: 14807, prevalenceRate1990: 15014, estimatedAffected: 1427002, trend: -0.052, hearingAidAdoption: null, enrichedFindings: null, hearingAdoption: null },
];