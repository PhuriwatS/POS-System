import { generateDiscount } from '@/lib/general'

describe('general library', () => {
  it('should return zero discount', () => {
    const result = generateDiscount([])
    expect(result).toEqual(0)
  })

  it('should return ten percent discount', () => {
    const data = [{
      id: '9781408855690',
      title: 'Harry Potter and the Order of the Phoenix (V)',
      cover: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855690.jpg',
      price: '380',
      quantity: 1
    }, {
      id: '9781408855683',
      title: 'Harry Potter and the Goblet of Fire (IV)',
      cover: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855683.jpg',
      price: '360',
      quantity: 1
    }, {
      id: '9781925773477',
      title: 'The Rosie Result',
      cover: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/9257/9781925773477.jpg',
      price: '180',
      quantity: 1
    }]
    const result = generateDiscount(data)
    expect(result).toEqual(10)
  })
})
