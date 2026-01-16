import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const GA_ID = "G-1ED70JSV2W";

function ga4Injector() {
  return {
    name: "ga4-injector",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        injectScript(
          "head-inline",
          `
(function () {
  "use strict";

  // Absolute fail-safe: never throw out of this block
  try {
    // Prevent double-init
    if (window.__ga4_inited__) return;
    window.__ga4_inited__ = true;

    // ---- ultra-safe helpers ----
    function safeStr(v, max) {
      try {
        v = (v === undefined || v === null) ? "" : String(v);
        v = v.trim();
        if (max && v.length > max) v = v.slice(0, max);
        return v;
      } catch (_) { return ""; }
    }

    function safeBool(v) {
      try { return !!v; } catch (_) { return false; }
    }

    function nowIso() {
      try { return new Date().toISOString(); } catch (_) { return ""; }
    }

    function getTZ() {
      try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (_) { return ""; }
    }

    function deviceType() {
      try {
        var w = window.innerWidth || 0;
        if (w && w <= 767) return "mobile";
        if (w && w <= 1024) return "tablet";
        return "desktop";
      } catch (_) { return "unknown"; }
    }

    function getNetType() {
      try {
        var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        return (c && c.effectiveType) ? safeStr(c.effectiveType, 20) : "";
      } catch (_) { return ""; }
    }

    // Conservative bot heuristic (best-effort only)
    function isProbablyBot() {
      try {
        var ua = safeStr(navigator.userAgent, 300).toLowerCase();
        if (!ua) return 0;
        if (/bot|spider|crawl|slurp|bingpreview|headless|lighthouse|pagespeed|prerender/.test(ua)) return 1;
        if (navigator.webdriver === true) return 1;
        return 0;
      } catch (_) { return 0; }
    }

    function getContext(extra) {
      extra = extra || {};
      var ctx = {};
      try {
        ctx.page_location = safeStr(location.href, 500);
        ctx.page_path = safeStr(location.pathname, 200);
        ctx.page_title = safeStr(document.title, 120);
        ctx.page_referrer = safeStr(document.referrer, 300);
      } catch (_) {}

      try {
        ctx.device_type = deviceType();
        ctx.viewport_w = (window.innerWidth || 0);
        ctx.viewport_h = (window.innerHeight || 0);
      } catch (_) {}

      try {
        ctx.language = safeStr(navigator.language, 20);
        ctx.timezone = safeStr(getTZ(), 60);
        ctx.client_time_iso = safeStr(nowIso(), 40);
      } catch (_) {}

      try {
        ctx.cookies_enabled = safeBool(navigator.cookieEnabled);
        ctx.net_effective_type = safeStr(getNetType(), 20);
        ctx.dnt = safeStr(navigator.doNotTrack || window.doNotTrack || "", 10);
      } catch (_) {}

      try {
        ctx.is_probably_bot = isProbablyBot();
      } catch (_) {
        ctx.is_probably_bot = 0;
      }

      // Merge extras last (but keep safe strings)
      try {
        for (var k in extra) {
          if (!Object.prototype.hasOwnProperty.call(extra, k)) continue;
          var val = extra[k];
          // Only allow primitive-ish values
          if (typeof val === "string") ctx[k] = safeStr(val, 300);
          else if (typeof val === "number") ctx[k] = isFinite(val) ? val : 0;
          else if (typeof val === "boolean") ctx[k] = val;
          else ctx[k] = safeStr(val, 300);
        }
      } catch (_) {}

      return ctx;
    }

    // Safe queue + gtag shim (never throws)
    try {
      window.dataLayer = window.dataLayer || [];
    } catch (_) {
      // if even this fails, stop quietly
      return;
    }

    function gtagSafe() {
      try {
        // push arguments into dataLayer
        window.dataLayer.push(arguments);
      } catch (_) {}
    }

    // Expose gtag if not present
    try {
      window.gtag = window.gtag || gtagSafe;
    } catch (_) {}

    function fire(eventName, extra) {
      try {
        if (!eventName) return;
        window.gtag("event", eventName, getContext(extra));
      } catch (_) {}
    }

    // Load GA library async (never blocks render)
    try {
      var s = document.createElement("script");
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=${GA_ID}";
      // If DOM not ready, append when possible
      var head = document.head || document.getElementsByTagName("head")[0];
      if (head && head.appendChild) head.appendChild(s);
    } catch (_) {}

    function normalizeUrl(href) {
      try { return new URL(href, location.href); } catch (_) { return null; }
    }

    function closestA(target) {
      try {
        if (!target) return null;
        if (target.closest) return target.closest("a");
      } catch (_) {}
      return null;
    }

    function attachListeners() {
      // Click delegation
      try {
        document.addEventListener("click", function (e) {
          try {
            var a = closestA(e.target);
            if (!a) return;

            var href = safeStr(a.getAttribute("href") || "", 500);
            if (!href) return;

            var url = normalizeUrl(href);
            if (!url || !url.href) return;

            var full = safeStr(url.href, 500).toLowerCase();
            var host = safeStr(url.host, 120);
            var path = safeStr(url.pathname, 200);
            var text = safeStr(a.textContent || a.getAttribute("aria-label") || "", 80);

            // tel: (privacy: do NOT send number)
            if (full.indexOf("tel:") === 0) {
              fire("click_call", { link_text: text });
              return;
            }

            // WhatsApp
            if (full.indexOf("wa.me/") !== -1 || full.indexOf("api.whatsapp.com/") !== -1 || full.indexOf("whatsapp.com/") !== -1) {
              fire("click_whatsapp", { link_host: host, link_path: path, link_text: text });
              return;
            }

            // Maps
            if (full.indexOf("google.com/maps") !== -1 || full.indexOf("maps.google.com") !== -1 || full.indexOf("maps.app.goo.gl") !== -1 || full.indexOf("goo.gl/maps") !== -1) {
              fire("click_maps", { link_host: host, link_path: path, link_text: text });
              return;
            }

            // mailto: (privacy: do NOT send email)
            if (full.indexOf("mailto:") === 0) {
              fire("click_email", { link_text: text });
              return;
            }

            // Outbound
            try {
              if (url.origin && location.origin && url.origin !== location.origin) {
                fire("click_outbound", { link_host: host, link_path: path, link_text: text });
                return;
              }
            } catch (_) {}
          } catch (_) {}
        }, { capture: true, passive: true });
      } catch (_) {}

      // Form submit (do not collect field values)
      try {
        document.addEventListener("submit", function (e) {
          try {
            var form = e.target;
            if (!form || !form.getAttribute) return;

            var action = safeStr(form.getAttribute("action") || "", 200);
            var method = safeStr((form.getAttribute("method") || "GET").toUpperCase(), 10);
            var formId = safeStr(form.getAttribute("id") || "", 60);
            var formName = safeStr(form.getAttribute("name") || "", 60);

            fire("form_submit", {
              form_action: action,
              form_method: method,
              form_id: formId,
              form_name: formName
            });
          } catch (_) {}
        }, { capture: true, passive: true });
      } catch (_) {}
    }

    // Init + listeners when idle (or ASAP fallback)
    function init() {
      try {
        window.gtag("js", new Date());
        window.gtag("config", "${GA_ID}", { send_page_view: true });
      } catch (_) {}
      attachListeners();
    }

    try {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(init, { timeout: 2000 });
      } else {
        setTimeout(init, 1);
      }
    } catch (_) {
      // Last resort: try immediate init
      try { init(); } catch (_) {}
    }
  } catch (_) {
    // Swallow all errors: never affect page rendering
  }
})();
          `
        );
      },
    },
  };
}

export default defineConfig({
  site: "https://insuranceconsult.in",
  trailingSlash: "always",
  integrations: [sitemap(), ga4Injector()],
});
