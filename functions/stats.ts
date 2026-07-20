const STATS_URL =
  "https://raw.githubusercontent.com/aadnanmt/readmeSync/main/stats.json"

export async function onRequest(_context: any) {
  const cache = await caches.open("stats")
  const cached = await cache.match(STATS_URL)
  if (cached) return cached

  const res = await fetch(STATS_URL)
  if (!res.ok) return new Response(await res.text(), { status: res.status })

  const data = await res.json()
  const body = JSON.stringify(data)
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=43200",
    "Access-Control-Allow-Origin": "*",
  }

  const response = new Response(body, { headers })
  await cache.put(STATS_URL, response.clone())
  return response
}
