import type { APIRoute } from "astro"
const ageKey = "age1ac229rf6czjc595p24s553e7p3vy9taht7m4dfw3k7yhenhzh5ts8rermw"
export const GET: APIRoute = () => {
  return new Response(ageKey, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
