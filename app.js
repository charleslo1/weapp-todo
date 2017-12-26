import storeManager from './store/storeManager'
import todoStore from './store/todoStore'

//app.js
App({
  onLaunch: function () {
    // 读取数据
    storeManager.read()

    // 获取用户信息
    wx.getUserInfo({
      success: (res) => {
        // 可以将 res 发送给后台解码出 unionId
        this.globalData.userInfo = res.userInfo
      }
    })
  },

  globalData: {
    userInfo: null
  },

  /**
   * 小程序隐藏事件
   */
  onHide() {
    storeManager.save()
  },

  /**
   * 小程序错误事件
   */
  onError() {
    storeManager.save()
  }
})