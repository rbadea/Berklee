function my_set_create(){
    return []
}

function my_set_add(in_set,item){
  if (! my_set_has(in_set,item)){
    in_set.push(item);
  }
return;
}

function my_set_has(in_set,item){
  for (let value of in_set){
    if (item == value)
      return true
  }
return false;
}

function my_set_size(in_set){
  return in_set.length;
}

function my_set_remove(in_set,item){
  if (my_set_has(in_set,item) == false){
    console.log("Not in set!");
    return ;
  }
  var temp=[];
  for ( let tmp of in_set){
    temp.push(tmp);
  }
  in_set.length=0;
  for ( let tmp of temp){
    if ( tmp !== item) {
        in_set.push(tmp);
    };
  }
  return ;
}

function my_set_pop(in_set){
  if (my_set_size(in_set)==0) return undefined;
  let value=in_set[0];
  my_set_remove(in_set,value);
  return value;
}


let test_set = my_set_create();
my_set_add(test_set, 3);
my_set_add(test_set, 3);
console.log(test_set);
if ( ! my_set_has(test_set, 3) || my_set_size(test_set) != 1 ) {
  console.log("Failed 'add', 'has', or 'size' is broken");
}

my_set_add(test_set, 4);

if ( my_set_size(test_set) != 2 ) {
  console.log("Failed adding new data");
}
my_set_remove(test_set, 3);
if ( my_set_size(test_set) != 1 ) {
  console.log("Failed removing data");
}

my_set_add(test_set, 1);
my_set_add(test_set, 2);
my_set_add(test_set, 4);
console.log(test_set);
let val = my_set_pop(test_set);

while ( val !== undefined ) {
  console.log("Contains value: " + val);
  val = my_set_pop(test_set);
}

test_set=my_set_create();
console.log(test_set);
my_set_add(test_set, "a");
my_set_add(test_set, 2);
my_set_add(test_set, 4);
console.log(test_set);
my_set_remove(test_set,2);
console.log(test_set);
console.log(my_set_pop(test_set));
console.log(test_set);
console.log(my_set_has(test_set,"a"));
