function mergeObjects(obj1,obj2){
    let obj3={...obj1,...obj2}

    return obj3


}


const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

const result = mergeObjects(obj1, obj2);
console.log(result);
// Output: { name: "John", age: 40, city: "New York" }
