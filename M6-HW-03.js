function getNum(n1){
    return function(n2){
      return n1+n2
    }
  }
  console.log(getNum(2)(2))