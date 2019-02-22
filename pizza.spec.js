const { displayData } = require('./pizza')

test('Display data', () => {
    const names = ["George", "Richard", "Abraham", "Donald"]
    const ages = {
      George: 55,
      Richard: 86,
      Abraham: 50,
      Donald: 45
    }
    const addresses = {
      George: "Fleet street, 121b",
      Richard: "Bermuda drive, 33",
      Abraham: "Cincinatti Av., 22a"
    }
    const willDeliverPizza = {
      "Fleet street": true,
      "Bermuda drive": false,
      "Cincinatti Av.": true
    }

    expect(displayData(names, ages, addresses, willDeliverPizza)).toEqual({ Userdata:
   [ { name: 'George',
       age: 55,
       address: 'Fleet street, 121b',
       willDeliverPizza: true },
     { name: 'Richard',
       age: 86,
       address: 'Bermuda drive, 33',
       willDeliverPizza: false },
     { name: 'Abraham',
       age: 50,
       address: 'Cincinatti Av., 22a',
       willDeliverPizza: true },
     { name: 'Donald',
       age: 45,
       address: undefined,
       willDeliverPizza: 'unknown' } ],
  highestAge: 86,
  lowestAge: 45 })
})

test('Display small data', () => {
    const names = ["George", "Richard"]
    const ages = {
      George: 86,
      Richard: 55
    }
    const addresses = {
      George: "Fleet street, 121b",
      Richard: "Bermuda drive, 33",
      Abraham: "Cincinatti Av., 22a"
    }
    const willDeliverPizza = {
      "Fleet street": true,
      "Bermuda drive": false,
      "Cincinatti Av.": true
    }

    expect(displayData(names, ages, addresses, willDeliverPizza)).toEqual({ Userdata:
   [ { name: 'George',
       age: 86,
       address: 'Fleet street, 121b',
       willDeliverPizza: true },
     { name: 'Richard',
       age: 55,
       address: 'Bermuda drive, 33',
       willDeliverPizza: false } ],
  highestAge: 86,
  lowestAge: 55 })
})