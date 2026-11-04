import {readFile,writeFile,readdir} from 'node:fs/promises';
const files=["index.html","ro/index.html","en/index.html","404.html","styles.css","fonts.css","script.js","i18n.js","config.js","ius-auto-logo.png","favicon.ico","favicon-96.png","apple-touch-icon.png","icon-192.png","icon-512.png","manifest.webmanifest","robots.txt","sitemap.xml","gallery-paint.jpg","car-painting.jpg","paint-booth.jpg","ba-t1-before.jpg","ba-t1-after.jpg","ba-t2-before.jpg","ba-t2-after.jpg","ba-v-before.jpg","ba-v-after.jpg"];
for(const f of await readdir(new URL('./',import.meta.url)))if(f.endsWith('.webp'))files.push(f);
for(const f of await readdir(new URL('fonts/',import.meta.url)))if(f.endsWith('.woff2'))files.push('fonts/'+f);
const types={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',json:'application/json; charset=utf-8',jpg:'image/jpeg',png:'image/png',svg:'image/svg+xml',woff2:'font/woff2',txt:'text/plain; charset=utf-8',xml:'application/xml; charset=utf-8',webp:'image/webp',ico:'image/x-icon',webmanifest:'application/manifest+json'};
const assets={};for(const name of files)assets['/'+name]={type:types[name.split('.').pop()],data:(await readFile(new URL(name,import.meta.url))).toString('base64')};
await writeFile(new URL('site-worker.mjs',import.meta.url),'const ASSETS='+JSON.stringify(assets)+';\n'+await readFile(new URL('worker.js',import.meta.url),'utf8'));
console.log('Built site-worker.mjs');
