(function () {
  var ENDPOINT = "https://formspree.io/f/xvzvandr";

  document.querySelectorAll(".nav-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var nav = btn.closest("nav");
      if (!nav) return;
      var open = nav.classList.toggle("nav-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Menu");
    });
  });

  document.querySelectorAll("#splash").forEach(function (splash) {
    splash.addEventListener("click", function () {
      splash.classList.add("splash-done");
      var site = document.getElementById("site");
      if (site) site.classList.add("site-shown");
    });
  });

  document.querySelectorAll("form.jbr-quote").forEach(function (form) {
    form.setAttribute("action", ENDPOINT);
    form.setAttribute("method", "POST");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var btn = form.querySelector("[type='submit']");
      var note = form.querySelector(".jbr-form-status");
      var data = {};
      new FormData(form).forEach(function (value, key) {
        data[key] = value;
      });
      var label = btn ? btn.textContent : "Get a Quote";
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Sending...";
      }
      if (note) note.textContent = "";
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      }).then(function (res) {
        if (!res.ok) throw new Error("Formspree " + res.status);
        if (btn) {
          btn.textContent = "Quote request sent";
          btn.style.background = "#1a9c2a";
        }
        if (note) note.textContent = "Thanks. Tyler will reply at the email you entered.";
        form.reset();
      }).catch(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = label;
          btn.style.background = "";
        }
        if (note) {
          note.textContent = "That did not send. Call 709-315-6483 or email tyler@jellybeanrowmarketing.com.";
        }
      });
    });
  });
})();
