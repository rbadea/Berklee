//Average of an array
function arr_avg (array_of_integers){
  let total=0;
  for (let cursor of array_of_integers){
    //console.log(cursor+'->cursor')
    total+=cursor;
    //console.log(total)
  }
  let average=total/array_of_integers.length;
  return average;

}

let arr=[1,2,3,4,5,6,7,8];
console.log("Average is "+arr_avg(arr));
