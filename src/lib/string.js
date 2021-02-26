export function commaSeparatedToArray(text) {
  const textArray = text
    .split(',')
    .map(item => item.trim())
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .sort()
  const uniqueTextSet = new Set(textArray)
  const uniqueTextArray = [...uniqueTextSet]
  return uniqueTextArray
}
