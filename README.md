# render.js
轻量级前端模板引擎

1.导入：该项目依赖于jquery
使用前需要引入jquery。
<pre>
    &lt;script src="js/jquery.js"&gt;&lt;/script&gt;
    &lt;script src="js/render.min.js"&gt;&lt;/script&gt;
</pre>
2.html 模板包含在type='text/html'中的script标签中。
<pre>
    &lt;script id="template" type="text/html"&gt;
        &lt;li&gt;
        	&lt;span&gt;[rowNum]&lt;/span&gt;
            &lt;span&gt;[name]&lt;/span&gt;
            &lt;span&gt;[age]&lt;/span&gt;
            &lt;span&gt;[desc]&lt;/span&gt;
        &lt;/li&gt;
    &lt;/script&gt;
</pre>

3.生成好的列表数据可以放到任意一个容器中，div，ul都行。
如果列表需要一个头部，推荐这个容器这样写。
<pre>
    &lt;ul id="list"&gt;
        &lt;li id="head"&gt;
     		&lt;span&gt;编号&lt;/span&gt;
            &lt;span&gt;名称&lt;/span&gt;
            &lt;span&gt;年龄&lt;/span&gt;
            &lt;span&gt;描述&lt;/span&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
</pre>

4.调用render方法的demo。
 可以在ajax的回调函数中调用该方法
 <pre>
      $(function () {
            //需要加载的数据
            var data = [{ name: '小王', age: 15 }, { name: '小李', age: 16 }, { name: '小赵', age: 14 }];
            
            $('#list').render({
                template:  $('#template').html(),//模板html
                data: data, //json数据
                head: $('#head'), //列表头部的jquery dom对象 （此项可以不写）
			  （此项可以不写）
                format:function(data){
                    data.name = data.name +'先生';
                    return data;
                }, 

                extend: function (data,rowNum) {  //每项数据 扩展判断 （此项可以不写）
                    var _desc = data.age > 15 ? '<span>高年级</span>' : '<span>底年级</span>',
                        _row = rowNum;
                    return [{ desc: _desc, rowNum: _row }];
                }
            });
    })
</pre>
 
