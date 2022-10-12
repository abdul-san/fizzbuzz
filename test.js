const { fizzbuzz } = require("./fizzbuzz")

describe('Testing FizzBuzz', () => {
    test('it exists', () => {
        expect(fizzbuzz).toBeDefined()
    })
    
    test('test whether the number is a multiple of 3 ', () => {
        expect(fizzbuzz(15)).toEqual('Fizz')
    })
    
    test('test whether the number is a multiple of 5 ', () => {
        expect(fizzbuzz(15)).toEqual('Buzz')
    })

    test('test whether the number is a multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toEqual('FizzBuzz')
    })

    test('test whether the number is not a multiple of 3 or 5', () => {
        expect(fizzbuzz(7)).toEqual(7)
    })
})