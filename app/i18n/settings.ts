export const fallbackLng = 'uk'
export const languages = [fallbackLng, 'us']
export const defaultNS = 'translation'

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
