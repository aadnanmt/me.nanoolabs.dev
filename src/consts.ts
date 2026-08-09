import type { Site, Metadata, Social } from "@types"

export const SITE: Site = {
  NAME: "NaN",
  EMAIL: "adnan@nanoolabs.dev",
  URL: "https://root.nanoolabs.dev",
  REPO: "https://github.com/aadnanmt/root.nanoolabs.dev",
  CDN: "https://cdn.nanoolabs.dev",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 1,
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

export const EXPLORE: Metadata = {
  TITLE: "Explore",
  DESCRIPTION: "Explore all pages on this site.",
}

export const CONTACT: Metadata = {
  TITLE: "Connect",
  DESCRIPTION: "Get in touch with me",
}

export const STATS: Metadata = {
  TITLE: "Statistics",
  DESCRIPTION:
    "Content count in this digital garden, GitHub activity, and language breakdown from my open-source contributions.",
}

export const CREDITS: Metadata = {
  TITLE: "Credits",
  DESCRIPTION: "The tools and technologies that power this website.",
}

export const KEYS: Metadata = {
  TITLE: "Public Keys",
  DESCRIPTION: "Public keys for encryption and signing.",
}

export const COMMANDS: Metadata = {
  TITLE: "Linux Commands",
  DESCRIPTION: "A collection of Linux commands and hacks that I use.",
}

export const MILESTONES: Metadata = {
  TITLE: "My Milestones",
  DESCRIPTION:
    "Documenting my personal growth, reflections, and lessons learned on this journey.",
}

export const FOCUS: Metadata = {
  TITLE: "Focus",
  DESCRIPTION: "Current focus and project progress, Ascii style.",
}

export const SOCIALS: Social[] = [
  {
    NAME: "x-twitter",
    HREF: "https://twitter.com/aadnanmt",
    DESCRIPTION: "Thoughts, updates, and tech rants.",
  },
  {
    NAME: "github",
    HREF: "https://github.com/aadnanmt",
    DESCRIPTION: "Where I store my code and experiments.",
    ACTIVE: true,
  },
  {
    NAME: "codeberg",
    HREF: "https://codeberg.org/aadnanmt",
    DESCRIPTION: "Primary forge and backup for my code and projects.",
    ACTIVE: true,
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
    NAME: "spotify",
    HREF: "https://open.spotify.com/user/314bjvthnpohaain54tchezpc4ji",
    DESCRIPTION: "My playlists and what I am listening to.",
  },
  {
    NAME: "ko-fi",
    HREF: "https://ko-fi.com/aadnanmt",
    DESCRIPTION: "Support my work or buy me a cup of coffee.",
  },
]
