import { jsPDF } from "jspdf";
import { type CountryHearingData, countryData } from "./country-hearing-data";
import { LOGO_BASE64 } from "./pdf-assets";

const PINK = [172, 57, 84] as const;
const DARK = [59, 43, 48] as const;
const MUTED = [112, 92, 97] as const;
const WHITE = [255, 255, 255] as const;
const LIGHT_PINK = [250, 238, 241] as const;
const LIGHT_GRAY = [247, 244, 245] as const;
const GREEN = [90, 156, 120] as const;
const LIGHT_GREEN = [237, 248, 241] as const;
const ADOPTED_GREEN = [70, 148, 90] as const;
const OPPORTUNITY_ORANGE = [200, 130, 60] as const;
const CARD_BG = [255, 253, 253] as const;
const ACCENT_BG = [249, 243, 237] as const;
const BLUE_MALE = [140, 175, 210] as const;
const PINK_FEMALE = [198, 94, 122] as const;
const RED_BAR = [185, 110, 120] as const;
const GREEN_BAR = [120, 180, 145] as const;
const PEACH_BG = [249, 243, 237] as const;
const LAVENDER_BG = [237, 232, 245] as const;
const CHART_1 = [198, 94, 122] as const;
const CHART_2 = [153, 122, 191] as const;
const CHART_4 = [115, 165, 210] as const;
const CHART_5 = [120, 180, 145] as const;

type Color = readonly [number, number, number];

const APA_REFS = {
  gbd: "[1] GBD 2021 Hearing Loss Collaborators. (2024). Hearing loss prevalence, 1990-2019. The Lancet Public Health.",
  ehima: "[2] European Hearing Instrument Manufacturers Association. (2024). EuroTrak survey data.",
  nidcd: "[3] National Institute on Deafness and Other Communication Disorders. (2023). Quick statistics about hearing.",
  who2021: "[4] World Health Organization. (2021). World report on hearing.",
  who2024: "[5] World Health Organization. (2024). Deafness and hearing loss fact sheet.",
  lancet: "[6] Livingston, G., et al. (2024). Dementia prevention, intervention, and care. The Lancet, 404, 572-628.",
  jhu: "[7] Lin, F. R., et al. (2011). Hearing loss and incident dementia. Archives of Neurology, 68(2), 214-220.",
  pmc: "[8] Reed, N. S., et al. (2019). Trends in health care costs and untreated hearing loss. JAMA Otolaryngology, 145(1), 27-34.",
  achieve: "[9] Lin, F. R., et al. (2023). Hearing intervention to reduce cognitive decline. The Lancet, 402(10404), 786-797.",
};

function formatNumber(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + " billion";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + " million";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toLocaleString();
}

function formatRate(rate: number): string {
  return (rate / 1000).toFixed(1) + "%";
}

function getTrendText(eapc: number): string {
  if (eapc > 0.1) return "Rising significantly";
  if (eapc > 0.02) return "Rising";
  if (eapc > -0.02) return "Stable";
  if (eapc > -0.1) return "Declining";
  return "Declining significantly";
}

function setColor(doc: jsPDF, c: Color) {
  doc.setTextColor(c[0], c[1], c[2]);
}

function setFill(doc: jsPDF, c: Color) {
  doc.setFillColor(c[0], c[1], c[2]);
}

function drawRoundedRect(doc: jsPDF, x: number, y: number, w: number, h: number, r: number, fillColor: Color) {
  setFill(doc, fillColor);
  doc.roundedRect(x, y, w, h, r, r, "F");
}

function drawCardBorder(doc: jsPDF, x: number, y: number, w: number, h: number, r: number) {
  doc.setDrawColor(230, 225, 228);
  doc.setLineWidth(0.3);
  doc.roundedRect(x, y, w, h, r, r, "S");
}

function drawRefLabel(doc: jsPDF, label: string, x: number, y: number) {
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "italic");
  setColor(doc, MUTED);
  doc.text(label, x, y);
}

