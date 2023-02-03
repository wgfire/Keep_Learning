// 防抖（立即执行版本）
function debounce(fn, wait) {
  let timer = null;
  return function () {
    let args = arguments;
    let now = !timer;
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
    }, wait);
    if (now) {
      fn.apply(this, args);
    }
  };
}

// 节流（定时器版本）
function throttle(fn, wait) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, wait);
    }
  };
}
