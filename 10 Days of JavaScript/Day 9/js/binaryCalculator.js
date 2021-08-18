// If we click 0 or 1, we append the number we click to the res inner html
// If we click an operator, we add the sign we click to the res inner html
// If we click C, we clear the res inner html
// If we click =, we evaluate the expression within res

var res = document.getElementById('res');

document.getElementById('btn0').addEventListener('click', function() {
    document.getElementById('res').insertAdjacentHTML('beforeend', '0');
});

document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('res').insertAdjacentHTML('beforeend', '1');
});

function operatorAction(eve) {
    var btn = eve.target;
    // Add the inner html for the operator buttons into the results field
    document.getElementById('res').insertAdjacentHTML('beforeend', btn.innerHTML);
}

document.getElementById('btnSum').onclick = operatorAction;
document.getElementById('btnMul').onclick = operatorAction;
document.getElementById('btnDiv').onclick = operatorAction;
document.getElementById('btnSub').onclick = operatorAction;

document.getElementById('btnClr').onclick = function() {
    (document.getElementById('res').innerHTML) = "";
};

document.getElementById('btnEql').onclick = function() {
    var expr = res.innerHTML;
    var nums = /(\d+)/g;
    // Replace all base 2 nums with base 10 equivs
    expr = expr.replace(nums, function(match) {
        return parseInt(match, 2);
    })
    // eval in base 10 and convert to base 2
    res.innerHTML = eval(expr).toString(2);
};
