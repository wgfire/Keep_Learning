/**
 * 函数柯里化
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
var result =name(person);
console.log(result, "result");
// var name = person.map();
