# Iron & Oak Barbershop — Demo Website

A static demo website built with plain HTML, CSS, and JavaScript. Ready to publish on GitHub Pages.

## Files

- `index.html` — the website page (all text/sections live here)
- `styles.css` — all colors, fonts, and layout
- `script.js` — mobile menu, booking form behavior, footer year
- `assets/` — placeholder logo, hero, and gallery images (SVG)

## What you can edit (look for the comments in each file)

In `index.html`: business name, headline, services, prices, phone, email, address, hours, testimonials, FAQ, social links.
In `styles.css`: colors are at the very top under `:root` (change `--gold` for a different accent).
In `script.js`: the booking confirmation message.

## ⚠️ Important: the booking form is a PROTOTYPE

Right now the form shows a "thank you" message but does **not** send the booking anywhere. To make it real, pick one option:

**Option 1 — Simple request form (beginner-friendly)**
Use [Formspree](https://formspree.io). Sign up, create a form, copy your form ID, then in `index.html` change:
`<form class="booking" id="bookingForm" novalidate>`
to:
`<form class="booking" action="https://formspree.io/f/YOUR_ID" method="POST">`
and remove the form's submit code in `script.js`. Requests then arrive in your email.

**Option 2 — Booking platform link (easiest for barbershops)**
Get a free scheduler (Calendly, Square Appointments, Booksy, Fresha). Replace the `#booking` link on the "Book" buttons with your scheduler URL, e.g. `https://calendly.com/yourshop`.

**Option 3 — Full custom booking system** — advanced; needs a backend. Not included.

## How to publish on GitHub Pages

1. Open your repository on GitHub.
2. Click **Add file → Upload files**.
3. Drag in `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets` folder.
4. Scroll down and click **Commit changes**.
5. Go to **Settings → Pages**.
6. Under **Build and deployment**, set Branch to `main` and folder to `/ (root)`, then **Save**.
7. Wait ~1 minute, then open your link: `https://username.github.io/repository-name/`

## Replace before showing a real client

- Real logo and shop photos (swap the SVGs in `assets/`)
- Real business name, phone, email, address, hours
- Real services, prices, and barber names
- Real Google reviews
- A working booking method (see above)
