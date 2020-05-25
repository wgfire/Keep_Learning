import Taro, { useState, useRef, useEffect } from "@tarojs/taro";
import { View, ScrollView, Text } from "@tarojs/components";
import "./index.scss";
import TabBar from "../../components/tabBar/index";
import ShopList from "../../components/shopList/index";
import { AtToast } from "taro-ui";

function Index() {
  var config = {
    navigationBarTitleText: "购物车"
  };

  const childRef = useRef(); // 组件实例
  const childRefs = useRef();
  let [selectAll, setSelectAll] = useState(false);
  let [count, setCount] = useState(0);
  let [text, setText] = useState("结算"); // 结算还是删除
  let [isopen, setOpen] = useState(false);
  let [type, setType] = useState(true); // 编辑状态还是完成状态
  let [checkCount, setCheckCount] = useState(new Map());
  let [shopdata, setShopData] = useState([]);
  let [checkData, setCheckData] = useState([
    [
      {
        value: "all",
        label: "法国banrock酒庄",
        select: false
      },
      {
        value: "list1",
        price: 10,
        select: false,
        desc: "好喝高颜值MEOW莫斯卡托气泡葡萄酒甜型香槟猫气泡葡萄酒",
        count: 1,
        loacsrc: "../../pages/images/1.jpg",
        imgsrc:
          "https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg"
      },
      {
        value: "list2",
        price: 10,
        select: false,
        count: 1,
        loacsrc: "/pages/images/气泡酒.jpg",
        desc: "好喝高颜值MEOW莫斯卡托气泡葡萄酒甜型高酒",
        imgsrc:
          "https://img.alicdn.com/bao/uploaded/i4/2200532948542/O1CN010C8TEG2CyHkQcAXVF_!!2200532948542.jpg"
      }
    ],
    [
      {
        value: "all",
        label: "小西瓜之家",
        select: false
      },
      {
        value: "list3",
        price: 10,
        select: false,
        desc: "中国各地栽培，品种甚多，外果皮、果肉及种子形式多样，。",
        count: 1,
        loacsrc: "../../pages/images/西瓜.jpg",
        imgsrc:
          "https://img.alicdn.com/bao/uploaded/i2/2206373039443/O1CN01GaQsvt2JcweBrImA6_!!2206373039443.jpg"
      },
      {
        value: "list4",
        price: 25,
        select: false,
        count: 1,
        loacsrc: "../../pages/images/西瓜.jpg",
        desc: "西瓜为夏季之水果，果肉味甜，能降温去暑；种子含油，可作。",
        imgsrc:
          "https://img.alicdn.com/bao/uploaded/i2/2206373039443/O1CN01GaQsvt2JcweBrImA6_!!2206373039443.jpg"
      }
    ]
  ]);
  useEffect(() => {
    setCheckData(checkData);
  }, [checkData]);

  const scrollStyle = {
    height: "90vh"
  };
  const scrollTop = 0;
  const Threshold = 20;

  function addCheckData(arr, shopkey) {
    // 给父组件传递选中的选项
    let map = checkCount;
    map.set(shopkey, arr);

    setCheckCount(map);
    console.log(checkCount, "checo");
    return new Promise((resolve, reject) => {
      let countData = [];
      for (let [key, value] of map.entries()) {
        let selectData = value.filter(el => {
          return el.select == true;
        }); // 只有选中的才计算价格
        console.log("select", selectData);
        countData = countData.concat(selectData);
      }
      resolve(countData);
    }).then(res => {
      setShopData(res); // 当前用户勾选的商品
      getCount(res);
    });
  }

  function getCount(countData) {
    // 获取金额
    let result = 0;
    if (countData.length > 0) {
      let value = {};
      for (value of countData) {
        console.log(value);
        result += value.price * value.count;
      }

      console.log("金额", result);
    }

    setCount(result);
  }
  function ischeckAll(params) {
    // 所有商品全选状态
    let flage = !selectAll;
    setSelectAll(!selectAll);

    childRef.current.isCheckAll(flage);
    childRefs.current.isCheckAll(flage);
  }
  function handClickText() {
    // 点击结算/删除的处理事件
    if (type) {
      //完成状态为结算
      setOpen(!isopen);
    } else
      [
        // 删除数据
        deleteShopData()
      ];
  }
  function deleteShopData() {
    // 切换为编辑状态为删除
    let datashop = shopdata;
    let datacheck = checkData;
    datashop.forEach(el => {
      datacheck.forEach(els => {
        els.forEach((item, index) => {
          if (item.value == el.value) {
            console.log(index, "删除");
            els.splice(index, 1);
          }
        });
      });
    });

    datacheck.forEach(el => {
      if (el[0].value == "all" && el.length == 1) {
        el.splice(0, 1);
      }
    });

    setCheckData(datacheck);
    console.log("新数据", checkData);
    getCount(0); // 删除完清空数据
    setShopData([]);
  }
  return (
    <View className="index">
      <ScrollView
        className="scrollview"
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
      >
        <View
          className="text_right"
          onClick={() => {
            setType(!type);
          }}
        >
          {type ? "编辑" : "完成"}
        </View>
        {checkData.length > 0 ? (
          checkData.map((el, index) => {
            return (
              <ShopList
                checkboxOption={el}
                addCheckData={addCheckData}
                cRef={index == 0 ? childRef : childRefs}
                Shopkey={index}
              ></ShopList>
            );
          })
        ) : (
          <View>购物车里都是空的哦</View>
        )}

        {/* <ShopList checkboxOption={checkData.concat()} addCheckData={addCheckData} Shopkey="2"></ShopList> */}

        <View className="footer">
          <View className="footer_left">
            <View
              onClick={ischeckAll}
              className={[
                "at-icon at-icon-check-circle item-icon",
                selectAll ? "selectIcon" : ""
              ].join(" ")}
            ></View>
            全选
          </View>
          <View className="footer_right">
            {type ? (
              <Text>
                总计<Text className="count">￥ {count}</Text>
              </Text>
            ) : (
              <Text>
                已勾选<Text className="count"> {shopdata.length}</Text>
              </Text>
            )}

            <View className="btn" onClick={handClickText}>
              {type ? "结算" : "删除"}
            </View>
            <AtToast
              isOpened={isopen}
              onClose={() => {
                setOpen(false);
              }}
              text={
                shopdata.length > 0
                  ? `付款总金额为:${count}`
                  : "您没有勾选任何商品"
              }
              status={shopdata.length > 0 ? `success` : "error"}
            ></AtToast>
          </View>
        </View>
      </ScrollView>

      <TabBar></TabBar>
    </View>
  );
}

export default Index;
