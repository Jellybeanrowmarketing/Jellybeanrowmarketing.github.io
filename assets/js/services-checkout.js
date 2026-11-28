/* Hidden checkout. Prices match the published site and Schedule B of the
   draft agreement. paymentPlaceholder is only the fallback when a link is missing. */
window.JRM_CHECKOUT = {
  agreementVersion: "Version 1.0, effective November 28, 2026",
  agreementFile: "assets/agreement/JRM-Service-Agreement.pdf",
  formspree: "https://formspree.io/f/xvzvandr",
  paymentPlaceholder: "STRIPE_PAYMENT_LINK_TODO",
  services: {
    starter: {
      name: "Starter",
      priceLabel: "$2,500/mo + HST where applicable",
      amount: 2500,
      billing: "monthly",
      detail: "Monthly package. 3-month minimum term, then month to month with 30 days' notice. Ad spend is paid by you to the ad platforms.",
      paymentLink: "https://buy.stripe.com/bJe14pc0C2UC4im2i2d3i0H"
    },
    basic: {
      name: "Basic",
      priceLabel: "$4,000/mo + HST where applicable",
      amount: 4000,
      billing: "monthly",
      detail: "Monthly package. 3-month minimum term, then month to month with 30 days' notice. Ad spend is paid by you to the ad platforms.",
      paymentLink: "https://buy.stripe.com/bJe14p6Gi66O3eibSCd3i0I"
    },
    growth: {
      name: "Growth",
      priceLabel: "$7,500/mo + HST where applicable",
      amount: 7500,
      billing: "monthly",
      detail: "Monthly package. 3-month minimum term, then month to month with 30 days' notice. Ad spend is paid by you to the ad platforms.",
      paymentLink: "https://buy.stripe.com/7sY5kF1lYfHo8yC7Cmd3i0J"
    },
    enterprise: {
      name: "Enterprise",
      priceLabel: "$10,000/mo + HST where applicable",
      amount: 10000,
      billing: "monthly",
      detail: "Monthly package. 3-month minimum term, then month to month with 30 days' notice. Ad spend is paid by you to the ad platforms.",
      paymentLink: "https://buy.stripe.com/28EbJ33u60MuaGK8Gqd3i0K"
    },
    seo: {
      name: "SEO",
      priceLabel: "$1,500/mo + HST where applicable",
      amount: 1500,
      billing: "monthly",
      detail: "Search Engine Optimization, at the published starting price. 3-month minimum term, then month to month with 30 days' notice. A written quote wins if it sets a different fee.",
      paymentLink: "https://buy.stripe.com/cNicN76Gi8eW6qucWGd3i0L"
    },
    "paid-ads": {
      name: "Paid ads",
      priceLabel: "$1,500/mo + HST where applicable (first platform)",
      amount: 1500,
      billing: "monthly",
      detail: "Paid Ads Management for the first platform. 3-month minimum term, then month to month with 30 days' notice. Each added platform is + $700/mo + HST where applicable and is not part of this checkout. Ad spend is paid by you to the ad platforms.",
      paymentLink: "https://buy.stripe.com/9B64gB4ya52K9CGe0Kd3i0M"
    },
    "social-essential": {
      name: "Social media Essential",
      priceLabel: "$2,500/mo + HST where applicable",
      amount: 2500,
      billing: "monthly",
      detail: "Social Media Management, Essential. 3-month minimum term, then month to month with 30 days' notice.",
      paymentLink: "https://buy.stripe.com/6oUdRb8Oqan46qu7Cmd3i0N"
    },
    "social-premium": {
      name: "Social media Premium",
      priceLabel: "$5,000/mo + HST where applicable",
      amount: 5000,
      billing: "monthly",
      detail: "Social Media Management, Premium. 3-month minimum term, then month to month with 30 days' notice.",
      paymentLink: "https://buy.stripe.com/5kQ28tggS3YG9CG2i2d3i0O"
    },
    "web-design-monthly": {
      name: "Web design monthly",
      priceLabel: "$350/mo + HST where applicable",
      amount: 350,
      billing: "monthly",
      detail: "Website Design & Development, monthly plan. 3-month minimum term, then month to month with 30 days' notice. Updates are within reason (fair use).",
      paymentLink: "https://buy.stripe.com/3cI7sN4ya1QycOSg8Sd3i0P"
    },
    "web-design-annual": {
      name: "Web design annual",
      priceLabel: "$3,360/yr + HST where applicable",
      amount: 3360,
      billing: "annual",
      detail: "Website Design & Development, annual plan, paid upfront. It renews each year unless you tell us in writing before the renewal date. We email a reminder 30 days before renewal.",
      paymentLink: "https://buy.stripe.com/eVq4gB6GieDkdSW5ued3i0Q"
    },
    "logo-design": {
      name: "Logo",
      priceLabel: "$500 + HST where applicable",
      amount: 500,
      billing: "once",
      detail: "Logo design, one-time. Includes 3 initial concepts and revisions until you're happy, within reason.",
      paymentLink: "https://buy.stripe.com/fZu9AV3u62UCcOSbSCd3i0R"
    },
    "business-cards": {
      name: "Business cards",
      priceLabel: "$500 + HST where applicable",
      amount: 500,
      billing: "once",
      detail: "Business card design, one-time. Printing is not included. Revisions until you're happy, within reason.",
      paymentLink: "https://buy.stripe.com/8x214p6Gi0Mu6que0Kd3i0S"
    },
    consultation: {
      name: "Consultation",
      priceLabel: "$2,500 + HST where applicable",
      amount: 2500,
      billing: "once",
      detail: "Digital marketing consultation, one-time.",
      paymentLink: "https://buy.stripe.com/00w5kFfcObr83eibSCd3i0T"
    }
  }
};
