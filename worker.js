// Static site server for Cloudflare Workers. ASSETS is injected by build.mjs.
export default {async fetch(request){
 const url=new URL(request.url),path=url.pathname;
 if(request.method!=='GET'&&request.method!=='HEAD')return new Response('Method not allowed',{status:405,headers:{allow:'GET, HEAD'}});
 const key=path==='/'?'/index.html':path;
 const file=ASSETS[key];if(!file)return new Response('Not found',{status:404});
 const bytes=Uint8Array.from(atob(file.data),c=>c.charCodeAt(0));
 const cache=/\.(jpg|png|svg)$/.test(key)?'public,max-age=86400':'no-cache';
 return new Response(request.method==='HEAD'?null:bytes,{headers:{'content-type':file.type,'cache-control':cache,'x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin'}});
}};
