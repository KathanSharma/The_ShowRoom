// Simple orders demo using localStorage
// If no orders exist, we will create fake order(s) from current cart for demonstration purpose.
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('orders-container');
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');

  if (!orders.length) {
    // populate from cart just for demo (one-time)
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    orders = cart.map(item => ({
      ...item,
      orderId: 'ORD' + Math.floor(Math.random()*1000000),
      statusIndex: 1, // 0: Ordered, 1: Shipped, etc.
      createdAt: new Date().toLocaleDateString()
    }));
    localStorage.setItem('orders', JSON.stringify(orders));
  }

  if (!orders.length) {
    container.innerHTML = '<p>You have no orders yet.</p>';
    return;
  }

  orders.forEach(ord => {
    const card = document.createElement('div');
    card.className = 'order-card';
    const statuses = ['Ordered', 'Shipped', 'Out for Delivery', 'Delivered'];
    const currentStatus = statuses[ord.statusIndex] || 'Ordered';

    const progress = statuses.map((s, idx) => {
      return `<span class="step ${idx <= ord.statusIndex ? 'active' : ''}">${s}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="order-header">
        <img src="${ord.img}" alt="${ord.name}" class="order-thumb" />
        <div>
          <h3>${ord.name} (Size ${ord.size})</h3>
          <p>Order ID: ${ord.orderId}</p>
          <p>Placed on: ${ord.createdAt}</p>
        </div>
      </div>
      <div class="progress-bar">${progress}</div>
      <p class="current-status">Current Status: <strong>${currentStatus}</strong></p>
      <button class="remove-order-btn" data-id="${ord.orderId}">✕ Cancel Order</button>
    `;
    container.appendChild(card);
  });

  // remove order handler
  container.addEventListener('click', e => {
    if (e.target.classList.contains('remove-order-btn')) {
      const id = e.target.dataset.id;
      let orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders = orders.filter(o => o.orderId !== id);
      localStorage.setItem('orders', JSON.stringify(orders));
      location.reload();
    }
  });
});
