window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('profile-form');
  const saveMsg = document.getElementById('save-msg');

  // populate fields if saved
  const saved = JSON.parse(localStorage.getItem('userProfile') || '{}');
  ['name', 'email', 'phone', 'address'].forEach(id => {
    if (saved[id]) document.getElementById(id).value = saved[id];
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const profile = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      address: document.getElementById('address').value.trim()
    };
    localStorage.setItem('userProfile', JSON.stringify(profile));
    saveMsg.textContent = 'Profile saved!';
    saveMsg.style.color = '#27ae60';
    setTimeout(() => (saveMsg.textContent = ''), 3000);
  });
});
