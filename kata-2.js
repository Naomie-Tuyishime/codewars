function XO(str) {
  str= str.toLowerCase();

    //code here
  let a= str.split('o').length-1
  let b=str.split('x').length-1
  if (a===b){
    
    return true;
  }
  return false;
}
XO('zoozz');