// index.js
// import _ from "lodash";


// 获取应用实例
const app = getApp()

Page({
  data: {
    navigate: () => {
      wx.navigateTo({
        url: '../test/test',
      })
    },
    searchValue: '',
    gridList: [
      // { icon: '', name: '文字', badge: 99, },
      // { icon: '', name: '文字', badge: 1 },
      // { icon: '', name: '文字', badge: 100 },
      // { icon: '', name: '文字' },
      // { icon: '', name: '文字' },
      // { icon: '', name: '文字' },
      // { icon: '', name: '文字' },
      { icon: '', name: '文字' },
      { icon: '', name: '文字' },
      { icon: '', name: '文字' },
      { icon: '', name: '文字' },
      { icon: '', name: '文字' },
      { icon: '', name: '文字' },
      // { icon: '', name: '文字' },
      // { icon: '', name: '文字' },
      // { icon: '', name: '文字' },
    ],
  },
  onLoad() {
    // console.log(_)
    wx.onAppHide(() => {
      console.log('getStorage', wx.getStorageSync('key'))
      if (wx.getStorageSync('key')) {
        wx.setStorageSync('key', "1" + wx.getStorageSync('key'))
      } else {
        wx.setStorageSync('key', "1")
      }
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  handleChange(e) {
    console.log('父组件-bindinput', e.detail.value)
  },
  handleConfirm(e) {
    console.log('父组件-bindconfirm', e.detail.value)
  },
  // 搜索
  handleSearchConfirm(e) {
    console.log('搜索', e.detail.value)
  },

  // 在线问答 清空图标
  clearChange(e) {
    console.log('清空', e.detail.value)
  },
})
