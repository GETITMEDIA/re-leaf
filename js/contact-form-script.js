// Contact form handler.
// No backend, database, or third-party service is used. On submit, the
// form is validated, then WhatsApp is opened with the submitted details
// pre-filled as a message to the resort's WhatsApp number.

(function () {

  // +91 82206 35822, in wa.me format (country code + number, no spaces/plus).
  var WHATSAPP_NUMBER = "918220635822";

  var form = document.getElementById("contact_form");
  if (!form) return; // Form only exists on the contact page.

  var submitBtn = form.querySelector('button[type="submit"]');
  var submitBtnDefaultHtml = submitBtn ? submitBtn.innerHTML : "";

  var fields = {
    form_name: { required: true },
    form_email: { required: true, email: true },
    form_phone: { required: true },
    form_subject: { required: true },
    form_message: { required: true }
  };

  var errorMessages = {
    form_name: "Please enter your name.",
    form_email: {
      required: "Please enter your email address.",
      email: "Please enter a valid email address."
    },
    form_phone: "Please enter your phone number.",
    form_subject: "Please enter a subject.",
    form_message: "Please enter your message."
  };

  function getInput(name) {
    return form.querySelector('[name="' + name + '"]');
  }

  function getErrorBox(name) {
    return document.getElementById(name + "-error");
  }

  function showError(name, message) {
    var input = getInput(name);
    var errorBox = getErrorBox(name);
    if (input) input.classList.add("is-invalid");
    if (errorBox) errorBox.textContent = message;
  }

  function clearError(name) {
    var input = getInput(name);
    var errorBox = getErrorBox(name);
    if (input) input.classList.remove("is-invalid");
    if (errorBox) errorBox.textContent = "";
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  // Validates all fields, highlighting any that fail, and returns
  // whether the whole form is valid.
  function validateForm() {
    var isFormValid = true;
    var firstInvalidInput = null;

    Object.keys(fields).forEach(function (name) {
      var input = getInput(name);
      var value = input ? input.value.trim() : "";
      var rules = fields[name];
      var message = errorMessages[name];

      clearError(name);

      if (rules.required && value === "") {
        showError(name, typeof message === "object" ? message.required : message);
        isFormValid = false;
        firstInvalidInput = firstInvalidInput || input;
        return;
      }

      if (rules.email && !isValidEmail(value)) {
        showError(name, typeof message === "object" ? message.email : message);
        isFormValid = false;
        firstInvalidInput = firstInvalidInput || input;
      }
    });

    if (firstInvalidInput) firstInvalidInput.focus();

    return isFormValid;
  }

  // Builds a wa.me URL with the submitted details pre-filled as the
  // message text, then opens WhatsApp (app on mobile, WhatsApp Web on
  // desktop) in a new tab so the user just has to tap Send there.
  function openWhatsApp() {
    var name = getInput("form_name").value.trim();
    var email = getInput("form_email").value.trim();
    var phone = getInput("form_phone").value.trim();
    var subject = getInput("form_subject").value.trim();
    var message = getInput("form_message").value.trim();

    var text = encodeURIComponent(
      "New enquiry from the website:\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Phone: " + phone + "\n" +
      "Subject: " + subject + "\n" +
      "Message: " + message
    );

    var whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
    window.open(whatsappUrl, "_blank", "noopener");
    return whatsappUrl;
  }

  // Shows a small auto-dismissing toast anchored to the right edge of the
  // screen, without touching any existing page layout or stylesheet.
  var toastHideTimer = null;
  function showToast(message) {
    var toast = document.getElementById("contact-form-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "contact-form-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.cssText =
      "position:fixed;top:20px;right:20px;z-index:99999;" +
      "max-width:320px;padding:14px 20px;border-radius:6px;" +
      "font-family:inherit;font-size:15px;font-weight:500;line-height:1.4;" +
      "color:#fff;background:#25D366;box-shadow:0 6px 20px rgba(0,0,0,0.2);" +
      "opacity:0;transform:translateX(20px);" +
      "transition:opacity .3s ease,transform .3s ease;";

    requestAnimationFrame(function () {
      toast.style.opacity = "1";
      toast.style.transform = "translateX(0)";
    });

    clearTimeout(toastHideTimer);
    toastHideTimer = setTimeout(function () {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(20px)";
    }, 6000);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Honeypot check - silently drop likely-bot submissions.
    var botField = form.querySelector('[name="form_botcheck"]');
    if (botField && botField.value) {
      form.reset();
      return;
    }

    if (!validateForm()) return;

    openWhatsApp();

    // Clear the form and give the user visible confirmation, since
    // the browser gives no feedback of its own when opening WhatsApp.
    form.reset();
    Object.keys(fields).forEach(clearError);
    showToast("Opening WhatsApp... Please tap Send there to complete your message.");
  });

  // Clear a field's error as soon as the user starts fixing it.
  Object.keys(fields).forEach(function (name) {
    var input = getInput(name);
    if (input) {
      input.addEventListener("input", function () { clearError(name); });
    }
  });

  // Clear all validation states when the form is reset.
  form.addEventListener("reset", function () {
    Object.keys(fields).forEach(clearError);
  });

})();
