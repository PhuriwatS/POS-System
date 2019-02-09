import _ from 'lodash'

export const generateDiscount = (books) => {
  const discount = [
    { harryBook: 2, discountPercentage: 10 },
    { harryBook: 3, discountPercentage: 11 },
    { harryBook: 4, discountPercentage: 12 },
    { harryBook: 5, discountPercentage: 13 },
    { harryBook: 6, discountPercentage: 14 },
    { harryBook: 7, discountPercentage: 15 }
  ]
  const unique = [...new Set(books.map(cv => cv))]
  const uniqueHarryPotter = unique.reduce((init, cv) => {
    if (cv.title.toLowerCase().includes('harry potter')) {
      return init + 1
    }
    return init
  }, 0)
  const discountPercentage = discount.find(cv => cv.harryBook === uniqueHarryPotter)
  return _.get(discountPercentage, 'discountPercentage', 0)
}
