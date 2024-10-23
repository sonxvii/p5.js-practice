let squareBounce = function (p) {
  let elemOne, elemTwo, elemThree, elemFour;
  let posYOne = 0, posYTwo = 0, posYThree = 0, posYFour = 0;
  let speedOne = 3, speedTwo = 3.25, speedThree = 3.5, speedFour = 3.75;

  p.setup = function () {
    let cnv = p.createCanvas(400, 400); 
    cnv.parent('sketch-one');
  };

  p.draw = function () {
    p.background(0, 15);

    p.fill("white");
    p.noStroke();
    p.rect(0, posYOne, 100, 100); 

    p.fill("white");
    p.noStroke();
    p.rect(100, posYTwo, 100, 100);

    p.fill("white");
    p.noStroke();
    p.rect(200, posYThree, 100, 100);

    p.fill("white");
    p.noStroke();
    p.rect(300, posYFour, 100, 100);

    if (posYOne >= 300 || posYOne < 0) {
      speedOne *= -1;
    }
    if (posYTwo >= 300 || posYTwo < 0) {
      speedTwo *= -1;
    }
    if (posYThree >= 300 || posYThree < 0) {
      speedThree *= -1;
    }
    if (posYFour >= 300 || posYFour < 0) {
      speedFour *= -1;
    }

    posYOne += speedOne;
    posYTwo += speedTwo;
    posYThree += speedThree;
    posYFour += speedFour;
  };
};

new p5(squareBounce);
