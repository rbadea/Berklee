// testing github

function flatten(a,b){
      for (let item of b){
      a.push(item)
      }
      return a;
    }



let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];

let result = flatten(arr1,arr2);
console.log(result);;
