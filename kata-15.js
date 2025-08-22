// *** No Loops Allowed ***

// You will be given an array and a limit value, you must check that all values in the array are less than or equal to limit. If they all are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Do not use loops. Do not modify input array.
function smallEnough(a, limit){
    if(Math.max(...a)<=limit){
      return true
    }
  return false
}
console.log(smallEnough([2,3,4,5,6,0],6))