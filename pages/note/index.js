// pages/note/list.js
import Note from '../../models/Note'
import noteStore from '../../store/noteStore'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 笔记列表
    notes: [],

    // 是否动画延迟
    delay: true
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    // 为了新建后列表能更新，此逻辑必须写在 onShow 事件
    this.syncData()
  },

  /**
   * 分享
   */
  onShareAppMessage: function (options) {

  },

  /**
   * 同步数据
   */
  syncData() {
    this.data.notes = noteStore.getNotes()
    this.update()
    // 动画结束后取消动画队列延迟
    setTimeout(() => {
      this.update({ delay: false })
    }, 2000)
  },

  /**
   * 懒人函数--更新数据
   */
  update(data) {
    data = data || this.data
    this.setData(data)
  },

  // 点击事件
  handleTap (e) {
    // 判断锁
    if (this.disableTap) return
    // 在这里执行点击事件
  },

  // 长按事件
  handleLongtap (e) {
    // 加锁 tap 事件
    this.disableTap = true
    // 在这里执行长按操作
  },

  // Touch End 事件
  handleTouchEnd() {
    // 解锁 tap 事件
    setTimeout(() => this.disableTap = false, 300)
  },

  /**
   * 新建按钮点击事件
   */
  handleAddNote() {
    wx.navigateTo({
      url: '../note/create'
    })
  }
})