function drawIcon(doc: jsPDF, icon: string, x: number, y: number, size: number, color: Color) {
  const s = size;
  const cx = x + s / 2;
  const cy = y + s / 2;
  doc.setDrawColor(color[0], color[1], color[2]);
  setFill(doc, color);
  doc.setLineWidth(0.4);

  switch (icon) {
    case "users": {
      doc.circle(cx - s * 0.15, cy - s * 0.2, s * 0.14, "S");
      doc.circle(cx + s * 0.25, cy - s * 0.2, s * 0.12, "S");
      const arcY = cy + s * 0.15;
      doc.line(cx - s * 0.4, arcY + s * 0.2, cx - s * 0.4, arcY);
      doc.line(cx - s * 0.4, arcY, cx - s * 0.15, arcY - s * 0.15);
      doc.line(cx - s * 0.15, arcY - s * 0.15, cx + s * 0.1, arcY);
      doc.line(cx + s * 0.1, arcY, cx + s * 0.1, arcY + s * 0.2);
      doc.line(cx + s * 0.1, arcY, cx + s * 0.25, arcY - s * 0.12);
      doc.line(cx + s * 0.25, arcY - s * 0.12, cx + s * 0.45, arcY);
      doc.line(cx + s * 0.45, arcY, cx + s * 0.45, arcY + s * 0.2);
      break;
    }
    case "heart": {
      const hx = cx, hy = cy + s * 0.05;
      doc.setLineWidth(0.5);
      doc.line(hx, hy + s * 0.3, hx - s * 0.35, hy - s * 0.05);
      doc.line(hx - s * 0.35, hy - s * 0.05, hx - s * 0.35, hy - s * 0.25);
      doc.line(hx - s * 0.35, hy - s * 0.25, hx - s * 0.15, hy - s * 0.35);
      doc.line(hx - s * 0.15, hy - s * 0.35, hx, hy - s * 0.15);
      doc.line(hx, hy - s * 0.15, hx + s * 0.15, hy - s * 0.35);
      doc.line(hx + s * 0.15, hy - s * 0.35, hx + s * 0.35, hy - s * 0.25);
      doc.line(hx + s * 0.35, hy - s * 0.25, hx + s * 0.35, hy - s * 0.05);
      doc.line(hx + s * 0.35, hy - s * 0.05, hx, hy + s * 0.3);
      break;
    }
    case "brain": {
      doc.circle(cx, cy, s * 0.35, "S");
      doc.setLineWidth(0.3);
      doc.line(cx, cy - s * 0.35, cx, cy + s * 0.35);
      doc.line(cx - s * 0.2, cy - s * 0.1, cx + s * 0.15, cy - s * 0.15);
      doc.line(cx - s * 0.15, cy + s * 0.1, cx + s * 0.2, cy + s * 0.12);
      break;
    }
    case "alert-triangle": {
      doc.setLineWidth(0.5);
      doc.line(cx, cy - s * 0.35, cx - s * 0.38, cy + s * 0.3);
      doc.line(cx - s * 0.38, cy + s * 0.3, cx + s * 0.38, cy + s * 0.3);
      doc.line(cx + s * 0.38, cy + s * 0.3, cx, cy - s * 0.35);
      doc.setFontSize(s * 2);
      doc.setFont("helvetica", "bold");
      setColor(doc, color);
      doc.text("!", cx, cy + s * 0.15, { align: "center" });
      break;
    }
    case "globe": {
      doc.circle(cx, cy, s * 0.35, "S");
      doc.setLineWidth(0.25);
      doc.line(cx - s * 0.35, cy, cx + s * 0.35, cy);
      doc.line(cx, cy - s * 0.35, cx, cy + s * 0.35);
      doc.ellipse(cx, cy, s * 0.18, s * 0.35, "S");
      break;
    }
    case "trending-up": {
      doc.setLineWidth(0.5);
      doc.line(cx - s * 0.35, cy + s * 0.2, cx, cy - s * 0.1);
      doc.line(cx, cy - s * 0.1, cx + s * 0.1, cy + s * 0.05);
      doc.line(cx + s * 0.1, cy + s * 0.05, cx + s * 0.35, cy - s * 0.25);
      doc.line(cx + s * 0.35, cy - s * 0.25, cx + s * 0.2, cy - s * 0.25);
      doc.line(cx + s * 0.35, cy - s * 0.25, cx + s * 0.35, cy - s * 0.1);
      break;
    }
    case "trending-down": {
      doc.setLineWidth(0.5);
      doc.line(cx - s * 0.35, cy - s * 0.2, cx, cy + s * 0.1);
      doc.line(cx, cy + s * 0.1, cx + s * 0.1, cy - s * 0.05);
      doc.line(cx + s * 0.1, cy - s * 0.05, cx + s * 0.35, cy + s * 0.25);
      doc.line(cx + s * 0.35, cy + s * 0.25, cx + s * 0.2, cy + s * 0.25);
      doc.line(cx + s * 0.35, cy + s * 0.25, cx + s * 0.35, cy + s * 0.1);
      break;
    }
    case "shield": {
      doc.setLineWidth(0.5);
      doc.line(cx, cy - s * 0.38, cx - s * 0.32, cy - s * 0.18);
      doc.line(cx - s * 0.32, cy - s * 0.18, cx - s * 0.32, cy + s * 0.05);
      doc.line(cx - s * 0.32, cy + s * 0.05, cx, cy + s * 0.38);
      doc.line(cx, cy + s * 0.38, cx + s * 0.32, cy + s * 0.05);
      doc.line(cx + s * 0.32, cy + s * 0.05, cx + s * 0.32, cy - s * 0.18);
      doc.line(cx + s * 0.32, cy - s * 0.18, cx, cy - s * 0.38);
      break;
    }
    case "dollar": {
      doc.circle(cx, cy, s * 0.35, "S");
      doc.setFontSize(s * 2.2);
      doc.setFont("helvetica", "bold");
      setColor(doc, color);
      doc.text("$", cx, cy + s * 0.12, { align: "center" });
      break;
    }
  }
  doc.setLineWidth(0.3);
}

function drawHeader(doc: jsPDF, pw: number, margin: number) {
  drawRoundedRect(doc, 0, 0, pw, 22, 0, WHITE);

  try {
    doc.addImage(LOGO_BASE64, "PNG", margin, 3, 14, 14);
  } catch {}

  doc.setFontSize(16);
  doc.setFont("times", "bold");
  setColor(doc, MUTED);
  doc.text("Listen Up, Mom!", margin + 17, 11);

  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  setColor(doc, MUTED);
  const bylinePart1 = "because every \"";
  doc.text(bylinePart1, margin + 17, 16);
  const p1W = doc.getTextWidth(bylinePart1);
  setColor(doc, PINK);
  const bylinePart2 = "I love you";
  doc.text(bylinePart2, margin + 17 + p1W, 16);
  const p2W = doc.getTextWidth(bylinePart2);
  setColor(doc, MUTED);
  doc.text("\" deserves to be heard", margin + 17 + p1W + p2W, 16);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("listenupmom.org", pw - margin, 9, { align: "right" });
  doc.text("hello@listenupmom.org", pw - margin, 14, { align: "right" });
}

function drawAccentStripe(doc: jsPDF, pw: number, color: Color) {
  drawRoundedRect(doc, 0, 22, pw, 2, 0, color);
}

function drawCardTitle(doc: jsPDF, icon: string, title: string, x: number, y: number, color: Color) {
  drawIcon(doc, icon, x, y - 3.5, 4, color);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  setColor(doc, DARK);
  doc.text(title, x + 6, y);
}

function measureRefsBlock(doc: jsPDF, refs: string[], maxW: number): number {
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  let h = 3;
  for (const ref of refs) {
    const lines = doc.splitTextToSize(ref, maxW);
    h += lines.length * 2.8;
  }
  return h;
}

