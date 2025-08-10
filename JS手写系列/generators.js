/**
 * 异步编程-生成器
 */
import fs from "fs";

// 老夫上来就是丢出一个这玩意，
// function* gen(x) {
//   var y = yield x + 2;
//   return y;
// }

// var g = gen(1);
// g.next(); // { value: 3, done: false }
// g.next(2); // { value: 2, done: true } // 传入的参数为上一个异步任务的返回结果

function thunkify(fn) {
  return function () {
    var args = new Array(arguments.length);
    var ctx = this;

    for (var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function (done) {
      var called;

      args.push(function () {
        if (called) return;
        called = true;
        console.log("1");
        done.apply(null, arguments);
      });

      try {
        console.log("2");
        return fn.apply(ctx, args); // 将callback放到args里执行
      } catch (err) {
        done(err);
      }
    };
  };
}
var readFile = thunkify(fs.readFile);
const a = readFile("./curry.js")((arg) => {
  console.log(arg, "x");
});

var gen = function* () {
  var r1 = yield readFile("./curry.js");
  console.log(r1.toString());
  var r2 = yield readFile("./curry.js");
  console.log(r2.toString());
};

function run(fn) {
  var gen = fn();

  function next(data) {
    var result = gen.next(data);
    console.log(result, "result");
    if (result.done) return;
    result.value(next); // thunk函数 就是通过传入回调函数来执行回调，这里自执行的用法 就是利用回调函数来重新取得执行权
  }

  next();
}

run(gen);
