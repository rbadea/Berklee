let sng_brk=[];
let item={note:'A', starts_at:0, lasts:3};
  releasetime=item.starts_at+item.lasts;
  playnote=item.note;
  playtime=item.starts_at;
  sng_brk.push({note:playnote,action:'Release',time:releasetime});
  sng_brk.push({note:playnote, action:'Play',time:playtime});

console.log(sng_brk);
item={note:'B', starts_at:0, lasts:3};
releasetime=item.starts_at+item.lasts;
playnote=item.note;
playtime=item.starts_at;
sng_brk.push({note:playnote,action:'Release',time:releasetime});
sng_brk.push({note:playnote, action:'Play',time:playtime});

console.log(sng_brk);
