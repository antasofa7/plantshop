function menuClick() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " active"
    } else {
        x.className = "menu"
    }
}