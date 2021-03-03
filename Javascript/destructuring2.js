const [a] = [10]
console.log(a)

const [n1,n2, ,n3,n4 =0] = [1,2,3,4]
console.log(n1,n2,n3,n4)

const[,[,nota]] = [[1,6,3], [8,7,6]]
console.log(nota)