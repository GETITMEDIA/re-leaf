// Minimum Order Notice Popup - Canteen page only.
// Shows once per page load, 3 seconds after the page finishes loading,
// then forces a 10-second countdown before the visitor can dismiss it.
// No backend/libraries involved - plain HTML/CSS/JS.

(function () {

  var SHOW_DELAY_MS = 3000;    // wait before the popup appears
  var COUNTDOWN_SECONDS = 10;  // mandatory wait before OK is enabled

  var overlay = document.getElementById("noticePopupOverlay");
  if (!overlay) return; // Popup markup only exists on the canteen page.

  var popupBtn = document.getElementById("noticePopupBtn");
  var progressBar = document.getElementById("noticePopupProgressBar");
  var countdownText = document.getElementById("noticePopupCountdown");

  var secondsLeft = COUNTDOWN_SECONDS;
  var countdownTimer = null;

  // Escape must not close the popup - swallow the key while it's open.
  function blockEscapeKey(event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  // Note: no click handler is attached to the overlay itself, so
  // clicking outside the card does nothing - this is intentional,
  // the popup can only be dismissed via the OK button.

  function updateCountdownUI() {
    countdownText.textContent = "Please wait... " + secondsLeft + "s";
    popupBtn.textContent = "Waiting... (" + secondsLeft + "s)";
    progressBar.style.width = (secondsLeft / COUNTDOWN_SECONDS) * 100 + "%";
  }

  function startCountdown() {
    secondsLeft = COUNTDOWN_SECONDS;
    updateCountdownUI();

    countdownTimer = setInterval(function () {
      secondsLeft--;

      if (secondsLeft <= 0) {
        clearInterval(countdownTimer);
        countdownText.textContent = "You can proceed now.";
        progressBar.style.width = "0%";
        popupBtn.textContent = "OK";
        popupBtn.disabled = false;
        return;
      }

      updateCountdownUI();
    }, 1000);
  }

  function openPopup() {
    overlay.classList.add("active");
    document.body.classList.add("notice-popup-open"); // disables page scroll
    document.addEventListener("keydown", blockEscapeKey, true);
    startCountdown();
  }

  function closePopup() {
    overlay.classList.remove("active");
    document.body.classList.remove("notice-popup-open"); // restores page scroll
    document.removeEventListener("keydown", blockEscapeKey, true);
  }

  popupBtn.addEventListener("click", function () {
    if (popupBtn.disabled) return; // still counting down
    closePopup();
  });

  // Show the popup exactly once, SHOW_DELAY_MS after the page loads.
  window.setTimeout(openPopup, SHOW_DELAY_MS);

})();
