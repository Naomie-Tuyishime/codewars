function isAN(value) {

  if(typeof(value)==="number") {
   return true
  }
  else if(typeof(value)==="object"&& value instanceof Number){
    return true
  }  

  return false

}
console.log(isAN("123"))