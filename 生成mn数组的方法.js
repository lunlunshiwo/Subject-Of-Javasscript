//es5 制造一个长度为n，内容为m的数组
let arrayFill1 = (n, m) => {
  return new Array(n + 1).join(m).split('')
}
let a = arrayFill1(4, 3)
//es5
let arrayFill2 = (n, m) => {
  return Array.apply(null, { length: n }).fill(m)
}
let b = arrayFill2(4.3)
//es6
let arrayFill3 = (n, m) => {
  return Array.from({ length: n }, (v, i) => m)//Array.from({ length: n }).fill(m)
}
let c = arrayFill3(4, 3)

// 4*3的二维数组
let arrayFill4 = (n, m) => {
  return Array.from({ length: n }, (v, i) => Array.from({ length: n }))//Array.from({ length: n }).fill(Array.from({ length: n }))
}
let d = arrayFill4(4, 3)

//es6
let arrayFill5 = (n, m) => {
  return Array.from({ length: n }).copyWithin(Array.from({ length: n }),0,m)
}
let e = arrayFill5(4, 3)