function drawRefsBlock(doc: jsPDF, refs: string[], x: number, y: number, maxW: number, maxY: number): number {
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.setFont("helvetica", "bold");
  doc.text("References", x, y);
  doc.setFont("helvetica", "normal");
  let ry = y + 3;
  for (const ref of refs) {
    const lines = doc.splitTextToSize(ref, maxW);
    if (ry + lines.length * 2.8 > maxY) break;
    doc.text(lines, x, ry);
    ry += lines.length * 2.8;
  }
  return ry - y;
}

function drawPage1Advocacy(doc: jsPDF, pw: number, ph: number, margin: number, contentW: number) {
  drawHeader(doc, pw, margin);
  drawAccentStripe(doc, pw, PINK);

  let y = 27;
  const cardGap = 4;
  const cardW = (contentW - cardGap) / 2;
  const leftX = margin;
  const rightX = margin + cardW + cardGap;

  // ===== ROW 1: Hearing Loss by Age + Treatment Gap =====
  const row1H = 64;

  drawRoundedRect(doc, leftX, y, cardW, row1H, 3, CARD_BG);
  drawCardBorder(doc, leftX, y, cardW, row1H, 3);

  drawCardTitle(doc, "trending-up", "Hearing Loss by Age", leftX + 5, y + 6, CHART_1);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("Percentage of women affected [3]", leftX + 5, y + 11);

  const chartX = leftX + 14;
  const chartY = y + 14;
  const chartW = cardW - 22;
  const chartH = 24;

  doc.setDrawColor(220, 218, 220);
  doc.setLineWidth(0.15);
  for (let p = 0; p <= 70; p += 20) {
    const lineY = chartY + chartH - (p / 70) * chartH;
    doc.line(chartX, lineY, chartX + chartW, lineY);
    doc.setFontSize(7);
    setColor(doc, MUTED);
    doc.text(`${p}%`, chartX - 2, lineY + 1, { align: "right" });
  }

  const ageData = [
    { age: "30s", pct: 5 },
    { age: "40s", pct: 10 },
    { age: "50s", pct: 20 },
    { age: "60s", pct: 39 },
    { age: "70+", pct: 65 },
  ];

  const points: [number, number][] = [];
  for (let i = 0; i < ageData.length; i++) {
    const px = chartX + (i / (ageData.length - 1)) * chartW;
    const py = chartY + chartH - (ageData[i].pct / 70) * chartH;
    points.push([px, py]);
    doc.setFontSize(7);
    setColor(doc, MUTED);
    doc.text(ageData[i].age, px, chartY + chartH + 3.5, { align: "center" });
  }

  doc.setDrawColor(PINK[0], PINK[1], PINK[2]);
  doc.setLineWidth(0.8);
  for (let i = 0; i < points.length - 1; i++) {
    doc.line(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1]);
  }
  for (const p of points) {
    setFill(doc, PINK);
    doc.circle(p[0], p[1], 0.9, "F");
  }

  const insightY1 = chartY + chartH + 6;
  drawRoundedRect(doc, leftX + 4, insightY1, cardW - 8, 12, 2, LIGHT_GRAY);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  setColor(doc, DARK);
  const kiLabel = "Key insight: ";
  doc.text(kiLabel, leftX + 7, insightY1 + 4);
  const kiW = doc.getTextWidth(kiLabel);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  const kiRest1 = "Hearing loss doubles between ages 50-59 and 60-69.";
  const kiLines1 = doc.splitTextToSize(kiRest1, cardW - 14 - kiW);
  doc.text(kiLines1[0], leftX + 7 + kiW, insightY1 + 4);
  for (let li = 1; li < kiLines1.length; li++) {
    doc.text(kiLines1[li], leftX + 7, insightY1 + 4 + li * 3.2);
  }

  // -- Treatment Gap (right) --
  drawRoundedRect(doc, rightX, y, cardW, row1H, 3, CARD_BG);
  drawCardBorder(doc, rightX, y, cardW, row1H, 3);

  drawCardTitle(doc, "alert-triangle", "The Treatment Gap", rightX + 5, y + 6, CHART_2);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("Women are less likely to seek help [3]", rightX + 5, y + 11);

  doc.setFontSize(7);
  setFill(doc, BLUE_MALE);
  doc.rect(rightX + 5, y + 13, 3, 2.5, "F");
  setColor(doc, MUTED);
  doc.text("Men", rightX + 9, y + 15);
  setFill(doc, PINK_FEMALE);
  doc.rect(rightX + 20, y + 13, 3, 2.5, "F");
  doc.text("Women", rightX + 24, y + 15);

  const tgChartX = rightX + 14;
  const tgChartY = y + 18;
  const tgChartW = cardW - 22;
  const tgChartH = 22;

  doc.setDrawColor(220, 218, 220);
  doc.setLineWidth(0.15);
  for (let p = 0; p <= 30; p += 10) {
    const lineY = tgChartY + tgChartH - (p / 30) * tgChartH;
    doc.line(tgChartX, lineY, tgChartX + tgChartW, lineY);
    doc.setFontSize(7);
    setColor(doc, MUTED);
    doc.text(`${p}%`, tgChartX - 2, lineY + 1, { align: "right" });
  }

  const tgGroups = [
    { label: "Ages 45+", men: 9, women: 5 },
    { label: "Ages 75-84", men: 26.7, women: 13.7 },
  ];

  const groupW = tgChartW / 2;
  const barW = 9;

  for (let g = 0; g < tgGroups.length; g++) {
    const gx = tgChartX + g * groupW + groupW / 2;
    const menH = (tgGroups[g].men / 30) * tgChartH;
    const womenH = (tgGroups[g].women / 30) * tgChartH;

    drawRoundedRect(doc, gx - barW - 1, tgChartY + tgChartH - menH, barW, menH, 1, BLUE_MALE);
    drawRoundedRect(doc, gx + 1, tgChartY + tgChartH - womenH, barW, womenH, 1, PINK_FEMALE);

    doc.setFontSize(7);
    setColor(doc, MUTED);
    doc.text(tgGroups[g].label, gx, tgChartY + tgChartH + 3.5, { align: "center" });
  }

  const insightY2 = tgChartY + tgChartH + 6;
  drawRoundedRect(doc, rightX + 4, insightY2, cardW - 8, 12, 2, LIGHT_PINK);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  setColor(doc, PINK);
  doc.text(kiLabel, rightX + 7, insightY2 + 4);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  const kiRest2 = "Men 75-84 are 2x as likely to use hearing aids as women.";
  const kiLines2 = doc.splitTextToSize(kiRest2, cardW - 14 - kiW);
  doc.text(kiLines2[0], rightX + 7 + kiW, insightY2 + 4);
  for (let li = 1; li < kiLines2.length; li++) {
    doc.text(kiLines2[li], rightX + 7, insightY2 + 4 + li * 3.2);
  }

  y += row1H + 3;

  // ===== ROW 2: Global Overview + The Path Forward =====
  const row2H = 44;

  drawRoundedRect(doc, leftX, y, cardW, row2H, 3, CARD_BG);
  drawCardBorder(doc, leftX, y, cardW, row2H, 3);

  drawCardTitle(doc, "globe", "Global Overview", leftX + 5, y + 6, CHART_4);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("The scale of the challenge [5]", leftX + 5, y + 11);

  const goRows = [
    { label: "People with hearing loss", value: "1.5 billion", highlight: false },
    { label: "Annual economic cost", value: "$980 billion", highlight: false },
    { label: "Need rehabilitation", value: "430 million", highlight: false },
    { label: "Projected by 2050", value: "1 in 4", highlight: true },
  ];

  let goY = y + 14;
  for (const r of goRows) {
    const bg = r.highlight ? LIGHT_PINK : LIGHT_GRAY;
    drawRoundedRect(doc, leftX + 5, goY, cardW - 10, 7, 1.5, bg);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    setColor(doc, r.highlight ? DARK : MUTED);
    doc.text(r.label, leftX + 8, goY + 4.8);
    doc.setFont("helvetica", "bold");
    setColor(doc, r.highlight ? PINK : DARK);
    doc.text(r.value, leftX + cardW - 8, goY + 4.8, { align: "right" });
    goY += 8;
  }

  // -- The Path Forward (right) --
  drawRoundedRect(doc, rightX, y, cardW, row2H, 3, LAVENDER_BG);
  drawCardBorder(doc, rightX, y, cardW, row2H, 3);

  drawCardTitle(doc, "shield", "The Path Forward", rightX + 5, y + 6, CHART_5);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("Hope & action [4]", rightX + 5, y + 11);

  let pfY = y + 14;
  drawRoundedRect(doc, rightX + 5, pfY, cardW - 10, 14, 2, LIGHT_PINK);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  setColor(doc, PINK);
  doc.text("60%", rightX + 8, pfY + 6);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("of childhood hearing loss is preventable", rightX + 8, pfY + 11);

  pfY += 15.5;
  drawRoundedRect(doc, rightX + 5, pfY, cardW - 10, 14, 2, LIGHT_GRAY);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  setColor(doc, PINK);
  doc.text("$16", rightX + 8, pfY + 6);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("return for every $1 invested in hearing care", rightX + 8, pfY + 11);

  y += row2H + 3;

  // ===== ROW 3: Three Brain Health Cards =====
  const col3W = (contentW - 8) / 3;
  const row3H = 62;

  const r3x1 = margin;
  drawRoundedRect(doc, r3x1, y, col3W, row3H, 3, CARD_BG);
  drawCardBorder(doc, r3x1, y, col3W, row3H, 3);

  drawCardTitle(doc, "shield", "#1 Risk Factor", r3x1 + 4, y + 6, CHART_1);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("For dementia prevention [6]", r3x1 + 4, y + 11);

  const factors = [
    { name: "Hearing Loss", pct: 7 },
    { name: "Less Education", pct: 5 },
    { name: "Smoking", pct: 5 },
    { name: "Depression", pct: 3 },
    { name: "Social Isolation", pct: 3 },
    { name: "Inactivity", pct: 2 },
  ];

  const fBarMaxW = col3W - 32;
  let fy = y + 14;
  for (const f of factors) {
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    setColor(doc, MUTED);
    doc.text(f.name, r3x1 + 4, fy + 2.5);
    const barW2 = (f.pct / 8) * fBarMaxW;
    const barColor2 = f.name === "Hearing Loss" ? PINK : ([200, 190, 195] as Color);
    drawRoundedRect(doc, r3x1 + 26, fy, barW2, 3.5, 1, barColor2);
    doc.setFontSize(6.5);
    doc.setFont("helvetica", "bold");
    setColor(doc, f.name === "Hearing Loss" ? PINK : MUTED);
    doc.text(`${f.pct}%`, r3x1 + 26 + barW2 + 1.5, fy + 2.5);
    fy += 5;
  }

  const kiY1 = fy + 1;
  drawRoundedRect(doc, r3x1 + 3, kiY1, col3W - 6, 12, 1.5, LIGHT_GRAY);
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  const kiText3 = doc.splitTextToSize("Hearing loss is the #1 modifiable risk factor, accounting for 7% of preventable dementia cases.", col3W - 12);
  doc.text(kiText3, r3x1 + 5, kiY1 + 3.5);

  // -- Risk Multiplier (center) --
  const r3x2 = margin + col3W + 4;
  drawRoundedRect(doc, r3x2, y, col3W, row3H, 3, CARD_BG);
  drawCardBorder(doc, r3x2, y, col3W, row3H, 3);

  drawCardTitle(doc, "trending-down", "Risk Multiplier", r3x2 + 4, y + 6, CHART_2);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("Hearing loss & dementia risk [7]", r3x2 + 4, y + 11);

  const rmChartX = r3x2 + 10;
  const rmChartY = y + 14;
  const rmChartW = col3W - 16;
  const rmChartH = 22;

  doc.setDrawColor(220, 218, 220);
  doc.setLineWidth(0.15);
  for (let v = 0; v <= 6; v += 2) {
    const ly = rmChartY + rmChartH - (v / 6) * rmChartH;
    doc.line(rmChartX, ly, rmChartX + rmChartW, ly);
    doc.setFontSize(6.5);
    setColor(doc, MUTED);
    doc.text(`${v}x`, rmChartX - 2, ly + 1, { align: "right" });
  }

  const rmData = [
    { label: "Normal", val: 1 },
    { label: "Mild", val: 2 },
    { label: "Moderate", val: 3 },
    { label: "Severe", val: 5 },
  ];

  const rmPoints: [number, number][] = [];
  for (let i = 0; i < rmData.length; i++) {
    const px = rmChartX + (i / (rmData.length - 1)) * rmChartW;
    const py = rmChartY + rmChartH - (rmData[i].val / 6) * rmChartH;
    rmPoints.push([px, py]);
    doc.setFontSize(6.5);
    setColor(doc, MUTED);
    doc.text(rmData[i].label, px, rmChartY + rmChartH + 3.5, { align: "center" });
  }

  doc.setDrawColor(PINK[0], PINK[1], PINK[2]);
  doc.setLineWidth(0.6);
  for (let i = 0; i < rmPoints.length - 1; i++) {
    doc.line(rmPoints[i][0], rmPoints[i][1], rmPoints[i + 1][0], rmPoints[i + 1][1]);
  }
  for (const p of rmPoints) {
    setFill(doc, PINK);
    doc.circle(p[0], p[1], 0.9, "F");
  }

  const kiY2 = rmChartY + rmChartH + 6;
  drawRoundedRect(doc, r3x2 + 3, kiY2, col3W - 6, 10, 1.5, LIGHT_GRAY);
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  const kiText4 = doc.splitTextToSize("Severe hearing loss increases dementia risk by 5x.", col3W - 12);
  doc.text(kiText4, r3x2 + 5, kiY2 + 3.5);

  // -- Investment Comparison (right) --
  const r3x3 = margin + (col3W + 4) * 2;
  drawRoundedRect(doc, r3x3, y, col3W, row3H, 3, CARD_BG);
  drawCardBorder(doc, r3x3, y, col3W, row3H, 3);

  drawCardTitle(doc, "dollar", "Investment", r3x3 + 4, y + 6, CHART_5);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("Prevention vs. crisis care [8]", r3x3 + 4, y + 11);

  const icChartX = r3x3 + 10;
  const icChartY = y + 14;
  const icChartW = col3W - 16;
  const icChartH = 20;

  doc.setDrawColor(220, 218, 220);
  doc.setLineWidth(0.15);
  for (let v = 0; v <= 60; v += 20) {
    const ly = icChartY + icChartH - (v / 60) * icChartH;
    doc.line(icChartX, ly, icChartX + icChartW, ly);
    doc.setFontSize(6.5);
    setColor(doc, MUTED);
    doc.text(`$${v}K`, icChartX - 2, ly + 1, { align: "right" });
  }

  const icBarW2 = 12;
  const haBarH = (5 / 60) * icChartH;
  const mcBarH = (50 / 60) * icChartH;

  drawRoundedRect(doc, icChartX + icChartW * 0.25 - icBarW2 / 2, icChartY + icChartH - haBarH, icBarW2, haBarH, 1, GREEN_BAR);
  drawRoundedRect(doc, icChartX + icChartW * 0.75 - icBarW2 / 2, icChartY + icChartH - mcBarH, icBarW2, mcBarH, 1, RED_BAR);

  doc.setFontSize(6.5);
  setColor(doc, MUTED);
  doc.text("Hearing Aids", icChartX + icChartW * 0.25, icChartY + icChartH + 3.5, { align: "center" });
  doc.text("Memory Care", icChartX + icChartW * 0.75, icChartY + icChartH + 3.5, { align: "center" });

  const icSummaryY = icChartY + icChartH + 6;
  drawRoundedRect(doc, r3x3 + 3, icSummaryY, col3W - 6, 6, 1.5, ([230, 248, 235] as Color));
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  setColor(doc, DARK);
  doc.text("Hearing Aids", r3x3 + 5, icSummaryY + 4);
  doc.setFont("helvetica", "bold");
  setColor(doc, GREEN);
  doc.text("$2K-$8K", r3x3 + col3W - 5, icSummaryY + 4, { align: "right" });

  const icSummaryY2 = icSummaryY + 7;
  drawRoundedRect(doc, r3x3 + 3, icSummaryY2, col3W - 6, 6, 1.5, ([255, 240, 240] as Color));
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  setColor(doc, DARK);
  doc.text("Memory Care", r3x3 + 5, icSummaryY2 + 4);
  doc.setFont("helvetica", "bold");
  setColor(doc, RED_BAR);
  doc.text("$50K+/yr", r3x3 + col3W - 5, icSummaryY2 + 4, { align: "right" });

  y += row3H + 3;

  // ===== THE DEMENTIA CONNECTION (full-width card, 6 stat boxes in 2 rows) =====
  const dcCardH = 50;
  drawRoundedRect(doc, margin, y, contentW, dcCardH, 3, PEACH_BG);
  drawCardBorder(doc, margin, y, contentW, dcCardH, 3);

  drawCardTitle(doc, "brain", "The Dementia Connection", margin + 5, y + 6, PINK);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("Hearing loss, cognitive decline & dementia [6][7][8][9]", margin + 5, y + 11);

  const dcBoxW = (contentW - 20) / 3;
  const dcRow1Y = y + 14;
  const dcRow2Y = dcRow1Y + 17;
  const dcBoxH = 15;

  const dcRow1 = [
    { value: "#1", label: "modifiable dementia\nrisk factor", ref: "[6]" },
    { value: "2-5x", label: "increased dementia risk\nwith untreated hearing loss", ref: "[7]" },
    { value: "Stronger in women", label: "untreated hearing loss linked\nmore to cognitive decline", ref: "[6]" },
  ];
  const dcRow2 = [
    { value: "48%", label: "slower cognitive decline\nwith hearing aids", ref: "[9]" },
    { value: "$30", label: "saved in dementia care\nper $1 on hearing", ref: "[8]" },
    { value: "45%", label: "of dementia cases\npotentially preventable", ref: "[6]" },
  ];

  for (let row = 0; row < 2; row++) {
    const stats = row === 0 ? dcRow1 : dcRow2;
    const boxY = row === 0 ? dcRow1Y : dcRow2Y;
    for (let i = 0; i < 3; i++) {
      const bx = margin + 5 + (dcBoxW + 2.5) * i;
      drawRoundedRect(doc, bx, boxY, dcBoxW, dcBoxH, 2, LIGHT_GRAY);
      const isTextVal = stats[i].value === "Stronger in women";
      doc.setFontSize(isTextVal ? 8 : 12);
      doc.setFont("helvetica", "bold");
      setColor(doc, PINK);
      doc.text(stats[i].value, bx + dcBoxW / 2, boxY + (isTextVal ? 5 : 6), { align: "center" });
      doc.setFontSize(7.5);
      doc.setFont("helvetica", "normal");
      setColor(doc, MUTED);
      doc.text(stats[i].label, bx + dcBoxW / 2, boxY + (isTextVal ? 8.5 : 9.5), { align: "center" });
    }
  }

  // ===== PAGE 1 FOOTER =====
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("Page 1 of 2", pw / 2, ph - 6, { align: "center" });
}

