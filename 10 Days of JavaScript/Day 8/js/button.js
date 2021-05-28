var btn = document.getElementById('buttonId');
var value = parseInt(btn.value, 10);
            
btn.onclick = function() {
    value++;
    btn.value = value;
}
