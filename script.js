/* ================================================================
   IRON & OAK BARBERSHOP — SCRIPT
   Handles: mobile menu, booking form (PROTOTYPE), footer year
   ================================================================ */

/* ---------- Mobile menu toggle ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

// Close the menu after tapping a link (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------- Booking form ----------
   ⚠️ PROTOTYPE ONLY ⚠️
   This shows a confirmation message but does NOT send the
   booking anywhere. To make it real, connect a form service
   (Formspree, Basin, etc.) — see the README for instructions.
*/
const bookingForm = document.getElementById('bookingForm');
const bookingMsg = document.getElementById('bookingMsg');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple check that required fields are filled
  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    return;
  }

  bookingMsg.hidden = false;
  bookingMsg.textContent =
    "Thanks! Your appointment request has been received. This is a demo booking flow.";
  bookingForm.reset();
  bookingMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

/* ---------- Auto-update footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
