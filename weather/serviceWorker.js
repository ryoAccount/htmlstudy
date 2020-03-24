const staticWeather = "weather-app"
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/select.css",
    "/app.js",
    "/skycons.js",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticWeather).then(cache => {
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