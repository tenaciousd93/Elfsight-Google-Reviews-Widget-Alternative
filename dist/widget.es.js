var $ = Object.defineProperty;
var A = (r, a, t) => a in r ? $(r, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[a] = t;
var f = (r, a, t) => A(r, typeof a != "symbol" ? a + "" : a, t);
const m = ":host{display:block;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;--bg-color: #ffffff;--text-color: #1f2937;--card-bg: #f9fafb;--border-color: #e5e7eb;--accent-color: #4285f4;--star-color: #FBBC05;--shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);max-width:100%}.widget-container.dark{--bg-color: #1f2937;--text-color: #f9fafb;--card-bg: #374151;--border-color: #4b5563;--shadow: 0 4px 6px -1px rgba(0, 0, 0, .5)}.widget-container{background:var(--bg-color);color:var(--text-color);border-radius:12px;padding:24px;box-shadow:var(--shadow);max-width:100%}.widget-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:16px}.header-left{display:flex;flex-direction:column;gap:8px}.google-badge{display:flex;align-items:center;gap:8px;font-weight:500;font-size:14px;color:#5f6368}.rating-badge{display:flex;align-items:center;gap:8px}.score{font-size:24px;font-weight:700}.stars{display:flex}.star-icon{fill:#dadce0}.star-icon.filled path{fill:var(--star-color)}.count{font-size:14px;color:#6b7280}.write-btn{background-color:var(--accent-color);color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;transition:opacity .2s}.write-btn:hover{opacity:.9}.reviews-container{display:grid;gap:16px}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.review-card{background:var(--card-bg);border:1px solid var(--border-color);border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:12px;opacity:0;animation:fadeIn .5s ease-out forwards}.review-header{display:flex;align-items:center;gap:12px}.review-header img{width:40px;height:40px;border-radius:50%;object-fit:cover}.review-meta{display:flex;flex-direction:column;flex:1}.author-name{font-weight:600;font-size:14px}.review-time{font-size:12px;color:#6b7280}.google-icon-link svg{width:20px;height:20px;opacity:.7}.review-text-container{font-size:14px;line-height:1.5}.read-more-btn{background:none;border:none;color:var(--accent-color);font-weight:500;cursor:pointer;padding:0;margin-top:4px;font-size:13px}.read-more-btn:hover{text-decoration:underline}.widget-container.grid .reviews-container{grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}.widget-container.carousel .reviews-container{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:16px;max-width:100%}.widget-container.carousel .review-card{min-width:280px;max-width:320px;scroll-snap-align:start}@media (max-width: 600px){.widget-header{flex-direction:column;align-items:flex-start}}.widget-container.badge{display:inline-flex;background:#fff;padding:8px 16px;border-radius:999px;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;border:1px solid #e5e7eb;max-width:max-content}.widget-container.badge.dark{background:#1f2937;border-color:#374151}.widget-container.list .reviews-container.list-view{display:flex;flex-direction:column;gap:16px;height:auto;overflow-y:visible;grid-template-columns:none}.widget-container.list .review-card{min-width:0;width:100%;margin-right:0}.badge-content{display:flex;align-items:center;gap:16px}.badge-left{display:flex;align-items:center;gap:12px}.badge-text{display:flex;flex-direction:column;line-height:1.2}.badge-rating{display:flex;align-items:center;gap:6px;font-size:14px}.badge-rating strong{font-weight:700}.badge-count{font-size:11px;color:#6b7280}.widget-container.dark .badge-count{color:#9ca3af}.badge-btn{background:#e5e7eb;color:#374151;text-decoration:none;padding:6px 12px;border-radius:999px;font-size:12px;font-weight:500;white-space:nowrap;transition:background .2s}.badge-btn:hover{background:#d1d5db}.widget-container.dark .badge-btn{background:#374151;color:#f3f4f6}.widget-container.dark .badge-btn:hover{background:#4b5563}";
class k extends HTMLElement {
  constructor() {
    super();
    f(this, "_src", "reviews.json");
    f(this, "_data", null);
    f(this, "_translations", {
      en: { rating_label: "Google Rating", reviews: "reviews", write_review: "Write a review", read_more: "Read more" },
      fr: { rating_label: "Avis Google", reviews: "avis", write_review: "Écrire un avis", read_more: "Lire la suite" },
      es: { rating_label: "Valoración Google", reviews: "reseñas", write_review: "Escribir reseña", read_more: "Leer más" },
      de: { rating_label: "Google Bewertung", reviews: "Rezensionen", write_review: "Bewertung schreiben", read_more: "Weiterlesen" },
      it: { rating_label: "Valutazione Google", reviews: "recensioni", write_review: "Scrivi una recensione", read_more: "Leggi tutto" },
      pt: { rating_label: "Avaliação Google", reviews: "avaliações", write_review: "Escrever avaliação", read_more: "Ler mais" },
      nl: { rating_label: "Google Beoordeling", reviews: "beoordelingen", write_review: "Schrijf een beoordeling", read_more: "Lees meer" },
      pl: { rating_label: "Ocena Google", reviews: "opinii", write_review: "Napisz opinię", read_more: "Czytaj więcej" },
      ru: { rating_label: "Рейтинг Google", reviews: "отзывов", write_review: "Написать отзыв", read_more: "Читать далее" },
      ja: { rating_label: "Google のクチコミ", reviews: "件のクチコミ", write_review: "クチコミを書く", read_more: "続きを読む" },
      ko: { rating_label: "Google 평점", reviews: "개의 리뷰", write_review: "리뷰 작성", read_more: "더 보기" },
      zh: { rating_label: "Google 评分", reviews: "条评论", write_review: "撰写评论", read_more: "阅读更多" }
    });
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["src", "theme", "layout", "lang", "min-rating", "sort", "hide-empty", "bg-color", "text-color", "card-bg", "border-color", "accent-color", "star-color"];
  }
  attributeChangedCallback(t, s, o) {
    s !== o && (t === "src" ? (this._src = o, this.fetchReviews()) : this.render());
  }
  connectedCallback() {
    this.hasAttribute("src") && (this._src = this.getAttribute("src")), this.initObserver();
  }
  initObserver() {
    if ("IntersectionObserver" in window) {
      const t = new IntersectionObserver((s) => {
        s.forEach((o) => {
          o.isIntersecting && (this.fetchReviews(), t.disconnect());
        });
      }, { rootMargin: "200px" });
      t.observe(this);
    } else
      this.fetchReviews();
  }
  async fetchReviews() {
    try {
      const t = await fetch(this._src);
      if (!t.ok) throw new Error("Failed to load reviews");
      this._data = await t.json(), this.injectSchemaOrg(), this.render();
    } catch (t) {
      console.error("Google Reviews Widget Error:", t), this.renderError();
    }
  }
  injectSchemaOrg() {
    if (!this._data) return;
    const t = "google-reviews-schema";
    if (document.getElementById(t)) return;
    const s = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: this._data.name,
      address: this._data.address,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: this._data.rating,
        reviewCount: this._data.user_ratings_total
      }
    }, o = document.createElement("script");
    o.id = t, o.type = "application/ld+json", o.textContent = JSON.stringify(s), document.head.appendChild(o);
  }
  renderError() {
    this.shadowRoot && (this.shadowRoot.innerHTML = `
      <style>${m}</style>
      <div class="widget-error">
        Failed to load reviews. Please check your connection or configuration.
      </div>
    `);
  }
  render() {
    if (!this.shadowRoot || !this._data) return;
    const t = this.getAttribute("theme") || "light", s = this.getAttribute("layout") || "grid", o = this.getAttribute("lang") || "en", n = this._translations[o] || this._translations.en, c = (e) => `
      <svg class="star-icon ${e ? "filled" : ""}" viewBox="0 0 24 24" width="16" height="16">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    `, g = `
      <svg viewBox="0 0 24 24" width="18" height="18" class="google-logo">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 4.6c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    `, p = `
      <div class="widget-header">
        <div class="header-left">
          <div class="google-badge">
            ${g}
            <span>${n.rating_label}</span>
          </div>
          <div class="rating-badge">
            <span class="score">${this._data.rating}</span>
            <div class="stars">
              ${Array(5).fill(0).map((e, i) => c(i < Math.round(this._data.rating))).join("")}
            </div>
            <span class="count">${this._data.user_ratings_total} ${n.reviews}</span>
          </div>
        </div>
        <a href="${this._data.url}" target="_blank" class="write-btn">${n.write_review}</a>
      </div>
    `, b = parseFloat(this.getAttribute("min-rating") || "0"), l = this.getAttribute("sort") || "newest", x = this.hasAttribute("hide-empty"), w = {
      "--bg-color": this.getAttribute("bg-color") || "",
      "--text-color": this.getAttribute("text-color") || "",
      "--card-bg": this.getAttribute("card-bg") || "",
      "--border-color": this.getAttribute("border-color") || "",
      "--accent-color": this.getAttribute("accent-color") || "",
      "--star-color": this.getAttribute("star-color") || ""
    }, _ = Object.entries(w).filter(([e, i]) => i).map(([e, i]) => `${e}: ${i};`).join(" "), y = this._data.reviews.filter((e) => {
      var i;
      return !(e.rating < b || x && !((i = e.text) != null && i.trim()));
    }).sort((e, i) => l === "oldest" ? e.time - i.time : l === "highest" ? i.rating - e.rating : l === "lowest" ? e.rating - i.rating : l === "random" ? 0.5 - Math.random() : i.time - e.time).map((e, i) => {
      const d = e.text.length > 120, h = d ? e.text.substring(0, 120) + "..." : e.text;
      return `
      <div class="review-card" style="animation-delay: ${i * 100}ms" role="article" aria-label="${n.rating_label}: ${e.rating} stars by ${e.author_name}">
        <div class="review-header">
          <img src="${e.profile_photo_url}" alt="${e.author_name}" loading="lazy">
          <div class="review-meta">
            <span class="author-name">${e.author_name}</span>
            <span class="review-time">${e.relative_time_description}</span>
          </div>
          <a href="${e.author_url}" target="_blank" class="google-icon-link" aria-label="View on Google Maps">${g}</a>
        </div>
        <div class="review-stars" aria-label="${e.rating} stars">
          ${Array(5).fill(0).map((u, v) => c(v < e.rating)).join("")}
        </div>
        <div class="review-text-container">
            <div class="review-text short">${h}</div>
            ${d ? `<div class="review-text full" style="display:none">${e.text}</div>` : ""}
            ${d ? `<button class="read-more-btn" aria-label="${n.read_more}">${n.read_more}</button>` : ""}
        </div>
      </div>
    `;
    }).join("");
    this.shadowRoot.innerHTML = `
      <style>${m}</style>
      <div class="widget-container ${t} ${s}" style="${_}">
        ${s === "badge" ? this.renderBadge() : `
          ${p}
          <div class="reviews-container ${s === "list" ? "list-view" : ""}" role="list">
            ${y}
          </div>
        `}
      </div>
    `, this.shadowRoot.querySelectorAll(".read-more-btn").forEach((e) => {
      e.addEventListener("click", (i) => {
        const d = i.target, h = d.parentElement;
        if (h) {
          const u = h.querySelector(".short"), v = h.querySelector(".full");
          u && v && (u.style.display = "none", v.style.display = "block", d.style.display = "none");
        }
      });
    });
  }
  renderBadge() {
    var n, c, g, p, b;
    const t = this._translations[this.getAttribute("lang") || "en"] || this._translations.en, s = (l) => `
      <svg class="star-icon ${l ? "filled" : ""}" viewBox="0 0 24 24" width="14" height="14">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    `;
    return `
      <div class="badge-content" role="status" aria-label="${t.rating_label}: ${(n = this._data) == null ? void 0 : n.rating} stars from ${(c = this._data) == null ? void 0 : c.user_ratings_total} reviews">
        <div class="badge-left">
          
      <svg viewBox="0 0 24 24" width="20" height="20" class="google-logo">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 4.6c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    
          <div class="badge-text">
            <div class="badge-rating">
              <strong>${(g = this._data) == null ? void 0 : g.rating}</strong>
              <div class="stars" aria-hidden="true">
                ${Array(5).fill(0).map((l, x) => {
      var w;
      return s(x < Math.round(((w = this._data) == null ? void 0 : w.rating) || 0));
    }).join("")}
              </div>
            </div>
            <span class="badge-count">${(p = this._data) == null ? void 0 : p.user_ratings_total} ${t.reviews}</span>
          </div>
        </div>
        <a href="${(b = this._data) == null ? void 0 : b.url}" target="_blank" class="badge-btn" aria-label="${t.write_review}">${t.write_review}</a>
      </div>
    `;
  }
}
window.initGoogleReviewsWidget = (r) => {
  const a = document.createElement("google-reviews-widget");
  r.src && a.setAttribute("src", r.src), r.theme && a.setAttribute("theme", r.theme), r.layout && a.setAttribute("layout", r.layout), r.lang && a.setAttribute("lang", r.lang);
  const t = typeof r.target == "string" ? document.querySelector(r.target) : r.target;
  t ? t.appendChild(a) : document.body.appendChild(a);
};
customElements.define("google-reviews-widget", k);
export {
  k as GoogleReviewsWidget
};
