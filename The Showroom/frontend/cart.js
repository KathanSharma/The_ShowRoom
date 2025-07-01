window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cart-container');
  // Render cart table only if we are on the cart page where the container exists
  if (container) {
  const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');

  if (!cart.length) {
    container.innerHTML = '<p>Your cart is currently empty.</p>';
    return;
  }

  const table = document.createElement('table');
  table.className = 'cart-table';
  table.innerHTML = '<tr><th>Product</th><th>Size</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr>';

  let total = 0;
  cart.forEach(item => {
    const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
    const subtotal = numericPrice * item.quantity;
    total += subtotal;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${item.img}" alt="${item.name}" class="cart-thumb" /> ${item.name}</td>
      <td>${item.size}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>₹${subtotal.toLocaleString()}</td>
      <td><button class="remove-btn" data-name="${item.name}" data-size="${item.size}">✕</button></td>
    `;
    table.appendChild(row);
  });

  container.appendChild(table);

  // handle remove item clicks
  table.addEventListener('click', e => {
    if (e.target.classList.contains('remove-btn')) {
      const { name, size } = e.target.dataset;
      let cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      cart = cart.filter(i => !(i.name === name && i.size === size));
      localStorage.setItem('cartItems', JSON.stringify(cart));
      location.reload();
    }
  });

  const totalDiv = document.createElement('div');
  totalDiv.className = 'cart-total';
  totalDiv.textContent = `Total: ₹${total.toLocaleString()}`;
  container.appendChild(totalDiv);
  } // <-- end cart page specific logic

  // ================== Add-to-cart handling (shared across all pages) ==================
  // Ensure each product card has a size selector
  document.querySelectorAll('.product-card').forEach(card => {
    if (card.querySelector('.size-select')) return; // already present
    const select = document.createElement('select');
    select.className = 'size-select';
    const sizes = ['Select Size', '6', '7', '8', '9', '10', '11'];
    sizes.forEach((s, idx) => {
      const opt = document.createElement('option');
      opt.value = idx === 0 ? '' : s;
      opt.textContent = s;
      if (idx === 0) {
        opt.disabled = true;
        opt.selected = true;
      }
      select.appendChild(opt);
    });
    // insert select before the add-to-cart button
    const btn = card.querySelector('.add-to-cart');
    btn.parentNode.insertBefore(select, btn);
  });
  const updateCartCount = () => {
    const countElem = document.querySelector('.cart-count');
    if (!countElem) return;
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalCount = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
    countElem.textContent = totalCount;
  };

  // Attach click listeners to every "Add To Cart" button that exists on the page
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      if (!card) return;

      const name = card.querySelector('.product-name')?.textContent.trim() || 'Unknown';
      const price = card.querySelector('.price')?.textContent.trim() || '₹0';
      const img = card.querySelector('.product-image')?.getAttribute('src') || '';
      const size = card.querySelector('.size-select')?.value || '';
      if (!size) {
        alert('Please select a size first');
        return;
      }

      let cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const existing = cart.find(i => i.name === name && i.size === size);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name, price, size, quantity: 1, img });
      }
      localStorage.setItem('cartItems', JSON.stringify(cart));
      updateCartCount();
      alert(`${name} added to cart.`);
    });
  });

  // Initialise cart count on page load (if an element exists for it)
  updateCartCount();
});
