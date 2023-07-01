(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();




const orderBtn = document.querySelectorAll('.btn-order');
const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const closeBtn = document.querySelector('.close');

// Открытие модального окна
orderBtn.forEach(function (orderBtn) {
  orderBtn.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = 'block';
    modal2.style.display = 'none';

    // Слушаем клики в документе, пока модальное окно открыто
    document.addEventListener('click', outsideClickHandler);
  });
});

// Закрытие модального окна
closeBtn.addEventListener('click', function (event) {
  event.stopPropagation(); // Остановка всплытия события клика
  modal.style.display = 'none';
  
});

const form = document.querySelector('#myForm');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Предотвращаем перезагрузку страницы

  // Создаем объект FormData для сбора данных формы
  const formData = new FormData(form);

  // Опции запроса
  const options = {
    method: 'POST',
    body: formData
  };

  https://docs.google.com/forms/d/e/1FAIpQLSf5AAN5xFUeDHo34ZTaTdv9uxSt9FzSkOXWFtoDHo_gtTJyfw/viewform?usp=pp_url&entry.2005620554=%D0%B2%D0%BB%D0%B0%D0%B4&entry.1166974658=380632511526&entry.839337160=%D1%87%D0%B5%D0%BA


  // Отправляем данные формы на Google Forms
  fetch('https://docs.google.com/forms/d/e/1FAIpQLSf5AAN5xFUeDHo34ZTaTdv9uxSt9FzSkOXWFtoDHo_gtTJyfw/formResponse', options)
    .then(response => {
      // Обрабатываем ответ от сервера
      if (response.ok) {

        // Форма успешно отправлена
        // Здесь вы можете выполнить любые дополнительные действия или отобразить сообщение об успешной отправке
        console.log('Form submitted successfully');
      } else {
        // Произошла ошибка при отправке формы
        // Здесь вы можете обработать ошибку или отобразить сообщение об ошибке
        console.error('Form submission error');
      }
    })
    .catch(error => {
      // Произошла ошибка при отправке запроса
      // Здесь вы можете обработать ошибку или отобразить сообщение об ошибке
      console.error('Request error', error);
    });
  modal.style.display = 'none';
  modal2.style.display = 'block';
  setTimeout(function () {
    modal2.style.display = 'none';
  }, 2000);
  
});

