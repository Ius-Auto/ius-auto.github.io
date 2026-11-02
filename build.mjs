import {readFile,writeFile} from 'node:fs/promises';
const files=["index.html","styles.css","script.js","config.js","favicon.svg","ius-auto-brand.png","gallery-paint.jpg","car-painting.jpg","paint-booth.jpg","ba-t1-before.jpg","ba-t1-after.jpg","ba-t2-before.jpg","ba-t2-after.jpg","ba-v-before.jpg","ba-v-after.jpg"];
const types={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',json:'application/json; charset=utf-8',jpg:'image/jpeg',png:'image/png',svg:'image/svg+xml'};
const assets={};for(const name of files)assets['/'+name]={type:types[name.split('.').pop()],data:(await readFile(new URL(name,import.meta.url))).toString('base64')};
await writeFile(new URL('site-worker.mjs',import.meta.url),'const ASSETS='+JSON.stringify(assets)+';\n'+await readFile(new URL('worker.js',import.meta.url),'utf8'));
console.log('Built site-worker.mjs');
