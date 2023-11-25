const n1 = [1,2,3]
const n2 = [4,5,6]
const n3 = [7,8,9]
const n4 = [10,11,12]

//const total = n1.concat(n2, n3, n4)

const total = [...n1, ...n2]
console.log(total)