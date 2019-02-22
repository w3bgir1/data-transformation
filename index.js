const filterData = (arr, nums) => arr.filter(el => nums.includes(el.id) && el.age >= 21)

module.exports = {filterData}
