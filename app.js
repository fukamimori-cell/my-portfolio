import { siteContent, works } from './content.js';

const app = document.querySelector('#app');
const safeText = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('\n', '<br>');
const menu = [
  { label:'About', page:'about' }, { label:'Works/Projects', page:'works' },
  { label:'Graphics', page:'works' }, { label:'Experiments', page:'experiments' }, { label:'Contact', page:'about' },
];

let menuOffset = 1;
function renderHome() {
  app.innerHTML = `<section class="home" aria-label="Main menu"><div class="dial">${menu.map((item, index) => `<button class="menu-item ${index === menuOffset ? 'current' : ''}" data-page="${item.page}" data-index="${index}"><span class="menu-number">${index + 1}</span><span class="menu-label">${item.label}</span></button>`).join('')}</div><span class="home-note">SCROLL TO ROTATE · CLICK TO ENTER</span></section>`;
  const home = document.querySelector('.home');
  positionMenu();
  let lastDialMove = 0;
  home.addEventListener('wheel', e => {
    e.preventDefault();
    const now = performance.now();
    // A physical wheel notch can emit several events. Keep one deliberate step
    // per dial movement instead of advancing through the whole menu at once.
    if (now - lastDialMove < 520) return;
    lastDialMove = now;
    menuOffset = (menuOffset + (e.deltaY > 0 ? 1 : -1) + menu.length) % menu.length;
    positionMenu();
  }, { passive:false });
  let homeTouchY = null;
  home.addEventListener('touchstart', e => { homeTouchY = e.changedTouches[0].clientY; }, { passive:true });
  home.addEventListener('touchend', e => {
    if (homeTouchY === null) return;
    const distance = homeTouchY - e.changedTouches[0].clientY;
    homeTouchY = null;
    if (Math.abs(distance) < 35) return;
    menuOffset = (menuOffset + (distance > 0 ? 1 : -1) + menu.length) % menu.length;
    positionMenu();
  }, { passive:true });
  home.querySelectorAll('.menu-item').forEach(button => button.addEventListener('pointerenter', () => {
    const next = Number(button.dataset.index);
    if (next === menuOffset) return;
    menuOffset = next;
    positionMenu();
  }));
  home.querySelectorAll('.menu-item').forEach(button => button.addEventListener('click', () => renderPage(button.dataset.page)));
}
function positionMenu() {
  const dial = document.querySelector('.dial'); if (!dial) return;
  // The visible side of the dial is a left-facing arc, matching the layout sketch.
  // Rotating only changes which item occupies each arc position.
  const slots = [
    { x: 24, y: 8 },
    { x: 45, y: 28 },
    { x: 49, y: 51 },
    { x: 44, y: 71 },
    { x: 24, y: 90 },
  ];
  [...dial.children].forEach((el, i) => {
    // The current item occupies the centre slot. The other numbered items
    // stay on the surrounding arc until they are hovered or scrolled into it.
    const slot = slots[(i - menuOffset + 2 + menu.length) % menu.length];
    el.style.left = `${slot.x}%`;
    el.style.top = `${slot.y}%`;
    el.classList.toggle('current', i === menuOffset);
  });
}

