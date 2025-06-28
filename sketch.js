let playImg;
let winImg;
let wake1,wake1_next;
let wake1_next_aud;
let okayVoice;
let aedImg;
let ambImg;
let endImg;
let end_next;
let elapsedTime = 0;
let now = 0;
let responseState = 2 ;
let mic;
let micStartTime = 0;
let breathingTime = 0;
let breathingSeeTime = 0;
let respondtime = 0;
let cpr1,cpr2,cprA,cprD,cprR,cprR1,cprS1,cprS2,cprS3,cprS4,cprUNB,cprBcheck,cprC; 
let cprC1,cprC2,cprC3,cprC4;
let cpr1t =0;
let cpt1tpass = 0;
let cprC1_aud,cprC2_aud,cprC3_aud,cprC4_aud;
let cprR_aud,cprR_aud1;
let cprCall_aud,cprAed_aud;
let cprAed_found_aud;
let cprB_aud1,cprB_aud2;
let beginC_aud;
let CPR_not_safe;
let cprB_yes;
let cprBt_check,cprBt_check_aud;
let cprB_yes_aud;
let cprBnormal_yes;
let lastAud1,lastAud2,lastaud3;
let cpr_notsafe_aud;
let D_yes;
let win2,app,plus;
let dial;
let ring;
let amb_aud;
let normal_breath,gasp_breath;
let aud1,aud2;
let D_yes_aud;
let playStartTime = 0;
let cprStartTime = 0;
let interval = 0;
let lastTouchTime = 0;
let timeleft = 0;
let arrowimg;
let meterimg;
let heartimg;
let angle = 0;
let bpm = 0;
let bpm_circle_color = "#D9D9D9";
let slow_interval = 0.8;
let compression_count = 0;
let good_compression = 0;
let numberToDisplay;
let decayRate = 10;
let decay_normal = 0.5;
let goodfillRate = 100;
let badfillRate = 10;
let progress = 0;
let maxTotalCompressions = 0;
let diffGoal = 0;
let currentState = "cpr1";
let press_music;
let task_time;
let delayed_aud;
let pressed_time = 0 ;
let cheekOpacity = 40;
let lipOpacity = 120;
// time elapsed since play started
let playElapsed = 0;
let lastTouchElapsed =0;
// nexts1
let nextx = 118;
let nexty = 533;
let nextw = 142;
let nexth = 47;
// nextG
let nextGx = 298;
let nextGy = 577;
let nextGw = 50;
let nextGh = 50;
//wake1next
let wakenextx=314;
let wakenexty=25;
let wakenextw=55;
let wakenexth=55;
// nexts3A
let next3Ax = 255;
let next3Ay = 437;
let next3Aw = 60;
let next3Ah = 60;
// nexts3B
let next3Bx = 255;
let nextBy = 437;
let next3Bw = 60;
let next3Bh = 60;
// nexts3C
let next3Cx = 172;
let next3Cy = 365;
let next3Cw = 60;
let next3Ch = 60;
// nexts3D
let next3Dx = 172;
let next3Dy = 579;
let next3Dw = 60;
let next3Dh = 60;
// next 7A
let next7Ax = 343;
let next7Ay = 283;
let next7Aw = 45;
let next7Ah = 111;
// startplay
let startx = 152;
let starty = 288;
let startw = 236;
let starth = 102;
// yes
let Yesx = 212;
let Yesy = 577;
let Yesw = 142;
let Yesh = 47;
// no
let Nox = 25;
let Noy = 577;
let Now = 142;
let Noh = 47;
// yes1
let Yes1x = 208;
let Yes1y = 577;
let Yes1w = 169;
let Yes1h = 47;
// no1
let No1x = 37;
let No1y = 578;
let No1w = 169;
let No1h = 47;
// win2 yes
let winyesx = 47;
let winyesy = 521;
let winyesw = 135;
let winyesh = 47;
// win2 no
let winnox = 231;
let winnoy = 521;
let winnow = 90;
let winnoh = 47;
// appstore
let playstorex= 205;
let playstorey = 577;
let playstorew = 167;
let playstoreh = 57;
// playstore
let appx = 25;
let appy = 578;
let appw = 155;
let apph = 59;
// tap
let tapx = 332;
let tapy = 593;
let tapw = 54;
let taph = 54;
// done aed
let donex = 125;
let doney = 593;
let donew = 142;
let doneh = 47;
// replay game
let replayx = 25;
let replayy = 47;
let replayw = 55;
let replayh = 56;
// restart
let restartx = 308; // X for start button clickable area (if specific region needed)
let restarty = 21; // Y for start button clickable area
let restartw = 66; // Width for start button clickable area
let restarth = 66; // Height for start button clickable area
// random breathsound 
breath_no = 0;

