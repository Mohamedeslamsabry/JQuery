/// <reference types="../@types/jquery"/>
// ! open
$(".open").on("click", function () {
  $(".setting").animate({ width: "250px" }, 1000);
  $(".open").animate({ left: "250px" }, 1000);
});

// ! Close
$(".close").on("click", function () {
  $(".setting").animate({ width: "0" }, 1000);
  $(".open").animate({ left: "0" }, 1000);
});
/* ======================================================================================= */
//! Signear
$("#Duration h3").on("click", function (e) {
  $(e.target).next().slideToggle(1000); //! Show
  $("#Duration div").not($(e.target).next()).slideUp(1000);
});

//! scroll Smooth
$('a[href ^="#"]').on("click", function (e) {
  let href = $(e.target).attr("href"); //id
  let currentSection = $(href).offset().top;
  $("html").animate({ scrollTop: currentSection }, 2000);
});

//! Counter
let countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();    //! Parety Date
let x = setInterval(function () {
  let now = new Date().getTime();    //! Current Date 
  let distance = countDownDate - now;    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

  // Display the result in the element with id="demo"
  $('#demo').html (`<div class="col-sm-3 ">
            <div class="brdr">
              <h4 class="text-white fs-1">${days} D</h4>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="brdr">
              <h4 class="text-white fs-1">${hours} h</h4>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="brdr">
              <h4 class="text-white fs-1">${minutes} m</h4>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="brdr">
              <h4 class="text-white fs-1">${seconds} s</h4>
            </div>
          </div>`
) 
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//! Contact
$('textarea').on('input',function(){
  let Mylength=$('textarea').val().length;
  $('#number').html(
    100-Mylength ==0 ?'finished': 100-Mylength
  )
})
//!===================================================================================================











