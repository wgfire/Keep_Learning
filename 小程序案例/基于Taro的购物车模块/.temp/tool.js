const tool = {
  debounce: function (fn, wait, imadte) {
    return function () {
      let context = this;
      let args = arguments;
      if (timeout) clearTimeout(timeout);
      if (imadte) {
        let call = !timeout;
        timeout = setTimeout(() => {
          timeout = null;
        }, wait);
        if (call) fn.apply(obj, args);
      } else {
        timeout = setTimeout(() => {
          fn.apply(context, args);
        }, wait);
      }
    };
  }
};

tool.bus = new Map();
tool.on = function (type, fn) {
  tool.bus.set(type, fn); // 将回调函数推入到数组里
};
tool.emit = function (type) {
  // 触发当前类型的回调函数
  tool.bus.get(type)();
};
export default tool;