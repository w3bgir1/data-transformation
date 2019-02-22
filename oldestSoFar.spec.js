const {oldestSoFar} = require('./oldestSoFar')

test('Finding oldest person - should be Rachel', () => {
    const people = [
        {name: 'Don', age: 23},
        {name: 'Adam', age: 33},
        {name: 'Steve', age: 14},
        {name: 'Rachel', age: 56},
        {name: 'Maud', age: 46},
        {name: 'Hermien', age: 28}
    ]

    expect(people.reduce(oldestSoFar)).toEqual({name: 'Rachel', age: 56})
})


test('Finding oldest person - should be Helen', () => {
    const people = [
        {name: 'Don', age: 23},
        {name: 'Steve', age: 14},
        {name: 'Rachel', age: 56},
        {name: 'Helen', age: 86},
        {name: 'Hermien', age: 28}
    ]

    expect(people.reduce(oldestSoFar)).toEqual({name: 'Helen', age: 86})
})
