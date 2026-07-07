const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../../public/client');
const outDir = path.resolve(__dirname, '../../public/clients');

const WIDTH = 300;
const HEIGHT = 150;

async function convert() {
  if (!fs.existsSync(srcDir)) {
    console.error('Source folder not found:', srcDir);
    process.exit(1);
  }

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const files = fs.readdirSync(srcDir);
  const supported = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];
  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!supported.includes(ext)) continue;

    const name = path.basename(file, ext);
    const outPath = path.join(outDir, name + '.webp');

    try {
      await sharp(path.join(srcDir, file))
        .resize(WIDTH, HEIGHT, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .webp({ lossless: true })
        .toFile(outPath);
      console.log(`✓ ${file} → ${name}.webp`);
      count++;
    } catch (e) {
      console.error(`✗ ${file} — ${e.message}`);
    }
  }

  console.log(`\nDone: ${count} image(s) converted to ${WIDTH}x${HEIGHT} lossless webp.`);
}

convert();
