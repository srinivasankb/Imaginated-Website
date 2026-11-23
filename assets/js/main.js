/**
 * IMAGINATED — BRANDING AGENCY JAVASCRIPT
 * "let's Design the Dream"
 * 
 * Features:
 * 1. Mobile menu toggle & drawer handling
 * 2. Theme switcher (Dark / Light) with localStorage persistence
 * 3. Sticky header & scroll observer for active navigation links
 * 4. IntersectionObserver for smooth scroll reveals
 * 5. Footer dynamic year
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initStickyHeader();
  initScrollSpy();
  initScrollReveals();
  initFooterYear();
});

/* --------------------------------------------------------------------------
   1. THEME SWITCHER (DARK / LIGHT MODE)
   Easily toggle and demonstrate theme configurability
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // Check user's stored preference or system preference
  const savedTheme = localStorage.getItem('imaginated-theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    htmlElement.setAttribute('data-theme', 'light');
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('imaginated-theme', newTheme);
    });
  }
}

/* --------------------------------------------------------------------------
   2. MOBILE MENU & ACCESSIBILITY DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileMenuBtn || !mobileDrawer) return;

  const toggleMenu = () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenuBtn.classList.toggle('active');
    mobileDrawer.classList.toggle('open');
    mobileDrawer.setAttribute('aria-hidden', isExpanded);
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  };

  const closeMenu = () => {
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.classList.remove('active');
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  mobileMenuBtn.addEventListener('click', toggleMenu);

  // Close when clicking any nav link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   3. STICKY HEADER SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
   4. SCROLL SPY (ACTIVE NAVIGATION HIGHLIGHTING)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   5. INTERSECTION OBSERVER FOR SCROLL REVEALS
   -------------------------------------------------------------------------- */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (!revealElements.length) return;

  // If user prefers reduced motion, reveal everything immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. FOOTER YEAR AUTO-UPDATE
   -------------------------------------------------------------------------- */
function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
