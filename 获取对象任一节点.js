let obj = {
  a: 2,
  b: {
    c: 1,
    d: [{
      f: [1, [2, 3]],
      g: {
        h: 2
      }
    }]
  }
}

function fn (obj, ...arr) {
  let output = [];
  arr.map((i) => {
    let objItem = obj;
    let list = i.match(/\w+/g);
    list.map(j => {
      objItem = objItem[`${j}`];
    })
    output.push(objItem);
  })
  return output;
}

fn(obj, 'b.c', 'b.d[0]f[1][0]', 'b.d[0].f[0]')//得到[1,2,1]




