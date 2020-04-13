import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Q-desk'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
