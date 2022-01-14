// components/wxInput/wxInput.js
Component({
  // externalClasses: ["input-class"], // 外部样式类
  options: {
    multipleSlots: true, // 开启多功能插槽
  },
  /**
   * 组件的属性列表
   */
  properties: {
    value: { // 输入框的初始内容
      type: String,
      value: undefined
    },
    type: { // input 的类型
      type: String,
      value: 'text'
    },
    password: { // 是否是密码类型
      type: Boolean,
      value: false
    },
    placeholder: String, // 输入框为空时占位符
    placeholderStyle: String, // 指定 placeholder 的样式
    placeholderClass: { // 指定 placeholder 的样式类
      type: String,
      value: 'input-placeholder'
    },
    disabled: { // 是否禁用
      type: Boolean,
      value: false
    },
    maxlength: { // 最大输入长度，设置为 -1 的时候不限制最大长度
      type: Number,
      value: 140
    },
    focus: { // 获取焦点
      type: Boolean,
      value: false
    },
    confirmType: { // 设置键盘右下角按钮的文字，仅在type='text'时生效
      type: String,
      value: 'done'
    },

    // 以下为自定义属性
    style: String, // 通过style设置 wxInput 输入的样式
    className: String, // 通过自定义className设置wxInput组件的样式
    inputStyle: String, // 通过style设置input 输入的样式
    inputClass: String, // 指定 input 的样式类
    allowClear: { // 可以点击清除图标删除内容
      type: Boolean,
      value: false
    },
    navigate: { // 通过navigate属性可设置跳转链接，获取焦点时跳转到对应的页面, 也可以传入一个函数(自定义跳转方式)
      type: String,
      optionalTypes: [Function],
      value: undefined
    },
    clearStyle: { // 可通过clearStyle自定义清空图标样式(通过背景图可替换清空图标)
      type: String,
      value: undefined
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: undefined, // input框初始值
    inputFocus: false, // input 获取焦点
    isAllowClear: false, // 判断是否显示清空按钮
    clearIcon: "background-image: url('https://infinity-green.sciicloud.com/prd-infinity/0da5fc1dba3346be82af28300b84f88f/material/a1ea7e188ed549c58898ab1daf382825.png');", // 默认清空按钮图标
  },

  /**
   * 组件数据字段监听器
   * 监听 properties 和 data 的变化
   */
  observers: {
    'value': function(val) {
      this.setData({
        inputValue: val
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 键盘输入时触发
    _bindinput(e) {
      // console.log('bindinput', e)
      this.triggerEvent('change', {
        value: e.detail.value,
        e: e
      })
    },
    // 输入框聚焦时触发
    _bindfocus(e) {
      console.log('bindfocus-聚焦', e)
      this.setData({
        isAllowClear: true
      })
      if (this.properties.navigate) {
        if (this.properties.navigate instanceof Function) {
          this.properties.navigate();
          return;
        }
        if (typeof this.properties.navigate === 'string') {
          wx.navigateTo({
            url: this.properties.navigate,
          })
          return;
        }
      }
      this.triggerEvent('focus', {
        value: e.detail.value,
        e: e
      })
    },
    // 输入框失去焦点时触发
    _bindblur(e) {
      console.log('bindblur-失去焦点', e)
      this.setData({
        isAllowClear: false
      })
      this.triggerEvent('blur', {
        value: e.detail.value,
        e: e
      })
    },
    // 点击完成按钮时触发
    _bindconfirm(e) {
      // console.log('bindconfirm', e)
      this.triggerEvent('confirm', {
        value: e.detail.value,
        e: e
      })
    },
    // 点击清空按钮, 清空输入框的值
    _bindClear(e) {
      console.log('点击清空图标')
      this.setData({
        inputValue: ''
      })
      setTimeout(() => {
        this.setData({
          inputFocus: true
        })
      }, 200)
      // 输入框值变化监听事件
      this.triggerEvent('change', {
        value: '',
      })
      // 点击清空图标监听事件
      this.triggerEvent('clearChange', {
        value: '',
      })
    }
  }
})
