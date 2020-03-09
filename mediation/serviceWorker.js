const staticMediation = "mediation-app"
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/styleMobile.css",
    "/app.js",
    "/sounds/beach.mp3",
    "/sounds/rain.mp3",
    "/svg/beach.svg",
    "/svg/moving-outline.svg",
    "/svg/pause.svg",
    "/svg/play.svg",
    "/svg/rain.svg",
    "/svg/replay.svg",
    "/svg/track-outline.svg",
    "/video/beach.mp4",
    "/video/rain.mp4",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMediation).then(cache => {
        cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
        })
    )
})