const checkClub = (clubs, people) => clubs.map(el => {
        return el.members.reduce((a, memberId) => {
            const person = people.find((el) => el.id === memberId)
            if (!a.includes(person.nationality)) {
                a.push(person.nationality)
            } 
                return a
        }, [])
    })


const findMaxAmount = arr => {
    return Math.max(...arr.map(el => el.length))
}

const displayFiltered = (clubs, people) => 
    checkClub(clubs, people)
    .reduce((a, b, i) => {
        if (b.length === findMaxAmount(checkClub(clubs, people))) {
            a.push(clubs[i])
        }
        return a
    }, [])


module.exports = { displayFiltered }