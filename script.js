const cartDrawer = document.getElementById('cart-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const openCart = document.getElementById('open-cart');
const closeCart = document.getElementById('close-cart');
const reviewTrack = document.getElementById('review-track');
const reviewPrev = document.getElementById('review-prev');
const reviewNext = document.getElementById('review-next');
const promoCountdown = document.getElementById('promo-countdown');
const previewCard = document.getElementById('preview-card');
const cakeForm = document.getElementById('cake-form');

// Product Images as Data URLs
const productImages = {
  '1': 'data:image/svg+xml;utf8,<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="p1" cx="35%" cy="25%"><stop offset="0%" style="stop-color:%23fde7df" /><stop offset="100%" style="stop-color:%23eabfa4" /></radialGradient></defs><rect width="280" height="280" fill="url(%23p1)"/><circle cx="140" cy="160" r="80" fill="%23c8866b" opacity="0.9"/><circle cx="140" cy="150" r="75" fill="%23d9977f"/><ellipse cx="140" cy="140" rx="70" ry="65" fill="%23e8b0a0"/><circle cx="140" cy="130" r="60" fill="rgba(255,220,200,0.6)"/><circle cx="160" cy="110" r="12" fill="%23d4af37"/><circle cx="120" cy="115" r="10" fill="%23d4af37" opacity="0.8"/></svg>',
  '2': 'data:image/svg+xml;utf8,<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="p2" cx="40%" cy="20%"><stop offset="0%" style="stop-color:%23fff7ed" /><stop offset="100%" style="stop-color:%23d9b38f" /></radialGradient></defs><rect width="280" height="280" fill="url(%23p2)"/><ellipse cx="140" cy="170" rx="75" ry="40" fill="%23c79d6f"/><ellipse cx="140" cy="155" rx="70" ry="35" fill="%23d9b08f"/><ellipse cx="140" cy="140" rx="65" ry="32" fill="%23e8c9b5"/><path d="M 110 130 Q 140 100 170 130 Q 170 150 140 160 Q 110 150 110 130" fill="rgba(255,255,200,0.5)"/><circle cx="150" cy="120" r="8" fill="%23d4af37"/><circle cx="130" cy="125" r="7" fill="%23f0d78f"/></svg>',
  '3': 'data:image/svg+xml;utf8,<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="p3" cx="40%" cy="25%"><stop offset="0%" style="stop-color:%23f4d6cd" /><stop offset="100%" style="stop-color:%23934f2b" /></radialGradient></defs><rect width="280" height="280" fill="url(%23p3)"/><circle cx="140" cy="170" r="85" fill="%236b3e22"/><circle cx="140" cy="160" r="80" fill="%238b4f2a"/><circle cx="140" cy="150" r="75" fill="%23a8654d"/><circle cx="140" cy="140" r="70" fill="%23c98266"/><ellipse cx="140" cy="125" rx="65" ry="60" fill="rgba(50,20,10,0.3)"/><circle cx="165" cy="105" r="9" fill="%23d4af37"/><circle cx="120" cy="110" r="8" fill="%23d4af37" opacity="0.7"/></svg>',
  '4': 'data:image/svg+xml;utf8,<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="p4" cx="38%" cy="22%"><stop offset="0%" style="stop-color:%23fbe9d8" /><stop offset="100%" style="stop-color:%23c2956f" /></radialGradient></defs><rect width="280" height="280" fill="url(%23p4)"/><ellipse cx="140" cy="175" rx="80" ry="38" fill="%23a8755f"/><ellipse cx="140" cy="160" rx="75" ry="35" fill="%23c18c6f"/><ellipse cx="140" cy="145" rx="70" ry="32" fill="%23d9a889"/><ellipse cx="140" cy="130" rx="65" ry="30" fill="%23e8c4b5"/><circle cx="155" cy="105" r="10" fill="%239d5a3a"/><circle cx="125" cy="110" r="9" fill="%23a8654d"/><circle cx="140" cy="115" r="8" fill="%23d4af37" opacity="0.9"/></svg>',
  'hero': 'data:image/svg+xml;utf8,<svg viewBox="0 0 600 520" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="hero" cx="40%" cy="20%"><stop offset="0%" style="stop-color:%23fff4ee" /><stop offset="70%" style="stop-color:%23d29a6f" /></radialGradient></defs><rect width="600" height="520" fill="url(%23hero)"/><ellipse cx="300" cy="380" rx="120" ry="35" fill="%23c89469" opacity="0.8"/><ellipse cx="300" cy="340" rx="110" ry="32" fill="%23d4a574"/><ellipse cx="300" cy="300" rx="100" ry="30" fill="%23ddb084"/><ellipse cx="300" cy="260" rx="90" ry="28" fill="%23e8c4a0"/><ellipse cx="300" cy="240" rx="85" ry="35" fill="rgba(255,255,255,0.3)"/><circle cx="340" cy="280" r="8" fill="%23d4af37" opacity="0.8"/><circle cx="260" cy="300" r="6" fill="%23d4af37" opacity="0.7"/><circle cx="320" cy="220" r="7" fill="%23d4af37" opacity="0.75"/></svg>'
};

const applyProductImages = () => {
  // Product photos 1
  document.querySelectorAll('.product-photo-1').forEach(el => {
    el.style.backgroundImage = `url('${productImages['1']}')`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  });
  
  // Product photos 2
  document.querySelectorAll('.product-photo-2').forEach(el => {
    el.style.backgroundImage = `url('${productImages['2']}')`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  });
  
  // Product photos 3
  document.querySelectorAll('.product-photo-3').forEach(el => {
    el.style.backgroundImage = `url('${productImages['3']}')`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  });
  
  // Product photos 4
  document.querySelectorAll('.product-photo-4').forEach(el => {
    el.style.backgroundImage = `url('${productImages['4']}')`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  });
  
  // Hero photo
  const heroPhoto = document.querySelector('.hero-photo');
  if (heroPhoto) {
    heroPhoto.style.backgroundImage = `url('${productImages['hero']}')`;
    heroPhoto.style.backgroundSize = 'cover';
    heroPhoto.style.backgroundPosition = 'center';
  }
  
  // Gallery main
  const galleryMain = document.querySelector('.gallery-main');
  if (galleryMain) {
    galleryMain.style.backgroundImage = `url('${productImages['1']}')`;
    galleryMain.style.backgroundSize = 'cover';
    galleryMain.style.backgroundPosition = 'center';
  }
  
  // Cart thumbs
  document.querySelectorAll('.cart-thumb').forEach((thumb, idx) => {
    thumb.style.backgroundImage = `url('${productImages['1']}')`;
    thumb.style.backgroundSize = 'cover';
    thumb.style.backgroundPosition = 'center';
  });
};

// Apply images on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyProductImages);
} else {
  applyProductImages();
}

