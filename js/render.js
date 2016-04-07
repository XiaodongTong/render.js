/*rander -v1.0  轻量级html模板引擎  By WinterT*/
(
    function ($) {
        // 渲染方法
        $.fn.render = function (config) {
            //模板正则表达式
            var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm');
            //模板html
            var template = config.template;
            //渲染后列表
            var list = '';
            //遍历 数据
            for (var i = 0; i < config.data.length; i++) {
                var item = config.data[i]; //当前item
                if (config.format) { //数据格式化
                    item = config.format(item);
                }
                var temp = template.replace(reg,
                    function (node, key) {
                        if (item[key] != undefined) {
                            return item[key];
                        } else {
                            return node;
                        }
                    });//替换数据
                if (config.extend) {
                    var extObj = config.extend(item,i+1);
                    var temp = temp.replace(reg, function (node, key) { return extObj[0][key]; });
                }
                list += temp;
            }
            if (config.head) {
                list = $(config.head).parent().html() + list;
            }
            $(this).html(list);
        }
    }
)(jQuery)