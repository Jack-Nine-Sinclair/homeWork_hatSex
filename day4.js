

// 用自己的话描述js垃圾回收机制

// 垃圾回收机制的触发，总是在内存将近快满的时候，并会暂停正常代码的执行，等待回收完毕后，继续执行后续代码；垃圾回收规则，全局变量不回收，局部变量失去引用回收（未释放的闭包不做回收）。

// 工作流程：
// 1.    垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记。
// 2.    去掉环境中的变量以及被环境中的变量引用的变量的标记。
// 3.    再被加上标记的会被视为准备删除的变量。
// 4.    垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间。
    
    

// 3.深入理解this执行
function Foo() {
    getName = function() { alert(1); }
    return this
}
Foo.getName = function() { alert(2); }
Foo.prototype.getName = function() { alert(3); }
var getName = function() { alert(4); }

function getName() { alert(5); }

// 输出值？ 请写出原因
Foo.getName();//2
getName();//4
Foo().getName();//1
getName();//1
new Foo.getName()//2
new Foo().getName()//3
new new Foo().getName()//3


// 4. 重绘和回流（重排）的区别和关系 用自己的话描述

// 当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流。每个页面至少需要一次回流，就是在页面第一次加载的时候。
// 当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘。
// 注：回流必将引起重绘，而重绘不一定会引起回流。
// 回流即是将整个所有的页面全部重新渲染，而重绘只修改其中的一部分