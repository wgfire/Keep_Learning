var order500 = function(orderType, money) {
  if (orderType === 1 &&  money>600) {
    console.log("返现100");
  } else {
    return "nextSuccessor";
  }
};
var order200 = function(orderType, stock) {
  if (orderType === 1 && stock >200) {
    console.log("50");
  } else {
    return "nextSuccessor";
  }
};
var order = function(orderType, stock) {
  if (orderType !=1 || stock<200) {
    console.log("0");
  } else {
    console.log("end");
  }
};

Function.prototype.after = function(fn) {
  var self = this;
  return function() {
    var ret = self.apply(this, arguments);
    if (ret === "nextSuccessor") {
      return fn && fn.apply(this, arguments);
    }
    console.log("ret", ret);

  };
};
var func = order500.after(order200).after(order);
func(1, 500);
