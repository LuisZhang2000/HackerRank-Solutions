/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(a, b){return b - a});
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            return nums[i + 1];
        }
    }
    
    return -1;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
