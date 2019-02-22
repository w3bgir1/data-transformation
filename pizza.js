
const toObject = (arr, key) => {
    return arr.map(el => {
        return { [key]: el}
    })
}

const addData = (obj, data, type) => {
    return obj.map(el=> {
        el[type] = data[el.name]

    return el
    })
}

const pizzaDelivery = (obj, data, type) => {
    return obj.map(el=> {

        if (el.address != undefined) {
            el[type] = data[el.address.split(",")[0]]
        } else {
            el[type] = 'unknown'
        }

    return el
    })
}

const maxAge = arr => {
    return arr.reduce((a, b) => a.age > b.age ? a : b)
}

const minAge = arr => {
    return arr.reduce((a, b) => a.age < b.age ? a : b)
}


const  displayData = (names, ages, addresses, willDeliverPizza) => {
    let changed = addData(toObject(names, 'name'), ages, 'age')
    changed = addData(changed, addresses, 'address')
    changed = pizzaDelivery(changed, willDeliverPizza, 'willDeliverPizza')
    const data = {}
    data.Userdata = changed
    data.highestAge = maxAge(changed).age
    data.lowestAge = minAge(changed).age
    return data
}

module.exports = { displayData }
