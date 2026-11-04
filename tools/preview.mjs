// Local preview: npm run preview  ->  http://localhost:4173
// (The site uses paths from the root, e.g. /styles.css, so open it through this server, not by double-clicking index.html.)
import {createServer} from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {extname, join, normalize} from 'node:path';
import {fileURLToPath} from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const TYPES = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.mjs':'text/javascript','.json':'application/json','.webmanifest':'application/manifest+json','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon','.woff2':'font/woff2','.txt':'text/plain','.xml':'application/xml'};
createServer(async (req, res) => {
  let p = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  let f = join(root, p);
  try { if ((await stat(f)).isDirectory()) f = join(f, 'index.html'); res.writeHead(200, {'content-type': TYPES[extname(f)] || 'application/octet-stream'}); res.end(await readFile(f)); }
  catch { res.writeHead(404, {'content-type': TYPES['.html']}); res.end(await readFile(join(root, '404.html'))); }
}).listen(process.env.PORT || 4173, () => console.log('http://localhost:' + (process.env.PORT || 4173)));