// Функция для обработки кликов вне модального окна
// function outsideClickHandler(event) {
//   // Проверяем, является ли цель клика вторым модальным окном или его содержимым
//   if (!modal2.contains(event.target)) {
//     modal.style.display = 'none';
//     document.removeEventListener('click', outsideClickHandler); // Удаляем слушатель кликов, так как модальное окно закрыто
//   }
// }




  var products = [
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery4" href="./img/har-kor1/har-kor4.webp">' +
    '<img src="./img/har-kor1/har-kor4.webp" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Світло-коричневий</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Велюр</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/har-kor1/har-kor2.webp" data-fancybox="gallery4"></a>' +
    '<a href="./img/har-kor1/har-kor3.webp" data-fancybox="gallery4"></a>' +
    '<a href="./img/har-kor1/har-kor1.webp" data-fancybox="gallery4"></a>' +
    
    '</div>' +
    '<p class="item-type">Лежанка</p>' +
    '<p class="item-name">Harmonie</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">1350 UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery5" href="./img/har-sir1/har-sir5.webp">' +
    '<img src="./img/har-sir1/har-sir5.webp" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Сірий</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Велюр</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/har-sir1/har-sir2.webp" data-fancybox="gallery5"></a>' +
    '<a href="./img/har-sir1/har-sir3.webp" data-fancybox="gallery5"></a>' +
    '<a href="./img/har-sir1/har-sir4.webp" data-fancybox="gallery5"></a>' +
    '<a href="./img/har-sir1/har-sir1.webp" data-fancybox="gallery5"></a>' +
    
    '</div>' +
    '<p class="item-type">Лежанка</p>' +
    '<p class="item-name">Harmonie</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">1350 UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery6" href="./img/inf-kor-l/inf-kor-l4.webp">' +
    '<img src="./img/inf-kor-l/inf-kor-l4.webp" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Світло-коричневий</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Велюр</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/inf-kor-l/inf-kor-l2.webp" data-fancybox="gallery6"></a>' +
    '<a href="./img/inf-kor-l/inf-kor-l3.webp" data-fancybox="gallery6"></a>' +
    '<a href="./img/inf-kor-l/inf-kor-l1.webp" data-fancybox="gallery6"></a>' +
    '<a href="./img/inf-kor-l/inf-kor-l5.webp" data-fancybox="gallery6"></a>' +
    
    '</div>' +
    '<p class="item-type">Лежанка</p>' +
    '<p class="item-name">Infiniti</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">2880 UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery7" href="./img/inf-ser-l/inf-ser-l3.webp">' +
    '<img src="./img/inf-ser-l/inf-ser-l3.webp" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Сірий</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Велюр</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/inf-ser-l/inf-ser-l2.webp" data-fancybox="gallery7"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l1.webp" data-fancybox="gallery7"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l4.webp" data-fancybox="gallery7"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l5.webp" data-fancybox="gallery7"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l6.webp" data-fancybox="gallery7"></a>' +
    
    '</div>' +
    '<p class="item-type">Лежанка</p>' +
    '<p class="item-name">Infiniti</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">2880 UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    
    
    // Добавьте дополнительные HTML-коды товаров здесь
  ];

  var products2 = [
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery8" href="./img/inf-tkor-l/inf-tkor-l2.webp">' +
    '<img src="./img/inf-tkor-l/inf-tkor-l2.webp" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Коричневий</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Велюр</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/inf-tkor-l/inf-tkor-l1.webp" data-fancybox="gallery8"></a>' +
    '<a href="./img/inf-tkor-l/inf-tkor-l3.webp" data-fancybox="gallery8"></a>' +
    '<a href="./img/inf-tkor-l/inf-tkor-l4.webp" data-fancybox="gallery8"></a>' +
    '<a href="./img/inf-tkor-l/inf-tkor-l5.webp" data-fancybox="gallery8"></a>' +
    
    '</div>' +
    '<p class="item-type">Лежанка</p>' +
    '<p class="item-name">Infiniti</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">2880 UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery9" href="./img/step1/step2.webp">' +
    '<img src="./img/step1/step2.webp" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Чорний</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Велюр</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/step1/step1.webp" data-fancybox="gallery9"></a>' +
    '<a href="./img/step1/step3.webp" data-fancybox="gallery9"></a>' +
    '<a href="./img/step1/step4.webp" data-fancybox="gallery9"></a>' +
    '<a href="./img/step1/step5.webp" data-fancybox="gallery9"></a>' +
    '<a href="./img/step1/step6.webp" data-fancybox="gallery9"></a>' +
    
    '</div>' +
    '<p class="item-type">Сходи</p>' +
    '<p class="item-name">Steps</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">2400 UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery10" href="./img/petbag/petbag.jpg">' +
    '<img src="./img/petbag/petbag.jpg" alt="" class="item-img"/>' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Чорний</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Велюр</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="#"></a>' +
    '<a href="#"></a>' +
    '<a href="#"></a>' +
    '<a href="#"></a>' +
    
    '</div>' +
    '<p class="item-type">Сумка</p>' +
    '<p class="item-name">Pet bag</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">- UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery11" href="./img/inf-ser-l/inf-ser-l1.webp">' +
    '<img src="./img/inf-ser-l/inf-ser-l1.webp" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Unknown</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">Unknown</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Unknown</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/inf-ser-l/inf-ser-l2.webp" data-fancybox="gallery11"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l3.webp" data-fancybox="gallery11"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l4.webp" data-fancybox="gallery11"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l5.webp" data-fancybox="gallery11"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l6.webp" data-fancybox="gallery11"></a>' +
    
    '</div>' +
    '<p class="item-type">Unknown</p>' +
    '<p class="item-name">Unknown</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">- UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    
    
    
    // Добавьте дополнительные HTML-коды товаров здесь
  ];



  function attachEventToButtons() {
    const orderBtn = document.querySelectorAll('.btn-order');
    
    orderBtn.forEach(function (orderBtn) {
      orderBtn.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'block';
        modal2.style.display = 'none';
        // Ваш код для обработки клика на кнопку
      });
    });
  }

  function createProductList(products, category) {
    var productList = document.querySelector('.product-container');
    var ul = document.createElement('ul');
    ul.className = 'product-container';
    ul.setAttribute('data-category', category);
  
    products.forEach(function(product) {
      ul.innerHTML +=product;
    });
  
    productList.insertAdjacentElement('afterend', ul);
  
    // Скрыть кнопку
    loadButton.style.display = 'none';
    attachEventToButtons();
  }
  
  var loadButton = document.getElementById('loadButton');
  loadButton.addEventListener('click', function() {
    
    
    createProductList(products2, 'furniture');
    createProductList(products, 'electronics');
  });
  const phoneNumberInput = document.querySelector('#phone');
const submitButton = document.querySelector('#submit');

phoneNumberInput.addEventListener('input', function() {
  const phoneNumber = this.value.trim();

  // Проверяем, является ли введенное значение корректным номером телефона
  const phoneNumberPattern = /^\+?[0-9]{10,}$/;
  const isValidPhoneNumber = phoneNumberPattern.test(phoneNumber);

  // Активируем или деактивируем кнопку отправки в зависимости от валидности номера телефона
  if (isValidPhoneNumber) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
});
  
  
  

  
