$(document).ready(function() {
  let clock;

  // Grab the current date
  let currentDate = new Date();

  // Target future date/24 hour time/Timezone (updated to event date)
  // NOTE: change this value to update the countdown target.
  let targetDate = moment.tz("2025-10-30 12:00", "Asia/Kolkata");

  // Calculate the difference in seconds between the future and current date
  // use valueOf() for clarity (milliseconds since epoch) then convert to seconds
  let diff = Math.floor((targetDate.valueOf() - currentDate.getTime()) / 1000);

  if (diff <= 0) {
    // If remaining countdown is 0
    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false
    });
    console.log("Date has already passed!")
    
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
    
    // Check when timer reaches 0, then stop at 0
    setTimeout(function() {
      checktime();
    }, 1000);
    
    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(function() {
        checktime();
      }, 1000);
    }
  }
});
