const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

// A native modal dialog handles focus trapping and the Escape key.
hamburger.addEventListener('click', () => {
  mobileMenu.showModal();
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => mobileMenu.close());
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.close());
});
mobileMenu.addEventListener('close', () => {
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
});
window.matchMedia('(min-width: 961px)').addEventListener('change', event => {
  if (event.matches && mobileMenu.open) mobileMenu.close();
});

const navbar = document.getElementById('navbar');
function updateNavbar() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

const contactForm = document.getElementById('contactForm');
const formPreview = document.getElementById('formPreview');
document.getElementById('previewButton').disabled = false;
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  if (!name) {
    formPreview.textContent = 'Please enter a name, using made-up details for this demo.';
    document.getElementById('name').focus();
    return;
  }
  const eventType = document.getElementById('event').value || 'an event';
  // Keep user input as text, never HTML. No request is sent and the form stays filled.
  formPreview.textContent = `Preview: ${name} would like information about ${eventType.toLowerCase()}. Nothing has been sent or saved.`;
});

// Keep an image failure visible rather than silently deleting part of a card.
document.querySelectorAll('.menu-photo, .gallery-item img').forEach(image => {
  function showFallback() {
    const note = document.createElement('p');
    note.textContent = 'Sample food photo unavailable';
    note.className = 'gallery-note';
    image.replaceWith(note);
  }
  image.addEventListener('error', showFallback, { once: true });
  if (image.complete && image.naturalWidth === 0) showFallback();
});
