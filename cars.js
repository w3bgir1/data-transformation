

const reduceToObject = (a, b) => {
    a[b.brand] = b.model
    return a
}



module.exports = { reduceToObject }