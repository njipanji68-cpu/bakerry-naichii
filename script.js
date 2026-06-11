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
  if (!cartBody) return;
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
  cartState.items.push(item);
  cartState.total += item.price;
  renderCart();
  openDrawer();
};

if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    addItemToCart({ name: 'Golden Velvet Cake', price: 86 });
  });
}

if (buyNowBtn) {
  buyNowBtn.addEventListener('click', () => {
    addItemToCart({ name: 'Golden Velvet Cake', price: 86 });
    setTimeout(() => {
      window.location.href = 'checkout.html';
    }, 300);
  });
}

if (placeOrderBtn) {
  placeOrderBtn.addEventListener('click', () => {
    window.alert('Pesanan berhasil dibuat! Terima kasih telah berbelanja.');
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
