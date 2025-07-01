

const brandLogos = {
  Nike: 'images/Nike.jpg',
  Adidas: 'images/Adidas.jpg',
  Puma: 'images/puma.jpg',
  Skechers: 'images/skechers.jpg',
  Converse: 'images/converse.jpg',
  Vans: 'images/vans.jpg',
  Bata: 'images/Bata.jpg',
  "Under Armour": 'images/UnderArmour.jpg',
  Asics: 'images/Asics.jpg',
  Cloud: 'images/cloud.jpg',
  "New Balance": 'images/nb.png',
  Jordan: 'images/jordan.jpg'
};

const extraProducts = {
  Nike: [
    {img: 'images/nike_pegasus.png', name: 'NIKE AIR ZOOM PEGASUS', desc: 'Daily trainer blending speed & comfort.', price: '₹7,499'},
    {img: 'images/nike_zoomx.png', name: 'NIKE ZOOMX INVINCIBLE', desc: 'Maximum cushioning for long runs.', price: '₹12,999'},
    {img: 'images/nike_react_infinity.png', name: 'NIKE REACT INFINITY', desc: 'Supportive fit to help reduce injury.', price: '₹10,499'},
    {img: 'images/nike_blazer.png', name: 'NIKE BLAZER MID 77', desc: 'Retro hoops style with modern comfort.', price: '₹6,999'},
    {img: 'images/nike_air_force1.png', name: 'NIKE AIR FORCE 1', desc: 'Timeless classic with Air cushioning.', price: '₹7,999'},
    {img: 'images/nike_vaporfly.png', name: 'NIKE VAPORFLY NEXT%', desc: 'Race-day speed and ultralight feel.', price: '₹19,999'}
  ],
  Adidas: [
    {img: 'images/adidas_ultraboost.png', name: 'ADIDAS ULTRABOOST 22', desc: 'Responsive Boost foam for energy return.', price: '₹11,999'},
    {img: 'images/adidas_nmd.png', name: 'ADIDAS NMD R1', desc: 'Street-ready sock-like comfort.', price: '₹9,999'},
    {img: 'images/adidas_superstar.png', name: 'ADIDAS SUPERSTAR', desc: 'Iconic shell-toe heritage.', price: '₹6,499'},
    {img: 'images/adidas_gazelle.png', name: 'ADIDAS GAZELLE', desc: '1960s training shoe turned classic.', price: '₹5,999'},
    {img: 'images/adidas_forum.png', name: 'ADIDAS FORUM LOW', desc: '80s hoops style reissued.', price: '₹8,499'},
    {img: 'images/adidas_yeezy.png', name: 'ADIDAS YEEZY 350', desc: 'Cult-favourite lifestyle runner.', price: '₹22,999'}
  ],
  Puma: [
    {img: 'images/puma_future_rider.png', name: 'PUMA FUTURE RIDER', desc: 'Retro running vibes with modern foam.', price: '₹5,999'},
    {img: 'images/puma_ralph.png', name: 'PUMA RALPH SAMPSON', desc: 'Court classic reimagined.', price: '₹7,499'},
    {img: 'images/puma_mirage.png', name: 'PUMA MIRAGE TECH', desc: 'Bold layers & colour pops.', price: '₹8,299'},
    {img: 'images/puma_xray.png', name: 'PUMA X-RAY 2', desc: 'Chunky dad-shoe aesthetic.', price: '₹6,799'},
    {img: 'images/puma_rsu.png', name: 'PUMA RS-U SOUND', desc: 'Tech-inspired design with RS cushioning.', price: '₹9,199'},
    {img: 'images/puma_clyde.png', name: 'PUMA CLYDE OG', desc: 'Basketball legend turned street icon.', price: '₹6,299'}
  ],
  Skechers: [
    {img: 'images/skechers_go_run.png', name: 'SKECHERS GO RUN', desc: 'Lightweight responsive running shoe.', price: '₹5,499'},
    {img: 'images/skechers_dlite.png', name: 'SKECHERS D-LITES', desc: 'Chunky yet lightweight comfort.', price: '₹4,999'},
    {img: 'images/skechers_archfit.png', name: 'SKECHERS ARCH FIT', desc: 'Podiatrist-certified arch support.', price: '₹6,299'},
    {img: 'images/skechers_max_cushion.png', name: 'SKECHERS MAX CUSHION', desc: 'Plush platform for long walks.', price: '₹6,799'},
    {img: 'images/skechers_street.png', name: 'SKECHERS STREET UNO', desc: 'Air-cooled style for everyday.', price: '₹5,999'},
    {img: 'images/skechers_bobs.png', name: 'SKECHERS BOBS', desc: 'Slip-on casual with memory foam.', price: '₹3,999'}
  ],
  Converse: [
    {img: 'images/converse_runstar.png', name: 'CONVERSE RUN STAR HIKE', desc: 'Chunky lugged sole update.', price: '₹7,499'},
    {img: 'images/converse_1970.png', name: 'CONVERSE CHUCK 70 HIGH', desc: 'Upgraded materials & cushioning.', price: '₹6,999'},
    {img: 'images/converse_one_star.png', name: 'CONVERSE ONE STAR', desc: '90s skate legend returns.', price: '₹5,999'},
    {img: 'images/converse_pro_leather.png', name: 'CONVERSE PRO LEATHER OG', desc: 'Smooth leather hoops classic.', price: '₹6,799'},
    {img: 'images/converse_jw.png', name: 'CONVERSE JW ANDERSON', desc: 'Premium collab with bold colours.', price: '₹9,499'},
    {img: 'images/converse_lugged.png', name: 'CONVERSE LUGGED 2.0', desc: 'Utility outsole for all terrains.', price: '₹8,199'}
  ],
  Vans: [
    {img: 'images/vans_era.png', name: 'VANS ERA', desc: 'Skate staple with padded collar.', price: '₹4,299'},
    {img: 'images/vans_half_cab.png', name: 'VANS HALF CAB', desc: 'Legendary mid-top skate shoe.', price: '₹5,199'},
    {img: 'images/vans_ultrarange.png', name: 'VANS ULTRARANGE', desc: 'Adventure-ready cushioning.', price: '₹6,499'},
    {img: 'images/vans_authentic.png', name: 'VANS AUTHENTIC', desc: 'Original deck shoe since 1966.', price: '₹3,999'},
    {img: 'images/vans_sk8_mid.png', name: 'VANS SK8-MID', desc: 'Mid-cut versatility.', price: '₹4,799'},
    {img: 'images/vans_old_skool_platform.png', name: 'VANS OLD SKOOL PLATFORM', desc: 'Classic stripe on a raised sole.', price: '₹5,699'}
  ],
  Bata: [
    {img: 'images/bata_power.png', name: 'BATA POWER RUN', desc: 'Affordable athletic comfort.', price: '₹2,499'},
    {img: 'images/bata_comfit_walk.png', name: 'BATA COMFIT WALK', desc: 'Ergonomic footbed for long days.', price: '₹1,999'},
    {img: 'images/bata_red_label.png', name: 'BATA RED LABEL SNEAKER', desc: 'Trendy designs at great value.', price: '₹2,799'},
    {img: 'images/bata_school.png', name: 'BATA SCHOOL SHOE', desc: 'Durable & easy-care for students.', price: '₹999'},
    {img: 'images/bata_northstar.png', name: 'BATA NORTH STAR', desc: 'Casual lifestyle range.', price: '₹2,299'},
    {img: 'images/bata_hushpuppies.png', name: 'HUSH PUPPIES BROGUE', desc: 'Premium leather comfort.', price: '₹4,499'}
  ],
  "Under Armour": [
    {img: 'images/ua_hovr_machina.png', name: 'UA HOVR MACHINA', desc: 'Energy return with propulsion plate.', price: '₹12,499'},
    {img: 'images/ua_flow_velociti.png', name: 'UA FLOW VELOCITI', desc: 'Outsole-less lightweight speed.', price: '₹11,299'},
    {img: 'images/ua_charged_pursuit.png', name: 'UA CHARGED PURSUIT', desc: 'Breathable upper, cushioned ride.', price: '₹6,799'},
    {img: 'images/ua_tri_base_reign.png', name: 'UA TRI-BASE REIGN', desc: 'Stable base for lifting & HIIT.', price: '₹9,199'},
    {img: 'images/ua_apex.png', name: 'UA APEX TRAINER', desc: 'Dynamic support for workouts.', price: '₹8,499'},
    {img: 'images/ua_rogue.png', name: 'UA ROGUE 4', desc: 'Versatile runner with plush feel.', price: '₹6,299'}
  ],
  Asics: [
    {img: 'images/asics_metaracer.png', name: 'ASICS METARACER', desc: 'Carbon-plated race shoe.', price: '₹17,999'},
    {img: 'images/asics_novablast.png', name: 'ASICS NOVABLAST', desc: 'Trampoline-like FF Blast foam.', price: '₹12,499'},
    {img: 'images/asics_trabuco.png', name: 'ASICS GEL-TRABUCO', desc: 'Trail grip & protection.', price: '₹10,199'},
    {img: 'images/asics_ds_trainer.png', name: 'ASICS DS TRAINER', desc: 'Light stability for speedwork.', price: '₹9,299'},
    {img: 'images/asics_evoride.png', name: 'ASICS EVORIDE', desc: 'Efficient rocker geometry.', price: '₹8,799'},
    {img: 'images/asics_glyde.png', name: 'ASICS GLYDE RIDE', desc: 'Energy saving for long distances.', price: '₹13,199'}
  ],
  Cloud: [
    {img: 'images/on_cloudswift.png', name: 'ON CLOUDSWIFT', desc: 'Helion foam city runner.', price: '₹11,499'},
    {img: 'images/on_cloudstratus.png', name: 'ON CLOUDSTRATUS', desc: 'Double CloudTec cushioning.', price: '₹13,299'},
    {img: 'images/on_cloudventure.png', name: 'ON CLOUDVENTURE', desc: 'Trail-ready grip & protection.', price: '₹12,599'},
    {img: 'images/on_cloudx.png', name: 'ON CLOUD X', desc: 'Versatile for run & gym.', price: '₹10,499'},
    {img: 'images/on_cloudsurfer.png', name: 'ON CLOUDSURFER', desc: 'Wave-like roll for soft landings.', price: '₹11,799'},
    {img: 'images/on_cloudboom.png', name: 'ON CLOUDBOOM ECHO', desc: 'Marathon-distance racer.', price: '₹17,999'}
  ],
  "New Balance": [
    {img: 'images/nb_1080.png', name: 'NEW BALANCE 1080v12', desc: 'FreshFoam X plush cruiser.', price: '₹14,499'},
    {img: 'images/nb_990.png', name: 'NEW BALANCE 990v5', desc: 'Made in USA heritage style.', price: '₹19,999'},
    {img: 'images/nb_574.png', name: 'NEW BALANCE 574', desc: 'Classic suede/mesh casual.', price: '₹8,299'},
    {img: 'images/nb_fuelcell.png', name: 'NB FUELCELL REBEL', desc: 'Propulsive foam for speed.', price: '₹12,199'},
    {img: 'images/nb_freshfoam.png', name: 'NB FRESHFOAM MORE', desc: 'Max-stack cushioned trainer.', price: '₹13,599'},
    {img: 'images/nb_hierro.png', name: 'NB HIERRO v7', desc: 'All-terrain trail comfort.', price: '₹11,499'}
  ],
  Jordan: [
    {img: 'images/jordan_2.png', name: 'AIR JORDAN 2', desc: 'Luxury details, hoops heritage.', price: '₹14,999'},
    {img: 'images/jordan_3.png', name: 'AIR JORDAN 3', desc: 'Elephant-print classic.', price: '₹15,999'},
    {img: 'images/jordan_5.png', name: 'AIR JORDAN 5', desc: 'Fighter-jet inspired design.', price: '₹16,499'},
    {img: 'images/jordan_6.png', name: 'AIR JORDAN 6', desc: 'Championship silhouette.', price: '₹16,999'},
    {img: 'images/jordan_7.png', name: 'AIR JORDAN 7', desc: 'Huarache-style comfort.', price: '₹15,499'},
    {img: 'images/jordan_12.png', name: 'AIR JORDAN 12', desc: 'Art-deco stitching & Zoom Air.', price: '₹17,499'}
  ]
};

