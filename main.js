const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerIcon = document.querySelector(".menu");
const carIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('contains');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')
    
}

function toggleMobileMenu() {
 
    const isAsideClosed = aside.classList.contains('contains');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

     aside.classList.toggle('inactive')

 
    if (mobileMenuOpen.classList.contains('inactive')){}   
}

    const productList = [];
    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });

    productList.push({
        name: 'Tv 4k',
        price: 850,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });

    productList.push({
        name: 'Desktop Pc',
        price: 1500,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });

    productList.push({
        name: 'Car BMW',
        price: 50000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });

    /*
      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
    */

    function renderProducts(arr){
        for(product of productList) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
    
            const img = document.createElement('img');
            img.setAttribute('src', product.image);
    
            // product = {name,price, image} -> product.image
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
    
            const productDiv = document.createElement('div');
    
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
    
            const productName = document.createElement('p');
            productName.innerText = product.name;
    
            productDiv.appendChild(productPrice);
            productDiv.appendChild(productName);
    
            const productFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
            productFigure.appendChild(productImgCart);
    
            productInfo.appendChild(productDiv);
            productInfo.appendChild(productFigure);
    
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
    
            cardsContainer.appendChild(productCard);
    
        }
    }
    renderProducts(productList);
   