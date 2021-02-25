import { commaSeparatedToArray } from './string'

describe('lib/string', () => {
  describe('commaSeparatedToArray', () => {
    it('returns ["a", "b"] for text "a,b"', () => {
      const result = commaSeparatedToArray('a,b')
      expect(result).toStrictEqual(['a', 'b'])
    })

    it('returns ["a", "b"] for text "a , b   "', () => {
      const result = commaSeparatedToArray('a , b   ')
      expect(result).toStrictEqual(['a', 'b'])
    })

    it('returns ["a b", "c"] for text "a b, c"', () => {
      const result = commaSeparatedToArray('a b, c')
      expect(result).toStrictEqual(['a b', 'c'])
    })

    it('returns ["Jane", "John", "Joe"] for text "Jane, John,Joe"', () => {
      const result = commaSeparatedToArray('Jane, John,Joe')
      expect(result).toStrictEqual(['Jane', 'Joe', 'John'])
    })

    // Array in alphabetical order (sort)
    it('returns the array in ascending alphabetical order', () => {
      const result = commaSeparatedToArray('b, a, c')
      expect(result).toStrictEqual(['a', 'b', 'c'])
    })
    // filter array for duplicates
    it('contains each string only once in the resulting array', () => {
      const result = commaSeparatedToArray('b, a, b, c')
      expect(result).toStrictEqual(['a', 'b', 'c'])
    })
    // modify all toLowerCase() and add the first letter to a capital letter
    it.todo('returns all items in title case ("john" -> "John")')
  })
})
