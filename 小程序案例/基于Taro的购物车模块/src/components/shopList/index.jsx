import Taro, { useState, useEffect, useImperativeHandle } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import {  AtAvatar, AtInputNumber } from "taro-ui";
import "./index.scss";

function ShopList(props) {
  let [checkboxOption, setCheckboxOption] = useState(props.checkboxOption);

  let [statu, setStatu] = useState(false); // 全选或者反选
  useEffect(() => {
    // setStatu(statu);
    setCheckboxOption(props.checkboxOption)
    emitData();
  }, [checkboxOption]);

  useImperativeHandle(props.cRef, () => ({
    // changeVal 就是暴露给父组件的方法
    isCheckAll: flag => {
      isCheckAll(flag)
    }
  }));
  function emitData(params) {
    //console.log(checkboxOption,'xxx');
    props.addCheckData(checkboxOption.slice(1), props.Shopkey);
  }

  function isCheckAll(flag) {
    // 是否全选
    let status = flag
    setStatu(flag)
    
    let data = checkboxOption.map(el => {
      el.select = status;
      return el;
    });
    setCheckboxOption(data);
  }
  function handleChangCount(value, el, e) {
    if (value) {
      el.select = true;
      el.count = value;
      console.log("数字", value, el, e);
      changeCheckOption(el);
    } else {
      e.stopPropagation(); // 阻止合冒泡
      return false;
    }
  }

  function changeStatu(el) {
    // console.log(el);
    el.select = !el.select;
    changeCheckOption(el);
  }
  function changeCheckOption(el) {
    // 给指定的选项更新状态
    let checkboxOptions = checkboxOption.slice(0);
    checkboxOptions.forEach(element => {
      if (el.value === element.value) {
        element = el;
      }
    });
    setCheckboxOption(checkboxOptions);

    let isall = checkboxOption.slice(1).every(el => {
      return el.select === true;
    });
    console.log(isall, "isall");

    isall ? setStatu(true) : setStatu(false); // 全部选择 则全选状态
  }
  function detailShop(el){
    // 进入到商品详情
    let parms = `locasrc=${el.loacsrc}&&desc=${el.desc}&&price=${el.price}&&imgsrc=${el.imgsrc}`
    Taro.navigateTo({ url: "/pages/details/index?"+parms });

  }
  return (
    <View className="shopList">
      {
        props.checkboxOption[0]?( <View className="head" onClick={()=>{isCheckAll(!statu)}}>
        <View
          className={[
            "at-icon at-icon-check-circle",
            statu ? "selectIcon" : ""
          ].join(" ")}
        ></View>
        <Text className="typeName">{props.checkboxOption[0].label}</Text>
      </View>):(<Text>暂无数据</Text>)
      }
      <View className="content">
        {props.checkboxOption.slice(1).map(el => {
          return (
            <View className="content_item" key={el.value}>
              <View className="item_left">
                <View
                  onClick={() => {
                    changeStatu(el);
                  }}
                  className={[
                    "at-icon at-icon-check-circle item-icon",
                    el.select ? "selectIcon" : ""
                  ].join(" ")}
                ></View>
                <Image className="img" src={el.imgsrc} onClick={()=>{detailShop(el)}} />
              </View>
              <View className="item_right">
                <View>
                  <Text className="desc">{el.desc}</Text>
                  <Text className="desc tsc">{el.desc}</Text>
                  <View className="item_footer">
                    <Text className="price">￥{el.price}</Text>
                    <View className="oprtion">
                      <AtInputNumber
                        min={1}
                        max={100}
                        step={1}
                        value={el.count}
                        onChange={(value, e) => {
                          handleChangCount(value, el, e);
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default ShopList;

// import Taro from "@tarojs/taro";
// import { View } from "@tarojs/components";
// import { AtCheckbox } from "taro-ui";
// export default class Index extends Taro.Component {
//   constructor() {
//     super(...arguments);
//     this.state = {
//       checkedList: [],
//       checkArray: [],
//       statu: false // 全选的状态
//     };
//     this.checkboxOption = this.props.checkboxOption;
//     this.getCheckArray();
//   }
//   getCheckArray() {
//     let data = [];
//     this.checkboxOption.forEach(element => {
//       data.push(element.value);
//     });

//     this.state.checkArray = data;
//      console.log(this.state.checkArray, "data");
//   }
//   handleChange(value) {
//     // this.setState({
//     //   checkedList: value
//     // });
//     if (value[0] == "all") {
//       // 如果点击的是全选值

//       this.setState({
//           statu:!this.state.statu
//       })

//     } else {
//       value.length == this.checkboxOption.length - 1
//         ? (this.state.statu = true)
//         : (this.state.statu = false);
//     }

//     //setCheckedList(value)
//     this.handleSetcheck(value);
//   }
//   handleSetcheck(arr) {
//     console.log("stat", this.state.statu);
//     if (this.state.statu) {
//         this.setState({
//             checkedList:this.state.checkArray
//         })
//     //   ( this.state.checkedList=this.state.checkArray); // 全选为真 全部打勾

//        console.log('check',this.state.checkedList);

//     } else {
//       this.state.checkedList = arr.filter(el => {
//         return el != "all";
//       });
//     }
//   }
//   render() {
//     return (
//       <View className="shopList">
//         <View className="head"></View>
//         <AtCheckbox
//           options={this.checkboxOption}
//           selectedList={this.state.checkedList}
//           onChange={this.handleChange.bind(this)}
//         />
//       </View>
//     );
//   }
// }
