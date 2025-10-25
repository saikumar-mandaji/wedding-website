$(document).ready(function() {
  let clock;

  // Grab the current date
  let currentDate = new Date();

  // Target future date/24 hour time/Timezone (updated to event date)
  // NOTE: change this value to update the countdown target.
  // Use 24-hour format to avoid AM/PM confusion
  let targetDate = moment.tz("2025-10-30 10:59", "YYYY-MM-DD HH:mm", "Asia/Kolkata");

  // Calculate the difference in seconds between the future and current date
  // use valueOf() for clarity (milliseconds since epoch) then convert to seconds
  let diff = Math.floor((targetDate.valueOf() - currentDate.getTime()) / 1000);

  console.log("Current Date: " + currentDate);
  console.log("Target Date: " + targetDate.format("YYYY-MM-DD HH:mm") + " (" + targetDate.format() + ")");
  console.log("Timezone: " + targetDate.tz());
  console.log("Seconds remaining: " + diff);

  if (diff <= 0) {
    // If remaining countdown is 0, hide the clock and show the message
    console.log("Date has already passed!");
    
    // Hide the timer completely
    $(".clock").hide();
    
    // Display a special message when the countdown is over
    $(".flipTimebox").html('<div class="wedding-day-message animate-box" data-animate-effect="fadeInUp"><div class="heart-container"><span class="heart small">❤</span><span class="heart medium">❤</span><span class="heart large">❤</span></div><h2 style="font-family: \'Dancing Script\', cursive; font-weight: 700; font-size: 48px;">Today is the day!</h2><p class="event-details">Join us in celebration of our special day</p><div class="fancy-divider"><span class="heart medium">❤</span></div></div>');
    
  } else {
    // Run countdown timer (diff is in seconds)
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: true,
      callbacks: {
        stop: function() {
          console.log("Timer has ended!")
        }
      }
    });
    
    // Check when timer reaches 0, then stop at 0 and display message
    setTimeout(function() {
      checktime();
    }, 1000);
    
    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        // Hide the timer completely and replace it with the message
        $(".clock").hide();
        
        // Replace the timer with the wedding day message
        $(".flipTimebox").html('<div class="wedding-day-message animate-box" data-animate-effect="fadeInUp"><div class="heart-container"><span class="heart small">❤</span><span class="heart medium">❤</span><span class="heart large">❤</span></div><h2 style="font-family: \'Dancing Script\', cursive; font-weight: 700; font-size: 48px;">Today is the day!</h2><p class="event-details">Join us in celebration of our special day</p><div class="fancy-divider"><span class="heart medium">❤</span></div></div>');
        
        // No need to continue checking once we've reached zero
        return;
      }
      setTimeout(function() {
        checktime();
      }, 1000);
    }
  }
});
