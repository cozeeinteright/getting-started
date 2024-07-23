let cat = {
  name: "taro",
  x:1,
  y:10,
  visible: true,
  size: 100,
  direction: 90,
  sayHi: function() {
    console.log("Hi")
  },
  changeSize: function(size) {
    this.size = size;
  }
}

cat.sayHi();

cat.size = 100;
changeSize(100);
