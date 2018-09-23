var $playerSprite = $("#player-sprite");
var $discTemp = $("#disc-temp");
var $disc = $("#disc");
var $discShadow = $("#disc-shadow");


function backhandShotAnimation() {
  shotStarted = true;

  $playerSprite.attr("src", backhandShot0);
  $playerSprite.addClass("player-drive-movement");
  $disc.addClass("player-drive-movement");
  $discShadow.addClass("player-drive-movement");
  $discTemp.addClass("player-drive-movement");

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot1);
  }, 180);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot2);
    $discTemp.addClass("hidden");
    $discTemp.removeClass("player-drive-movement");
  }, 360);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot3);
  }, 540);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot4);
  }, 720);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot5);
  }, 900);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot6);
  }, 1080);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot2);
  }, 1170);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot7);
  }, 1260);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot8);
  }, 1350);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot9);
  }, 1440);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot10);
  }, 2340);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot0);
  }, 2520);
}
