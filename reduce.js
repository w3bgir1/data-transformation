const evenOrOdd = (a, b) => {
    if (b % 2 === 0) {
        a.even.push(b)
    } else {
        a.uneven.push(b)
    }
    return a
}   

module.exports = {evenOrOdd}