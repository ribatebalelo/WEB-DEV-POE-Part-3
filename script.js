// Minimal, unobtrusive JS to add interactivity and validation without changing layout

document.addEventListener('DOMContentLoaded', () => {
  initDoctorFilters();
  initLightboxGallery();
  initContactForm();
  initBookingForm();
});

function initDoctorFilters() {
  const grid = document.getElementById('doctorsGrid');
  const q = document.getElementById('filterQuery');
  const avail = document.getElementById('filterAvailability');
  if (!grid || !q || !avail) return;

  const filter = () => {
    const text = q.value.toLowerCase();
    const a = avail.value;
    grid.querySelectorAll('.doctor-card').forEach(card => {
      const name = card.querySelector('h3')?.textContent?.toLowerCase() || '';
      const spec = card.querySelector('.specialty')?.textContent?.toLowerCase() || '';
      const availability = card.querySelector('.availability')?.textContent?.toLowerCase() || '';
      const matchText = name.includes(text) || spec.includes(text);
      const matchAvail = a === 'all' || (a === 'today' && availability.includes('today')) || (a === 'week' && availability.includes('week'));
      card.style.display = matchText && matchAvail ? '' : 'none';
    });
  };
  q.addEventListener('input', filter);
  avail.addEventListener('change', filter);
}

function initLightboxGallery() {
  // Create a simple lightbox for any image inside elements with class 'doctor-card' or '.team-member'
  const images = document.querySelectorAll('.doctor-card img, .team-member img');
  if (!images.length) return;

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.8);display:none;align-items:center;justify-content:center;z-index:1050;padding:1rem;';
  const img = document.createElement('img');
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.style.borderRadius = '10px';
  overlay.appendChild(img);
  document.body.appendChild(overlay);
  overlay.addEventListener('click', () => overlay.style.display = 'none');

  images.forEach(i => i.addEventListener('click', () => {
    img.src = i.src;
    img.alt = i.alt || '';
    overlay.style.display = 'flex';
  }));
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries());
    try {
      // Simulate AJAX submission; replace URL with backend endpoint if available
      await fakeNetwork();
      alert('Thank you! Your message has been sent.');
      form.reset();
    } catch (err) {
      alert('Sorry, something went wrong. Please try again later.');
    }
  });
}

function initBookingForm() {
  const form = document.querySelector('main form.card');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const selected = form.querySelector('input[name="timeSlot"]:checked');
    if (!selected) { alert('Please select a time slot'); return; }
    const payload = {
      doctor: formData.get('selectDoctor') || document.getElementById('selectDoctor')?.value,
      date: formData.get('inputDate') || document.getElementById('inputDate')?.value,
      time: selected.value
    };
    try {
      await fakeNetwork();
      alert(`Appointment confirmed for ${payload.date} at ${payload.time}.`);
      form.reset();
    } catch (_) {
      alert('Could not complete booking. Please try again.');
    }
  });
}

function fakeNetwork() {
  return new Promise((res) => setTimeout(res, 600));
}


