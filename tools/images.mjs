// Makes light WebP copies of the site photos: a small one for phones and a large one for computers.
// Run after replacing any photo:  npm run images
// The original .jpg files stay as they are (old browsers and link previews use them).
import sharp from 'sharp';
import {stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';

// file -> widths to generate
const PHOTOS = {
  'gallery-paint.jpg': [600, 1000],
  'car-painting.jpg': [700, 1400],
  'paint-booth.jpg': [800, 1600],
  'ba-t1-before.jpg': [600, 1000, 1400],
  'ba-t1-after.jpg': [600, 1000, 1400],
  'ba-t2-before.jpg': [600, 1000, 1400],
  'ba-t2-after.jpg': [600, 1000, 1400],
  'ba-v-before.jpg': [600, 1000, 1400],
  'ba-v-after.jpg': [600, 1000, 1400],
};

const root = new URL('../', import.meta.url);
const path = f => fileURLToPath(new URL(f, root));
const kb = async f => Math.round((await stat(path(f))).size / 1024);

for (const [file, widths] of Object.entries(PHOTOS)) {
  const src = path(file);
  const {width} = await sharp(src).metadata();
  const parts = [];
  for (const w of widths) {
    const out = file.replace(/\.jpg$/, `-${w}.webp`);
    await sharp(src)
      .rotate()                                   // respect camera orientation
      .resize({width: Math.min(w, width), withoutEnlargement: true})
      .webp({quality: file.startsWith('ba-') ? 70 : 76, effort: 6}) // metadata (EXIF/GPS) is not copied
      .toFile(path(out));
    parts.push(`${out} ${await kb(out)} KB`);
  }
  console.log(`${file} ${await kb(file)} KB  ->  ${parts.join(', ')}`);
}
