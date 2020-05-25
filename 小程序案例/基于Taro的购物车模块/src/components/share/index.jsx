import Taro, { Component } from '@tarojs/taro'
// 引入对应的组件
import { View, Text, Button, Canvas } from '@tarojs/components'
import './index.scss'
import bg from '../../pages/images/1.jpg'
import qrbg from '../../pages/images/2.jpg'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '分享图'
  }

  /**
  * 初始化信息
  */
  constructor (props) {
  
    this.state = {
      bg:require('../../pages/images/1.jpg'),
      // 是否展示canvas
      isShowCanvas: false
    }
    this.drawImage()
  }


  /**
   * drawImage() 定义绘制图片的方法
   */
  async drawImage () {
    // 创建canvas对象
    let ctx = Taro.createCanvasContext('cardCanvas',this.$scope)
    
    // 填充背景色
    let grd = ctx.createLinearGradient(0, 0, 1, 500)
    grd.addColorStop(0, '#af4225')
    grd.addColorStop(0.5, '#FFF')
    ctx.setFillStyle(grd)
    ctx.fillRect(0, 0, 400, 500)

    ctx.save()
    ctx.beginPath()
    // ctx.arc(160, 86, 66, 0, Math.PI * 2, false)
    // 绘制背景图片
    ctx.arc(160, 88, 66, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()
    ctx.stroke()
    ctx.translate(160, 88)
    ctx.drawImage(this.state.bg, -66, -66, 132, 132)
    ctx.restore()

    // 绘制文字
    ctx.save()
    ctx.setFontSize(15)
    ctx.setFillStyle('#FFF')
    ctx.fillText(this.props.desc, 5, 200)
 

    ctx.restore()

    // 绘制二维码
    
    ctx.drawImage(qrbg, 70, 260, 180, 180)

    // 将以上绘画操作进行渲染
    ctx.draw()
  }

  /**
   * saveCard() 保存图片到本地
   */
  async saveCard () {
    // 将Canvas图片内容导出指定大小的图片
    let res = await Taro.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 400,
      height: 500,
      destWidth: 360,
      destHeight: 450,
      canvasId: 'cardCanvas',
      fileType: 'png'
    },this.$scope)
    let saveRes = await Taro.saveImageToPhotosAlbum({
      filePath: res.tempFilePath
    })
    if (saveRes.errMsg === 'saveImageToPhotosAlbum:ok') {
      Taro.showModal({
        title: '图片保存成功',
        content: '保存成功，快去相册看看吧',
        showCancel: false,
        confirmText: '确认'
      })
    } else {
        Taro.showModal({
        title: '图片保存失败',
        content: '请重新尝试!',
        showCancel: false,
        confirmText: '确认'
      })
    }
  }

  render () {
  
    return (
      <View className='index'>
            <View className="canvas-wrap">
              <Canvas 
                id="card-canvas"
                className="card-canvas"
                style="width: 320px; height: 450px"
                canvasId="cardCanvas" >
              </Canvas>
              <Button onClick={this.saveCard} className="btn-save" type="primary" size="mini">保存到相册</Button>
            </View> 
        
      </View>
    )
  }
}
