

Day 10 react&vue

简述react和vue的区别

React 和Vue是现在主流的两个框架（相对来说angular用的已经少了）
两者的区别体现在以下方面
相同点：
1、react和vue都支持服务端渲染
2、都有虚拟DOM，组件化开发，通过props传参进行父子组件数据的传递
3、都是数据驱动视图
4、都有支持native的方案（react的react native，vue的weex）
5、都有状态管理（react有redux，vue有vuex）

不同点：
1、react严格上只能算是MVC的view层，vue则是MVVM模式
2、虚拟DOM不一样，vue会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树
而对于react而言，每当应用的状态被改变时，全部组件都会重新渲染，所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制
3、组件写法不一样，react推荐的做法是JSX+inline style,也就是把HTML和CSS全都写进javaScript了
4、数据绑定：vue实现了数据的双向绑定，react数据流动是单向的
5、state对象在react应用中是不可变的，需要使用setState方法更新状态
在vue中，state对象不是必须的，数据有data属性在vue对象中管理


	简述spa，spa实现原理
1.监听地址栏中hash变化驱动界面变化
2.用pushsate记录浏览器的历史，驱动界面发送变化
3.直接在界面用普通事件驱动界面变化
前两种方式较为普遍，因为它们的变化记录浏览器会保存在history中，可以通过回退/前进按钮找回，或者history对象中的方法控制。最后一种方法是用普通事件驱动的，没有改变浏览器的history对象，所以一旦用户按了返回按钮将会退到浏览器的主界面。所以，一般采用前两种方式。值得一提的是，在不支持hash监听和pushsate变化的浏览器中可以考虑用延时函数，不停得去监听浏览器地址栏中url发生的变化，从而驱动界面变化。


