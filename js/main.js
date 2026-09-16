// Juhi Desai portfolio — shared interactions (no dependencies)

document.addEventListener('DOMContentLoaded', () => {
  // Sticky nav shadow/border on scroll
  const nav = document.querySelector('.site-nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('mobile-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('mobile-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Experience accordion — first item open by default, one click to expand/collapse any
  document.querySelectorAll('.exp-item').forEach((item, i) => {
    const header = item.querySelector('.exp-header');
    const body = item.querySelector('.exp-body');
    const inner = item.querySelector('.exp-body-inner');
    if (!header || !body || !inner) return;

    const setOpen = (open) => {
      item.classList.toggle('is-open', open);
      header.setAttribute('aria-expanded', String(open));
      body.style.maxHeight = open ? inner.offsetHeight + 'px' : '0px';
    };

    header.addEventListener('click', () => setOpen(!item.classList.contains('is-open')));
    setOpen(item.dataset.openDefault === 'true');

    window.addEventListener('resize', () => {
      if (item.classList.contains('is-open')) body.style.maxHeight = inner.offsetHeight + 'px';
    });
  });

  // Scroll-reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
});
