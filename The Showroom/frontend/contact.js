window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('contact-msg');

  form.addEventListener('submit', e => {
    e.preventDefault();
    // simple demonstration: save message to localStorage & show confirmation
    const message = {
      name: document.getElementById('c-name').value.trim(),
      email: document.getElementById('c-email').value.trim(),
      subject: document.getElementById('c-subject').value.trim(),
      body: document.getElementById('c-message').value.trim(),
      date: new Date().toLocaleString()
    };
    const messages = JSON.parse(localStorage.getItem('contactMsgs') || '[]');
    messages.push(message);
    localStorage.setItem('contactMsgs', JSON.stringify(messages));

    msg.textContent = 'Thank you! Your message has been sent.';
    msg.style.color = '#27ae60';
    form.reset();
    setTimeout(() => (msg.textContent = ''), 4000);
  });
});
