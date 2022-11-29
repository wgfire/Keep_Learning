/**
 * compose 函数，为函数编程常用的编码工具
 */

function compose(...funcs) {
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}
const a = (arg) => {
  console.log(arg, "a");
};
const b = (arg) => {
  console.log(arg, "b");
};
const c = (arg) => {
  console.log(arg, "c");
};
// const d = compose(a, b, c)(2); // 分别打印 3 、 2 、 1
/**
 * reduce 每次返回一个函数包裹下一个函数，在执行前 d = a(b(c(arg)))
 */

// 调用next参数表示调用下一个函数
function fn1(next) {
  console.log(1);
  setTimeout(() => {
    next();
  }, 100);
}

function fn2(next) {
  console.log(2);
  setTimeout(() => {
    next();
  }, 100);
}

function fn3(next) {
  console.log(3, next);
  setTimeout(() => {
    next();
  }, 100);
}

const middleware = [fn1, fn2, fn3];

function asyncCompose(middleware) {
  function dispatch(index) {
    if (index == middleware.length) return;
    var curr;
    curr = middleware[index];
    // 这里使用箭头函数，让函数延迟执行
    return curr(() => dispatch(++index));
  }
  dispatch(0);
}

// asyncCompose(middleware);

/**
 *
 * @param  {...any} fns
 * 如果有一个函数有返回值，代表执行结束
 */
function SyncBailHook(...fns) {
  for (let index = 0; index < fns.length; index++) {
    const result = fns[index]();
    if (result) {
      break;
    }
  }
}

function b1() {
  console.log("b1");
}
function b2() {
  console.log("b2");
  return true;
}
function b3() {
  console.log("b3");
}

// SyncBailHook(b1, b2, b3);

/**
 * SyncWaterfallHook

串行同步执行，Waterfall是瀑布的意思，前一个订阅者的返回值会传给后一个订阅者
 */

function SyncWaterfallHook(...fns) {
  return fns.reduce(function (per, curr, index) {
    return (result) => {
      let result1 = per(result);
      return curr(result1);
    };
  });
}

function w1(arg) {
  console.log(arg, "1");
  return arg + 1;
}

function w2(arg) {
  console.log(arg, "2");
  return arg + 1;
}

function w3(arg) {
  console.log(arg, "2");
  return arg + 1;
}

SyncWaterfallHook(w1, w2, w3)(1);
