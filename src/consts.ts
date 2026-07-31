import type { Site, Metadata, Socials } from "@types"

export const SITE: Site = {
  NAME: "NaN",
  EMAIL: "adnan@nanoolabs.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
}

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Adnan - Programmer && Sains Tech Enthusiast",
}

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my articles",
}

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
}

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
}

export const NOTFOUND: Metadata = {
  TITLE: "404",
  DESCRIPTION: "Page not found, u can back to home page",
}

export const SOCIALS: Socials = [
  {
    NAME: "x-twitter",
    HREF: "https://twitter.com/aadnanmt",
    DESCRIPTION: "Thoughts, updates, and tech rants.",
  },
  {
    NAME: "github",
    HREF: "https://github.com/aadnanmt",
    DESCRIPTION: "Where I store my code and experiments.",
  },
  {
    NAME: "codeberg",
    HREF: "https://codeberg.org/aadnanmt",
    DESCRIPTION: "Primary forge and backup for my code and projects.",
  },
  {
    NAME: "telegram",
    HREF: "https://t.me/adnanbuilds",
    DESCRIPTION: "Best for a direct and quick technical chat.",
  },
  {
    NAME: "discord",
    HREF: "https://discord.com/users/1155470881183760525",
    DESCRIPTION: "Direct chat, mostly for tech talk and gaming.",
  },
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/aadnanmt",
    DESCRIPTION: "Personal bits and visual logs.",
  },
  {
    NAME: "ko-fi",
    HREF: "https://ko-fi.com/aadnanmt",
    DESCRIPTION: "Support my work or buy me a cup of coffee.",
  },
]
