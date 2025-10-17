/*
@title Nightfall
@by CHIRON
*/

setcpm(120/4)
//------------------------------------------------------------------------------------------
register('rlpf', (x,pat) => {return pat.lpf(pure(x).mul(12).pow(4))})
//------------------------------------------------------------------------------------------
// DRUMS
const kick = s("bd:1").beat("0,7?,10",16).color("red")
const snare = s("sd:6").beat("4,12",16).color("yellow")
const hihats = s("hh:4!8/2").color("blue")
//------------------------------------------------------------------------------------------
const bass = s("supersaw!16").bps("<0 .25 .5 1>/4")
  .note("<c g# d# [g g# [g g g# g]*4]>/2".sub(12)).orbit(3).dry(0.8)
  .rlpf("<.4 [.3 .35 .43@3] .4 [.4@1 .43 [.5 .55 .6 .7]]>/2")
  .lpenv("[0|1] [0|1] [0|1] [1|2]")
  .room(".5").roomsize(2)
  .lpf(400)
  .delay("<[0 .2]*4 [0|0.8]>/2")
  .color("<yellow purple green [blue purple [blue blue purple blue]*4]>/2")
//------------------------------------------------------------------------------------------
const melody = n("<[1 2|4|0]*4? [1 2|4|1]*8? [1 2|4|0]*[4|8?] [[[0|1]|2|4]?*2 [8|9]?]*4>").color("pink")
  .scale("[C4:minor?|C5:minor] C6:minor|C7:minor")
  .lpenv("0|0.5")
  .lpdecay(".5|1 1.5")
  .lpf(800)
  .roomsize(5).room(.4).dry(1)
  .delay(.4)
._punchcard()
//------------------------------------------------------------------------------------------
// PickReStart

"<0@4 [0,1]@8 0 2 3 [2,3] 3 4 0@4 4@999>".pickRestart([
// Index 0 <--
  melody,
// Index 2 <--
  kick,
// Index 1 <--
  stack(melody, bass),
// Index 3 <--
  stack(melody, kick, hihats),
// Index 4 <--
  stack(melody, kick, snare, hihats, bass)
])
.orbit(.5)
.rlpf(0.5)



