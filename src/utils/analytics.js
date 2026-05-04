export const track = (event, params = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params);
  }
};

export const analytics = {
  ctaClick: (label, location) => track("cta_click", { label, location }),

  linkClick: (label, url) => track("link_click", { label, url }),

  modalOpen: (type, name) => track("modal_open", { type, name }),

  modalCTA: (source, name) => track("modal_cta_click", { source, name }),

  scrollToContact: (source) => track("scroll_to_contact", { source }),

  formStart: () => track("form_started"),

  formSubmit: () => track("form_submit_attempt"),

  formSuccess: () => track("form_submit_success"),

  formError: (error) => track("form_submit_error", { error }),
};
