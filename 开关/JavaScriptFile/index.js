var key = false;

function swich() {
    var image = document.getElementById("image");
    if (key == false) {
        image.src = "../ImageFile/off.gif";
        key = true;
    } else {
        image.src = "../ImageFile/on.gif";
        key = false;
    }
}