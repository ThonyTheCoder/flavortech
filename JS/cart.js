var cartIcon = document.querySelector('.cart-icon');
var cartCountSpan = document.getElementById('cartCount');
var cartDropdown = document.getElementById('cartDropdown');
var cartItemsList = document.getElementById('cartItems');
var emptyCartMessage = document.getElementById('emptyCartMessage');
var addToCartButtons = document.querySelectorAll('.add-to-cart');
var cartItemCount = 0;
var itemsInCart = [];
var totalCartPrice = 0;

function setupAddToCart() {
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var menuItemFigcaption = this.parentNode;
      var menuItemName = menuItemFigcaption.querySelector('h3').textContent;
      var menuItemPrice = parseInt(menuItemFigcaption.dataset.price);
      var menuItemImage = menuItemFigcaption.dataset.image;
      var menuItemDescription = menuItemFigcaption.dataset.description; // Get the description

      cartItemCount++;
      cartCountSpan.textContent = cartItemCount;

      itemsInCart.push({
        name: menuItemName,
        price: menuItemPrice,
        image: menuItemImage,
        description: menuItemDescription // Store the description
      });

      totalCartPrice += menuItemPrice;
      updateCartDisplay();
    });
  });
}

function toggleCart() {
  cartDropdown.style.display = (cartDropdown.style.display === 'block') ? 'none' : 'block';
  updateCartDisplay();
}

function updateCartDisplay() {
  cartItemsList.innerHTML = '';
  var cartTotalElement = document.getElementById('cartTotal');
  if (cartTotalElement) {
    cartTotalElement.remove();
  }

  if (itemsInCart.length === 0) {
    emptyCartMessage.style.display = 'block';
  } else {
    emptyCartMessage.style.display = 'none';
    itemsInCart.forEach(function(item) {
      var listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; margin-right: 15px; vertical-align: middle;">
        <div style="flex-grow: 1;">
          <span class="item-name">${item.name}</span>
          <span class="item-description">${item.description}</span>
        </div>
        <span class="item-price">$${item.price.toFixed(2)}</span>
      `;
      cartItemsList.appendChild(listItem);
    });

    var totalItem = document.createElement('li');
    totalItem.id = 'cartTotal';
    totalItem.innerHTML = `<strong style="float: right;">Total: $${totalCartPrice.toFixed(2)}</strong>`;
    cartItemsList.appendChild(totalItem);
  }
}

function checkout() {
  alert("Proceeding to checkout with a total of: $" + totalCartPrice.toFixed(2) + " and items: " + itemsInCart.map(item => item.name).join(", "));
}

window.addEventListener('click', function(event) {
  if (!cartIcon.contains(event.target)) {
    cartDropdown.style.display = 'none';
  }
});

setupAddToCart();