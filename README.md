# fullpage

fullpage in vue.js

## 安装
npm install vue-fullpages --save

## 使用

```javascript
import fullpage from 'vue-fullpages'
components:{
 fullpage
}
```

```html
<fullpage>
	<div>
	...<!--这里放单张整页代码-->
	</div>
	<div>
	...<!--这里放单张整页代码-->
	</div>
</fullpage>
```

## 参数
```html
<fullpage :isScroll='true'>
	<!-- 所有参数按此逻辑传递-->
</fullpage>
```
##### isScroll
	是否显示滚动条 布尔值 默认true显示
##### scrollTime
	滚动开始到结束时间 数字 默认 500ms
##### isDots
	滚动导航 仅在没有滚动条是可选择 布尔值 默认false不显示

## 回调
```html
<fullpage :currentPage='currentIndex'>
	<!-- 所有回调按此逻辑传递, currentIndex为你定义的回调函数名-->
</fullpage>

methods:{
	currentIndex(page) {
		// page为回调的值
	}
}
```
#### currentPage
	当前位置返回值 数字 @currentPage回调
#### path
	返回向上或向下滚动方向 布尔值 向上为false 向下为true
#### maxPage
	返回整个页面最大页数 数字
