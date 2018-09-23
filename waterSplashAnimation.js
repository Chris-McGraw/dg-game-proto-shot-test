var $discWaterSplash = $("#disc-water-splash");


function waterSplashAnimation() {
  $discWaterSplash.attr("src", splash0);

  setTimeout(function() {
    $discWaterSplash.attr("src", splash1);
  }, 120);

  setTimeout(function() {
    $discWaterSplash.attr("src", splash2);
  }, 240);

  setTimeout(function() {
    $discWaterSplash.attr("src", splash3);
  }, 360);

  setTimeout(function() {
    $discWaterSplash.attr("src", splash4);
  }, 480);

  setTimeout(function() {
    $discWaterSplash.addClass("hidden");
  }, 600);
}
