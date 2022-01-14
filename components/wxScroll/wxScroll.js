// components/wxScroll/wxScroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scrollX: { // 允许横向滚动
      type: Boolean,
      value: false
    },
    scrollY: { // 允许纵向滚动
      type: Boolean,
      value: false
    },
    scrollTop: { // 设置竖向滚动条位置
      optionalTypes: [Number, String],
      value: undefined
    },
    scrollLeft: { // 设置横向滚动条位置
      optionalTypes: [Number, String],
      value: undefined
    },
    scrollWithAnimation: { // 在设置滚动条位置时使用动画过渡
      type: Boolean,
      value: false
    },
    enhanced: { // 启用 scroll-view 增强特性，启用后可通过 ScrollViewContext 操作 scroll-view
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
