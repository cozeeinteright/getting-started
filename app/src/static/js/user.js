const user = () => {
  return {
    name:"koji",
    age:43
  }
}

let promise1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("3s"), 3000);
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve("5s"), 2000);
  })
})

promise1.then(res1 => console.log(res1)).then(res2 => console.log(res2));


console.log("0s");








