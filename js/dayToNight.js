let dayToNight = function (p) {
  let blueSpector = 255;
  let timeSet = ["☀️", "🌑"];
  let index = 0;

  p.setup = function () {
    let cnv = p.createCanvas(400, 400);
    cnv.parent('sketch-two');
  };

  p.draw = function () {
    blueSpector = p.map(p.mouseY, 100, 300, 255, 150);
    p.background(0, 0, blueSpector);

    p.textSize(80);
    p.textAlign(p.RIGHT, p.BASELINE);
    p.text(timeSet[index], 380, p.mouseY);

    p.fill("white");
    p.textSize(10);
    p.noStroke();
    p.textStyle(p.BOLD);
    p.textAlign(p.LEFT, p.BOTTOM);
    p.text("from day", 30, 50);

    p.fill("white");
    p.textSize(10);
    p.noStroke();
    p.textStyle(p.BOLD);
    p.textAlign(p.LEFT, p.BOTTOM);
    p.text("to night", 30, 350);

    p.fill("white");
    p.textSize(10);
    p.noStroke();
    p.textStyle(p.NORMAL);
    p.textAlign(p.LEFT, p.CENTER);
    p.text("(move cursor vertically)", 30, 200);

    if (p.mouseY > 200) {
      index = 1;
    } else {
      index = 0;
    }
  };
};

new p5(dayToNight);
