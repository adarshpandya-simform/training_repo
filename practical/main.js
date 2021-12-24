// iife function
(() => {
  let data = [
    {
      img: "./assets/product1.webp",
      name: "Baby Essentials",
      discount: "Extra 5% Off",
      category: "Baby Diapers & More",
    },
    {
      img: "./assets/product7.webp",
      name: "Best Deals on Kid's...",
      discount: "50-80% Off",
      category: "Allen Solly ,U.S polo & ...",
    },
    {
      img: "./assets/product3.webp",
      name: "Women Beauty Devices",
      discount: "From $499",
      category: "Baby Diapers & More",
    },
    {
      img: "./assets/product4.webp",
      name: "Remote control , Board G...",
      discount: "Upto 70%+10% Of",
      category: "Baby Diapers & More",
    },
    {
      img: "./assets/product5.webp",
      name: "Remote control , Board G...",
      discount: "Upto 70%+10% Of",
      category: "Baby Diapers & More",
    },
    {
      img: "./assets/product6.webp",
      name: "Remote control , Board G...",
      discount: "Upto 70%+10% Of",
      category: "Baby Diapers & More",
    },
  ];
  let container = document.getElementsByClassName("product-container")[0];
  data.map((product) => {
    container.innerHTML += `<div class="product">
        <img src=${product.img} alt="p1" class="product-img" />
        <span class="prodct-name">${product.name}</span>
        <span class="prodct-discount">${product.discount}</span>
        <span class="prodct-category">${product.category}</span>
      </div>`;
  });
})();
