export default function (string, character) {
  const elements = string.split(character)

  return elements.length === 1
    ? false
    : elements
}
