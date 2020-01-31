// 1.总结http协议 、同源策略、跨域问题

一、同源策略
源（origin）
　　就是协议、域名和端口号。若地址里面的协议、域名和端口号均相同则属于同源。
　　以下是相对于 http://www.a.com/test/index.html 的同源检测：

http://www.a.com/dir/page.html ----成功
http://www.child.a.com/test/index.html ----失败，域名不同
https://www.a.com/test/index.html ----失败，协议不同
http://www.a.com:8080/test/index.html ----失败，端口号不同
同源策略
　　同源策略是浏览器的一个安全功能，不同源的客户端脚本在没有明确授权的情况下，不能读写对方资源。所以a.com下的js脚本采用ajax读取b.com里面的文件数据是会报错的。

不受同源策略限制的
页面中的链接，重定向以及表单提交是不会受到同源策略限制的。
跨域资源的引入是可以的。但是js不能读写加载的内容。如嵌入到页面中的<script src="..."></script>，<img>，<link>，<iframe>等。
二、跨域
跨域
　　只要协议、域名、端口号有一个不同就是跨域。

跨域的原因
　　跨域问题来源于JavaScript的同源策略，即只有 协议+主机名+端口号(如存在)相同，则允许相互访问。为了防止某域名下的接口被其他域名下的网页非法调用，是浏览器对JavaScript施加的安全限制。也就是说JavaScript只能访问和操作自己域下的资源，不能访问和操作其他域下的资源。跨域问题是针对JS和ajax的，html本身没有跨域问题，比如a标签、script标签、甚至form标签（可以直接跨域发送数据并接收数据）等。

三、跨域问题解决方案
jsonp
　　利用script标签可跨域的特点，在跨域脚本中可以直接回调当前脚本的函数。

cors
　　服务器设置HTTP响应头中Access-Control-Allow-Origin值，解除跨域限制。

　　注意：这两个跨域方案都存在一个致命的缺陷，严重依赖后端的协助。

　　下面就介绍一种前端独立就能解决的跨域方案：

反向代理（Reverse Proxy）
　　指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。



// 2.中间件模式（middleware）是一种很常见、也很强大的模式，被广泛应用在 Express、Koa、Redux 等类库和框架当中。模拟一个中间件模式。
// https://blog.csdn.net/duola8789/article/details/85244935