function renderProducts(brand) {
  const grid = document.querySelector('.products-grid');
  if (!grid || !extraProducts[brand]) return;

  extraProducts[brand].forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${brandLogos[brand] || ''}" alt="${brand} Logo" class="logo" />
      <img src="${p.img}" alt="${p.name}" class="product-image" />
      <h2 class="product-name">${p.name}</h2>
      <p class="product-description">${p.desc}</p>
      <div class="price">${p.price}</div>
      <select class="size-select">
        <option value="6">Size 6</option>
        <option value="7">Size 7</option>
        <option value="8">Size 8</option>
        <option value="9">Size 9</option>
        <option value="10">Size 10</option>
        <option value="11">Size 11</option>
      </select>
      <button class="add-to-cart">Add To Cart</button>
    `;
    grid.appendChild(card);
  });
  // ensure buttons and size selectors are ready after dynamic rendering
  setupCartFeatures();
}

// Setup size selectors & cart on page load
function setupCartFeatures() {
  document.querySelectorAll('.product-card').forEach(card => {
    // add size dropdown if missing
    let select = card.querySelector('.size-select');
    if (!select) {
      select = document.createElement('select');
      select.className = 'size-select';
      [6,7,8,9,10,11].forEach(sz => {
        const opt = document.createElement('option');
        opt.value = sz;
        opt.textContent = `Size ${sz}`;
        select.appendChild(opt);
      });
      const btn = card.querySelector('.add-to-cart');
      if (btn) card.insertBefore(select, btn);
    }

    const addBtn = card.querySelector('.add-to-cart');
    if (addBtn && !addBtn.dataset.cartBound) {
      addBtn.dataset.cartBound = 'true';
      addBtn.addEventListener('click', () => {
        const name = card.querySelector('.product-name')?.textContent.trim() || '';
        const price = card.querySelector('.price')?.textContent.trim() || '';
        const img = card.querySelector('.product-image')?.getAttribute('src') || '';
        const size = select.value;
        let cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const existing = cart.find(i => i.name === name && i.size === size);
        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push({name, price, img, size, quantity: 1});
        }
        localStorage.setItem('cartItems', JSON.stringify(cart));
        alert('Added to cart!');
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('h1.section-title');
  if (title) {
    const brand = title.textContent.trim();
    renderProducts(brand);
  }
  setupCartFeatures();
});
