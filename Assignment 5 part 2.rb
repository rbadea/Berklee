use_bpm 160
in_thread do
  100.times do
    
    sample :drum_bass_hard, amp:1
    sleep 0.35
    
  end
end
in_thread do
  55.times do
    sample :drum_snare_hard, amp:1
    sleep 0.70
    
  end
end
in_thread do
  100.times do
    sample :drum_cymbal_closed, amp:1
    sleep 0.35
    
  end
  4.times  do
    
    if one_in(0)
      sample :drum_heavy_kick, amp: 5
    else
      sample :drum_splash_hard, amp: 3, sustain: 5
    end
    
    sleep 0.9
    
  end
  
  
end
in_thread do
  sample :guit_e_fifths , amp: 5
  10.times do
    play chord( :D5,  :minor)
    sleep 0.35
  end
  10.times do
    play chord( :C5,  :minor)
    sleep 0.35
  end
  20.times do
    play chord( :A4,  :minor)
    sleep 0.35
  end
  10.times do
    play chord( :C5,  :minor)
    sleep 0.35
  end
  10.times do
    play chord( :Bb5,  :minor)
    sleep 0.35
  end
  30.times do
    play chord( :A4,  :minor)
    sleep 0.35
  end
end
in_thread do
  sample :guit_e_fifths , amp: 15
  10.times do
    play chord( :D3,  :minor)
    sleep 0.35
  end
  10.times do
    play chord( :C3,  :minor)
    sleep 0.35
  end
  20.times do
    play chord( :A2,  :minor)
    sleep 0.35
  end
  10.times do
    play chord( :C3,  :minor)
    sleep 0.35
  end
  10.times do
    play chord( :Bb3,  :minor)
    sleep 0.35
  end
  30.times do
    play chord( :A2,  :minor)
    sleep 0.35
  end
end
