import { createClient } from 'contentful'

const { CTF_SPACE_ID, CTF_ACCESS_TOKEN, CTF_PREVIEW_TOKEN } = process.env

if (!CTF_SPACE_ID || !CTF_ACCESS_TOKEN) {
  throw new Error("Missing necessary Contentful environment variables.");
}

const client = createClient({
  space: CTF_SPACE_ID!,
  accessToken: CTF_ACCESS_TOKEN!,
})

const previewClient = createClient({
  space: CTF_SPACE_ID!,
  accessToken: CTF_PREVIEW_TOKEN!,
  host: 'preview.contentful.com',
})

export default function contentfulClient({ preview = false }) {
  if (preview) {
    return previewClient
  }

  return client
}