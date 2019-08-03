function play_piano(song){

  // First we break down the song into plays and releases
  // the input example should result into this
  let sng_brk=[];
  for (let item of song){
    releasetime=item.starts_at+item.lasts;
    playnote=item.note;
    playtime=item.starts_at;
    sng_brk.push({note:playnote,action:'Release',time:releasetime});
    sng_brk.push({note:playnote, action:'Play',time:playtime});
  };

  // Then we order by time. The result is
  // [{time:0, action: 'Play', note:'A'},{time:0, action:'Play',note:'B'},
  // {time:1.5, action:'Play', note:'C'},
  // {time:3, action:'Release',note:'A'},{time:3, action:'Release', note:'B'},{time:3, action:'Release',note:'C'}]
  // the resulting list has all interesting times huddled together in chronological order
  let sng=[];
  sng = sng_brk.sort(function (a,b){
    if (a.time>b.time) return 1;
    if (a.time<b.time) return -1;
    if (a.time=b.time) return 0;
      }
  );

  // Then we print the generated list, inserting Wait duration, duration being calculated between the timestamps.
  // If the difference is 0, then nothing is printed. If the difference in non-0 then print the duration
  print(sng);
}

function print(sng){
  let timestamp=0;
  let gap=0;
  for ( let item of sng){
    gap=item.time-timestamp;
    if (gap!=0){
      console.log('Wait '+gap+ ' seconds');
    };
    console.log(item.action+' '+item.note);
    timestamp=item.time;
  }
}



let my_song = [
  { note: 'A', starts_at: 0, lasts: 3 },
  { note: 'B', starts_at: 0, lasts: 3 },
  { note: 'C', starts_at: 1.5, lasts: 1.5 },
  { note: 'A', starts_at: 1.5, lasts:5}
];

play_piano(my_song);

console.log('');

my_song = [
  { note: 'E', starts_at: 0, lasts: 1 },
  { note: 'C', starts_at: 0, lasts: 2 },
  { note: 'E', starts_at: 1, lasts: 0.5 },
  { note: 'E', starts_at: 1.5, lasts:0.5},
  { note: 'G', starts_at: 2, lasts: 1.5 },
  { note: 'E', starts_at: 2, lasts: 2 },
  { note: 'G', starts_at: 3.5, lasts: 0.5 },

];

play_piano(my_song);

console.log('');

my_song = [
  { note: 'A', starts_at: 0, lasts: 3 },
  { note: 'B', starts_at: 0, lasts: 3 },
  { note: 'C', starts_at: 1.5, lasts: 1.5 }
];

play_piano(my_song);
