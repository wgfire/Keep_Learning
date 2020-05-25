import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { AtAvatar, AtFab } from "taro-ui";
import { View, Text } from "@tarojs/components";
import TabBar from "../../components/tabBar/index";
import "./index.scss";

class Details extends Taro.Component {
  render() {
    var config = {
      navigationBarTitleText: "商品详情"
    };
    let [shopData, SetshopData] = Taro.useState({
      value: "list1",
      price: 10,
      select: false,
      desc: "好喝高颜值MEOW莫斯卡托气泡葡萄酒甜型香槟少女粉猫气泡葡萄酒卡托气泡葡萄酒甜型香槟少女粉猫气泡葡萄酒",
      count: 1,
      imgsrc: "https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg"
    });

    return <View>
      <AtAvatar className="eimg" image={shopData.imgsrc} />
      <View className="edesc texthidden">{shopData.desc}</View>
      <View className="etsc">{shopData.desc}</View>

      <View className="sharp">
        <View className="eprice">
          ￥{shopData.price + "-" + shopData.price * 10}
        </View>
        <AtFab>
          <Text className="at-fab__icon" size="normal">分享</Text>
        </AtFab>
      </View>

      <TabBar></TabBar>
    </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Details;