const {filterData} = require('./index')

test('FilterData should return person with ID 1 and 4', () => {
    const data = [
        {
            id: 1,
            name: "Tim",
            age: 24
        },
        {
            id: 2,
            name: "Sam",
            age: 16
        },
        {
            id: 3,
            name: "Jane",
            age: 32
        },
        {
            id: 4,
            name: "Jay",
            age: 27
        },
        {
            id: 5,
            name: "Bart",
            age: 8
        }
    ]
    
    const numbers = '1 2 4 5'
    expect(filterData(data, numbers)).toEqual(
        [{
            id: 1,
            name: "Tim",
            age: 24
        },
        {
            id: 4,
            name: "Jay",
            age: 27
        }])
  })

test('FilterData should return person with ID 1 and 3', () => {
    const data = [
        {
            id: 1,
            name: "Tim",
            age: 24
        },
        {
            id: 2,
            name: "Sam",
            age: 16
        },
        {
            id: 3,
            name: "Jane",
            age: 32
        },
        {
            id: 4,
            name: "Jay",
            age: 27
        },
        {
            id: 5,
            name: "Bart",
            age: 8
        }
    ]
    
    const numbers = '1 2 3 5'
    expect(filterData(data, numbers)).toEqual(
        [{
            id: 1,
            name: "Tim",
            age: 24
        },
        {
            id: 3,
            name: "Jane",
            age: 32
        }])
  })


test('FilterData should return an empty array', () => {
    const data = [
        {
            id: 1,
            name: "Tim",
            age: 18
        },
        {
            id: 2,
            name: "Sam",
            age: 16
        },
        {
            id: 3,
            name: "Jane",
            age: 19
        },
        {
            id: 4,
            name: "Jay",
            age: 7
        },
        {
            id: 5,
            name: "Bart",
            age: 8
        }
    ]
    
    const numbers = '1 2 3 5'
    expect(filterData(data, numbers)).toEqual([])
  })
