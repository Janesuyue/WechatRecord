# 微信小程序

## 自定义组件
### 父组件影响子组件样式篇
#### 方法一
借助微信小程序中的组件样式隔离, 详情请点击 [styleIsolation](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)方法查看

子组件
wxInput.json
```
{
  "component": true,
  "styleIsolation": "apply-shared",
  "usingComponents": {}
}
```

wxInput.wxml
```
<view class="{{className}}">
  <input />
</view>
```

wxInput.js
```
Component({
  properties: {
    className: {
      type: String,
      value: ''
    }
  }
})
```

父组件
index.json
```
{
  "usingComponents": {
    "wxInput": "../../components/wxInput/wxInput"
  }
}
```

index.wxml
```
<view>
  <wxInput className="wxInput"/>
</view>
```

index.wxss
```
.wxInput {
  background-color: #4289FE;
  border-radius: 5px;
  height: 80rpx !important;
}
```

#### 方法二
借助微信小程序中的外部样式类, 详情请点击 [externalClasses](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E5%A4%96%E9%83%A8%E6%A0%B7%E5%BC%8F%E7%B1%BB)方法查看

子组件
wxInput.wxml
```
<view class="input-class">
	<input />
</view>
```

wxInput.js
```
Component({
	externalClasses: ["input-class"]
})
```

父组件
index.json
```
{
  "usingComponents": {
    "wxInput": "../../components/wxInput/wxInput"
  }
}
```

index.wxml
```
<view>
  <wxInput input-class="wxInput" />
</view>
```

index.wxss
```
.wxInput {
  background-color: #4289FE;
  border-radius: 5px;
  height: 80rpx !important;
}
```
