export function commaSeparatedToArray(text) {
  const array = text
    .split(',')
    .map(item => item.trim())
    .sort()
  const uniqueSet = new Set(array)
  const uniqueArray = [...uniqueSet]
  return uniqueArray
}

// return string.charAt(0).toUpperCase() + string.slice(1);
