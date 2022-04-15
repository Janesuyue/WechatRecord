// components/wxGrid/wxGrid.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    gridList: {
      type: Array,
      value: []
    },
    columnNum: {
      type: Number,
      value: 4
    },
    rowNum: {
      type: Number,
      value: 2
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperList: [],
    swiperHeight: undefined,
    gridTemplateColumns: undefined,
  },

  observers: {
    'gridList': function(value) {
      let { columnNum, rowNum } = this.data;
      let pageSize = columnNum * rowNum;
      let newGridList = [...value];
      let swiperList = [];

      for (let i = 0; i < value.length / pageSize; i++) {
        let list = newGridList.splice(0, pageSize)
        let gridTemplateColumn = new Array(this.properties.columnNum).fill('auto').join(' ')
        if (list.length < columnNum) {
          gridTemplateColumn = new Array(this.properties.columnNum + columnNum - list.length).fill('auto').join(' ')
        }
        swiperList.push({
          columns: gridTemplateColumn,
          list: list
        })
      }
      this.setData({
        swiperList: swiperList
      })
    },
    'columnNum': function(value) {
      this.setData({
        gridTemplateColumns: new Array(value).fill('auto').join(' ')
      })
    }
  },

  lifetimes: {
    attached: function () {
      this.setData({
        gridTemplateColumns: new Array(this.properties.columnNum).fill('auto').join(' ')
      })
      const query = wx.createSelectorQuery().in(this)
      query.select('.grid_main').fields({
        node: true,
        size: true,
        rect: true
      }).exec(res => {
        if (res) {
          this.setData({
            swiperHeight: res[0].height
          })
        }
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
