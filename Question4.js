function deepCopy(obj){

    let obj1=JSON.parse(JSON.stringify(obj))

    return obj1
}


const obj = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001
  }
};

const copy = deepCopy(obj);
copy.address.city='Mumbai'
console.log(copy)
console.log(obj);

// Output: { name: "John", address: { city: "New York", zip: 10001 } }
