import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { AtTabBar } from "taro-ui";

class TobBar extends Taro.Component {
  render() {
    var config = {
      navigationBarTitleText: "购物车"
    };
    let [current, setCurrent] = Taro.useState(0);
    function handleClick(value) {
      setCurrent(value);
      if (value == 0) {
        Taro.navigateTo({ url: "/pages/index/index" });
      } else {
        Taro.navigateTo({ url: "/pages/details/index" });
      }
    }
    return <AtTabBar fixed tabList={[{ title: "购物车", dot: true }, { title: "详情"
      //   { title: '通讯录', dot: true }
    }]} onClick={handleClick} current={current} />;
  }

}

export default TobBar;