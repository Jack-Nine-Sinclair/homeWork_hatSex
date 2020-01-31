


//接受一个仅包含数字的 多维数组 ，返回一个迭代器，可以遍历得到它拍平以后的结果
const numbers = flatten2([1, [[2], 3, 4], 5]) 
numbers.next().value // => 1 
numbers.next().value // => 2 
numbers.next().value // => 3 
numbers.next().value // => 4 
numbers.next().value // => 5

//补齐flatten2 这个函数

//复习数组方法 封装实现 数组 map、filter、every 方法


//实现filter方法

Array.prototype.myFilter = function(cb, context) {
  let newArr = [];
  let self = this;
  //this指向调用的数组
  for (let i=0; i<self.length; i++) {
    //把cb结果为true的值push到newArr
    let result = cb.call(context, self[i], i, self);
    if (result) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
//例
let arr = [1, 2, 3,4, 5];
let result = arr.myFilter(function(item) {
  console.log(this)
  //[1, 2, 3]
  return item > 2;
}, [1, 2, 3])

// 结果为[3, 4, 5]
//回调函数里面的this值为filter指定的参数
// 实现map方法

Array.prototype.myMap= function(cb, context) {
  let newArr = [];
  let self = this;
  //this指向调用的数组
  for (let i=0; i<self.length; i++) {
  //把每一项cb返回值push到newArr
    newArr.push(cb.call(context, self[i], i, self))
  }
  return newArr;
}
let arr = [1, 2, 3,4, 5];
let result = arr.myMap(function(item) {
 console.log(this)
  //[1, 2, 3]
  return item*2;
}, [1, 2, 3])
//result [2, 4, 6, 8, 10]
//实现every、some
//注：只要回调函数返回 true，every 方法就会被调用。如果回调函数返回 false，循环会停止。


Array.prototype.myEvery= function(cb, context) {
  let self = this;
  //this指向调用的数组
  for (let i=0; i<self.length; i++) {
  //如果有一个cb值为false返回false否则返回true
  //some改成有一个为true返回true，否则返回false即可
    let result = cb.call(context, self[i], i, self)
    if (!result) {
      return false
    } 
  }
  return true;
}
let arr = [1, 2, 3,4, 5];
let result = arr.myEvery(function(item) {
  console.log(this)
  //【1， 2， 3】
  return item > 1;
}, [1, 2, 3])
//return true
//实现forEach

Array.prototype.myForEach= function(cb, context) {
  let self = this;
  //this指向调用的数组
  for (let i=0; i<self.length; i++) {
    cb.call(context,self[i], i, self)
  }
}
//forEach只是对数组每一项执行回调没有返回值，当数组某项是复杂类型时对其操作会影响原数组
//例
let arr = [1, 2, {a:1}]
arr.myForEach(function(item){
console.log(this)
//[1, 2, 3]
if(typeof item === 'object') {
  item.a = 3
}
}, [1, 2, 3])
// arr 为 [1, 2, {a: 3}]

