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
    }
  },
  onLoad() {
    // console.log(_)
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
