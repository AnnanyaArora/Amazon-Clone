const product=[
    {
        name:'Wireless Headphones ',
        price:'100',
        img:'image/product/bluetooth-wireless.jpg'
    },
    {
        name:'Smart Watch ',
        price:'150',
        img:'image/product/smartwatch.webp'
    },
    {
        name:'BackPack',
        price:'99.80',
        img:'image/product/backpack.jpg'
    }   
];

function displayProducts(productArray) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
  
    productArray.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="product-img">
        <div class="product-title">${product.name}</div>
        <div class="product-price">$${product.price}</div>
        <button  onclick=" addToCart('${product.name}', '${product.price}', '${product.img}')" class="Add-To-Cart">Add to Cart</button>
      `;
  
      productGrid.appendChild(productCard);
    });
  } 
  function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
  
    const filteredProducts = product.filter(p =>
      p.name.toLowerCase().includes(query)
    );
  
    displayProducts(filteredProducts);
  }
  
  // display products on first load
  window.onload = () => {
    displayProducts(product);
  };

  
  function addToCart(name, price, img) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, img });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  };


