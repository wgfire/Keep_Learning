import Taro, { useState } from "@tarojs/taro";
import { AtTabBar } from "taro-ui";

function TobBar() {
  var config = {
    navigationBarTitleText: "购物车"
  };
  let [current, setCurrent] = useState(0);
  function handleClick(value) {
    setCurrent(value);
    if (value == 0) {
      Taro.navigateTo({ url: "/pages/index/index" });
    } else {
      Taro.navigateTo({ url: "/pages/details/index" });
    }
  }
  return (
    <AtTabBar
      fixed
      tabList={[
        { title: "购物车", dot: true },
        { title: "详情" }
        //   { title: '通讯录', dot: true }
      ]}
      onClick={handleClick}
      current={current}
    />
  );
}

export default TobBar;
