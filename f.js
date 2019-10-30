var x, r, y;


P5.setup = function() {
  x = 0.5;
  y = 0.6;
};

P5.draw = function() {
  r = Math.random();
  if (r < 0.33) {
    x = x + 0.5;
    y = y + 0.5;
  } else if (r < 0.66) {
    x = x - 0.5;
    y = y + 0.5;
  } else {
    y = y - 0.5;
  }
  x = x * 0.5;
  y = y * 0.5;
  P5.point((x * (P5.width)),(y * (P5.height)));
};