// Also apply when page becomes visible
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) applyProductImages();
});

let reviewIndex = 0;
const reviewCount = reviewTrack?.children?.length || 0;

const openDrawer = () => {
  if (cartDrawer && drawerOverlay) {
    cartDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
  }
};

const closeDrawer = () => {
  if (cartDrawer && drawerOverlay) {
    cartDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
  }
};

openCart?.addEventListener('click', openDrawer);
closeCart?.addEventListener('click', closeDrawer);
drawerOverlay?.addEventListener('click', closeDrawer);

const updateReviewPosition = () => {
  if (!reviewTrack) return;
  reviewTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
};

reviewPrev?.addEventListener('click', () => {
  if (reviewCount === 0) return;
  reviewIndex = Math.max(0, reviewIndex - 1);
  updateReviewPosition();
});

reviewNext?.addEventListener('click', () => {
  if (reviewCount === 0) return;
  reviewIndex = Math.min(reviewCount - 1, reviewIndex + 1);
  updateReviewPosition();
});

if (reviewCount > 0) {
  setInterval(() => {
    reviewIndex = (reviewIndex + 1) % reviewCount;
    updateReviewPosition();
  }, 6500);
}

const countdownTarget = new Date();
countdownTarget.setHours(countdownTarget.getHours() + 5);

const pad = (value) => String(value).padStart(2, '0');

