var text = "";
function message() {
    try {
        adddlert("Welcome");
    } catch (e) {
        text="本页有一个错误。\n\n";
        text+="错误描述：" + e.message + "\n\n";
        text+="点击确定继续。\n\n";
        alert(text);
    }
}