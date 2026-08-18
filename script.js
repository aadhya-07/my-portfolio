(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia &&
    window.matchMedia("(pointer: fine)").matches;

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A" && e.target.getAttribute("data-nav")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Scroll reveal via IntersectionObserver */
  var reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          el.style.setProperty("--i", el.classList.contains("line") ? i : 0);
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* Active section highlight in nav */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var sections = navLinks
    .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
    .filter(Boolean);
  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* Project filter */
  var filters = document.getElementById("filters");
  var cards = document.querySelectorAll(".card[data-category]");
  if (filters && cards.length) {
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      var filter = btn.getAttribute("data-filter");
      filters.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      cards.forEach(function (card) {
        card.hidden = !(filter === "all" || card.getAttribute("data-category") === filter);
      });
    });
  }

  /* 3D tilt on cards */
  if (!reduceMotion) {
    cards.forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        card.style.transform = "perspective(800px) rotateX(" + ((0.5 - py) * 12) +
          "deg) rotateY(" + ((px - 0.5) * 12) + "deg) translateY(-4px)";
        card.style.setProperty("--mx", (px * 100) + "%");
        card.style.setProperty("--my", (py * 100) + "%");
      });
      card.addEventListener("pointerleave", function () { card.style.transform = ""; });
    });
  }

  /* Canvas starfield */
  var canvas = document.getElementById("bg-canvas");
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var stars = [], w, h, dpr;
    function resize() {
      dpr = window.devicePixelRatio || 1;
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      var count = Math.min(160, Math.floor((window.innerWidth * window.innerHeight) / 9000));
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({ x: Math.random() * w, y: Math.random() * h, z: Math.random() * 0.8 + 0.2, r: (Math.random() * 1.4 + 0.3) * dpr });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.y += s.z * 0.25 * dpr;
        if (s.y > h) { s.y = 0; s.x = Math.random() * w; }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180, 200, 255, " + (0.35 + s.z * 0.5) + ")";
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener("resize", resize);
    draw();
  }

  /* Preloader */
  var pre = document.getElementById("preloader");
  var preFill = document.getElementById("preloader-fill");
  if (pre) {
    if (reduceMotion) {
      pre.classList.add("done");
    } else {
      if (preFill) requestAnimationFrame(function () { preFill.style.width = "100%"; });
      window.addEventListener("load", function () {
        setTimeout(function () { pre.classList.add("done"); }, 450);
      });
    }
  }

  /* Cursor glow (desktop, fine pointer, no reduced motion) */
  var cursor = document.getElementById("cursor-glow");
  if (cursor && finePointer && !reduceMotion) {
    var cx = 0, cy = 0, raf = null;
    window.addEventListener("pointermove", function (e) {
      cx = e.clientX; cy = e.clientY;
      document.body.classList.add("cursor-active");
      if (!raf) raf = requestAnimationFrame(function () {
        cursor.style.transform = "translate(" + cx + "px," + cy + "px)";
        raf = null;
      });
    });
    window.addEventListener("pointerleave", function () {
      document.body.classList.remove("cursor-active");
    });
  }

  /* Hero typing effect */
  var typed = document.getElementById("typed");
  if (typed) {
    var roles = ["B.Tech CS Student", "Problem Solver", "C++ & Python Learner", "Future Engineer"];
    if (reduceMotion) {
      typed.textContent = roles[0];
    } else {
      var ri = 0, ci = 0, deleting = false;
      (function tick() {
        var word = roles[ri];
        typed.textContent = word.slice(0, ci);
        if (!deleting && ci < word.length) { ci++; }
        else if (!deleting && ci === word.length) { deleting = true; setTimeout(tick, 1400); return; }
        else if (deleting && ci > 0) { ci--; }
        else { deleting = false; ri = (ri + 1) % roles.length; }
        setTimeout(tick, deleting ? 45 : 90);
      })();
    }
  }

  /* Scroll progress bar + parallax orbs (rAF-throttled) */
  var progress = document.getElementById("scroll-progress");
  var aurora = document.querySelector(".aurora");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (docH > 0 ? (st / docH) * 100 : 0) + "%";
      if (aurora && !reduceMotion) aurora.style.transform = "translateY(" + (st * 0.25) + "px)";
      ticking = false;
    });
  }
  if (!reduceMotion) window.addEventListener("scroll", onScroll, { passive: true });

  /* Magnetic buttons */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".magnetic").forEach(function (btn) {
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var mx = e.clientX - (r.left + r.width / 2);
        var my = e.clientY - (r.top + r.height / 2);
        btn.style.transform = "translate(" + (mx * 0.3) + "px," + (my * 0.4) + "px)";
      });
      btn.addEventListener("pointerleave", function () { btn.style.transform = ""; });
    });
  }

  /* Stat counters */
  var nums = document.querySelectorAll(".num[data-target]");
  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-target"), 10) || 0;
    if (reduceMotion) { el.textContent = String(target); return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (nums.length && "IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { runCounter(entry.target); cio.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { cio.observe(n); });
  } else {
    nums.forEach(runCounter);
  }

  /* Skill bars */
  var fills = document.querySelectorAll(".bar-fill[data-level]");
  function fillBar(el) {
    var lvl = el.getAttribute("data-level") + "%";
    el.style.width = lvl;
    el.style.setProperty("--level", lvl);
  }
  if (fills.length && "IntersectionObserver" in window && !reduceMotion) {
    var bio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { fillBar(entry.target); bio.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    fills.forEach(function (f) { bio.observe(f); });
  } else {
    fills.forEach(fillBar);
  }
})();