const refreshCountdown = () => {
  const now = new Date();
  const diff = Math.max(0, countdownTarget - now);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  if (promoCountdown) {
    promoCountdown.textContent = `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  }
};

setInterval(refreshCountdown, 1000);
refreshCountdown();

const previewMap = {
  size: document.getElementById('size'),
  flavor: document.getElementById('flavor'),
  decoration: document.getElementById('decoration'),
  customText: document.getElementById('custom-text'),
};

const updatePreview = () => {
  if (!previewCard) return;
  document.getElementById('preview-size').textContent = previewMap.size.value;
  document.getElementById('preview-flavor').textContent = previewMap.flavor.value;
  document.getElementById('preview-decoration').textContent = previewMap.decoration.value;
  const message = previewMap.customText.value.trim() || 'Write a message...';
  document.getElementById('preview-message').textContent = `"${message}"`;
};

if (cakeForm) {
  cakeForm.addEventListener('input', updatePreview);
}

const timeButtons = document.querySelectorAll('.time-option');
const shippingOptions = document.querySelectorAll('.shipping-option');
const paymentOptions = document.querySelectorAll('.payment-option');
const debitPanel = document.getElementById('debit-digital-panel');
const connectDebit = document.getElementById('connect-debit');

const activateGroup = (buttons, activeButton) => {
  buttons.forEach((button) => button.classList.remove('active'));
  activeButton.classList.add('active');
};

if (timeButtons.length) {
  timeButtons.forEach((button) => {
    button.addEventListener('click', () => activateGroup(timeButtons, button));
  });
}

if (shippingOptions.length) {
  shippingOptions.forEach((option) => {
    option.addEventListener('click', () => activateGroup(shippingOptions, option));
  });
}

if (paymentOptions.length) {
  paymentOptions.forEach((option) => {
    option.addEventListener('click', () => {
      activateGroup(paymentOptions, option);
      if (debitPanel) {
        debitPanel.classList.toggle('payment-detail-hidden', option.textContent.trim() !== 'Debit Digital');
      }
    });
  });
}

if (connectDebit) {
  connectDebit.addEventListener('click', (event) => {
    event.preventDefault();
    connectDebit.textContent = 'Akun Debit Digital Terhubung';
    connectDebit.classList.add('btn-primary');
    connectDebit.classList.remove('btn-secondary');
  });
}

const addToCartBtn = document.getElementById('add-to-cart');
const buyNowBtn = document.getElementById('buy-now');
const placeOrderBtn = document.getElementById('place-order');
const cartBody = document.querySelector('.drawer-body');
const drawerTotalAmount = document.querySelector('.drawer-total strong');

const cartState = {
  items: [],
  total: 0,
};

const renderCart = () => {
  if (!cartBody) {
    console.warn('Cart body element not found');
    return;
  }
  
  if (cartState.items.length === 0) {
    cartBody.innerHTML = '<p class="empty-cart">Keranjang kosong. Tambahkan produk terlebih dahulu.</p>';
    if (drawerTotalAmount) drawerTotalAmount.textContent = '$0';
    return;
  }

  cartBody.innerHTML = cartState.items
    .map(
      (item) =>
        `<div class="cart-item"><div class="cart-thumb"></div><div><p>${item.name}</p><span>$${item.price}</span></div></div>`
    )
    .join('');

  if (drawerTotalAmount) drawerTotalAmount.textContent = `$${cartState.total}`;
};

const addItemToCart = (item) => {
  if (!item || !item.name || !item.price) {
    console.error('Invalid item:', item);
    return;
  }
  
  cartState.items.push(item);
  cartState.total += item.price;
  renderCart();
  openDrawer();
};

if (addToCartBtn) {
  addToCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addItemToCart({ name: 'Golden Velvet Cake', price: 86 });
  });
}

if (buyNowBtn) {
  buyNowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addItemToCart({ name: 'Golden Velvet Cake', price: 86 });
    setTimeout(() => {
      window.location.href = 'checkout.html';
    }, 500);
  });
}

if (placeOrderBtn) {
  placeOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name')?.value;
    const address = document.getElementById('address')?.value;
    const city = document.getElementById('city')?.value;
    const phone = document.getElementById('phone')?.value;
    
    if (!name || !address || !city || !phone) {
      alert('Mohon lengkapi semua informasi pengiriman.');
      return;
    }
    
    const activePayment = document.querySelector('.payment-option.active');
    if (!activePayment) {
      alert('Pilih metode pembayaran terlebih dahulu.');
      return;
    }
    
    const paymentMethod = activePayment.textContent.trim();
    
    // If Debit Digital selected, check connection
    if (paymentMethod === 'Debit Digital') {
      const connectBtn = document.getElementById('connect-debit');
      if (connectBtn?.textContent.includes('Hubungkan') || !connectBtn?.textContent.includes('Terhubung')) {
        alert('Hubungkan akun Debit Digital terlebih dahulu.');
        return;
      }
    }
    
    // Show success message
    alert(`Pesanan berhasil dibuat!\n\nNama: ${name}\nAlamat: ${address}, ${city}\nMetode: ${paymentMethod}\n\nTerima kasih telah berbelanja di Bakerry Naichii!`);
    
    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('phone').value = '';
    
    // Redirect after 1 second
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });
}

renderCart();

const sections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => revealObserver.observe(section));

const handleScrollDecorations = () => {
  document.querySelectorAll('.floating-pill').forEach((pill, index) => {
    const offset = window.scrollY * (0.03 + index * 0.01);
    pill.style.transform = `translateY(${Math.sin((Date.now() / 800) + index) * 8}px) translateX(${offset}px)`;
  });
};

window.addEventListener('scroll', handleScrollDecorations);
window.addEventListener('load', handleScrollDecorations);

// Smooth page transitions
const links = document.querySelectorAll('a[href]:not([href^="#"])');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (!link.target || link.target === '_self') {
      event.preventDefault();
      document.body.classList.add('page-exiting');
      setTimeout(() => {
        window.location = link.href;
      }, 240);
    }
  });
});
