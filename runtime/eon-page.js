(() => {
  const videos = [
    ['mothership.mp4', 'Eon island gameplay'],
    ['kymera.mp4', 'Kymera gameplay'],
    ['abductors.mp4', 'Abductors gameplay'],
    ['battle-pass.mp4', 'Season 7 Battle Pass'],
    ['season7.mp4', 'Season 7 trailer'],
    ['mothership.mp4', 'Explore the island']
  ];

  function findSection(label) {
    return [...document.querySelectorAll('main section')].find(section =>
      [...section.querySelectorAll('span')].some(span => span.textContent.trim() === label)
    );
  }

  function update() {
    const footerSocials = document.querySelector('.eon-footer-socials');
    if (footerSocials && !footerSocials.dataset.svgReady) {
      footerSocials.dataset.svgReady = 'true';
      footerSocials.innerHTML = `<a href="https://discord.gg/eonfn" target="_blank" rel="noopener noreferrer" aria-label="Discord"><svg viewBox="0 0 640 512" aria-hidden="true"><path d="M524.5 69.8A485 485 0 0 0 404 32a1.8 1.8 0 0 0-1.9.9 337 337 0 0 0-14.9 30.6 448 448 0 0 0-134.4 0 309 309 0 0 0-15.1-30.6 1.9 1.9 0 0 0-1.9-.9A484 484 0 0 0 116 69.1a1.7 1.7 0 0 0-.8.7C39 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4 488 488 0 0 0 146.8 74.2 1.9 1.9 0 0 0 2.1-.7 348 348 0 0 0 30-48.8 1.9 1.9 0 0 0-1-2.6 321 321 0 0 1-45.9-21.9 1.9 1.9 0 0 1-.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9.2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1-.2 3.1 301 301 0 0 1-45.9 21.8 1.9 1.9 0 0 0-1 2.6 391 391 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1.7 486 486 0 0 0 147.6-74.1 1.9 1.9 0 0 0 .8-1.4c12.5-126.2-20.3-236.3-86.7-334.5ZM222.5 337.6c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2-.5 32.6-24.4 59.2-52.8 59.2Zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2-.5 32.6-24.4 59.2-52.8 59.2Z"/></svg></a><a href="https://www.tiktok.com/@Project.EonFN" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg viewBox="0 0 448 512" aria-hidden="true"><path d="M448 209.9a210 210 0 0 1-122.8-39.2v178.7a162.6 162.6 0 1 1-140-161.1v89.9a74.6 74.6 0 1 0 52.2 71.2V0h88a121 121 0 0 0 1.9 22.2A122 122 0 0 0 381 102.4a121 121 0 0 0 67 20.1v87.4Z"/></svg></a><a href="https://www.youtube.com/@EonOGFN" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 576 512" aria-hidden="true"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6C14.9 167 14.9 256.4 14.9 256.4s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3ZM232.1 337.6V175.2l142.7 81.2-142.7 81.2Z"/></svg></a>`;
    }
    document.querySelectorAll('[aria-label="Join 384K+ players on the Eon Discord"]').forEach(card => card.remove());
    document.querySelectorAll('[style]').forEach(el => {
      if (el.style.opacity === '0' && el.style.transform.includes('translateY')) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    });
    document.querySelectorAll('[style*="offset-path:"]').forEach(el => {
      const mask = el.parentElement;
      if (mask && !mask.classList.contains('eon-soft-glow')) {
        mask.classList.add('eon-soft-glow');
        mask.removeAttribute('style');
        el.removeAttribute('style');
      }
    });

    document.querySelectorAll('.eon-added-grid').forEach(grid => grid.remove());
    document.querySelectorAll('a[href="https://cdn.eonfn.dev/mobile/era_season_6.ipa"]').forEach(link => {
      const alsoOn = link.closest('div.flex.flex-wrap');
      if (alsoOn?.textContent.includes('Also on')) alsoOn.remove();
      else link.closest('div.group.relative')?.remove();
    });

    const community = findSection('Community');
    if (community) {
      [...community.querySelectorAll('video')].forEach((video, index) => {
        if (video.dataset.eonReady) return;
        const [name, label] = videos[index % videos.length];
        video.src = `assets/video/${name}`;
        video.poster = index % 2 ? 'assets/images/KeyArt-960.webp' : 'assets/images/ClipStart-1280-B7IxlK4K.webp';
        video.setAttribute('aria-label', label);
        video.controls = true;
        video.muted = true;
        video.autoplay = false;
        video.preload = 'metadata';
        video.dataset.eonReady = 'true';
      });
    }

    document.querySelectorAll('a[href="https://cdn.eonfn.dev/mobile/era_season_6.ipa"]').forEach(link => link.closest('div.group.relative')?.remove());
  }

  function updateHeader() {
    const header = document.querySelector('header');
    if (header) header.classList.toggle('eon-scrolled-header', window.scrollY > 24);
  }

  function setupRevealAnimations() {
    document.documentElement.classList.add('eon-motion-ready');
    const hero = document.querySelector('main > div > section:first-child .max-w-xl');
    if (hero) hero.classList.add('eon-reveal', 'eon-reveal-hero');
    document.querySelectorAll('main > div > section:not(:first-child)').forEach(section => {
      section.classList.add('eon-reveal');
    });
    const revealItems = document.querySelectorAll('.eon-reveal');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(item => item.classList.add('eon-revealed'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('eon-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach(item => observer.observe(item));
  }

  let queued = false;
  const observer = new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; update(); });
  });
  const start = () => {
    update();
    setupRevealAnimations();
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    observer.observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();

// Smooth scrolling for local navigation anchors.
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', link.getAttribute('href'));
});
