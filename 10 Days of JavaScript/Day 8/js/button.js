var btn = document.getElementById("buttonId");

btn.onclick = function() {
    var value = parseInt(btn.innerHTML, 10);
    btn.innerHTML = value + 1;
}


