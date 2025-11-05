import React, { createContext, useContext, useEffect } from 'react'

export interface AppConfig {
  siteIdentity: {
    name?: string
    logoUrl?: string
  }
  theming?: {
    primaryColor?: string
  }
  apiEndpoints?: {
    cmsBaseUrl?: string
    cmsSiteId?: string
  }
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
    canonicalUrl?: string
  }
  hero?: {
    title?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
    backgroundImageUrl?: string
  }
  whatsNew?: {
    title?: string
    items?: Array<{
      title?: string
      description?: string
      ctaText?: string
      ctaLink?: string
      imageUrl?: string
    }>
  }
}

const ConfigContext = createContext<AppConfig | null>(null)

export const ConfigProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const config = (window as any).APP_CONFIG as AppConfig

  // 可选：在 Provider 层同步文档标题与基本 SEO
  useEffect(() => {
    if (!config) return
    const title = config.seo?.title || config.siteIdentity?.name
    if (title) document.title = title

    const desc = config.seo?.description
    if (desc) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', desc)
    }

    const keywords = config.seo?.keywords
    if (keywords && keywords.length) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', keywords.join(','))
    }
  }, [config])

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  )
}

export const useConfig = () => {
  const context = useContext(ConfigContext)
  if (context === null) {
    throw new Error('useConfig 必须在 ConfigProvider 内部使用')
  }
  return context
}

declare global {
  interface Window {
    APP_CONFIG: AppConfig
  }
}