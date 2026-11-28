/* Hidden test checkout. Prices match the published site and Schedule B of the
   draft agreement. Replace each paymentLink with that service's Stripe Payment Link.
   Leave the value as STRIPE_PAYMENT_LINK_TODO until the real link exists. */
window.JRM_CHECKOUT = {
  agreementVersion: "DRAFT v1.0 (prepared 2026-11-27, effective date not set)",
  agreementFile: "assets/agreement/JRM-Service-Agreement-DRAFT.md",
  formspree: "https://formspree.io/f/xvzvandr",
  paymentPlaceholder: "STRIPE_PAYMENT_LINK_TODO",
  services: {
    starter: {
      name: "Starter",
      priceLabel: "$2,500/mo + HST",
      amount: 2500,
      billing: "monthly",
      detail: "Monthly package. 3-month minimum term, then month to month with 30 days' notice. Ad spend is paid by you to the ad platforms.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    basic: {
      name: "Basic",
      priceLabel: "$4,000/mo + HST",
      amount: 4000,
      billing: "monthly",
      detail: "Monthly package. 3-month minimum term, then month to month with 30 days' notice. Ad spend is paid by you to the ad platforms.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    growth: {
      name: "Growth",
      priceLabel: "$7,500/mo + HST",
      amount: 7500,
      billing: "monthly",
      detail: "Monthly package. 3-month minimum term, then month to month with 30 days' notice. Ad spend is paid by you to the ad platforms.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    enterprise: {
      name: "Enterprise",
      priceLabel: "$10,000/mo + HST",
      amount: 10000,
      billing: "monthly",
      detail: "Monthly package. 3-month minimum term, then month to month with 30 days' notice. Ad spend is paid by you to the ad platforms.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    seo: {
      name: "SEO",
      priceLabel: "From $1,500/mo + HST",
      amount: 1500,
      billing: "monthly",
      detail: "Search Engine Optimization, at the published starting price. 3-month minimum term, then month to month with 30 days' notice. A written quote wins if it sets a different fee.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    "paid-ads": {
      name: "Paid ads",
      priceLabel: "$1,500/mo + HST (first platform)",
      amount: 1500,
      billing: "monthly",
      detail: "Paid Ads Management for the first platform. 3-month minimum term, then month to month with 30 days' notice. Each added platform is + $700/mo + HST and is not part of this checkout. Ad spend is paid by you to the ad platforms.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    "social-essential": {
      name: "Social media Essential",
      priceLabel: "$2,500/mo + HST",
      amount: 2500,
      billing: "monthly",
      detail: "Social Media Management, Essential. 3-month minimum term, then month to month with 30 days' notice.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    "social-premium": {
      name: "Social media Premium",
      priceLabel: "$5,000/mo + HST",
      amount: 5000,
      billing: "monthly",
      detail: "Social Media Management, Premium. 3-month minimum term, then month to month with 30 days' notice.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    "web-design-monthly": {
      name: "Web design monthly",
      priceLabel: "$350/mo + HST",
      amount: 350,
      billing: "monthly",
      detail: "Website Design & Development, monthly plan. 3-month minimum term, then month to month with 30 days' notice. Updates are within reason (fair use).",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    "web-design-annual": {
      name: "Web design annual",
      priceLabel: "$3,360/yr + HST",
      amount: 3360,
      billing: "annual",
      detail: "Website Design & Development, annual plan, paid upfront. It renews each year unless you tell us in writing before the renewal date. We email a reminder 30 days before renewal.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    "logo-design": {
      name: "Logo",
      priceLabel: "$500 + HST",
      amount: 500,
      billing: "once",
      detail: "Logo design, one-time. Includes 3 initial concepts and revisions until you're happy, within reason.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    "business-cards": {
      name: "Business cards",
      priceLabel: "$500 + HST",
      amount: 500,
      billing: "once",
      detail: "Business card design, one-time. Printing is not included. Revisions until you're happy, within reason.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    },
    consultation: {
      name: "Consultation",
      priceLabel: "$2,500 + HST",
      amount: 2500,
      billing: "once",
      detail: "Digital marketing consultation, one-time.",
      paymentLink: "STRIPE_PAYMENT_LINK_TODO"
    }
  }
};
