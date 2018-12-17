window.onload = function () {

    //获取复选框元素
    var checkbox = document.all('checkbox');
    var checkall = document.getElementById('checkAll');

    /*点击全选按钮全部选中的情况*/
    checkall.addEventListener('click',function(){

        if (checkbox.length == undefined) {//一个选项时
            checkbox.checked = checkall.checked;
        }else{
            for (var i = 0; i < checkbox.length; i++) {//多个选项时
                checkbox[i].checked = this.checked;
            }
        }
    },false);


    //全部按钮什么时候被自动选中以及自动取消
    if (checkbox.length == undefined) {//一个选项时
        checkbox.addEventListener('click',function(){
            checkall.checked = checkbox.checked;
        },false);
    }else{
        for (var i = 0; i < checkbox.length; i++) {//多个选项时
            checkbox[i].addEventListener('click',function(){
                for (var i = 0; i < checkbox.length; i++){
                    if (!checkbox[i].checked) {
                        checkall.checked = false; //全选自动取消
                        break;
                    }else{
                        if (i == checkbox.length -1) { checkall.checked = true;} //全选自动勾选
                    }
                }
            },false);
        }
    }


    //打印您所有的选择
    document.getElementById('selecteBtn').addEventListener('click',function() {

        /*一个个去选择时的情况*/
        var yourchoose = "您选择的爱好有：";
        if (checkbox.length == undefined) {//一个选项时
            if (checkbox.checked) {
                yourchoose = yourchoose + checkbox.value;
            }
        } else {
            for (var i = 0; i < checkbox.length; i++) {//多个选项时
                if (checkbox[i].checked) yourchoose = yourchoose + checkbox[i].value + "、";
            }
        }
        //alert(checkbox.length);
        alert(yourchoose);
    },false);
};