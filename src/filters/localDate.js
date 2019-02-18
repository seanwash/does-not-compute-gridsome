export default function localDate(input) {
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return new Date(input).toLocaleDateString(
    'en-US',
    options,
  )
}
