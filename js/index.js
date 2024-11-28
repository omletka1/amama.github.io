// Данные товаров для каждой категории
const products = {
  women: [
    { img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW17AAC_24499608_1_v2_2x.jpg', img_back: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW17AAC_24499609_2_v2_2x.jpg', title: 'Zolla Рубашка', price: '1200 ₽' },
    { img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0DADH_25364781_1_v2.jpg', img_back: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0DADH_25364783_2_v2.jpg', title: 'Блуза Evening collection', price: '2500 ₽' },
    { img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW18FVI_24738094_1_v1_2x.jpg', img_back: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW18FVI_24738095_2_v1_2x.jpg', title: 'Женские джинсы',price: '1500 ₽' }
  ],
  men: [
    { img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0B9ZC_24063514_1_v1_2x.jpg', img_back: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0B9ZC_24063515_2_v1_2x.jpg', title: 'Zolla Рубашка', price: '1200 ₽' },
    { img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0BX69_25050170_1_v1.jpeg', img_back: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0BX69_25050160_2_v1.jpeg', title: 'Костюм Jips', price: '2500 ₽' },
    { img: 'https://a.lmcdn.ru/img600x866/R/T/RTLADQ459401_24994833_1_v2_2x.jpg', img_back: 'https://a.lmcdn.ru/img600x866/R/T/RTLADQ459401_24994836_2_v2_2x.jpg', title: 'Пиджак', price: '1500 ₽' }
  ],
  sale: [
    { img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0BP4L_24762738_1_v1_2x.jpg', img_back: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0BP4L_24762739_2_v1_2x.jpg', title: 'Куртка утепленная', price: '40000 ₽' },
    { img: 'https://a.lmcdn.ru/img600x866/R/T/RTLADP020601_24015815_1_v3_2x.jpg', img_back: 'https://a.lmcdn.ru/img600x866/R/T/RTLADP020601_24015816_2_v3_2x.jpg', title: 'Джинсы Relaxed G18', price: '2500 ₽' },
    { img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW17V74_24489452_1_v1_2x.jpg', img_back: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW17V74_24489453_2_v1_2x.jpg', title: 'Водолазка', price: '1500 ₽' }
  ],
  accessories: [
    { img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0TQI8_24011626_1_v1_2x.jpg', img_back: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0TQI8_24052323_9_v1_2x.jpg', title: 'Сумка FURLA DELIZIA MINI SHOULDER BAG', price: '1200 ₽' },
    { img: 'https://a.lmcdn.ru/img600x866/R/T/RTLACU063501_20551900_2_v1_2x.jpg', img_back: 'https://a.lmcdn.ru/img600x866/R/T/RTLACU063501_20582951_10_v1_2x.jpg', title: 'Ремень', price: '2500 ₽' },
    { img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0BRI6_24847601_1_v1.jpg', img_back: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0BRI6_24907710_9_v3_2x.jpg', title: 'Шарф', price: '1500 ₽' }
  ],
};

// отобр товаров
function displayProducts(category) {
  const productsContainer = document.getElementById('product-list');
  productsContainer.innerHTML = ''; // очистка котнейнера

  if (!products[category]) return;

  products[category].forEach(product => {
    const productCard = `
      <div class="col-md-4">
        <div class="product-card">
         <!-- значок избранного --> 
          <div class="favorite-icon" onclick="toggleFavorite(this)">&#10084;</div>
          <div class="product-img">
            <img src="${product.img}" alt="${product.title}" class="img-fluid front-img">
            <img src="${product.img_back}" alt="${product.title} Back" class="img-fluid back-img" style="display: none;">
          </div>
          <h5 class="product-title">${product.title}</h5>
          <p class="product-price">${product.price}</p>
          <button class="btn-add-to-cart">Добавить в корзину</button>
        </div>
      </div>
    `;
    productsContainer.innerHTML += productCard;
  });

  addHoverEffect();
}

// смена фоток
function addHoverEffect() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const frontImg = card.querySelector('.front-img');
    const backImg = card.querySelector('.back-img');

    card.addEventListener('mouseover', () => {
      frontImg.style.display = 'none';
      backImg.style.display = 'block';
    });

    card.addEventListener('mouseout', () => {
      frontImg.style.display = 'block';
      backImg.style.display = 'none';
    });
  });
}

// меняется значок избранного
function toggleFavorite(icon) {
  icon.classList.toggle('active');
}

// загрузка товаров
document.addEventListener('DOMContentLoaded', () => displayProducts('women'));

displayProducts('women');
