// 发布订阅模式
// 场景、假如用户提交了一张订单，那么就有事情搞了，首先要去发送请求告诉后端 数据变了，第二用户的订单记录也要变，第三 审核员那边也要收到对应的通知

// 不慌，这点小需求还是 老夫还是可以镇住，

// function submit(params) {

//    // let reuslt = await ajax('提交了订单')
//     // 1.更新后端 await ajax()
//     //2. 更新界面的订单记录  updata()
//     // 3. 发送消息给审核员  sendMessage()
//     //4.... 持续加需求中
// }

// 如果某个环节出错了 下面的代码就跑不起来了，

// 用发布订阅进行改造，让他去通知所有订阅了成功消息的 实例
// EventEmit.js
const EventEmit = function() {
  // 发布中心
  this.events = {};
  this.on = function(name, cb) {
    if (this.events[name]) {
      this.events[name].push(cb);
    } else {
      this.events[name] = [cb];
    }
  };
  this.emit = function(name, ...arg) {
    if (this.events[name]) {
      this.events[name].forEach(eventListener => {
        eventListener(...arg);
      });
    }
  };
};
let event = new EventEmit();
function submit(params) {
  event.emit("success", "订单已经提交了");
}

// 我需要更新订单 先订阅一个
// a.js
event.on("success", arg => {
  console.log("更新后端值", arg);
});
//b.js
event.on("success", arg => {
  console.log("更新订单界面", arg);
});
// c.js
event.on("success", arg => {
  console.log("发送给审核员", arg);
});

submit();


// 这些处理的逻辑肯定是在不同文件里，通过引入调动中心 就可以触发执行逻辑

