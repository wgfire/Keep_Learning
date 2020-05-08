let test = {
  name: "wg"
};

Function.prototype.mycall = function name(context, ...arg) {
  let fn = this; // this 为 .mycall前面的函数
  context.fn = fn;
  let result = context.fn(...arg);
  delete context.fn;
  return result;
};

function fn() {
  console.log("我的名字", this.name, "参数", ...arguments);
  return "执行成功";
}

// console.log(fn('很烦'));

// console.log(fn.mycall(test,'很烦'));

Function.prototype.myApply = function(context, ...arg) {
  let fn = this;
  context.fn = fn;
  let result = null;
  if (arg && Array.isArray(arg)) {
    result = context.fn(...arg);
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
};

//console.log(fn.myApply(test,['很烦']));

Function.prototype.mybind = function(context, ...arg) {
  // bind并没有立即执行这个函数哦，需要包裹一个函数返回出去

  let fn = this;

  let backfn = function(...rest) {
    // 返回的这个函数可能也要接受参数
    console.log('this',this);
    
    let result = this instanceof backfn; // 考虑 new 返回函数的情况 使用 bind 返回的结果还是个 function，是个 function 就可以被 new 运算符调用，那么结果呢？规范中说的很清楚了，当使用 new 操作符调用绑定函数时，bind 的第一个参数无效。thid指向原来的构造函数
    console.log('result',result);
    
    context = result ? this : context;
    return fn.apply(context, [...arg.concat(rest)]);
  };
  backfn.prototype = Object.create(fn.prototype)
  return backfn;
};

//console.log(fn.mybind(test, "很烦")("xxx"));
let fnn = fn.mybind(test,'很烦')
//console.log(fnn('xxxx')); // this 指向window
console.log(new fnn('xxxx') ); // 根据规范 new 调用时候 this要指fn

