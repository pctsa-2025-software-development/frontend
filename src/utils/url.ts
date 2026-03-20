export function isSafeUrl(value: string | undefined | null): boolean {
  if (!value) return false
  try {
    const u = new URL(value)
    return u.protocol === 'https:' || u.protocol === 'http:'
  } catch (e) {
    return false
  }
}

export function openExternal(url: string) {
  if (!isSafeUrl(url)) return
  // open in new tab with noopener to avoid granting access to window.opener
  window.open(url, '_blank', 'noopener')
}
