# render.js
轻量级前端模板引擎

1.使用前需要引入jquery
<script src="js/jquery.js"></script>
<script src="js/render.min.js"></script>

2.模板需要包含在<scripttype="text/html">
    <script id="template" type="text/html">
        <li>
            <span>[name]</span>
            <span>[age]</span>
            <span>[desc]</span>
        </li>
    </script>
数据字段包含在“[]”中。

3.在html中事先定义好展示数据的“容器”。
<!--需要加载数据的列表-->
    <ul id="list">
        <li id="head">
            <span>名称</span>
            <span>年龄</span>
            <span>描述</span>
        </li>
    </ul>
如果需要，可以事先好头部。

4.调用render方法案例，可以写在ajax方法中。
<script type="text/javascript">
        $(function () {
            //需要加载的数据，
            var data = [{ name: '小王', age: 15 }, { name: '小李', age: 16 }, { name: '小赵', age: 14 }];

            $('#list').render({
                template:  $('#commentTemplate').html(),//模板html
                data: data, //json数据
                head: $('#head'), //列表头部的jquery dom对象 （此项可以不写）
                extend: function (data) {  //每项数据 扩展判断 （此项可以不写）
                    var _desc = data.age > 15 ? '<span>高年级</span>' : '<span>底年级</span>';
                    return [{ desc: _desc }];
                }
            });
            
        })
 </script>



