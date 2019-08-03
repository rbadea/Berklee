//callback sort

let contacts = [
  { first_name: 'Kim',
    last_name: 'Kardashian',
    sex: 'female' },
  { first_name: 'Nigel',
    last_name: 'Kennedy',
    sex: 'female'},
  { first_name: 'Freddie',
    last_name: 'Mercury',
    sex: 'female'},
  { first_name: 'Dan',
    last_name: 'Puric',
    sex: 'male'}
];

let sorted = contacts.sort(function (a,b){
  if (a.last_name>b.last_name) return 1;
  if (a.last_name<b.last_name) return -1;
  if (a.last_name=b.last_name) {
    if (a.first_name>b.first_name) return 1;
    if (a.first_name<b.first_name) return -1;
    return 0;
    };
  }
);
console.log(sorted);
//for (let item of contacts){
//  console.log(item.last_name+ ' ' +item.first_name);
//}

//let sorted=contacts.sort(function(contacts.last_name) );
//console.log(sorted);
