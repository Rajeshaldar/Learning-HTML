/*----------------Loader-------*/
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

("use strict");

// *************** modal  ******************
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll("[data-mobile-close-btn]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// *************** Accordion button funcrtion ***************
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");
    for (let i = 0; i < accordion; i++) {
      if (clickedBtn) break;
      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }
    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

/*------------------------------------ Products - Showcase for New Arrival --------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("productContainer");

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        const productHTML = `
                  <div class="showcase">
                      <a href="#" class="showcase-img-box">
                          <img src="${product.image}" alt="${
          product.title
        }" class="showcase-img">
                      </a>
                      <div class="showcase-content">
                          <a href="#">
                              <h4 class="showcase-title">${product.title}</h4>
                          </a>
                          <a href="#" class="showcase-category">${
                            product.category
                          }</a>
                          <!-- Add other product details here -->
                          <div class="price-box">
                              <p class="price"><b>$${product.price.toFixed(
                                2
                              )}</b></p>
                          </div>
                          <div class="cart">
                              <button class="add-cart-btn"><b>Add to Cart</b></button>
                          </div>
                      </div>
                  </div>
              `;
        productContainer.insertAdjacentHTML("beforeend", productHTML);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});
/*------------------------------------ Products - Showcase for Suggested for You --------------------------------*/
fetch("https://api.storerestapi.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error("no response");
    }
    return response.json();
  })
  .then((data) => {
    const showcaseContainer = document.getElementById("productShowcase");
    products.forEach((product) => {
      const productHTML = `
        <div class="product-showcase">
          <a href="#" class="showcase-img-box">
            <img src="${product.image}" alt="${product.title}" class="showcase-img">
          </a>
          <div class="showcase-content">
            <a href="#">
              <h4 class="showcase-title">${product.title}</h4>
            </a>
            <a href="#" class="showcase-category">${product.category}</a>
            <div class="price-box">
              <p class="price">$${product.price}</p>
            </div>
            <div class="cart">
              <button class="add-cart-btn"><b>Add to Cart</b></button>
            </div>
          </div>
        </div>
      `;
      showcaseContainer.innerHTML += productHTML;
    });
  })
  .catch((error) => console.error("Error fetching:", error));
