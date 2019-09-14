const GA_ID = "UA-148033321-1";

export function sendGAEvent(
  event_category,
  event_action,
  event_label,
  event_value
) {
  if (window && window.ga) {
    window.gtag("event", "view_item", {
      event_category,
      event_action,
      event_label,
      event_value
    });
  }
}

export function sendGAPageView(page_path) {
  if (window && window.gtag) {
    window.gtag("config", GA_ID, { page_path });
  }
}

export default {
  sendGAEvent,
  sendGAPageView
};
