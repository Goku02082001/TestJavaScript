
function rearrangeFruits(fruits){
    let val=fruits.splice(6,4)

    fruits.unshift(val)
    let val1=fruits.flat()
    return val1
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
console.log(rearrangeFruits(fruits));

