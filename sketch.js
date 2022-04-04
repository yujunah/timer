//boolean
let bl_rec = false;
//button
let bt_rec, bt_pause, bt_reset;


//out
let img_recording;
let img_notRecording;

let titleText = 18,
  outText = 20;
let num_peo = 0;

let time;
let timer = 3593;
let recH, recM, recS;

function setup() {
  createCanvas(854, 384);

  bt_rec = createImg("record.png");
  bt_rec.position(700, 330);
  // bt_rec.mousePressed(changeBG);

  bt_pause = createImg("pause-button.png");
  bt_pause.position(647, 325);
  // bt_rec.mousePressed(changeBG);

  bt_reset = createImg("stop-button.png");
  bt_reset.position(813, 337);

  img_notRecording = loadImage("readyToRecord.png");
  img_recording = loadImage("recording.png");
}

function draw() {
  background(220);
  if (bl_rec && frameCount % 60 == 0 && timer >= 0) {
    timer++;
  }
  (recH = int(timer / 3600)),
    (recM = int((timer / 60) % 60)),
    (recS = timer % 60);

  push();
  //camera
  strokeWeight(2);
  fill(0);
  noStroke();
  rect(0, 0, 640, 384);
  pop();

  //outputs
  let textX = 660,
    textY = 30;

  let todayIs = year() + " . " + month() + " . " + day();
  let curTime = hour() + " : " + minute() + " : " + second();
  textOut("Current time", curTime, textX, textY);

  let recTime =
    (recH < 10 ? "0" + recH : recH) +
    " : " +
    (recM < 10 ? "0" + recM : recM) +
    " : " +
    (recS < 10 ? "0" + recS : recS);
  textOut("Recording time", recTime, textX, textY + 60);

  let numPas = 0;
  textOut("passengers", numPas, textX, textY + 120);

  textSize(16);
  fill(255);
  text(recTime, 50, 30);
  text(todayIs, 20, 365);
  text(curTime, 120, 365);

  image(img_notRecording, 20, 17);
}

function textOut(text1, text2, textX, textY_) {
  push();
  textSize(titleText);
  fill(25);
  text(text1, textX, textY_);
  fill(0);
  textSize(outText);
  text(text2, textX, textY_ + 23);
  pop();
}

function touchStarted() {
  if (700 < mouseX && mouseX < 793 && 330 < mouseY && mouseY < 363) {
    print("start");
    if (bl_rec === false) bl_rec = true;
  } else if (650 < mouseX && mouseX < 690 && 330 < mouseY && mouseY < 363) {
    print("pause");
    if (bl_rec === true) bl_rec = false;
  } else if (805 < mouseX && mouseX < 838 && 330 < mouseY && mouseY < 363) {
    print("reset");
    if (bl_rec === true) bl_rec = false;
    timer = 0;
  }
}
