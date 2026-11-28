(function () {
  var cfg = window.JRM_CHECKOUT;
  if (!cfg) return;

  var params = new URLSearchParams(window.location.search);
  var slug = (params.get("service") || "").trim().toLowerCase();
  var service = cfg.services[slug] || null;

  var missing = document.getElementById("service-missing");
  var flow = document.getElementById("checkout-flow");
  var list = document.getElementById("service-list");

  function money(amount) {
    return amount.toLocaleString("en-CA", { style: "currency", currency: "CAD" });
  }

  function hst(amount) {
    return Math.round(amount * 100 * 0.15) / 100;
  }

  function todayStamp() {
    var now = new Date();
    var local = now.toLocaleString("en-CA", {
      timeZone: "America/St_Johns",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    var clock = now.toLocaleString("en-CA", {
      timeZone: "America/St_Johns",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short"
    });
    return {
      date: local,
      dateTime: local + " at " + clock,
      iso: now.toISOString()
    };
  }

  function plusOneMonth(from) {
    var next = new Date(from.getTime());
    next.setMonth(next.getMonth() + 1);
    return next.toLocaleString("en-CA", {
      timeZone: "America/St_Johns",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  function setScheduleCell(label, value) {
    var cells = document.querySelectorAll("#agreement td");
    for (var i = 0; i < cells.length; i++) {
      if (cells[i].textContent.trim() === label && cells[i + 1]) {
        cells[i + 1].textContent = value;
        return;
      }
    }
  }

  function fillSchedule(item, tax, total, stamp) {
    var platforms = "Not part of this service.";
    if (item.billing === "monthly" && /^(starter|basic|growth|enterprise|paid-ads)$/.test(slug)) {
      platforms = "Not chosen on this page. Ad spend is paid by you directly to the ad platforms.";
    }
    var recurring = "None.";
    var minimum = "None.";
    if (item.billing === "monthly") {
      recurring = money(total) + " CAD per month, including HST, starting " + plusOneMonth(new Date()) + ".";
      minimum = "3 months, then month to month with 30 days' written notice.";
    } else if (item.billing === "annual") {
      recurring = "Not a monthly charge. Renews at " + money(total) + " CAD, including HST, on each anniversary unless cancelled in writing before the renewal date.";
    }
    setScheduleCell("Order / Stripe reference", "Added after payment. This test does not create a Stripe charge.");
    setScheduleCell("Service selected", item.name);
    setScheduleCell("Type", billingLabel(item.billing));
    setScheduleCell("Fee (before tax)", money(item.amount) + " CAD");
    setScheduleCell("HST (15%)", money(tax) + " CAD");
    setScheduleCell("Total charged today", money(total) + " CAD");
    setScheduleCell("Recurring charge (if monthly)", recurring);
    setScheduleCell("Minimum term (if any)", minimum);
    setScheduleCell("Ad platforms (if paid ads)", platforms);
    setScheduleCell("Written quote / proposal reference (if any)", "None on this page.");
    setScheduleCell("Start Date", stamp.date);
  }

  function billingLabel(kind) {
    if (kind === "monthly") return "Monthly service";
    if (kind === "annual") return "Annual plan";
    return "One-time project";
  }

  function fillList() {
    if (!list) return;
    var html = "";
    Object.keys(cfg.services).forEach(function (key) {
      var item = cfg.services[key];
      html += '<li><a href="get-started.html?service=' + encodeURIComponent(key) + '">' +
        item.name + " — " + item.priceLabel + "</a></li>";
    });
    list.innerHTML = html;
  }

  fillList();

  if (!service) {
    if (missing) missing.hidden = false;
    if (flow) flow.hidden = true;
    return;
  }

  if (missing) missing.hidden = true;
  if (flow) flow.hidden = false;

  document.title = "Sign and pay: " + service.name + " (test) | Jellybean Row Marketing";

  var stamp = todayStamp();
  var tax = hst(service.amount);
  var total = Math.round((service.amount + tax) * 100) / 100;

  document.getElementById("svc-name").textContent = service.name;
  document.getElementById("svc-price").textContent = service.priceLabel;
  document.getElementById("svc-detail").textContent = service.detail;
  document.getElementById("svc-billing").textContent = billingLabel(service.billing);
  document.getElementById("agree-version").textContent = cfg.agreementVersion;
  document.getElementById("agree-date").textContent = stamp.date;
  document.getElementById("agree-version-2").textContent = cfg.agreementVersion;
  document.getElementById("agree-date-2").textContent = stamp.date;
  document.getElementById("order-service").textContent = service.name;
  document.getElementById("order-type").textContent = billingLabel(service.billing);
  document.getElementById("order-fee").textContent = money(service.amount) + " CAD";
  document.getElementById("order-hst").textContent = money(tax) + " CAD";
  document.getElementById("order-total").textContent = money(total) + " CAD";

  var recurring = document.getElementById("order-recurring");
  var minimum = document.getElementById("order-minimum");
  if (service.billing === "monthly") {
    recurring.textContent = money(total) + " CAD per month, including HST, after the first month.";
    minimum.textContent = "3 months, then month to month with 30 days' written notice.";
  } else if (service.billing === "annual") {
    recurring.textContent = "Renews yearly at " + money(total) + " CAD, including HST, unless you cancel the renewal in writing before the renewal date.";
    minimum.textContent = "None. The year is paid upfront.";
  } else {
    recurring.textContent = "None. This is a one-time fee.";
    minimum.textContent = "None.";
  }
  document.getElementById("order-start").textContent = stamp.date;
  fillSchedule(service, tax, total, stamp);

  var minimumWrap = document.getElementById("minimum-wrap");
  var minimumBox = document.getElementById("minimum-term");
  if (service.billing === "monthly") {
    minimumWrap.hidden = false;
    minimumBox.required = true;
  } else {
    minimumWrap.hidden = true;
    minimumBox.required = false;
    minimumBox.checked = false;
  }

  var form = document.getElementById("sign-form");
  var status = document.getElementById("form-status");
  var stepPay = document.getElementById("step-pay");
  var stepSign = document.getElementById("step-sign");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.textContent = "";
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var name = form.elements.name.value.trim().replace(/\s+/g, " ");
    var signature = form.elements["typed signature"].value.trim().replace(/\s+/g, " ");
    if (name.toLowerCase() !== signature.toLowerCase()) {
      status.textContent = "Type your full legal name as the signature. It needs to match the full legal name above.";
      form.elements["typed signature"].focus();
      return;
    }

    var now = todayStamp();
    var payload = {
      _subject: "Signed service agreement – " + service.name + " – " + name,
      _replyto: form.elements.email.value.trim(),
      service: service.name,
      price: service.priceLabel,
      name: name,
      business: form.elements.business.value.trim(),
      email: form.elements.email.value.trim(),
      phone: form.elements.phone.value.trim(),
      "typed signature": signature,
      "agreement version": cfg.agreementVersion,
      "date/time": now.dateTime + " (" + now.iso + ")",
      "user agent": navigator.userAgent,
      title: form.elements.title.value.trim(),
      "portfolio opt-out": form.elements["portfolio opt-out"].checked ? "Yes" : "No",
      "3-month minimum confirmed": service.billing === "monthly" ? "Yes" : "Not a monthly service",
    };

    var button = form.querySelector("[type='submit']");
    button.disabled = true;
    button.textContent = "Sending…";

    fetch(cfg.formspree, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (!res.ok) throw new Error("Formspree " + res.status);
      showPay(payload.email);
    }).catch(function () {
      button.disabled = false;
      button.textContent = "Sign and continue to payment";
      status.textContent = "That did not send. Nothing is signed yet. Call 709-315-6483 or email Tyler@Jellybeanrowmarketing.com.";
    });
  });

  function showPay(email) {
    stepSign.hidden = true;
    stepPay.hidden = false;
    document.getElementById("pay-service").textContent = service.name;
    document.getElementById("pay-price").textContent = service.priceLabel;
    document.getElementById("pay-email").textContent = email;

    var paySlot = document.getElementById("pay-slot");
    paySlot.replaceChildren();
    var link = service.paymentLink;
    if (!link || link === cfg.paymentPlaceholder) {
      var note = document.createElement("p");
      note.className = "test-mode";
      note.setAttribute("role", "status");
      note.textContent = "Test mode – payment not connected yet";
      paySlot.appendChild(note);
    } else {
      var href = link;
      try {
        var url = new URL(link);
        url.searchParams.set("prefilled_email", email);
        href = url.toString();
      } catch (err) {
        href = link;
      }
      var payLink = document.createElement("a");
      payLink.className = "pay-btn";
      payLink.id = "pay-link";
      payLink.href = href;
      payLink.textContent = "Pay " + service.priceLabel;
      paySlot.appendChild(payLink);
    }

    var heading = document.getElementById("pay-heading");
    heading.focus();
    heading.scrollIntoView({ behavior: "smooth", block: "start" });
  }
})();
