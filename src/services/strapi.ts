export type StrapiItem<T = any> = { id: number; attributes: T }
export type StrapiListResponse<T = any> = { data: StrapiItem<T>[]; meta?: any }
export type StrapiSingleResponse<T = any> = { data: StrapiItem<T> | null; meta?: any }

const normalizeBase = (base: string) => base.replace(/\/+$/, '/')

const buildUrl = (base: string, path: string, params?: Record<string, string>) => {
  const url = new URL(path, normalizeBase(base))
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(k, v)
    }
  }
  return url.toString()
}

export const fetchCollection = async <T>(
  baseUrl: string,
  collection: string,
  params: Record<string, string> = {}
): Promise<StrapiListResponse<T>> => {
  const url = buildUrl(baseUrl, `/api/${collection}`, params)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Strapi error ${res.status}: ${await res.text()}`)
  return res.json()
}

export const fetchSingle = async <T>(
  baseUrl: string,
  collection: string,
  id: number | string,
  params: Record<string, string> = {}
): Promise<StrapiSingleResponse<T>> => {
  const url = buildUrl(baseUrl, `/api/${collection}/${id}`, params)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Strapi error ${res.status}: ${await res.text()}`)
  return res.json()
}

export const getAssetUrl = (baseUrl: string, maybeRelative?: string) => {
  if (!maybeRelative) return ''
  return maybeRelative.startsWith('http') ? maybeRelative : `${normalizeBase(baseUrl).replace(/\/+$/, '')}${maybeRelative}`
}