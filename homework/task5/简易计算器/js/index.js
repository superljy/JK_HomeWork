function count() {
    var txt1 = document.getElementById("txt1"),
        txt2 = document.getElementById("txt2"),
        txt3 = document.getElementById("txt3"),
        opt = document.getElementById("char");
    if (opt.value == "/" && txt2.value == 0) {
        txt3.value = "NAN";
    } else {
        txt3.value = eval(txt1.value + opt.value + txt2.value);
    }
}