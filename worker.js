// Static site server for Cloudflare Workers. ASSETS is injected by build.mjs.
const SECURITY_HEADERS={
 'content-security-policy':"default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self' data:; frame-src https://www.google.com https://maps.google.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests",
 'strict-transport-security':'max-age=31536000; includeSubDomains',
 'x-content-type-options':'nosniff',
 'x-frame-options':'DENY',
 'referrer-policy':'strict-origin-when-cross-origin',
 'permissions-policy':'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
 'cross-origin-opener-policy':'same-origin'
};
export default {async fetch(request){
 const url=new URL(request.url),path=url.pathname;
 if(request.method!=='GET'&&request.method!=='HEAD')return new Response('Method not allowed',{status:405,headers:{allow:'GET, HEAD',...SECURITY_HEADERS}});
 if(!path.endsWith('/')&&ASSETS[path+'/index.html'])return Response.redirect(url.origin+path+'/'+url.search+url.hash,301);
 const key=path.endsWith('/')?path+'index.html':path;
 const file=ASSETS[key];
 if(!file){const nf=ASSETS['/404.html'];return new Response(nf?Uint8Array.from(atob(nf.data),c=>c.charCodeAt(0)):'Not found',{status:404,headers:{'content-type':'text/html; charset=utf-8',...SECURITY_HEADERS}})}
 const bytes=Uint8Array.from(atob(file.data),c=>c.charCodeAt(0));
 const cache=/\.(jpg|png|webp|ico|svg|woff2)$/.test(key)?'public,max-age=604800':'no-cache';
 return new Response(request.method==='HEAD'?null:bytes,{headers:{'content-type':file.type,'cache-control':cache,...SECURITY_HEADERS}});
}};
