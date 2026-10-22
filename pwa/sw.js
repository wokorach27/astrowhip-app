var C="astrowhip-v4",F=["./","index.html","signup.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","images/f01.jpg","images/f02.jpg","images/f03.jpg","images/f05.jpg","images/f06.jpg","images/f07.jpg","images/f08.jpg","images/f09.jpg","images/f10.jpg","images/f11.jpg","images/f12.jpg","images/f13.jpg","images/f14.jpg","images/f15.jpg","images/f16.jpg","images/f17.jpg","images/f18.jpg","images/f19.jpg","images/f20.jpg","images/foundation.jpg","images/lipstick.jpg","images/serum.jpg"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}))});
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET")return;
  // Pages: try the network first so updates show up right away; fall back to the saved copy when offline.
  if(e.request.mode==="navigate"){
    e.respondWith(fetch(e.request).then(function(res){var c2=res.clone();caches.open(C).then(function(c){c.put(e.request,c2)});return res}).catch(function(){return caches.match(e.request).then(function(r){return r||caches.match("index.html")})}));
    return;
  }
  e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).catch(function(){return caches.match("index.html")})}))
});
