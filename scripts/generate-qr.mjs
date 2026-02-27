import QRCode from "qrcode";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const QR_SIZE = 1024;
const LOGO_SIZE_RATIO = 0.22;

async function generateQRWithLogo() {
  const qrBuffer = await QRCode.toBuffer("https://listenupmom.org", {
    errorCorrectionLevel: "H",
    width: QR_SIZE,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  });

  const logoSize = Math.round(QR_SIZE * LOGO_SIZE_RATIO);
  const padding = Math.round(logoSize * 0.12);
  const bgSize = logoSize + padding * 2;

  const logo = await sharp(path.join(projectRoot, "client/src/assets/logo.png"))
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toBuffer();

  const whiteBg = await sharp({
    create: {
      width: bgSize,
      height: bgSize,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .png()
    .toBuffer();

  const logoWithBg = await sharp(whiteBg)
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();

  const logoOffset = Math.round((QR_SIZE - bgSize) / 2);

  const finalImage = await sharp(qrBuffer)
    .composite([
      {
        input: logoWithBg,
        left: logoOffset,
        top: logoOffset,
      },
    ])
    .png()
    .toBuffer();

  const outputPath = path.join(projectRoot, "listenupmom-qr-code.png");
  await sharp(finalImage).toFile(outputPath);

  console.log(`QR code saved to: ${outputPath}`);
  console.log(`Size: ${QR_SIZE}x${QR_SIZE}px`);
  console.log(`Logo area: ${bgSize}x${bgSize}px (${Math.round((bgSize / QR_SIZE) * 100)}% of QR)`);
  console.log("URL: https://listenupmom.org");
  console.log("Error correction: H (30%) — safe to scan with logo overlay");
}

generateQRWithLogo().catch(console.error);
