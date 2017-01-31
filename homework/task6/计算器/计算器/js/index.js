// 运算
function calculator(){
    this.cal = function(num1,num2,oper){
        var result = 0;
        switch(oper){
            case "+":
            result = num1+num2;
            break;
            case "-":
            result = num1-num2;
            break;
            case "*":
            result = num1*num2;
            break;
            case "/":
            if (num2==0) {
                alert("被除数不能为0!");
                return "NaN";
            }
            result = num1/num2;
            break;
            case "%":
            result = num1%num2;
            break;
        }
        return result;
    }
}

// 对象
var eval = new calculator();
// 全局变量
var val = 0;
var aval = 0;
var temp = 0;
var oper = "";
// 获取输入数字事件
function inputNum(i){
    var oval = document.getElementById("screenName");
    if (oval.value!="") {
        oval.value = "";
    }
    val = i.value;
    var sval = document.getElementById("screenName");
    sval.value += val;//连续输入
    aval = parseFloat(sval.value);//转换为Number
}
// 运算符号事件
function inputOper(i){
    oper = i.value;
    if (oper=="+") {
        var sval = document.getElementById("screenName");
        temp = parseFloat(sval.value);
        sval.value = "";
    }else if (oper=="-") {
        var sval = document.getElementById("screenName");
        temp = parseFloat(sval.value);
        sval.value = "";
    }else if (oper=="*") {
        var sval = document.getElementById("screenName");
        temp = parseFloat(sval.value);
        sval.value = "";
    }else if (oper=="/") {
        var sval = document.getElementById("screenName");
        temp = parseFloat(sval.value);
        sval.value = "";
    }else if (oper=="sin") {
        var sval = document.getElementById("screenName");
        temp = parseFloat(sval.value);
        sval.value = Math.sin(temp);
    }else if (oper=="cos") {
        var sval = document.getElementById("screenName");
        temp = parseFloat(sval.value);
        sval.value = Math.cos(temp);
    }
}
// 小数点点击判断

// function inputDot(i){
//     if (!dotClick) {
//         var sval = document.getElementById("screenName");
//         console.log(sval.value)
//         sval.value += ".";
//         dotClick = true;
//     }
// }
// 等号事件
function eva(i){
    var equel = i.value;
    var sval = document.getElementById("screenName");
    if (equel == "=") {
        sval.value = eval.cal(temp,aval,oper);
    }
}
// 清除等功能键
function inputTool(i){
    var sval =document.getElementById("screenName");
    if (i.value=="C") {
        sval.value = "";
    }else if (i.value=="back") {
        sval.value = sval.value.substring(0,sval.value.length-1);
    }
}
