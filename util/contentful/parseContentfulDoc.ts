import { Asset, AssetLink } from 'contentful';

export interface ContentfulDoc {
  url: string
  details: {
    size: number
  }
  fileName: string
  contentType: string
}

export function parseDoc(
  asset?: Asset<undefined, string> | { sys: AssetLink }
): ContentfulDoc | null {
  if (!asset) {
    return null
  }

  if (!('fields' in asset)) {
    return null
  }

  return {
    url: asset.fields.file?.url as string,
    details: {
      size: asset.fields.file?.details.size as number
    },
    fileName: asset.fields.file?.fileName as string,
    contentType: asset.fields.file?.contentType as string
  }
}