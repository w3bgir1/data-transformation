const {evenOrOdd} = require('./reduce')




test('Sort numbers to 2 arrays - even and uneven', () => {

    const numbers = [0, 1, 4, 5, 6, 9]

    expect(numbers.reduce(evenOrOdd, {
        even: [],
        uneven: []
    })).toEqual(
        {
        even: [0, 4, 6],
        uneven: [1, 5, 9]
    })
})

test('Sort numbers to 2 arrays - even and uneven', () => {

    const numbers = [1, 1, 3, 5, 6, 9]

    expect(numbers.reduce(evenOrOdd, {
        even: [],
        uneven: []
    })).toEqual(
        {
        even: [6],
        uneven: [1, 1, 3, 5, 9]
    })
})


