/**
 * IMAGINATED — BRANDING AGENCY JAVASCRIPT
 * "let's Design the Dream"
 * 
 * Features:
 * 1. Mobile menu toggle & drawer handling
 * 2. Theme switcher (Dark / Light) with localStorage persistence
 * 3. Sticky header & scroll observer for active navigation links
 * 4. IntersectionObserver for smooth scroll reveals
 * 5. Interactive project inquiry form validation & WhatsApp bridge
 * 6. Direct WhatsApp message compilation from form inputs
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initStickyHeader();
  initScrollSpy();
  initScrollReveals();
  initInquiryForm();
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
   6. INTERACTIVE INQUIRY FORM & WHATSAPP BRIDGE
   -------------------------------------------------------------------------- */
function initInquiryForm() {
  const form = document.getElementById('project-inquiry-form');
  const whatsappDirectBtn = document.getElementById('whatsapp-direct-btn');
  const statusMsg = document.getElementById('form-status-msg');

  if (!form) return;

  const agencyPhone = '919080364386'; // +91 9080364386

  // Helper to validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Helper to collect current form data
  const getFormData = () => {
    const name = document.getElementById('client-name').value.trim();
    const email = document.getElementById('client-email').value.trim();
    const phone = document.getElementById('client-phone').value.trim();
    const service = document.getElementById('service-needed').value;
    const timeline = document.getElementById('project-budget').value;
    const message = document.getElementById('project-message').value.trim();

    return { name, email, phone, service, timeline, message };
  };

  // Helper to validate required fields
  const validateForm = () => {
    let isValid = true;
    const data = getFormData();

    // Name Validation
    const nameGroup = document.getElementById('client-name').closest('.form-group');
    if (!data.name) {
      nameGroup.classList.add('has-error');
      isValid = false;
    } else {
      nameGroup.classList.remove('has-error');
    }

    // Email Validation
    const emailGroup = document.getElementById('client-email').closest('.form-group');
    if (!data.email || !isValidEmail(data.email)) {
      emailGroup.classList.add('has-error');
      isValid = false;
    } else {
      emailGroup.classList.remove('has-error');
    }

    // Service Validation
    const serviceGroup = document.getElementById('service-needed').closest('.form-group');
    if (!data.service) {
      serviceGroup.classList.add('has-error');
      isValid = false;
    } else {
      serviceGroup.classList.remove('has-error');
    }

    // Message Validation
    const messageGroup = document.getElementById('project-message').closest('.form-group');
    if (!data.message) {
      messageGroup.classList.add('has-error');
      isValid = false;
    } else {
      messageGroup.classList.remove('has-error');
    }

    return isValid;
  };

  // Submit via Email / Inquiry Flow
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showStatus('Please fill in all required fields marked with an asterisk (*).', 'error');
      return;
    }

    const data = getFormData();
    const submitBtn = document.getElementById('submit-form-btn');
    const originalText = submitBtn.innerHTML;

    // Visual loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Preparing Inquiry...';

    setTimeout(() => {
      // Craft a pre-filled mailto fallback to contact@imaginated.in
      const subject = encodeURIComponent(`Project Inquiry: ${data.service} - ${data.name}`);
      const body = encodeURIComponent(
        `Hi Imaginated Team,\n\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone/WhatsApp: ${data.phone || 'Not provided'}\n` +
        `Interested Service: ${data.service}\n` +
        `Target Timeline: ${data.timeline}\n\n` +
        `Project Brief:\n${data.message}\n\n` +
        `-- Sent via Imaginated Website Form`
      );

      const mailtoUrl = `mailto:contact@imaginated.in?subject=${subject}&body=${body}`;

      showStatus(`Thank you, ${data.name}! Opening your email client to send this inquiry directly to contact@imaginated.in. You can also click the WhatsApp button to chat instantly.`, 'success');

      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Trigger mailto client
      window.location.href = mailtoUrl;
    }, 600);
  });

  // Direct WhatsApp Bridge: Compile form into WhatsApp URL
  if (whatsappDirectBtn) {
    whatsappDirectBtn.addEventListener('click', () => {
      const data = getFormData();
      
      let messageText = `Hi Imaginated Team, I'd like to discuss a project!`;

      if (data.name) {
        messageText += `\n\n*Name:* ${data.name}`;
      }
      if (data.email) {
        messageText += `\n*Email:* ${data.email}`;
      }
      if (data.service) {
        messageText += `\n*Service Needed:* ${data.service}`;
      }
      if (data.timeline) {
        messageText += `\n*Target Timeline:* ${data.timeline}`;
      }
      if (data.message) {
        messageText += `\n*Brief:* ${data.message}`;
      }

      const whatsappUrl = `https://wa.me/${agencyPhone}?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  function showStatus(message, type) {
    statusMsg.textContent = message;
    statusMsg.className = `form-status-msg ${type}`;
    statusMsg.style.display = 'block';
  }
}

/* --------------------------------------------------------------------------
   7. FOOTER YEAR AUTO-UPDATE
   -------------------------------------------------------------------------- */
function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

