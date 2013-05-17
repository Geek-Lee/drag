drag
====


    缘由：做一件事之前总会问为什么要做这件事；这里就写下来，作为一个前端爱好者，想学习前端就会去关注前端的一些常用效果
    
    第一个当数图片轮播吧！他也很难控制（个人认为）；接下来应该是 Back To Top ,这更简单啦！然后因为设计师的要求我们可能
    
    会为了样式好看开始模拟一些 radio、select等表单控件等等。然后还有很多效果。。。最后就说下 drag 拖动，这个在 ajax in 
    
    action这本书里说是前端最常用，很必须的特效。所以写好他是必要的。而且要多种方式实现它。
    
    方式一：（drag2.html)
    
    很简单直接上代码，封装成一个函数；每次要用到就直接调用函数，把拖拽功能添加到元素上；
    
    方式二：（drag3.html）
    
    这个我想说是直接借鉴 prototype 的，prototype.js 是 jquery 出现最流行的一个 javascript 库来着，现在应该是之一吧！里
    
    面的选择器还 OK 只是没 jquery 那么强大。然后是面向对象这一块的处理（待会 drag 原型那里会介绍到）；然后是 ajax 这一
    
    块的应用，其实 jquery 用起来也是很爽的。最后是另外的一个控件 shcript.aculo.us 这也包含了很多效果。最后回到主题，我
    
    的第二方式就是将 drag 效果声明为一个类。
    
    方式三：（drag4.html）
    
    一直觉得 document.getElementById() 中 getElementById() 这个方法的实现很炫。所以我要自己写一个这样的效果；举例：
    
    var oDiv = document.getElementById('div1'); 然后 oDiv.drag() 就可以实现拖动效果。
    
    方式四：（drag5.html）
    
    jquery 现在很流行，很好用。所以就封装一个 jquery 的方法吧。。。
    
    以上是个人的学习后总结写下 demo 大神看后有什么不对请指教，勿喷哈！！！
