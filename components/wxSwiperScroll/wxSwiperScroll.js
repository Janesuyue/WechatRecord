// components/wxSwiperScroll/wxSwiperScroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTab: 0,
    taskList: [{
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, {
      name: '有趣好玩'
    }, ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e) {
      let currentTab = e.currentTarget.dataset.index
      this.setData({
        currentTab
      })
    },
  }
})