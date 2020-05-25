import Taro, { useState, useEffect } from "@tarojs/taro";
import { AtAvatar, AtFab, AtFloatLayout } from "taro-ui";
import { View, ScrollView, Text,Image } from "@tarojs/components";
import TabBar from "../../components/tabBar/index";
import "./index.scss";
import Share from "../../components/share";
function Details(props) {
  var config = {
    navigationBarTitleText: "商品详情"
  };
  useEffect(() => {
    console.log(this.$router.params, "props");
    
  }, []);

  let [shopData, SetshopData] = useState(this.$router.params);
  let [isopen, Setopen] = useState(false);

  return (
    shopData['desc']?
    <View>
      <Image className="eimg" src={shopData.imgsrc} />
      <View className="edesc texthidden">{shopData.desc}</View>
      <View className="etsc">{shopData.desc}</View>

      <View className="sharp">
        <View className="eprice">
          ￥{shopData.price + "-" + shopData.price * 10}
        </View>
        <AtFab>
          <Text
            className="at-fab__icon"
            size="normal"
            onClick={() => {
              Setopen(true);
            }}
          >
            分享
          </Text>
        </AtFab>
      </View>

      {isopen ? <Share desc={shopData.desc} locasrc={shopData.locasrc}></Share> : ""}

      <TabBar></TabBar>
    </View>:(<View>请点击购物车里的图片进入</View>)
  );
}

export default Details;
