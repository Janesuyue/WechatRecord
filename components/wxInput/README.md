####  wxInput 使用方法

> 属性方法
|		参数		   					|		类型	               |		默认值		          |	  说明	                                                                          
|		value								|	   String             |						            |   输入框的内容
|		type								|	   String             |		text		            |   input 的类型
|		password						|    Boolean            |		false		            |   是否是密码类型
|		placeholder					|	   String             |						            |   输入框为空时占位符
|		placeholderStyle		|    String             |						            |   指定 placeholder 的样式
|		placeholderClass		|	   String             |		input-placeholder   |   指定 placeholder 的样式类
|		disabled						|	   Boolean            |		false			          |   是否禁用
|		maxlength						|	   Number             |	  140			            |   最大输入长度，设置为  -1 的时候不限制最大长度
|		focus								|	   Boolean            |		false			          |   获取焦点
|		confirmType					|	   String             |		done	              |   设置键盘右下角按钮的文字，仅在type='text'时生效
|		style								|	   String             |						            |   通过style设置 wxInput 输入的样式
|		className						|	   String             |						            |   通过自定义className设置wxInput组件的样式
|		inputStyle					|	   String             |						            |   通过style设置 input 输入的样式
|		inputClass					|	   String             |						            |   指定 input 的样式类
|		allowClear					|	   Boolean            |		false		            |   可以点击清除图标删除内容
|		navigate						|	   String, Function   |						            |   通过navigate属性可设置跳转链接，获取焦点时跳转到对应的页面, 也可以传入一个函数(自定义跳转方式)
|		clearStyle					|	   String             |						            |   可通过clearStyle自定义清空图标样式(通过背景图可替换清空图标)

> 事件
|		参数		       |		类型	          |		默认值     |	  说明
|   change        |    function(e)    |             |     键盘输入时触发
|   focus         |    function(e)    |             |     输入框聚焦时触发
|   blur          |    function(e)    |             |     输入框失去焦点时触发
|   confirm       |    function(e)    |             |     点击完成按钮时触发
|   clearChange   |    function(e)    |             |     点击清空图标监听事件

> slot 插槽
|		参数		   |		类型	  |		默认值    |	  说明
|   prefix    |    node   |            |    可自定义input前缀
|   suffix    |    node   |            |    可自定义input后缀

> 示例代码
index.wxml
```
<!-- 直接传入跳转跳转地址, 可通过navigate进行跳转 -->
<wxInput 
  className="wxInput" 
  style="color: #FFFFFF"
  value="123456"
  placeholder="请输入标题名称进行搜索" 
  placeholderStyle="color: rgba(255, 255, 255, .7)" 
  allowClear
  bindchange="handleChange"
	navigate="../test/test"
></wxInput>

<!-- navigate传递一个函数，可自定义跳转形式 -->
<wxInput 
  className="wxInput" 
  style="color: #FFFFFF"
  value="123456"
  placeholder="请输入标题名称进行搜索" 
  placeholderStyle="color: rgba(255, 255, 255, .7)" 
  allowClear
  bindchange="handleChange"
	navigate="{{navigate}}"
></wxInput>

<!-- 通过prefix和suffix自定义input输入框前后缀 -->
<wxInput 
  className="wxInput" 
  style="color: #FFFFFF"
  value="123456"
  placeholder="请输入标题名称进行搜索" 
  placeholderStyle="color: rgba(255, 255, 255, .7)" 
  allowClear
  bindchange="handleChange"
>
	<view slot="prefix">prefix</view>
	<view slot="suffix">suffix</view>
</wxInput>
```

index.js
```
Page({
  data: {
    navigate: () => {
      wx.navigateTo({
        url: '../test/test',
      })
    }
  }
})
```