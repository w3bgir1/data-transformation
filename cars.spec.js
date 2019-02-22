const {reduceToObject} = require('./cars')

test('Reduce array to an object', () => {

    const cars = [
        {brand: 'Toyota', model: 'Aygo'},
        {brand: 'Skoda', model: 'Octavia'},
        {brand: 'Volkswagen', model: 'Passat'},
        {brand: 'Mercedes', model: 'CLS'},
        {brand: 'Seat', model: 'Ibiza'}
    ]

    expect(cars.reduce(reduceToObject, {})).toEqual(
        {
        Toyota: 'Aygo',
        Skoda: 'Octavia',
        Volkswagen: 'Passat',
        Mercedes: 'CLS',
        Seat: 'Ibiza'
    })
})