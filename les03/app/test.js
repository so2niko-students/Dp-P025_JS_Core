const gold_sand1 = 123
const gold_sand2 = 33
const gold_sand3 = 44
const weight_sand1 = 124
const weight_sand2 = 22
const weight_sand3 = 1
let gold_sand = [gold_sand1, gold_sand2, gold_sand3]
let weight_sand = [weight_sand1, weight_sand2, weight_sand3]
let a = gold_sand.sort(function(a, b) { return a - b; })
let b = weight_sand.sort(function(a, b) { return a - b; })
a = math.matrix(a)
b = math.matrix(b)
let c = math.multiply(a, b)
alert(`Price ${c}`)