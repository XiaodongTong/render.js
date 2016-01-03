# render.js
轻量级前端模板引擎

1.导入：该项目依赖于jquery
使用前需要引入jquery。
 <script src="js/jquery.js"></script>
 <script src="js/render.min.js"></script>
2.html 模板包含在type='text/html'中的script标签中。
    <!--html模板-->
    <script id="template" type="text/html">
        <li>
            <span>[name]</span>
           <span>[age]</span>
            <span>[desc]</span>
        </li>
    </script>
    
3.生成好的列表数据可以放到任意一个容器中，div，ul都行。
如果列表需要一个头部，推荐这个容器这样写。
    <!--需要加载数据的列表-->
    <ul id="list">
        <li id="head">
            <span>名称</span>
            <span>年龄</span>
            <span>描述</span>
        </li>
    </ul>
4.调用render方法的demo。
 可以在ajax的回调函数中调用该方法
   $(function () {
       //需要加载的数据
       var data = [{ name: '小王', age: 15 }, { name: '小李', age: 16 }, { name: '小赵', age: 14 }];
            
       $('#list').render({
             template:  $('#template').html(),//模板html
             data: data, //json数据
             head: $('#head'), //列表头部的jquery dom对象 （此项可以不写）
             extend: function (data) {  //每项数据 扩展判断 （此项可以不写）
                var _desc = data.age > 15 ? '<span>高年级</span>' : '<span>底年级</span>';
                return [{ desc: _desc }];
            }
        });
    })
 
 
 
