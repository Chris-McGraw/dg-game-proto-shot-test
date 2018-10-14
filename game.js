/* ------------------------- IMG File Declarations ------------------------- */

var backhandShot0 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529506728/DG-GAME-PROTO/backhand-drive-0.png";
var backhandShot1 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529683836/DG-GAME-PROTO/backhand-drive-1.png";
var backhandShot2 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529529600/DG-GAME-PROTO/backhand-drive-2.png";
var backhandShot3 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529529600/DG-GAME-PROTO/backhand-drive-3.png";
var backhandShot4 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529529600/DG-GAME-PROTO/backhand-drive-4.png";
var backhandShot5 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529529600/DG-GAME-PROTO/backhand-drive-5.png";
var backhandShot6 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529529600/DG-GAME-PROTO/backhand-drive-6.png";
var backhandShot7 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529684066/DG-GAME-PROTO/backhand-drive-7.png";
var backhandShot8 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529684065/DG-GAME-PROTO/backhand-drive-8.png";
var backhandShot9 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529684066/DG-GAME-PROTO/backhand-drive-9.png";
var backhandShot10 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529684066/DG-GAME-PROTO/backhand-drive-10.png";


$(document).ready(function() {

/* ------------------------ Audio File Declarations ------------------------ */

  var moveShotPreviewAudio = document.getElementById("move-shot-preview-audio");
  moveShotPreviewAudio.muted = false;
  moveShotPreviewAudio.volume = 1.0;

  var meterUpAudio = document.getElementById("meter-up-audio");
  meterUpAudio.muted = false;
  meterUpAudio.volume = 1.0;

  var meterDownAudio = document.getElementById("meter-down-audio");
  meterDownAudio.muted = false;
  meterDownAudio.volume = 1.0;

  var meterPressAudio = document.getElementById("meter-press-audio");
  meterPressAudio.muted = false;
  meterPressAudio.volume = 1.0;

  var discDriveAudio = document.getElementById("disc-drive-audio");
  discDriveAudio.muted = false;
  discDriveAudio.volume = 0.5;


/* ------------------------- Variable Declarations ------------------------- */

  var backhand27 = {
    width: "5.3467mm",
    height: "79mm",
    viewBox: "0 0 5.3466983 79.000092",
    transform: "translate(-29.077 -14.083)",
    d: "m29.205 93.052c11.446-46.3 0-78.925 0-78.925",
    strokeDashArray: "1.05999995,0.52999997",
    strokeWidth: ".265"
  };

  var forehand27 = {
    width: "5.3467mm",
    height: "79mm",
    viewBox: "0 0 5.3466983 79.000092",
    transform: "translate(-29.077 -14.083)",
    d: "m34.295 93.052c-11.446-46.3 0-78.925 0-78.925",
    strokeDashArray: "1.05999995,0.52999997",
    strokeWidth: ".265"
  };

  var backhand28 = {
    width: "5.3429mm",
    height: "81.646mm",
    viewBox: "0 0 5.3428669 81.645798",
    transform: "translate(-32.102 -32.415)",
    d: "m32.231 114.03c11.437-47.853 0-81.573 0-81.573",
    strokeDashArray: "1.05833333, 0.52916667",
    strokeWidth: ".26458"
  };

  var forehand28 = {
    width: "5.3429mm",
    height: "81.646mm",
    viewBox: "0 0 5.3428669 81.645798",
    transform: "translate(-32.102 -32.415)",
    d: "m37.321 114.03c-11.437-47.853 0-81.573 0-81.573",
    strokeDashArray: "1.05833333, 0.52916667",
    strokeWidth: ".26458"
  };

  var $obZone = $("#ob-zone-0");

  var shotType = "backhand";
  var shotArray = 28;

  var $shotPathPreview = $("#svg-main");

  var svgMain = document.getElementById("svg-main");
  var svgG = document.getElementById("svg-g");
  var svgPath = document.getElementById("svg-path");

  var $previewPointerContainer = $("#preview-pointer-container");
  var $shotPreviewPointerTop = $("#shot-preview-pointer-top");
  var $shotPreviewPointerBottom = $("#shot-preview-pointer-bottom");
  var $shotPreviewLength = $("#shot-preview-length");

  var $playerSprite = $("#player-sprite");
  var $discTemp = $("#disc-temp");
  var $discContainer = $("#disc-container");
  var $disc = $("#disc");
  var $discShadow = $("#disc-shadow");
  var $powerIndicator = $("#power-indicator");
  var $powerAimIndicator = $("#power-aim-indicator");
  var $indicatorTrail = $("#indicator-trail");
  var $indicatorGhost = $("#indicator-ghost");
  var indicatorGhostPositionX = 0;

  var shotStarted = false;

  var shotPathRotationCount = 0;
  var shotPathRotation = 0;

  var shotPathHeightBackhand = 16;
  var shotPathHeightForehand = 16;

  var spaceBarPress = 0;
  var shotLoopValue = 0;
  var shotPower = 0;
  var shotLength1 = 0;
  var shotLoopCount1 = 0;
  var releaseLoopValue = 0;
  var releasePoint = 0;
  var shotWidth1 = 0;
  var shotWidth2 = 0;
  var releaseLoopCount1 = 0;

  var currentShotPreviewLength = 200;
  var previewLengthPositionX = 419;
  var aimPointerPositionY = 0;
  var aimPointerPositionX = 0;
  var aimIndicatorPositionX = 224;

  var $shotTestButton = $("#shot-test-button");

/* ------------------------- Function Declarations ------------------------- */

  function startShotTest() {
    shotPower = document.getElementById("input-box-1").value;

    if(document.getElementById("input-box-2").value === "0") {
      releasePoint = 0;
    }
    else {
      releasePoint = document.getElementById("input-box-2").value;
    }

    console.log("");
    console.log("TEST - shotPower: " + shotPower);
    console.log("TEST - releasePoint: " + releasePoint);

    backhandShotAnimation();

    setTimeout(function() {
      discDriveAudio.muted = false;
      discDriveAudio.play();
      playerShot();
    }, 1340);
  }


  function changeShotType() {
    if(shotType === "backhand" && shotArray === 28) {
      svgPath.setAttribute("d", "m37.321 114.03c-11.437-47.853 0-81.573 0-81.573");
      $shotPathPreview.css("top", shotPathHeightForehand + "px");
      $shotPathPreview.css("left", "-20px");

      shotType = "forehand";
    }
    else if(shotType === "forehand" && shotArray === 28) {
      svgPath.setAttribute("d", "m32.231 114.03c11.437-47.853 0-81.573 0-81.573");
      $shotPathPreview.css("top", shotPathHeightBackhand + "px");
      $shotPathPreview.css("left", "20px");

      shotType = "backhand";
    }

    if(shotType === "backhand" && shotArray === 27) {
      svgPath.setAttribute("d", "m34.295 93.052c-11.446-46.3 0-78.925 0-78.925");
      $shotPathPreview.css("top", shotPathHeightForehand + "px");
      $shotPathPreview.css("left", "-20px");

      shotType = "forehand";
    }
    else if(shotType === "forehand" && shotArray === 27) {
      svgPath.setAttribute("d", "m29.205 93.052c11.446-46.3 0-78.925 0-78.925");
      $shotPathPreview.css("top", shotPathHeightBackhand + "px");
      $shotPathPreview.css("left", "20px");

      shotType = "backhand";
    }

    moveShotPreviewAudio.muted = false;
    moveShotPreviewAudio.play();
  }


  function checkShotPreviewLength() {
    if(currentShotPreviewLength.toString().length === 3) {
      $shotPreviewLength.html(currentShotPreviewLength + "'");
    }
    else if(currentShotPreviewLength.toString().length === 2) {
      $shotPreviewLength.html("0" + currentShotPreviewLength + "'");
    }
    else if(currentShotPreviewLength.toString().length === 1) {
      $shotPreviewLength.html("00" + currentShotPreviewLength + "'");
    }
  }


  function moveShotPreviewUp() {
    if(shotStarted === false) {
    /* ----- Shot Preview Pointer Up ----- */
      shotPathHeightBackhand -= 10;
      shotPathHeightForehand -= 10;

      if(shotType === "backhand") {
        $shotPathPreview.css("top", shotPathHeightBackhand);

        svgMain.setAttribute("width", backhand28.width);
        svgMain.setAttribute("height", backhand28.height);
        svgMain.setAttribute("viewBox", backhand28.viewBox);

        svgG.setAttribute("transform", backhand28.transform);

        svgPath.setAttribute("d", backhand28.d);
        svgPath.setAttribute("stroke-dasharray", backhand28.strokeDashArray);
        svgPath.setAttribute("stroke-width", backhand28.strokeWidth);
      }
      else if(shotType === "forehand") {
        $shotPathPreview.css("top", shotPathHeightForehand);

        svgMain.setAttribute("width", forehand28.width);
        svgMain.setAttribute("height", forehand28.height);
        svgMain.setAttribute("viewBox", forehand28.viewBox);

        svgG.setAttribute("transform", forehand28.transform);

        svgPath.setAttribute("d", forehand28.d);
        svgPath.setAttribute("stroke-dasharray", forehand28.strokeDashArray);
        svgPath.setAttribute("stroke-width", forehand28.strokeWidth);
      }

    /* ---- Shot Preview Length Right ---- */
      previewLengthPositionX += 7;
      currentShotPreviewLength += 7;

      $shotPreviewLength.css("left", previewLengthPositionX + "px");
      checkShotPreviewLength();

    /* ---- Power Aim Indicator Right ---- */
      aimIndicatorPositionX += 7;
      $powerAimIndicator.css("left", aimIndicatorPositionX + "px");

    /* -- Play Move Shot Preview Audio -- */
      moveShotPreviewAudio.muted = false;
      moveShotPreviewAudio.play();

      shotArray++;
    }
  }


  function moveShotPreviewDown() {
    if(shotStarted === false) {
    /* ----- Shot Path Preview Down ----- */
      shotPathHeightBackhand += 10;
      shotPathHeightForehand += 10;

      if(shotType === "backhand") {
        $shotPathPreview.css("top", shotPathHeightBackhand);

        svgMain.setAttribute("width", backhand27.width);
        svgMain.setAttribute("height", backhand27.height);
        svgMain.setAttribute("viewBox", backhand27.viewBox);

        svgG.setAttribute("transform", backhand27.transform);

        svgPath.setAttribute("d", backhand27.d);
        svgPath.setAttribute("stroke-dasharray", backhand27.strokeDashArray);
        svgPath.setAttribute("stroke-width", backhand27.strokeWidth);
      }
      else if(shotType === "forehand") {
        $shotPathPreview.css("top", shotPathHeightForehand);

        svgMain.setAttribute("width", forehand27.width);
        svgMain.setAttribute("height", forehand27.height);
        svgMain.setAttribute("viewBox", forehand27.viewBox);

        svgG.setAttribute("transform", forehand27.transform);

        svgPath.setAttribute("d", forehand27.d);
        svgPath.setAttribute("stroke-dasharray", forehand27.strokeDashArray);
        svgPath.setAttribute("stroke-width", forehand27.strokeWidth);
      }

    /* ---- Shot Preview Length Left ---- */
      previewLengthPositionX -= 7;
      currentShotPreviewLength -= 7;

      $shotPreviewLength.css("left", previewLengthPositionX + "px");
      checkShotPreviewLength();

    /* ---- Power Aim Indicator Left ---- */
      aimIndicatorPositionX -= 7;
      $powerAimIndicator.css("left", aimIndicatorPositionX + "px");

    /* -- Play Move Shot Preview Audio -- */
      moveShotPreviewAudio.muted = false;
      moveShotPreviewAudio.play();

      shotArray--;
    }
  }


  function moveShotPathLeft() {
    if(shotStarted === false) {
    /* --------- Shot Path Left --------- */
      shotPathRotation -= 4;

      shotPathHeightBackhand -= 0.5;
      shotPathHeightForehand += 0.5;

      $shotPathPreview.css("transform", "rotate(" + shotPathRotation + "deg)");

      if(shotType === "backhand") {
        $shotPathPreview.css("top", shotPathHeightBackhand + "px");
      }
      else if(shotType === "forehand") {
        $shotPathPreview.css("top", shotPathHeightForehand + "px");
      }

    /* -- Play Move Shot Preview Audio -- */
      moveShotPreviewAudio.muted = false;
      moveShotPreviewAudio.play();

      shotPathRotationCount--;
    }
  }


  function moveShotPathRight() {
    if(shotStarted === false) {
    /* -------- Shot Path Right -------- */
      shotPathRotation += 4;

      shotPathHeightBackhand += 0.5;
      shotPathHeightForehand -= 0.5;

      $shotPathPreview.css("transform", "rotate(" + shotPathRotation + "deg)");

      if(shotType === "backhand") {
        $shotPathPreview.css("top", shotPathHeightBackhand + "px");
      }
      else if(shotType === "forehand") {
        $shotPathPreview.css("top", shotPathHeightForehand + "px");
      }

    /* -- Play Move Shot Preview Audio -- */
      moveShotPreviewAudio.muted = false;
      moveShotPreviewAudio.play();

      shotPathRotationCount++;
    }
  }


  function checkIndicatorPos() {
    if($powerIndicator.position().left === -27 && spaceBarPress === 2) {
      releasePoint = -27;
      console.log("releasePoint = " + releasePoint);

      $powerIndicator.removeClass("power-indicator-move-right");
      $powerIndicator.removeClass("power-indicator-move-return");
      $powerIndicator.removeClass("power-indicator-move-left");
      $powerIndicator.removeClass("power-indicator-finish-left");
      $powerIndicator.css("left", "-54px");

      meterPressAudio.muted = false;
      meterPressAudio.currentTime = 0;
      meterPressAudio.play();

      backhandShotAnimation();

      setTimeout(function() {
        discDriveAudio.muted = false;
        discDriveAudio.play();
        playerShot();
      }, 1340);

      spaceBarPress = 3;
    }
    else if($powerIndicator.position().left > -27 && spaceBarPress === 2) {
      setTimeout(function() {
        checkIndicatorPos();
      }, 100);
    }
  }


  function shotStep() {
    $disc.addClass("disc-shot");
    $disc.css({"transform": "translateY(" + shotLength1 + "px) rotate(-180deg)"});

    $discContainer.addClass("disc-shot-end");
    $discContainer.css({"transform": "translateX(" + shotWidth1 + "px)"});

    console.log("shotLength1 = " + shotLength1);
    console.log("shotWidth1 = " + shotWidth1);
    console.log("shotWidth2 = " + shotWidth2);

    shadowMultiplier1 = Math.floor(shotLength1 * 0.15);
    shadowShotLength1 = (shotLength1 - shadowMultiplier1);
    $discShadow.addClass("disc-shot");
    $discShadow.css({"transform": "translateY(" + shadowShotLength1 + "px) rotate(-180deg)"});

    setTimeout(function() {
      $discShadow.addClass("disc-shot-end");
      $discShadow.css({"transform": "translateY(" + shotLength1 + "px)"});
      $discContainer.css({"transform": "translateX(" + shotWidth2 + "px)"});
    }, 1200);
  }


  function playerShot() {
    for(shotLoopValue = 217; shotLoopValue > 0; shotLoopValue -= 7) {
      if(shotPower >= (shotLoopValue - 6) && shotPower <= (shotLoopValue)) {
        console.log("shotLoopRange = " + (shotLoopValue - 6) + " & " + shotLoopValue);

        $previewPointerContainer.addClass("hidden");
        $discContainer.css("z-index", "20");

      /* ------------ Good Release Early ------------ */
        if(releasePoint >= 1 && releasePoint <= 9) {
          for(releaseLoopValue = 9; releaseLoopValue >= 3; releaseLoopValue -= 3) {
            if(releasePoint >= (releaseLoopValue - 2) && releasePoint <= (releaseLoopValue)) {
              console.log("releaseLoopRange = " + (releaseLoopValue - 2) + " & " + releaseLoopValue);
              console.log("----- Good Release Early -----");

              shotLength1 = -310 - (-10 * shotLoopCount1);
              shotWidth1 = -18 - (-3.15 * releaseLoopCount1);
              shotWidth2 = -40 - (-3.87 * releaseLoopCount1);

              shotStep();
            }
            releaseLoopCount1++;
          }
        }

      /* ------------ Good Release Late ------------ */
        else if(releasePoint >= -9 && releasePoint <= -1) {
          for(releaseLoopValue = -9; releaseLoopValue <= -3; releaseLoopValue += 3) {
            if(releasePoint >= (releaseLoopValue) && releasePoint <= (releaseLoopValue + 2)) {
              console.log("releaseLoopRange = " + (releaseLoopValue + 2) + " & " + releaseLoopValue);
              console.log("----- Good Release Late -----");

              shotLength1 = -310 - (-10 * shotLoopCount1);
              shotWidth1 = 32 - (6.65 * releaseLoopCount1);
              shotWidth2 = 29 - (8.5 * releaseLoopCount1);

              shotStep();
            }
            releaseLoopCount1++;
          }
        }

      /* ------------ Perfect Release ------------ */
        else if(releasePoint === 0) {
          console.log("releaseLoopRange = 0");
          console.log("----- Perfect Release -----");

          shotLength1 = -310 - (-10 * shotLoopCount1);
          shotWidth1 = 8;
          shotWidth2 = -6;

          shotStep();
        }

      /* ---------- Early Release ---------- */
        else if(releasePoint >= 10 && releasePoint <= 217) {
          for(releaseLoopValue = 217; releaseLoopValue >= 17; releaseLoopValue -= 8) {
            if(releasePoint >= (releaseLoopValue - 7) && releasePoint <= (releaseLoopValue)) {
              console.log("releaseLoopRange = " + (releaseLoopValue - 7) + " & " + releaseLoopValue);
              console.log("----- Early Release -----");

              shotLength1 = -310 - (-10 * shotLoopCount1);
              shotWidth1 = -80 - (-2.10 * releaseLoopCount1);
              shotWidth2 = -120 - (-2.58 * releaseLoopCount1);

              shotStep();
            }
            releaseLoopCount1++;
          }
        }

      /* ---------- Late Release ---------- */
        else if(releasePoint >= -27 && releasePoint <= -10) {
          for(releaseLoopValue = -27; releaseLoopValue <= -12; releaseLoopValue += 3) {
            if(releasePoint >= (releaseLoopValue) && releasePoint <= (releaseLoopValue + 2)) {
              console.log("releaseLoopRange = " + (releaseLoopValue + 2) + " & " + releaseLoopValue);
              console.log("----- Late Release -----");

              shotLength1 = -310 - (-10 * shotLoopCount1);
              shotWidth1 = 80 - (13 * releaseLoopCount1);

              if(releasePoint <= -19) {
                shotWidth2 =  120 - (30 * releaseLoopCount1);
              }
              else if(releasePoint <= -16 && releasePoint >= -18) {
                shotWidth1 = 50;
                shotWidth2 = 47;
              }
              else if(releasePoint <= -13 && releasePoint >= -15) {
                shotWidth1 = 47;
                shotWidth2 = 43;
              }
              else if(releasePoint <= -10 && releasePoint >= -12) {
                shotWidth1 = 44;
                shotWidth2 = 40;
              }

              shotStep();
            }
            releaseLoopCount1++;
          }
        }

      }
      shotLoopCount1++;
    }
  /* ----- Shot Reset Functionality ----- */
    setTimeout(function() {
      $previewPointerContainer.removeClass("hidden");
      $playerSprite.removeClass("player-drive-movement");
      $discTemp.removeClass("hidden");
      $discContainer.removeClass("disc-shot-end");
      $discContainer.removeAttr("style");
      $discContainer.css("z-index", "10");
      $disc.removeClass("hidden");
      $disc.removeClass("disc-shot");
      $disc.removeClass("disc-shot-cage-hit");
      $disc.removeAttr("style");
      $disc.removeClass("player-drive-movement");

      $discShadow.css("visibility", "visible");

      $discShadow.removeClass("hidden");
      $discShadow.removeClass("player-drive-movement");
      $discShadow.removeClass("disc-shot");
      $discShadow.removeClass("disc-shot-end");
      $discShadow.removeClass("disc-shot-cage-hit");
      $discShadow.removeAttr("style");
      $powerIndicator.css("left", "0px");
      $indicatorTrail.css("width", "4px");
      $indicatorGhost.addClass("hidden");

      spaceBarPress = 0;
      shotLoopValue = 0;
      shotLoopCount1 = 0;
      releaseLoopValue = 0;
      releaseLoopCount1 = 0;
      shotStarted = false;

      currentShotPreviewLength = 200;
      $shotPreviewLength.html("200'");
      previewLengthPositionX = 419;
      $shotPreviewLength.css("left", "419px");
      aimPointerPositionY = 0;
      $previewPointerContainer.css("top", "0px");
      aimPointerPositionX = 0;
      $previewPointerContainer.css("left", "0px");
      aimIndicatorPositionX = 224;
      $powerAimIndicator.css("left", "224px");
    }, 4000);
  }


  function spacebarPress1() {
    $powerIndicator.addClass("power-indicator-move-right");
    $indicatorTrail.addClass("expand-trail");

    meterUpAudio.muted = false;
    meterUpAudio.play();

    setTimeout(function() {
      if(spaceBarPress === 2) {
        $powerIndicator.removeClass("power-indicator-move-return");
        $powerIndicator.addClass("power-indicator-move-left");
      }
      else if(spaceBarPress === 1) {
        $powerIndicator.removeClass("power-indicator-move-right");
        $powerIndicator.addClass("power-indicator-move-return");
        $indicatorTrail.removeClass("expand-trail");
        $indicatorTrail.addClass("retract-trail");

        meterDownAudio.muted = false;
        meterDownAudio.play();
      }
      else {
        $powerIndicator.removeClass("power-indicator-move-right");
        $powerIndicator.addClass("power-indicator-move-return");
      }

      setTimeout(function() {
        if(spaceBarPress === 2) {
          $powerIndicator.removeClass("power-indicator-move-return");
          $powerIndicator.addClass("power-indicator-finish-left");
        }
        else {
          $powerIndicator.removeClass("power-indicator-move-right");
          $powerIndicator.addClass("power-indicator-move-return");
        }

        $powerIndicator.removeClass("power-indicator-move-return");
        indicatorGhostPositionX = $powerIndicator.position().left;

        setTimeout(function() {
          if(spaceBarPress === 1) {
            spaceBarPress = 0;
          }
          $indicatorTrail.removeClass("expand-trail");
          $indicatorTrail.removeClass("retract-trail");
          $powerIndicator.removeClass("power-indicator-move-right");
          $powerIndicator.removeClass("power-indicator-move-left");
          $powerIndicator.removeClass("power-indicator-finish-left");
        }, 700);
      }, 1200);
    }, 1200);

    spaceBarPress = 1;
  }


  function spacebarPress2() {
    indicatorGhostPositionX = $powerIndicator.position().left;

    if(indicatorGhostPositionX > 9) {
      meterUpAudio.muted = true;
      meterDownAudio.muted = true;
      meterPressAudio.muted = false;
      meterPressAudio.play();

      $indicatorTrail.removeClass("expand-trail");
      $indicatorTrail.removeClass("retract-trail");
      $indicatorTrail.css("width", indicatorGhostPositionX + "px");
      $indicatorGhost.css("left", indicatorGhostPositionX + 7 + "px");
      $indicatorGhost.removeClass("hidden");

      shotPower = Math.floor($powerIndicator.position().left);
      spaceBarPress = 2;
      shotStarted = true;

      console.log("");
      console.log("shotPower = " + shotPower);

      checkIndicatorPos();
    }
  }


  function spacebarPress3() {
    indicatorGhostPositionX = $powerIndicator.position().left;

    meterPressAudio.muted = false;
    meterPressAudio.currentTime = 0;
    meterPressAudio.play();

    if(indicatorGhostPositionX > 10) {
      $powerIndicator.css("left", indicatorGhostPositionX + 7 + "px");
      releasePoint = Math.floor(indicatorGhostPositionX);

      console.log("releasePoint = " + releasePoint);
    }
    else {
      $powerIndicator.css("left", indicatorGhostPositionX * 2 + "px");
      releasePoint = Math.floor(indicatorGhostPositionX);

      console.log("releasePoint = " + releasePoint);
    }

    backhandShotAnimation();

    setTimeout(function() {
      discDriveAudio.muted = false;
      discDriveAudio.play();
      playerShot();
    }, 1340);

    $powerIndicator.removeClass("power-indicator-move-right");
    $powerIndicator.removeClass("power-indicator-move-return");
    $powerIndicator.removeClass("power-indicator-move-left");
    $powerIndicator.removeClass("power-indicator-finish-left");

    spaceBarPress = 3;
  }

/* ---------------------------- Event Handlers ---------------------------- */

  /* console.log(svgPath.getTotalLength()); */

  $shotTestButton.on("click", function() {
    if(shotStarted === false) {
      startShotTest();
    }
  });

  $(document).keydown(function(event) {
  /* --- Shot Preview Pointer Movement --- */
    /* if(event.which === 87 && aimPointerPositionY > 0 || event.which === 38 && aimPointerPositionY > 0) {
      moveShotPreviewUp();
    }
    if(event.which === 83 && aimPointerPositionY < 280 || event.which === 40 && aimPointerPositionY < 280) {
      moveShotPreviewDown();
    } */

    if(event.which === 87 && shotArray < 28 || event.which === 38 && shotArray < 28) {
      moveShotPreviewUp();
    }
    if(event.which === 83 && shotArray > 27|| event.which === 40 && shotArray > 27) {
      moveShotPreviewDown();
    }

    /* if(event.which === 65 && aimPointerPositionX > -200 || event.which === 37 && aimPointerPositionX > -200) {
      moveShotPreviewLeft();
    }
    if(event.which === 68 && aimPointerPositionX < 200 || event.which === 39 && aimPointerPositionX < 200) {
      moveShotPreviewRight();
    } */

    if(event.which === 65 && shotPathRotationCount >= -9|| event.which === 37 && shotPathRotationCount >= -9) {
      moveShotPathLeft();
    }
    if(event.which === 68 && shotPathRotationCount <= 9|| event.which === 39 && shotPathRotationCount <= 9) {
      moveShotPathRight();
    }


  /* ----- Change Shot Type (X) ----- */
    if(event.which === 88) {
      changeShotType();
    }


  /* -------- Spacebar Press -------- */
    /* if(event.which === 32 && spaceBarPress === 0) {
      spacebarPress1();
    }
    else if(event.which === 32 && spaceBarPress === 1) {
      spacebarPress2();
    }
    else if(event.which === 32 && spaceBarPress === 2) {
      spacebarPress3();
    } */
  });

  $(document).keyup(function(event) {
    setTimeout(function() {
      moveShotPreviewAudio.pause();
      moveShotPreviewAudio.currentTime = 0;
    }, 50);
  });

});