function backButton(){ return `<button class="back" aria-label="Back to home">←</button>`; }
function renderPage(page) {
  if (page === 'about') return renderAbout();
  renderGallery(page);
}
function renderAbout() {
  const aboutImage = siteContent.about.image ? ` style="background-image:url('${siteContent.about.image}')"` : '';
  const aboutClass = siteContent.about.image ? ' placeholder has-image' : ' placeholder';
  app.innerHTML = `<section class="page about-contact">${backButton()}<h1 class="page-title">About</h1><div class="about-grid"><section class="about-block"><div class="${aboutClass}"${aboutImage}>${siteContent.about.image ? '' : 'photo image'}</div><p class="about-copy">${safeText(siteContent.about.text)}</p></section><section class="about-block contact-block"><div></div><div><h2 class="contact-label">Contact</h2><p class="about-copy">${safeText(siteContent.contact.text)}</p></div></section></div></section>`;
  document.querySelector('.back').addEventListener('click', renderHome);
}
function renderGallery(kind) {
  const experiments = kind === 'experiments';
  const title = experiments ? 'Experiments' : 'Works/Projects';
  const subset = experiments ? works.slice(3) : works;
  // Repeat the available works around the ring so the circle stays complete
  // while the portfolio is still growing.
  const ringLength = Math.max(13, subset.length);
  const ringItems = Array.from({ length:ringLength }, (_, index) => subset[index % subset.length]);
  app.innerHTML = `<section class="page gallery-page">${backButton()}<div class="gallery-intro"><h1>${title}</h1>${experiments ? `<p>${siteContent.experimentsDescription}</p>` : ''}</div><div class="gallery"><div class="gallery-wheel">${ringItems.map((work, index) => `<button class="work-card" style="--color:${work.color};--image:url('${work.image || ''}')" data-work="${index}" aria-label="${work.title}"><span class="thumb"></span><span class="work-label"><strong>${work.title}</strong><span>${work.year}</span></span></button>`).join('')}</div></div></section><div class="modal" hidden><button class="close" aria-label="Close">×</button><article class="modal-card"><div class="modal-image">photo image</div><div class="modal-info"><h2></h2><p></p></div></article></div>`;
  let active = 0;
  const wheel = document.querySelector('.gallery-wheel');
  function layout() {
    const cards = [...wheel.children];
    const activeSlot = Math.floor(cards.length / 2);
    cards.forEach((card, i) => {
      const slot = (i - active + activeSlot + cards.length) % cards.length;
      const angle = -Math.PI / 2 + (slot / (cards.length - 1)) * Math.PI;
      // A right-facing semicircle: starts off the upper-left, reaches the
      // selected work at its centre, then continues to the lower-left.
      card.style.left = `${7 + Math.cos(angle) * 28}%`;
      card.style.top = `${50 + Math.sin(angle) * 48}%`;
      card.classList.toggle('active', i === active);
    });
  }
  layout();
  let lastGalleryMove = 0;
  document.querySelector('.gallery').addEventListener('wheel', e => {
    e.preventDefault();
    const now = performance.now();
    if (now - lastGalleryMove < 520) return;
    lastGalleryMove = now;
    active = (active + (e.deltaY > 0 ? 1 : -1) + ringItems.length) % ringItems.length;
    layout();
  }, {passive:false});
  let galleryTouchY = null;
  const gallery = document.querySelector('.gallery');
  gallery.addEventListener('touchstart', e => { galleryTouchY = e.changedTouches[0].clientY; }, { passive:true });
  // Keep a swipe that starts on the artwork dial from scrolling the page.
  gallery.addEventListener('touchmove', e => e.preventDefault(), { passive:false });
  gallery.addEventListener('touchend', e => {
    if (galleryTouchY === null) return;
    const distance = galleryTouchY - e.changedTouches[0].clientY;
    galleryTouchY = null;
    if (Math.abs(distance) < 35) return;
    active = (active + (distance > 0 ? 1 : -1) + ringItems.length) % ringItems.length;
    layout();
  }, { passive:true });
  [...wheel.children].forEach(card => card.addEventListener('pointerenter', () => {
    if (card.dataset.work === String(active)) return;
    active = Number(card.dataset.work);
    layout();
  }));
  wheel.addEventListener('focusin', e => {
    const card = e.target.closest('.work-card');
    if (!card) return;
    active = Number(card.dataset.work);
    layout();
  });
  wheel.addEventListener('click', e => { const card = e.target.closest('.work-card'); if (!card) return; const item = ringItems[Number(card.dataset.work)]; if (!card.classList.contains('active')) { active = Number(card.dataset.work); layout(); return; } openModal(item); });
  document.querySelector('.back').addEventListener('click', renderHome);
}
function openModal(work) { const modal = document.querySelector('.modal'); modal.style.setProperty('--color',work.color); modal.querySelector('.modal-image').style.background = work.image ? `center / cover no-repeat url('${work.image}')` : work.color; modal.querySelector('h2').innerHTML = `${work.title}<br>(${work.year})`; modal.querySelector('p').textContent = work.text; modal.hidden=false; modal.querySelector('.close').focus(); }
document.addEventListener('click', e => { if (e.target.closest('.close')) document.querySelector('.modal').hidden=true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { const m=document.querySelector('.modal'); if(m) m.hidden=true; } });
addEventListener('resize', () => { if (document.querySelector('.home')) positionMenu(); });
renderHome();
