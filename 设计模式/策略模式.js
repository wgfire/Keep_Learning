// 策略模式，按照一定的值 根据这个值执行不同的功能 ，就可以用策略模式包装起来

// 案例：
// 有一个选择器，下拉可以选择（'魁拔'，‘斗罗大陆’，‘一人之下’），需要根据用户选择的值执行不同逻辑
// 这个看起来很简单，老夫就是if/else 一把梭
function selectHandel(value) {
  if (value == "魁拔") {
    // 逻辑
  } else {
  }
}
// 看起来没有问题，那如果有10个 20个选择的范围，呢 if/else写这么多，是准备被主管追着打嘛

// 将所有策略封装起来，给一个标识

// let strategies = {
//   魁拔: () => {},
//   斗罗大陆: () => {}
//   //...
// };

// function selectHandel(value) {
//   let result = strategies[value]();
// }

// 上面这个案例简单，但也就是策略的核心思想，这种不同情况需要处理不同逻辑的 用策略，看一个难点的

//案例2，某个网站里的用户是有不同权限的，不同权限 可能很多地方的处理逻辑不同，就比如登录，普通用户登录直接账号密码，但是高级用户还要输入一个特别的token
// 那么就需要验证用户，然后执行不同的登录逻辑，除了登录逻辑，可能各个业务的增删改查的处理逻辑不同用户也不太一样。
const jobList = ["admin", "peopel"];
// 这里先模拟用户类型，一般需要后后端去匹配，这里先简单模拟
var strategies = {
  admin: {
    login: function(params) {
      console.log("超级管理员的登录逻辑");
    },
    viewUser: function(params) {
      console.log("超级管理员能够查看网站所有用户");
    }
  },
  people: {
    login: function(params) {
      console.log("普通用户的登录逻辑");
    },
    viewUser: function(params) {
      console.log("普通用户只能查看所有的普通类型用户");
    }
  }
};
function Validator(role, type) {
  this.role = jobList.includes(role) ? role : false; // 用户类型
  this.type = type; // 下一步的处理类型  比如‘login’操作
  // 返回的是管理员类型
  this.task = [];

  this.addAction = type => {
    type.forEach(item => {
      this.task.push(strategies[role][item]);
    });
    return this;
  };

  this.run = () => {
    console.log("task", this.task);
    while (this.task.length) {
      var fn = this.task.shift();

      fn();
    }
  };
}

new Validator("admin").addAction(["login", "viewUser"]).run();
