const products = [
  {id:"P010",name:"Chocolate Cake",detail:"Milk chocolate sauce",category:"Cakes",price:129,size:"120G",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",tag:"A CLASSIC"},
  {id:"P013",name:"Milk Tres Leches",detail:"Soft, soaked & silky",category:"Cakes",price:159,size:"140G",image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",tag:"SIGNATURE"},
  {id:"P004",name:"Brownie Piece",detail:"Deep, fudgy chocolate",category:"Brownies",price:89,size:"70G",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",tag:"FUDGY"},
  {id:"P008",name:"Brownie Drench",detail:"Brownie-inspired shake",category:"Shakes",price:89,size:"180ML",image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",tag:"SIP SLOW"},
  {id:"P007",name:"Rose Royale",detail:"A rose-kissed favourite",category:"Shakes",price:69,size:"180ML",image:"https://images.unsplash.com/photo-1553787499-6f913324f3d3?auto=format&fit=crop&w=900&q=80",tag:"A LITTLE FLORAL"},
  {id:"P018",name:"Korean Cheese Bun",detail:"Golden, soft & cheesy",category:"Buns",price:139,size:"1 PIECE",image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",tag:"WARM & COMFORTING"},
  {id:"P019",name:"Brownie Tub",detail:"Triple chocolate layers",category:"Tubs",price:219,size:"1 TUB",image:"https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=80",tag:"SPOON HAPPINESS"},
  {id:"P020",name:"Choco Cake Blast",detail:"A whole lot of chocolate",category:"Tubs",price:289,size:"1 TUB",image:"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=80",tag:"GO ALL IN"},
  {id:"P021",name:"Brownie Blast",detail:"For the serious chocolate days",category:"Tubs",price:319,size:"1 TUB",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",tag:"THE BIG CRAVING"}
];

const grid = document.getElementById("productGrid");
const count = document.getElementById("menuCount");
const formatPrice = value => `₹${value}`;

function renderProducts(category = "All") {
  const shown = category === "All" ? products : products.filter(p => p.category === category);
  count.textContent = `${String(shown.length).padStart(2,"0")} CRAVINGS TO EXPLORE`;
  grid.innerHTML = shown.map((p,i) => `
    <article class="product-card" style="animation-delay:${i*55}ms">
      <div class="product-photo">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#bda58e,#5b3929)'">
        <span class="product-index">${p.id} / ${p.tag}</span>
        <button class="product-add" type="button" aria-label="Ask about ${p.name}" data-product="${p.id}">+</button>
      </div>
      <div class="product-meta">
        <div><h3>${p.name}</h3><p>${p.detail}</p><div class="product-size">${p.size}</div></div>
        <span class="product-price">${formatPrice(p.price)}</span>
      </div>
    </article>`).join("");
}

document.getElementById("categoryRow").addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  document.querySelectorAll(".category").forEach(el => el.classList.toggle("active", el === button));
  renderProducts(button.dataset.category);
});

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-product]");
  if (!button) return;
  const product = products.find(p => p.id === button.dataset.product);
  if (!product) return;
  const message = `Hi UNDO! I'd like to know more about ${product.name} (${formatPrice(product.price)}).`;
  window.open(`https://wa.me/917448434744?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("load", () => {
  window.setTimeout(() => document.getElementById("loader").classList.add("done"), 500);
});
renderProducts();
