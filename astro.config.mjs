import { defineConfig, passthroughImageService } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { execSync } from "child_process"

const isProd = process.env.CF_PAGES === "1"

let gitHash = "unknown"
try {
  gitHash = execSync("git rev-parse --short HEAD").toString().trim()
} catch (e) {
  console.warn(`Could not get git hash: ${e.message}`)
}

let adapter
if (isProd) {
  const { default: cloudflare } = await import("@astrojs/cloudflare")
  adapter = cloudflare()
}

export default defineConfig({
  site: "https://root.nanoolabs.dev",
  integrations: [mdx(), sitemap()],
  redirects: {
    "/gh": { destination: "https://github.com/aadnanmt", status: 301 },
    "/cb": { destination: "https://codeberg.org/aadnanmt", status: 301 },
    "/tg": { destination: "https://t.me/nan_simple", status: 301 },
    "/dc": {
      destination: "https://discord.com/users/1155470881183760525",
      status: 301,
    },
    "/ig": { destination: "https://www.instagram.com/aadnanmt", status: 301 },
    "/x": { destination: "https://twitter.com/aadnanmt", status: 301 },
    "/sp": {
      destination: "https://open.spotify.com/user/314bjvthnpohaain54tchezpc4ji",
      status: 301,
    },
    "/kf": { destination: "https://ko-fi.com/aadnanmt", status: 301 },
    "/gl": { destination: "https://gitlab.com/users/aadnanmt", status: 301 },
    "/th": { destination: "https://www.threads.com/@aadnanmt", status: 301 },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark-default",
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },
  output: isProd ? "server" : "static",
  adapter: adapter,
  vite: {
    plugins: [tailwindcss()],
    define: {
      "import.meta.env.GIT_HASH": JSON.stringify(
        process.env.CF_PAGES_COMMIT_SHA?.substring(0, 7) || gitHash
      ),
    },
  },
})
