export const generateReadingTime = (txt: string) => {
  const wordsPerMinute = 250
  const noOfWords = txt.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return `${readTime} min read`
}