function drawPage2Country(
  doc: jsPDF,
  country: CountryHearingData,
  pw: number,
  ph: number,
  margin: number,
  contentW: number,
  rank: number,
  estimatedWomen: number,
  youthAtRisk: number,
) {
  drawHeader(doc, pw, margin);
  drawAccentStripe(doc, pw, PINK);

  let y = 30;

  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  setColor(doc, DARK);
  doc.text(country.name, margin, y);

  y += 7;

  const cardGap = 4;
  const cardW = (contentW - cardGap) / 2;
  const leftX = margin;
  const rightX = margin + cardW + cardGap;
  const trend = getTrendText(country.trend);

  // ===== Measure Women & Girls content first to determine card height =====
  const hloHasAdoption = country.hearingAidAdoption !== null;
  const wgDescW = cardW - 14;
  const wgItems = [
    { bold: "Treatment gap:", rest: "Women use hearing aids at roughly half the rate of men" },
    { bold: `~${formatNumber(youthAtRisk)}`, rest: "young people at risk from unsafe listening (earbuds, concerts)" },
    { bold: "After menopause:", rest: "hearing decline accelerates due to reduced estrogen" },
  ];

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  let wgContentH = 28;
  for (const item of wgItems) {
    const restLines = doc.splitTextToSize(item.rest, wgDescW - 4);
    wgContentH += 4.5 + restLines.length * 3.2 + 3 + 1.5;
  }
  wgContentH += 6;

  const hloBaseH = 28 + 3 * 9 + (hloHasAdoption ? 9 : 0) + 6;
  const cardH = Math.max(wgContentH, hloBaseH);

  // ===== HEARING LOSS OVERVIEW (left card) =====
  const hloCardY = y;
  drawRoundedRect(doc, leftX, hloCardY, cardW, cardH, 3, CARD_BG);
  drawCardBorder(doc, leftX, hloCardY, cardW, cardH, 3);

  let cy = hloCardY + 7;
  drawCardTitle(doc, "users", "Hearing Loss Overview", leftX + 5, cy, PINK);
  cy += 6;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  setColor(doc, DARK);
  doc.text(formatNumber(country.estimatedAffected), leftX + 7, cy + 5);
  cy += 8;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text(hloHasAdoption ? "people affected [1][2]" : "people affected [1]", leftX + 7, cy);
  cy += 5;

  const rowH = 8;
  const rowW = cardW - 14;

  const dataRows = [
    { label: "Prevalence Rate", value: formatRate(country.prevalenceRate) },
    { label: "Prevalence Rank", value: `${rank} of ${countryData.length} countries` },
    { label: "30-Year Trend", value: trend },
  ];

  for (const row of dataRows) {
    drawRoundedRect(doc, leftX + 7, cy, rowW, rowH, 2, LIGHT_GRAY);
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "normal");
    setColor(doc, MUTED);
    doc.text(row.label, leftX + 10, cy + 5.5);
    doc.setFont("helvetica", "bold");
    setColor(doc, DARK);
    doc.text(row.value, leftX + 7 + rowW - 4, cy + 5.5, { align: "right" });
    cy += rowH + 1;
  }

  if (hloHasAdoption) {
    drawRoundedRect(doc, leftX + 7, cy, rowW, rowH, 2, LIGHT_PINK);
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "bold");
    setColor(doc, DARK);
    doc.text("Hearing Aid Adoption", leftX + 10, cy + 5.5);
    setColor(doc, PINK);
    doc.text(`${country.hearingAidAdoption}%`, leftX + 7 + rowW - 4, cy + 5.5, { align: "right" });
  }

  // ===== WOMEN & GIRLS (right card) =====
  const wgCardY = hloCardY;
  drawRoundedRect(doc, rightX, wgCardY, cardW, cardH, 3, LAVENDER_BG);
  drawCardBorder(doc, rightX, wgCardY, cardW, cardH, 3);

  cy = wgCardY + 7;
  drawCardTitle(doc, "heart", "Women & Girls", rightX + 5, cy, PINK);
  cy += 6;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  setColor(doc, DARK);
  doc.text(`~${formatNumber(estimatedWomen)}`, rightX + 7, cy + 5);
  cy += 8;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("women & girls affected [1][3][4]", rightX + 7, cy);
  cy += 5;

  for (const item of wgItems) {
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    const restLines = doc.splitTextToSize(item.rest, wgDescW - 4);
    const boxH = 4.5 + restLines.length * 3.2 + 3;

    drawRoundedRect(doc, rightX + 7, cy, wgDescW, boxH, 2, LIGHT_GRAY);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    setColor(doc, DARK);
    doc.text(item.bold, rightX + 10, cy + 4);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    setColor(doc, MUTED);
    for (let li = 0; li < restLines.length; li++) {
      doc.text(restLines[li], rightX + 10, cy + 4 + (li + 1) * 3.2);
    }

    cy += boxH + 1.5;
  }

  y = hloCardY + cardH + 4;

  // ===== NOTABLE FINDINGS =====
  if (country.enrichedFindings && country.enrichedFindings.length > 0 && y < 200) {
    const findingsToShow = country.enrichedFindings.slice(0, 2);
    let findingsTotalH = 9;
    for (const f of findingsToShow) {
      doc.setFontSize(8);
      const fLines = doc.splitTextToSize(f.text, contentW - 20);
      findingsTotalH += fLines.length * 3.2 + 8;
    }
    findingsTotalH += 3;

    if (y + findingsTotalH < 240) {
      drawRoundedRect(doc, margin, y, contentW, findingsTotalH, 3, ACCENT_BG);
      drawCardBorder(doc, margin, y, contentW, findingsTotalH, 3);

      drawCardTitle(doc, "alert-triangle", `Notable Findings for ${country.name}`, margin + 5, y + 6, PINK);

      let ffY = y + 10;
      for (const finding of findingsToShow) {
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        const fLines = doc.splitTextToSize(finding.text, contentW - 20);
        const fBoxH = fLines.length * 3.2 + 5;
        drawRoundedRect(doc, margin + 5, ffY, contentW - 10, fBoxH, 1.5, WHITE);

        setColor(doc, DARK);
        doc.text(fLines, margin + 8, ffY + 3.5);
        doc.setFontSize(7);
        doc.setFont("helvetica", "italic");
        setColor(doc, MUTED);
        doc.text(finding.source, margin + 8, ffY + fBoxH - 1.5);
        ffY += fBoxH + 1.5;
      }

      y += findingsTotalH + 3;
    }
  }

  // ===== H.E.A.R.I.N.G. FRAMEWORK PROGRESS =====
  const hasAdoption = country.hearingAdoption !== undefined && country.hearingAdoption !== null;

  if (y < 230) {
    if (hasAdoption) {
      const frameworkCardH = 46;

      if (y + frameworkCardH < 250) {
        drawRoundedRect(doc, margin, y, contentW, frameworkCardH, 3, LIGHT_GREEN);
        drawCardBorder(doc, margin, y, contentW, frameworkCardH, 3);

        drawCardTitle(doc, "globe", "H.E.A.R.I.N.G. Framework Progress", margin + 5, y + 6, GREEN);

        const pillars = [
          { key: "hearingScreening" as const, letter: "H", name: "Hearing Screening" },
          { key: "earDiseasePrevention" as const, letter: "E", name: "Ear Disease Prevention" },
          { key: "accessTechnology" as const, letter: "A", name: "Access to Technology" },
          { key: "rehabilitation" as const, letter: "R", name: "Rehabilitation Services" },
          { key: "improvedCommunication" as const, letter: "I", name: "Improved Communication" },
          { key: "noiseReduction" as const, letter: "N", name: "Noise Reduction" },
          { key: "communityEngagement" as const, letter: "G", name: "Community Engagement" },
        ];

        const colW = (contentW - 14) / 2;
        const pillarH = 7.5;
        const py0 = y + 10;
        const adoption = country.hearingAdoption!;

        for (let i = 0; i < pillars.length; i++) {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const pillarX = margin + 5 + col * (colW + 4);
          const pillarY = py0 + row * (pillarH + 1);
          const isAdopted = adoption[pillars[i].key];

          const pillarBg = isAdopted ? ([220, 245, 228] as Color) : ([255, 248, 235] as Color);
          drawRoundedRect(doc, pillarX, pillarY, colW, pillarH, 1.5, pillarBg);

          doc.setFontSize(8);
          doc.setFont("helvetica", "bold");
          setColor(doc, isAdopted ? GREEN : MUTED);
          doc.text(pillars[i].letter, pillarX + 3, pillarY + 5);

          doc.setFontSize(7.5);
          doc.setFont("helvetica", "normal");
          setColor(doc, DARK);
          doc.text(pillars[i].name, pillarX + 9, pillarY + 5);

          const badgeText = isAdopted ? "Adopted" : "Opportunity";
          const badgeColor = isAdopted ? ADOPTED_GREEN : OPPORTUNITY_ORANGE;
          doc.setFontSize(7);
          doc.setFont("helvetica", "bold");
          const badgeW2 = doc.getTextWidth(badgeText) + 4;
          const badgeX = pillarX + colW - badgeW2 - 2;

          drawRoundedRect(doc, badgeX, pillarY + 1.2, badgeW2, pillarH - 2.4, 1.5, badgeColor);
          setColor(doc, WHITE);
          doc.text(badgeText, badgeX + badgeW2 / 2, pillarY + 5, { align: "center" });
        }

        doc.setFontSize(7.5);
        doc.setFont("helvetica", "italic");
        setColor(doc, MUTED);
        doc.text("Source: WHO World Report on Hearing, 2021 [4]", margin + 5, y + frameworkCardH - 2);
        y += frameworkCardH + 3;
      }
    } else {
      const hearingPillars = [
        { letter: "H", title: "Hearing Screening", desc: "Only 17% of those who need hearing aids have access.", action: "Mandate universal newborn screening and hearing checks for adults over 50." },
        { letter: "E", title: "Ear Disease Prevention", desc: "60% of childhood hearing loss is preventable.", action: "Fund campaigns on ear infections and expand immunization programs." },
        { letter: "A", title: "Access to Technology", desc: "Only 17% who could benefit from hearing aids use them.", action: "Include hearing aids in insurance/subsidy programs." },
        { letter: "R", title: "Rehabilitation Services", desc: "Most countries have <1 audiologist per million people.", action: "Train primary care workers; integrate audiology into community health." },
        { letter: "I", title: "Improved Communication", desc: "430 million people have disabling hearing loss.", action: "Require captioning and fund sign language programs." },
        { letter: "N", title: "Noise Reduction", desc: "1.1 billion young people at risk from unsafe listening.", action: "Legislate venue sound levels and regulate device output." },
        { letter: "G", title: "Community Engagement", desc: "Stigma is the biggest barrier to hearing aid adoption.", action: "Normalize hearing checks; reframe as preventive care." },
      ];

      const pillarRowH = 18;
      const numRows = 4;
      const fwCardH = 14 + numRows * (pillarRowH + 1) + 5;

      if (y + fwCardH < ph - 70) {
        drawRoundedRect(doc, margin, y, contentW, fwCardH, 3, LIGHT_PINK);
        drawCardBorder(doc, margin, y, contentW, fwCardH, 3);

        drawCardTitle(doc, "globe", "H.E.A.R.I.N.G. Framework", margin + 5, y + 6, PINK);
        doc.setFontSize(7);
        doc.setFont("helvetica", "italic");
        setColor(doc, MUTED);
        doc.text("WHO recommended actions for ear and hearing care [4]", margin + 5, y + 11);

        const colW = (contentW - 16) / 2;
        const pillarStartY = y + 14;

        for (let i = 0; i < hearingPillars.length; i++) {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const px = margin + 5 + col * (colW + 6);
          const py = pillarStartY + row * (pillarRowH + 1);

          drawRoundedRect(doc, px, py, colW, pillarRowH, 2, WHITE);

          doc.setFontSize(9);
          doc.setFont("helvetica", "bold");
          setColor(doc, PINK);
          doc.text(hearingPillars[i].letter, px + 3, py + 4.5);

          doc.setFontSize(8);
          doc.setFont("helvetica", "bold");
          setColor(doc, DARK);
          doc.text(hearingPillars[i].title, px + 9, py + 4.5);

          doc.setFontSize(6.5);
          doc.setFont("helvetica", "normal");
          setColor(doc, MUTED);
          const descLines = doc.splitTextToSize(hearingPillars[i].desc, colW - 12);
          doc.text(descLines[0], px + 9, py + 8.5);

          doc.setFontSize(6.5);
          doc.setFont("helvetica", "italic");
          setColor(doc, PINK);
          const actLines = doc.splitTextToSize(hearingPillars[i].action, colW - 12);
          const actY = py + 8.5 + 3.2;
          for (let al = 0; al < Math.min(actLines.length, 2); al++) {
            doc.text(actLines[al], px + 9, actY + al * 2.8);
          }
        }

        y += fwCardH + 3;
      }
    }
  }

  // ===== REFERENCES SECTION (complete list, appears only on page 2) =====
  const allRefs = [
    APA_REFS.gbd,
    APA_REFS.ehima,
    APA_REFS.nidcd,
    APA_REFS.who2021,
    APA_REFS.who2024,
    APA_REFS.lancet,
    APA_REFS.jhu,
    APA_REFS.pmc,
    APA_REFS.achieve,
  ];
  const p2FooterTop = ph - 16;
  const p2RefsH = measureRefsBlock(doc, allRefs, contentW);
  const refsY2 = Math.min(Math.max(y + 2, ph - 55), p2FooterTop - p2RefsH - 3);
  doc.setDrawColor(230, 225, 228);
  doc.setLineWidth(0.2);
  doc.line(margin, refsY2, pw - margin, refsY2);

  drawRefsBlock(doc, allRefs, margin, refsY2 + 2, contentW, p2FooterTop);

  // ===== PAGE 2 FOOTER =====
  const footerY = ph - 14;
  doc.setDrawColor(230, 225, 228);
  doc.setLineWidth(0.3);
  doc.line(margin, footerY, pw - margin, footerY);

  try {
    doc.addImage(LOGO_BASE64, "PNG", margin, footerY + 1.5, 6, 6);
  } catch {}

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  setColor(doc, MUTED);
  doc.text("listenupmom.org  |  hello@listenupmom.org  |  A Girl Scout Gold Award Project", margin + 9, footerY + 5);

  doc.text("Page 2 of 2", pw / 2, ph - 6, { align: "center" });
}

export function generateCountryPDF(country: CountryHearingData): void {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "letter" });
  const pw = 215.9;
  const ph = 279.4;
  const margin = 14;
  const contentW = pw - margin * 2;

  const sorted = [...countryData].sort((a, b) => b.prevalenceRate - a.prevalenceRate);
  const rank = sorted.findIndex(c => c.name === country.name) + 1;
  const estimatedWomen = Math.round(country.estimatedAffected * 0.445);
  const youthAtRisk = Math.round(country.population * 1e6 * 0.24 * 0.35);

  drawPage1Advocacy(doc, pw, ph, margin, contentW);

  doc.addPage("letter", "portrait");

  drawPage2Country(doc, country, pw, ph, margin, contentW, rank, estimatedWomen, youthAtRisk);

  const filename = `${country.name.replace(/[^a-zA-Z0-9]/g, "-")}-Hearing-Health-Brief.pdf`;
  doc.save(filename);
}
