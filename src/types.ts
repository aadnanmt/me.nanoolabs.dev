export type Site = {
  NAME: string
  EMAIL: string
  URL: string
  REPO: string
  CDN: string
  NUM_POSTS_ON_HOMEPAGE: number
  NUM_PROJECTS_ON_HOMEPAGE: number
}

export type Metadata = {
  TITLE: string
  DESCRIPTION: string
}

export type Social = {
  NAME: string
  HREF: string
  DESCRIPTION: string
  ACTIVE?: boolean
}

export type ExplorePage = {
  name: string
  href: string
  desc: string
}

export type LastFMTrack = {
  name: string
  artist: string
  url: string
  image: string
  nowPlaying: boolean
  timestamp?: number
}

export type NowPlayingResponse = {
  track: LastFMTrack | null
  error?: string
}

export type ImoodResponse = {
  mood: string | null
  content?: string
  updated?: string
  error?: string
}
