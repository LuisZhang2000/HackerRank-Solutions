/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    
    var func = function(n){
        if (n % 2 == 0)
            return n * 2;
        else
            return n * 3;
    }
    
    var newArray = nums.map(func);
    return newArray;
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}