function preload() {
  playImg = loadImage(
    "eyes+ (2).png");
  winImg = loadImage(
    "giffycanvas (86).gif"
  );
  wake1 = loadImage("giffycanvas (90).gif");
  wake1_next = loadImage("after responded.png");
  wake1_next_aud = loadSound("ElevenLabs_2025-06-16T10_02_51_Alice_pre_sp100_s50_sb75_v3.mp3");
  aud1 = loadSound("ElevenLabs_2025-06-15T03_03_50_Alice_pre_sp100_s50_sb75_v3.mp3");
  aud2 = loadSound("ElevenLabs_2025-06-15T03_04_45_Alice_pre_sp100_s50_sb75_v3.mp3");
  D_yes_aud = loadSound("ElevenLabs_2025-06-15T05_45_53_Alice_pre_sp100_s50_sb75_v3.mp3");
  okayVoice = loadSound("ElevenLabs_2025-06-14T14_13_46_Alice_pre_sp100_s50_sb75_v3.mp3");
  cprC1_aud = loadSound("ElevenLabs_2025-06-28T05_17_33_Alice_pre_sp100_s50_sb75_v3.mp3");
  cprC2_aud = loadSound("ElevenLabs_2025-06-25T03_15_33_Alice_pre_sp100_s50_sb75_v3.mp3");
  cprC3_aud = loadSound("ElevenLabs_2025-06-16T00_04_57_Alice_pre_sp100_s50_sb75_v3.mp3");
  cprC4_aud = loadSound("ElevenLabs_2025-06-25T03_12_37_Alice_pre_sp100_s50_sb75_v3.mp3");
  press_music = loadSound(
    "mixkit-message-pop-alert-2354.mp3"
  );
  win_music = loadSound(
    "mixkit-fairy-arcade-sparkle-866.wav"
  );
  normal_breath =loadSound("breathing-6811.mp3");
  gasp_breath =loadSound("gasping.m4a");
  cprB_yes = loadImage("check type of breathing observed.png");
  cprBt_check_aud = loadSound("ElevenLabs_2025-06-18T03_04_36_Alice_pre_sp100_s50_sb75_v3.mp3")
  //cprB_yes_aud = loadSound("ElevenLabs_2025-06-17T23_01_53_Alice_pre_sp100_s50_sb75_v3.mp3");
  cprB_aud1 = loadSound("ElevenLabs_2025-06-16T00_44_18_Alice_pre_sp100_s50_sb75_v3.mp3");
  cprB_aud2 = loadSound("ElevenLabs_2025-06-16T00_45_28_Alice_pre_sp100_s50_sb75_v3.mp3");
  beginC_aud = loadSound("ElevenLabs_2025-06-16T02_41_04_Alice_pre_sp100_s50_sb75_v3.mp3");
  endImg = loadImage(
    "delayed.png" );
  ambImg = loadImage("giffycanvas (87).gif");
  D_yes = loadImage("yes danger (1).png");
  delayed_aud = loadSound("negative_beeps-6008.mp3");
  cpr1 = loadImage(
    "cpr1.png"
  );
  cpr2 = loadImage(
    "giffycanvas (97).gif"
  );
  cprA = loadImage(
    "cprA (2).png"
  );
  cprAed_aud = loadSound("ElevenLabs_2025-06-16T00_41_39_Alice_pre_sp100_s50_sb75_v3.mp3");
  
  cprD = loadImage(
    "cprD.png"
  );
  CPR_not_safe = loadImage("Dcan't safe (1).png");
  cpr_notsafe_aud = loadSound("ElevenLabs_2025-06-16T04_03_14_Alice_pre_sp100_s50_sb75_v3.mp3");
  cprR = loadImage(
    "cprR.png"
  );
  cprR_aud = loadSound("ElevenLabs_2025-06-16T00_27_57_Alice_pre_sp100_s50_sb75_v3.mp3");
  cprR_aud1 = loadSound("ElevenLabs_2025-06-16T00_33_33_Alice_pre_sp100_s50_sb75_v3.mp3");
  cprR1 = loadImage(
    "cprR1.png"
  );
  cprCall_aud = loadSound("ElevenLabs_2025-06-16T00_40_24_Alice_pre_sp100_s50_sb75_v3.mp3");
  cprS1 = loadImage(
    "cprs1.png"
  );
  cprS2 = loadImage(
    "cprs2.png"
  );
  cprS3 = loadImage(
    "cprs3.png"
  );
  cprS4 = loadImage(
    "cprs4.png"
  );
  cprUNB = loadImage("Unconscious + no breathing.png");
  cprBcheck = loadImage("breathcheck.png")
  cprBt_check = loadImage("check type of breathing observed.png");
  cprBnormal_yes = loadImage("yes breathing.png");
  cprC = loadImage("Start cpr (1).png");
  cprC1 = loadImage("giffycanvas (98).gif");
  cprC2 = loadImage("interlock (2).png");
  cprC3 = loadImage("straight elbows (2).png");
  cprC4 = loadImage("giffycanvas (99).gif");
 /*s6 = loadImage(
    "giffycanvas (83).gif"
  );
  s7 = loadImage(
    "s6 (3).png"
  );
  s7A = loadImage(
    "s7 (2).png"
  );*/
  arrowimg = loadImage("arrow2.png");
  meterimg = loadImage("bpm meter86.png");
  heartimg = loadImage("heart.png");
  aedImg = loadImage("giffycanvas (89).gif");
  win2 = loadImage("win2 (3).png") ;
  app = loadImage("yes i want to be real life hero (2).png");
  plus = loadImage("No i don't want to be real life hero (2).png");
 dial = loadSound("9aud.mp3");
 ring = loadSound("mixkit-office-telephone-ring-1350.wav");
 lastAud1 = loadSound("ElevenLabs_2025-06-16T02_51_39_Alice_pre_sp100_s50_sb75_v3.mp3");
 lastAud2 = loadSound("ElevenLabs_2025-06-16T02_58_16_Alice_pre_sp100_s50_sb75_v3.mp3");
  lastaud3 = loadSound("ElevenLabs_2025-06-28T12_46_03_Alice_pre_sp100_s50_sb75_v3.mp3");
cprB_yes_aud = loadSound("ElevenLabs_2025-06-16T06_00_58_Alice_pre_sp100_s50_sb75_v3.mp3");
  end_next = loadImage("delaywin (1).png");
  end_next_aud = loadSound("ElevenLabs_2025-06-16T08_00_15_Alice_pre_sp100_s50_sb75_v3.mp3");
  amb_aud = loadSound("ambulance-312230.mp3");
  cprAed_found_aud = loadSound("ElevenLabs_2025-06-16T12_58_21_Alice_pre_sp100_s50_sb75_v3.mp3");
}
function setup() {
  //createCanvas(392, 680);
  // for github
  createCanvas(windowWidth, windowHeight);
  maxTotalCompressions = floor(random(30, 50));
  task_time = 600 * maxTotalCompressions+3000;
  breath_no = floor(random(11));
  console.log("breathno: "+ breath_no);
  // static blood flow level
  const staticRectX = 92;
  const staticRectY = 44;
  const staticRectWidth = 254;
  const staticRectHeight = 11;
  const staticRectRadius = 11; // Assuming rounded corners for both
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  cprStartTime = millis();
  

  if (currentState === "cpr1") {
    image(cpr1, 0, 0);
  } else if (currentState === "cpr2") {
    image(cpr2, 0, 0);
  } else if (currentState === "cprD") {
    image(cprD, 0, 0);
  } else if (currentState === "D_yes") {
    image(D_yes, 0, 0);
  }else if (currentState === "cprR") {
    image(cprR, 0, 0);
    respondTime = millis()-micStartTime;
    let vol = mic.getLevel();
  console.log(vol);
    //text("micstarttime"+micStartTime,100,300);
    //text("respondtime"+respondTime,100,400);
    console.log(respondTime);
  //ellipse(100, 100, 200, vol * 200);
  if(vol>0.08){
    console.log("hello i am okay");
    okayVoice.play();
    responseState = 1;
    console.log(responseState);
  }else
    {
      console.log(" no response");
      responseState = 0;
      console.log(responseState);
    }
    
      if(responseState === 1){
        currentState = "wake1";
        cprR_aud.stop();
        
      }
    if(respondTime>10000){
      
          currentState = "cprR1"
          cprR_aud1.play();
        
    }


  }else if (currentState === "wake1") {
   
    image(wake1, 0, 0);
  }else if (currentState === "wake1_next") {
   
    image(wake1_next, 0, 0);
  }else if (currentState === "cprR1") {
    image(cprR1, 0, 0);
  }  else if (currentState === "cprS1") {
    image(cprS1, 0, 0);
  } else if (currentState === "cprS2") {
    image(cprS2, 0, 0);
  } else if (currentState === "cprS3") {
    image(cprS3, 0, 0);
  } else if (currentState === "cprS4") {
    image(cprS4, 0, 0);
  } else if (currentState === "cprA") {
    image(cprA, 0, 0);
  } else if (currentState === "cprB") {
    image(cprUNB, 0, 0);
    breathingSeeTime = millis()-breathingTime;
    //text("breathno :"+breath_no,100,100);
    
    if(breathingSeeTime >=10000){
     currentState = "cprBcheck";
      cprAed_aud.stop();
      cprB_aud2.play();
    
    }
  } else if (currentState === "cprBcheck") {
    image(cprBcheck, 0, 0);
  }else if (currentState === "cprB_yes") {
    image(cprB_yes, 0, 0);
    
  }else if (currentState === "cprBnormal_yes") {
    image(cprBnormal_yes, 0, 0);
  }  else if (currentState === "cprC1") {
    image(cprC1, 0, 0);
   cpt1tpass = millis()-cpr1t;
    if(cpt1tpass > 6000){
      currentState = "cprC2";
      cprC2_aud.play();
} 
  
  }else if (currentState === "cprC2") {
    image(cprC2, 0, 0);
    cpt1tpass = millis()-cpr1t;
  
    if(cpt1tpass > 14000){
      currentState = "cprC3";
      cprC3_aud.play();
    }
    
    
  }else if (currentState === "cprC3") {
    image(cprC3, 0, 0);
    cpt1tpass = millis()-cpr1t;
    
    if(cpt1tpass > 20000){
      currentState = "cprC4";
      cprC4_aud.play();
    }
    
  }else if (currentState === "cprC4") {
    image(cprC4, 0, 0);
    cpt1tpass = millis()-cpr1t;
    
    if(cpt1tpass > 30000){
      currentState = "cprC";
      beginC_aud.play();
    }
    
  }else if (currentState === "cprC") {
    image(cprC, 0, 0);
  
  }else if (currentState === "play") {
    playScreen();
  } else if (currentState === "win") {
    winScreen();
  } else if (currentState === "late") {
    lateScreen();
  }else if (currentState === "end_next") {
   image(end_next, 0, 0);
  }else if (currentState === "aed") {
    aedScreen();
  }else if (currentState === "amb") {
    ambScreen();
  }else if (currentState === "win2") {
    image(win2, 0, 0);
  }else if (currentState === "cpr_notsafe") {
     image(CPR_not_safe, 0, 0);
  }else if (currentState === "app") {
    image(app, 0, 0);
  }else if (currentState === "plus") {
    image(plus, 0, 0);
  }
}
function playScreen() {
  
  elapsedTime = millis() - playStartTime;

  progress -= decay_normal;
  progress = constrain(progress, 6, 254);
  cheekOpacity = map(progress, 6, 254, 40, 255);
  lipOpacity = map(progress, 6, 254, 120, 255);
  background("#FFC5B7");
  image(playImg, 86,110);
  image(heartimg,340,40);
  
  // cheek circle1
  push();
  noStroke();
  fill(253, 175, 179, cheekOpacity);
  circle(220, 122, 132);
  pop();
  // cheek circle1
  push();
  noStroke();
  fill(253, 175, 179, cheekOpacity);
  circle(220, 542, 132);
  pop();
  progress = constrain(progress,6,210);
  // static rect
  push();
  noStroke();
  fill("#EEEEEE");
  rect(122, 44, 210, 11, 11);
  pop();
  push();
  imageMode(CENTER);
  image(meterimg,78,48);
  pop();
  // show BPM text
  push();
  translate(20, 48);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(23);
  // control the colour of bpm text
  fill(bpm_circle_color);
  text(round(bpm), 0, 0);
  pop();
  // live arrow
  push();
  translate(83,47);
  imageMode(CENTER);
  angleMode(DEGREES);
  //angle = map(bpm,10,600,-60,60);
  rotate(angle);
  image(arrowimg,0,0);
  pop();
  //live rect
  push();
  noStroke();
  fill("#FF5058");
  rect(332, 44, -progress, 11, 11);
  pop();
  
  if (bpm > 99 && bpm < 121) {
    bpm_circle_color = "#038660";

    //progress += fillRate;
  } else {
    bpm_circle_color = "#FF3C46";
    //progress -= decayRate;
  }
  
  // DRAW MOUTH
  push();
  noStroke();
  fill(255, 124, 130, lipOpacity);
  ellipse(310,330,42,120);

  // pop();
  //show compression count
  push();
  angleMode(RADIANS);
  translate(30,335);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(23);
  fill(0);
  let numberToDisplay;
  if (compression_count === 0) numberToDisplay = 0;
  else if (compression_count % 5 === 0) numberToDisplay = compression_count;
  else numberToDisplay = compression_count % 5;
  text(numberToDisplay + " AND", 0, 0);
  console.log("good_compression = " + good_compression);
  // difference between max and good compressions
 console.log("diff goal = " + (maxTotalCompressions - good_compression));
diffGoal = maxTotalCompressions - good_compression;
  pop();
  // learning about time passed since play started
  playElapsed = millis()-playStartTime 
  //text("time passed since play started : "+playElapsed ,100,600);
  //text("max compressions :"+ maxTotalCompressions,100,500);
  //text("task time :"+ task_time,100,400);
  // learning about time elapsed since last touch
  lastTouchElapsed = ((millis()-pressed_time ));
  //text("lastTouch time elapsed :"+ lastTouchElapsed,100,300);
  //text("play start time"+ playStartTime,100,600 )
  //console.log(playStartTime);
  //console.log(lastTouchTime);
  //console.log( lastTouchElapsed);
  // game win/late logic
  handle_performance();
  handle_inactivity();
  // display time left 
  push();
  angleMode(RADIANS);
  translate(30,600);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(20);
  fill(0)
  timeleft = task_time - playElapsed;
  if(timeleft <0 )
    {
      timeleft = 0;
    }
  text(round((timeleft/1000),0)+"s",0,0);
  pop();
  push();
  angleMode(RADIANS);
  translate(52,600);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(18);
  fill(0)
  text("Time left",0,0);
  pop();
}
function lateScreen() {
  image(endImg, 0, 0);
}
function winScreen() {
  image(winImg, 0, 0);
}
function aedScreen() {
  image(aedImg, 0, 0);
}
function ambScreen() {
  image(ambImg, 0, 0);
}
function mousePressed() {
  pressed_time = millis();
  if (currentState === "cpr1") {
    if (
      mouseX > nextx &&
      mouseX < nextx + nextw &&
      mouseY > nexty &&
      mouseY < nexty + nexth
    ) {
      currentState = "cpr2";
      //breath_no = floor(random(7));
      console.log("breath no :"+breath_no );
      aud1.play();
      console.log(currentState);
    }
  } else if (currentState === "cpr2") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "cprD";
       aud1.stop();
      aud2.play();
    }
  } else if (currentState === "cprD") {
    if (
      mouseX > Yesx &&
      mouseX < Yesx + Yesw &&
      mouseY > Yesy &&
      mouseY < Yesy + Yesh
    ) {
      currentState = "cprR";
      aud2.stop();
      cprR_aud.play();
      micStartTime = millis();
    }else if(
      mouseX > Nox &&
      mouseX < Nox + Now &&
      mouseY > Noy &&
      mouseY < Noy + Noh){
      currentState = "D_yes";
      D_yes_aud.play();
    }
  }else if (currentState === "D_yes") {
    if (
      mouseX > Yesx &&
      mouseX < Yesx + Yesw &&
      mouseY > Yesy &&
      mouseY < Yesy + Yesh
    ) {
      currentState = "cprR";
      D_yes_aud.stop();
      cprR_aud.play();
      micStartTime = millis();
    }else if(
      mouseX > Nox &&
      mouseX < Nox + Now &&
      mouseY > Noy &&
      mouseY < Noy + Noh){
      currentState = "cpr_notsafe";
      D_yes_aud.stop();
      cpr_notsafe_aud.play();
      //D_yes_aud.play();
    }
  }else if (currentState === "cpr_notsafe") {
    
    if (
      mouseX > winyesx &&
      mouseX < winyesx + winyesw &&
      mouseY > winyesy &&
      mouseY < winyesy + winyesh
    ) {
      cpr_notsafe_aud.stop();
      lastAud2.play();
      currentState = "app";
      
    }else if(
      mouseX > winnox &&
      mouseX < winnox + winnow &&
      mouseY > winnoy &&
      mouseY < winnoy + winnoh){
      cpr_notsafe_aud.stop();
      currentState = "plus";
      
    }
  }else if (currentState === "cprR") {
    if (
      mouseX > tapx &&
      mouseX < tapx + tapw &&
      mouseY > tapy &&
      mouseY < tapy + taph
    ) {
       
   // micStartTime = millis();
    }
    
    
  }else if (currentState === "wake1") {
    if (
      mouseX > wakenextx &&
      mouseX < wakenextx + wakenextw &&
      mouseY > wakenexty &&
      mouseY < wakenexty + wakenexth
    ) {
      currentState = "wake1_next";
      // aud stop
      wake1_next_aud.play();
    }
  }else if (currentState === "wake1_next") {
    if (
      mouseX > Yesx &&
      mouseX < Yesx + Yesw &&
      mouseY > Yesy &&
      mouseY < Yesy + Yesh
    ) {
      currentState = "cpr2";
    }else if (
      mouseX > Nox &&
      mouseX < Nox + Now &&
      mouseY > Noy &&
      mouseY < Noy + Noh
    ) {
      currentState = "win2";
      wake1_next_aud.stop();
      okayVoice.stop();
      lastAud1.play();
    }
  }else if (currentState === "cprR1") {
    if (
      mouseX > Yesx &&
      mouseX < Yesx + Yesw &&
      mouseY > Yesy &&
      mouseY < Yesy + Yesh
    ) {
      currentState = "cprR1";
    }else if (
      mouseX > Nox &&
      mouseX < Nox + Now &&
      mouseY > Noy &&
      mouseY < Noy + Noh
    ) {
      currentState = "cprS1";
      cprCall_aud.play();
      
    }
      
  } else if (currentState === "cprS1") {
    if (
      mouseX > next3Ax &&
      mouseX < next3Ax + next3Aw &&
      mouseY > next3Ay &&
      mouseY < next3Ay + next3Ah
    ) {
      currentState = "cprS2";
      dial.play();
    }
  }else if (currentState === "cprS2") {
    if (
      mouseX > next3Ax &&
      mouseX < next3Ax + next3Aw &&
      mouseY > next3Ay &&
      mouseY < next3Ay + next3Ah
    ) {
      dial.play();
      currentState = "cprS3";
    }
  }  else if (currentState === "cprS3") {
    if (
      mouseX > next3Cx &&
      mouseX < next3Cx + next3Cw &&
      mouseY > next3Cy &&
      mouseY < next3Cy + next3Ch
    ) {
      dial.play();
      currentState = "cprS4";
    }
  } else if (currentState === "cprS4") {
    if (
      mouseX > next3Dx &&
      mouseX < next3Dx + next3Dw &&
      mouseY > next3Dy &&
      mouseY < next3Dy + next3Dh
    ) {
      ring.play();
      currentState = "cprA";
      cprAed_aud.play();
    }
  } else if (currentState === "cprA") {
    if (
      mouseX > donex &&
      mouseX < donex + donew &&
      mouseY > doney &&
      mouseY < doney + doneh
    ) {
      currentState = "cprB";
      cprAed_aud.stop();
      cprB_aud1.play();
      if(breath_no % 3 === 0){
      normal_breath.play();
    }else if(breath_no % 5 === 0){
      gasp_breath.play();
      
    }
      console.log(breath_no);
      breathingTime = millis();
    }
  } else if (currentState === "cprBcheck") {
    console.log("breath no :"+breath_no );
    if (
      mouseX > Yesx &&
      mouseX < Yesx + Yesw &&
      mouseY > Yesy &&
      mouseY < Yesy + Yesh
    ) {
      currentState = "cprB_yes";
      cprBt_check_aud.play();
      
    }else if (
      mouseX > Nox &&
      mouseX < Nox + Now &&
      mouseY > Noy &&
      mouseY < Noy + Noh
    ) {
      currentState = "cprC1";
      cpr1t = millis();
      cprC1_aud.play();
    }
  }else if (currentState === "cprB_yes") {
    if (
      mouseX > Yesx &&
      mouseX < Yesx + Yesw &&
      mouseY > Yesy &&
      mouseY < Yesy + Yesh
    ) {
      currentState = "cprC1";
      cpr1t = millis();
      cprC1_aud.play();
    }else if (
      mouseX > Nox &&
      mouseX < Nox + Now &&
      mouseY > Noy &&
      mouseY < Noy + Noh
    ) {
      currentState = "cprBnormal_yes";
     cprB_yes_aud.play();
      
    }
  }else if (currentState === "cprBnormal_yes") {
    if (
      mouseX > Yesx &&
      mouseX < Yesx + Yesw &&
      mouseY > Yesy &&
      mouseY < Yesy + Yesh
    ) {
      currentState = "cpr2";
    }else if (
      mouseX > Nox &&
      mouseX < Nox + Now &&
      mouseY > Noy &&
      mouseY < Noy + Noh
    ) {
      currentState = "win2";
        cprB_yes_aud.stop();
      lastAud1.play();
      // here stop aud 
      reset();
      
    }
  }else if (currentState === "cprC1") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "cprC2";
      cprC1_aud.stop();
      cprC2_aud.play();
      
    }
  }else if (currentState === "cprC2") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "cprC3";
      cprC2_aud.stop();
      cprC3_aud.play();
      
    }
  }else if (currentState === "cprC3") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "cprC4";
      cprC3_aud.stop();
      cprC4_aud.play();
    }
  }else if (currentState === "cprC4") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "cprC";
      cprC4_aud.stop();
       beginC_aud.play();
    }
  }else if (currentState === "cprC") {
    if (
      mouseX > next7Ax &&
      mouseX < next7Ax + next7Aw &&
      mouseY > next7Ay &&
      mouseY < next7Ay + next7Ah
    ) {
      currentState = "play";
      playStartTime = millis();
    }
  } else if (currentState === "play") {
    compression_count += 1;
    press_music.play();
    now = millis();
    if (lastTouchTime !== 0) {
      interval = now - lastTouchTime;
      let calculatedBPM = 60000 / interval;
      bpm = calculatedBPM;
    } 
    
    lastTouchTime = now;
    handle_live()
  } else if (currentState === "win")
{  win_music.play();
 if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    )
    {
      currentState = "win2";
      lastAud1.play();
      reset();
    }
  
  
}else if (currentState === "win2")
  {
     if (
      mouseX > winyesx &&
      mouseX < winyesx + winyesw &&
      mouseY > winyesy &&
      mouseY < winyesy + winyesh
    ) {
       lastAud1.stop();
       lastAud2.play();
      currentState = "app";
    }else if (
      mouseX > winnox &&
      mouseX < winnox + winnow &&
      mouseY > winnoy &&
      mouseY < winnoy + winnoh
    ) {
      currentState = "plus";
      lastAud1.stop();
      lastaud3.play();
    }
  }else if (currentState === "app")
  {
     if (
      mouseX > playstorex &&
      mouseX < playstorex + playstorew &&
      mouseY > playstorey &&
      mouseY < playstorey + playstoreh
    ) {
      window.open("https://play.google.com/store/apps/details?id=sg.gov.scdf.myr2&pcampaignid=web_share");
    }else if (
      mouseX > appx &&
      mouseX < appx + appw &&
      mouseY > appy &&
      mouseY < appy + apph
    ) {
      window.open("https://apps.apple.com/sg/app/myresponder/id6478100813");
    }else if ( 
      mouseX > replayx &&
      mouseX < replayx + replayw &&
      mouseY > replayy &&
      mouseY < replayy + replayh){
      currentState = "cpr2";
      lastAud1.stop();
      lastAud2.stop();
      lastaud3.stop();
      aud1.play();
      reset();
      
}
    }else if (currentState === "late")
  {
     if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    )
    {
      currentState = "end_next";
      end_next_aud.play();
      win_music.play();
      reset();
    }
  }else if (currentState === "plus"){
   if ( 
      mouseX > replayx &&
      mouseX < replayx + replayw &&
      mouseY > replayy &&
      mouseY < replayy + replayh){
      currentState = "cpr2";
      lastAud1.stop();
     lastaud3.stop();
     aud1.play();
      reset();
      
}         
}
  else if (currentState === "end_next")
  {
     if (
      mouseX > winyesx &&
      mouseX < winyesx + winyesw &&
      mouseY > winyesy &&
      mouseY < winyesy + winyesh
    ) {
       end_next_aud.stop();
       lastAud2.play();
      currentState = "app";
    }else if (
      mouseX > winnox &&
      mouseX < winnox + winnow &&
      mouseY > winnoy &&
      mouseY < winnoy + winnoh
    ) {
      currentState = "plus";
      lastaud3.play();
      end_next_aud.stop();
    }
  }else if (currentState === "aed")
  {
     if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    )
    {
      currentState = "win2";
      lastAud1.play();
      win_music.play();
      reset();
    }
  }else if (currentState === "amb")
  {
     if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    )
    {
      currentState = "win2";
      win_music.play();
      lastAud1.play();
      reset();
    }
  }
  
}
function handle_inactivity(){
 if( lastTouchElapsed >4000)
   {
     currentState = "late";
     delayed_aud.play();
     
   }
}
function handle_performance(){
  if(playElapsed >= task_time)
    {
      /*if(good_compression >= maxTotalCompressions){
        currentState = "win";
      }else
        currentState = "late";
    }*/
      if(diffGoal <= 5){
        currentState = "win";
        win_music.play();
      }else if(diffGoal <= 8){
        currentState = "aed";
        cprAed_found_aud.play();
      }else if(diffGoal <= 10){
        currentState = "amb";
        amb_aud.play();
      }else if (diffGoal >= 20){
        currentState = "late";
        delayed_aud.play();
        
      }
    }
}
function reset(){
  playStartTime = millis();
  good_compression = 0;
  compression_count =0;
  progress = 0;
  angle = 0;
  bpm = 0;
  lastTouchTime = 0;
  interval =0;
  respondTime = 0;
  breathingSeeTime= 0;
  cpr1t = 0;
  cpt1tpass = 0;
  //cpr2t = 0;
}
function handle_live()
{
  if(bpm<=120 && bpm>= 100){
    progress += goodfillRate;
    good_compression = good_compression+1;
    angle = 0;
  }else if(bpm>121){
    angle = 60;
    progress +=badfillRate;
  }else if(bpm<100){
    angle = -60;
    progress +=badfillRate;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function touchStarted() {
  mousePressed(); // Use the same logic
  return false; // Prevent default browser touch behavior
}
