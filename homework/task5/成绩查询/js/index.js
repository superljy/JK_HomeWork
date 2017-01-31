function level() {
    var x = document.getElementById("score").value;
    // if...else用法
    if (!x.trim()) {
        alert("内容为空,请输入0-100的分数");
    } else if (isNaN(x)) {
        alert("输入错误,请输入0-100的分数");
    } else if (x <= 100 && x >= 90) {
        alert("一等");
    } else if (x < 90 && x >= 80) {
        alert("二等");
    } else if (x < 80 && x >= 70) {
        alert("三等");
    } else if (x < 70 && x >= 60) {
        alert("四等");
    } else if (x < 60 && x >= 50) {
        alert("五等");
    } else if (x < 50 && x >= 40) {
        aleert("六等")
    } else if (x < 40 && x >= 30) {
        alert("七等");
    } else if (x < 30 && x >= 20) {
        alert("八等");
    } else if (x < 20 && x >= 10) {
        alert("九等");
    } else if (x < 10 && x >= 0) {
        alert("十等");
    } else {
        alert("输入错误, 请输入0 - 100 的分数");
    }
}