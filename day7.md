// 1.简述webpack模块打包原理
001.谈谈你对webpack的看法:
webpack是一个模块打包工具，可以使用它管理项目中的模块依赖，并编译输出模块所需的静态文件。它可以很好地管理、打包开发中所用到的HTML,CSS,JavaScript和静态文件（图片，字体）等，让开发更高效。对于不同类型的依赖，webpack有对应的模块加载器，而且会分析模块间的依赖关系，最后合并生成优化的静态资源。

002.webpack的基本功能和工作原理？
代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等等

文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等

代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载

模块合并：在采用模块化的项目有很多模块和文件，需要构建功能把模块分类合并成一个文件

自动刷新：监听本地源代码的变化，自动构建，刷新浏览器

代码校验：在代码被提交到仓库前需要检测代码是否符合规范，以及单元测试是否通过

自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。

003.webpack构建过程：
从entry里配置的module开始递归解析entry依赖的所有module,
每找到一个module，就会根据配置的loader去找对应的转换规则。
对module进行转换后，再解析出当前module依赖的module
这些模块会以entry为单位分组，一个entry和其所有依赖的module被分到一个组Chunk。
最后webpack会把所有Chunk转换成文件输出
在整个流程中webpack会在恰当的时机执行plugin里定义的逻辑

004.webpack打包原理:
将所有依赖打包成一个bundle.js，通过代码分割成单元片段按需加载。

005.什么是entry,output?
entry 入口，告诉webpack要使用哪个模块作为构建项目的起点，默认为./src/index.js

output 出口，告诉webpack在哪里输出它打包好的代码以及如何命名，默认为./dist

006.什么是loader，plugins?
loader是用来告诉webpack如何转换某一类型的文件，并且引入到打包出的文件中。

plugins(插件)作用更大，可以打包优化，资源管理和注入环境变量

007.什么是bundle,chunk,module?
bundle是webpack打包出来的文件，chunk是webpack在进行模块的依赖分析的时候，代码分割出来的代码块。module是开发中的单个模块

008.npm打包时需要注意哪些？如何利用webpack来更好的构建？
完善基本信息;
定义依赖;
忽略文件;
打标签;

009.有哪些常见的Loader？他们是解决什么问题的？
file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件;

url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去;

source-map-loader：加载额外的 Source Map 文件，以方便断点调试;

image-loader：加载并且压缩图片文件;

babel-loader：把 ES6 转换成 ES5;

css-loader：加载 CSS，支持模块化、压缩、文件导入等特性;

style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS;

eslint-loader：通过 ESLint 检查 JavaScript 代码;

010.webpack规范:
webpack默认遵循commonjs规范 module.exports
使用webpack进行打包时有两种模式：
开发模式：主要是用于测试,代码调试等;
生产模式：要考虑性能问题,要压缩 如果没有插件 就不会压缩;
默认情况下webpack的配置文件叫webpack.config.js，可以通过--config指定webpack的配置文件名

011.配置流程：
你可以尝试配置脚手架吗?可以

012.loader:
css需要两个loader来处理：css-loader style-loader

postcss-loader 他提供了一种方式用 JavaScript 代码来处理 CSS。它负责把 CSS

代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理。

-webkit-transform: rotate(45deg);

transform: rotate(45deg);

mini-css-extract-plugin

以前都是之间引入内部样式，把css专门打包成一个css文件，在index.html文件中引入css

optimize-css-assets-webpack-plugin css压缩
terser-webpack-plugin css压缩 js不能压缩了,然后有一个插件,能压缩js
file-loader 是让webpack打包图片
url-loader可以让图片转化base64，也可以让webpack打包图片

webpack 默认情况下不支持js的高级语法,所以需要使用babel;
babel转化; npm i @babel/core @babel/preset-env babel-loader --save-dev

013.plugins:
html-webpack-plugin 根据模块生成一个html文件 此时不会在dist文件夹下面新建index文件了
我需要在public新建 index文件
根据这个模板文件 在内存中生成 index.html 然后自动引入bundle.js
clean-webpack-plugin 去掉没有用到的模块

014.loader与plugin的区别？
loader是使webpack拥有加载和解析非js文件的能力
plugin 可以扩展webpack的功能，使得webpack更加灵活。可以在构建的过程中通过webpack的api改变输出的结果