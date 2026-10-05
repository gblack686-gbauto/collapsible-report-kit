const SECTION_SELECTOR = 'details.crk-section';

function ensureMenu(menu) {
  if (!menu.querySelector('.crk-menu-title')) {
    const title = document.createElement('p');
    title.className = 'crk-menu-title';
    title.textContent = menu.getAttribute('data-crk-title') || 'Sections';
    menu.append(title);
  }
  if (!menu.querySelector('.crk-menu-actions')) {
    const actions = document.createElement('div');
    actions.className = 'crk-menu-actions';
    actions.innerHTML = '<button type="button" data-crk-open-all>Open All</button><button type="button" data-crk-close-all>Close All</button>';
    menu.append(actions);
  }
  let nav = menu.querySelector('nav');
  if (!nav) {
    nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Report sections');
    menu.append(nav);
  }
  return nav;
}

export function enhanceCollapsibleReport(root = document) {
  const sections = [...root.querySelectorAll(SECTION_SELECTOR)];
  const menu = root.querySelector('[data-crk-nav]');
  if (!sections.length || !menu) return { sections, navButtons: [] };

  const nav = ensureMenu(menu);
  nav.textContent = '';
  const navButtons = sections.map((section, index) => {
    const idx = section.querySelector('.crk-section-index')?.textContent?.trim() || String(index + 1).padStart(2, '0');
    const title = section.querySelector('.crk-section-title')?.textContent?.trim() || 'Section';
    section.id ||= `crk-section-${idx.replace(/[^a-z0-9_-]/gi, '').toLowerCase() || index + 1}`;
    const button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = `<span>${idx}</span>${title}`;
    button.addEventListener('click', () => {
      section.open = true;
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    nav.append(button);
    return button;
  });

  menu.querySelector('[data-crk-open-all]')?.addEventListener('click', () => sections.forEach(section => { section.open = true; }));
  menu.querySelector('[data-crk-close-all]')?.addEventListener('click', () => sections.forEach((section, index) => { section.open = index === 0; }));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const activeIndex = sections.indexOf(visible.target);
      navButtons.forEach((button, index) => button.classList.toggle('crk-active', index === activeIndex));
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0.1, 0.25, 0.5] });
    sections.forEach(section => observer.observe(section));
  }

  return { sections, navButtons };
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => enhanceCollapsibleReport());
  } else {
    enhanceCollapsibleReport();
  }
}
