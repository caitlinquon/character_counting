function countLengths(string){
  var result = {}
  var noSpace = string.split(' ').join('');


  for (var i = 0; i < noSpace.length; i++) {

    if(result[noSpace[i]]) {
      result[noSpace[i]].push(i);
    } else {
      result[noSpace[i]] = [i];
    }
  }
  return result;
}

console.log(countLengths('Lighthouse in the house'));
