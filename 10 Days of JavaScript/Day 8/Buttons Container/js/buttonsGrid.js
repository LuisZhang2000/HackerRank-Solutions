var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");

btn5.onclick = function() {
    
    var newBtn1 =  btn4.innerHTML;
    var newBtn2 = btn1.innerHTML;
    var newBtn3 = btn2.innerHTML;
    var newBtn4 = btn7.innerHTML;
    var newBtn6 = btn3.innerHTML;
    var newBtn7 = btn8.innerHTML;
    var newBtn8 = btn9.innerHTML;
    var newBtn9 = btn6.innerHTML;    
        
    btn1.innerHTML = newBtn1;
    btn2.innerHTML = newBtn2;
    btn3.innerHTML = newBtn3;
    btn4.innerHTML = newBtn4;
    btn6.innerHTML = newBtn6;
    btn7.innerHTML = newBtn7;
    btn8.innerHTML = newBtn8;
    btn9.innerHTML = newBtn9;
}
