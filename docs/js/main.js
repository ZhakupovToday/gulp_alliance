document.addEventListener("DOMContentLoaded", function () {
  const e = document.querySelector(".burger-menu-icon"),
    t = document.querySelector(".burger");
  e.addEventListener("click", function () {
    "none" === t.style.display || "" === t.style.display
      ? ((t.style.display = "block"), (e.src = "./img/burger_close_icon.svg"))
      : ((t.style.display = "none"), (e.src = "./img/burger_open_icon.svg"));
  });
}),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelectorAll(".nav-dot");
    let t = 0,
      n = 0,
      o = !1;
    e.forEach((e, t) => {
      e.addEventListener("click", function () {
        l(t);
      });
    });
    const c = document.querySelector(".carousel-track"),
      s = document.querySelectorAll(".carousel-track__slide"),
      r = s[0].offsetWidth;
    function l(n) {
      t = n;
      const o = -n * r;
      (c.style.transform = `translateX(${o}px)`),
        e.forEach((e, t) => {
          e.classList.toggle("active", t === n);
        });
    }
    c.addEventListener("touchstart", function (e) {
      (o = !0), (n = e.touches[0].clientX), e.preventDefault();
    }),
      c.addEventListener("touchmove", function (e) {
        if (!o) return;
        const s = e.touches[0].clientX,
          l = n - s,
          a = -t * r;
        (c.style.transform = `translateX(${a - l}px)`), e.preventDefault();
      }),
      c.addEventListener("touchend", function () {
        o = !1;
        const e = event.changedTouches[0].clientX,
          c = n - e;
        Math.abs(c) > r / 3 &&
          (c > 0 && t < s.length - 1 ? (t += 1) : c < 0 && t > 0 && (t -= 1)),
          l(t);
      });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelectorAll(".blog-nav__dot");
    let t = 0,
      n = 0,
      o = !1;
    e.forEach((e, t) => {
      e.addEventListener("click", function () {
        l(t);
      });
    });
    const c = document.querySelector(".blog-carousel__track"),
      s = document.querySelectorAll(".blog-carousel__slide"),
      r = s[0].offsetWidth;
    function l(n) {
      t = n;
      const o = -n * r;
      (c.style.transform = `translateX(${o}px)`),
        e.forEach((e, t) => {
          e.classList.toggle("active", t === n);
        });
    }
    c.addEventListener("touchstart", function (e) {
      (o = !0), (n = e.touches[0].clientX), e.preventDefault();
    }),
      c.addEventListener("touchmove", function (e) {
        if (!o) return;
        const s = e.touches[0].clientX,
          l = n - s,
          a = -t * r;
        (c.style.transform = `translateX(${a - l}px)`), e.preventDefault();
      }),
      c.addEventListener("touchend", function () {
        o = !1;
        const e = event.changedTouches[0].clientX,
          c = n - e;
        Math.abs(c) > r / 3 &&
          (c > 0 && t < s.length - 1 ? (t += 1) : c < 0 && t > 0 && (t -= 1)),
          l(t);
      });
  });
