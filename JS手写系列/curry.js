/**
 * 函数柯里化
 * 将一个函数的参数 分开传，fn(arg1,arg2)
 * var fn = curry((arg1,arg2)=>{
 * return arg1+arg2
 * })
 *
 * fn(1)
 * fn(2)
 * fn(1,2)
 * 有些时候一个函数需要依赖多个参数的，但是这些参数是异步返回的，可以用这种方法来执行，当收集完定义的参数个数时在执行
 */
var curry = function (fn, args) {
  const length = fn.length; // 参数的个数
  console.log("length", length);
  args = args || [];
  return function () {
    for (let i = 0; i < arguments.length; i++) {
      const arg = arguments[i];
      args.push(arg);
    }
    if (args.length < length) {
      return curry.call(this, fn, args); // 执行curry 得到下一个函数的参数，然后吧收集的参数 与 fn.length比较，不小于的时候 执行 fn主函数
    } else {
      console.log(args, "arg", "length", length);
      return fn.apply(this, args);
    }
  };
};
var person = { name: "kevin", sex: "男" };
var prop = curry(function (key, obj) {
  console.log("被执行", key, obj, obj[key]);
  return obj[key];
});
var name = prop("name");
var result = name(person);
console.log(result, "result");

/**
 * 实现一个能够读取对象里指定key的值的函数
 */

function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

function curry2(fn, length) {
  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function () {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry2(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}
