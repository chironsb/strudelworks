// Nightfall - A dark ambient piece for Strudel
// Created with chirongreen theme

// Main drum pattern with variations
const drums = stack(
  sound("bd*2").gain(0.8),
  sound("hh*4").gain(0.3).pan(sine.cycle(0.5)),
  sound("sn").gain(0.6).sometimes(x => x.fast(2))
).sometimes(x => x.reverse()).sometimes(x => x.slow(2));

// Bass line with filter sweep
const bass = sound("bass")
  .note("c2*2 e2*2 g2*2 f2*2")
  .gain(0.7)
  .cutoff(sine.cycle(0.25).range(200, 800))
  .resonance(8);

// Atmospheric pad
const pad = sound("pad")
  .note("c4 e4 g4 b4")
  .gain(0.4)
  .attack(2)
  .release(4)
  .cutoff(400)
  .pan(sine.cycle(0.1));

// Percussive elements
const perc = sound("perc")
  .gain(0.5)
  .pan(rand)
  .sometimes(x => x.fast(4))
  .sometimes(x => x.reverse());

// Main composition
stack(
  drums,
  bass,
  pad,
  perc
)
.slow(1)
.gain(0.8)
.cutoff(600)
.resonance(4)
.hpf(80)
.lpf(8000)
.reverb(0.3)
.delay(0.2)
.delayfeedback(0.4)
.delaytime(0.375)
