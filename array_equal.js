

function is_equal(a,b){
//  console.log(a.length);
  if (a.length=b.length){
    for (let item of a){
//      console.log(item);
//      console.log( item );
//      console.log( b[a.indexOf(item)]);
      if (item != b[a.indexOf(item)]){
        return false;
      }
    }
    return true;
  }
  return false;
}


let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];

let result = is_equal(arr1,arr2);
console.log(result);;
