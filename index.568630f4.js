var e=globalThis,o={},t={},a=e.parcelRequire0688;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in t){var a=t[e];delete t[e];var s={id:e,exports:{}};return o[e]=s,a.call(s.exports,s,s.exports),s.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequire0688=a);var s=a.register;s("ifJdc",function(e,o){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,a=new Map;t=function(e,o){for(var t=0;t<o.length-1;t+=2)a.set(o[t],{baseUrl:e,path:o[t+1]})}}),s("jaNa7",function(e,o){e.exports=new URL("amazon.35fc3df6.png",import.meta.url).toString()}),s("8JcHY",function(e,o){e.exports=new URL("apple.47f1068e.png",import.meta.url).toString()}),s("cGAW0",function(e,o){e.exports=new URL("placeholder.18062ded.jpg",import.meta.url).toString()}),a("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["lbZNw","index.568630f4.js","9zlPt","placeholder.18062ded.jpg","i6YUf","amazon.35fc3df6.png","lqZgE","apple.47f1068e.png","5TVzx","shopping-list.fc51a2f5.js","8BfbS","shopping-list.runtime.93da36ea.js"]')),a("dyvSB");const i=document.querySelector('[data-content="top-books"]'),l=document.querySelector('[data-content="category"]'),r=e=>{"topBooks"===e?(i.classList.add("visible"),i.classList.remove("right","hidden"),l.classList.remove("visible"),l.classList.add("left","hidden")):"category"===e&&(l.classList.add("visible"),l.classList.remove("left","hidden"),i.classList.remove("visible"),i.classList.add("right","hidden"))};var n=a("dyvSB");(async()=>{let e=document.querySelector(".category-list"),o=await (0,n.fetchBooks)("category-list");o.sort((e,o)=>e.list_name.localeCompare(o.list_name));let t=`<div>
          <button class="category-list__item active" type="button" name="All categories">All categories</button>
        </div>`;t+=o.map(({list_name:e})=>`<div>
            <button class="category-list__item" type="button" name="${e}">${e}</button>
        </div>`).join(""),e.insertAdjacentHTML("beforeend",t)})();var n=(a("dyvSB"),a("dyvSB")),c=a("lthku");const d=document.querySelector(".modal-pop-up-content"),b=e=>{let o=document.querySelector(".backdrop-pop-up");e?o.classList.remove("is-hidden"):o.classList.add("is-hidden")};document.querySelector(".close-modal-button").addEventListener("click",function(){d.innerHTML="",b(!1)}),document.addEventListener("keydown",function(e){"Escape"===e.key&&b(!1)});const u=async e=>{b(!0);let{_id:o,title:t,author:s,book_image:i,description:l,buy_links:r}=await (0,n.fetchBooks)(`${e}`),u=[{name:"Amazon",imageUrl:new URL(a("jaNa7")).href,buyUrl:""},{name:"Apple Books",imageUrl:new URL(a("8JcHY")).href,buyUrl:""}],v=r.filter(e=>u.some(o=>o.name===e.name));u.forEach(e=>{let o=v.find(o=>o.name===e.name);e.buyUrl=o?o.url:""});let m=u.map(e=>`<a href="${e.buyUrl}" target="_blank"><img src="${e.imageUrl}" alt="${e.name}"></a>`).join(""),_=new URL(a("cGAW0")).href,p=`
    <div class="modal">
      <div class="modal__info">
        <div class="modal__cover">
        <img class="lazyload" src="${_}" data-src="${i}" alt="${t}">
        </div>
        <div class="modal__details">
            <div class="modal__details-header">
              <p class="modal__details-title">${t}</p>
              <p class="modal__details-author">${s}</p>
            </div>
            <p class="modal__details-description">${l||"Sorry, the description for this book is not available."}</p>
            <div class="modal__details-links">${m}</div>
        </div>
      </div>
    </div>
    <button type = "button" class = "modal-pop-up-btn button" data-book-id = "${o}">Add to shopping list</button>
  `;d.innerHTML=p,document.querySelectorAll(".modal-pop-up-btn").forEach(function(e){e.addEventListener("click",async function(){let o=e.getAttribute("data-book-id");await (0,c.addToLocalStorage)(o)})})},v=async()=>{r("topBooks");let e=await (0,n.fetchBooks)("top-books"),o=new URL(a("cGAW0")).href,t=e.map(e=>{let t=e.books.map(({title:e,author:t,book_image:a,_id:s})=>`
          <div class="books__book" data-book-id="${s}">
            <div class="books__book--cover">
              <img class="lazyload" 
              data-sizes="auto"
              src="${o}"
              data-src="${a}"
              alt="${e}">
              <div class="books__book--cover-overlay">
                <div class="books__book--cover-overlay-text">Quick View</div>
              </div>
            </div>
            <div class="books__book--title">${e}</div>
            <div class="books__book--author">${t}</div>
          </div>
        `).join("");return`
      <div class="books__category">
        <h2 class="books__category--title">${e.list_name}</h2>
        <div class="books__category--books">
          ${t}
        </div>
        <button class="see-more-btn" type="button" name="See more" data-category="${e.list_name}">See more</button>
      </div>
    `}).join("");i.innerHTML=`
      <h1 class="books__heading">Best Sellers <span class="books__heading--highlight">Books</span></h1>
      ${t}`;let s=document.querySelectorAll(".books__category--books"),l=document.querySelectorAll(".books__category");function c(){let e=window.innerHeight;l.forEach(o=>{o.getBoundingClientRect().top<e+400?(o.style.transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out",o.style.opacity="1",o.style.transform="translateY(0)"):(o.style.transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out",o.style.opacity="0",o.style.transform="translateY(100%)")})}c(),window.addEventListener("scroll",function(){c()}),s.forEach(e=>{e.addEventListener("click",e=>{let o=e.target.closest(".books__book");if(o){let e=o.dataset.bookId;console.log("Displaying book with ID:",e),u(e)}})})};v();var n=a("dyvSB");const m=async e=>{let o=await (0,n.fetchBooks)("category",e);if(!o||!Array.isArray(o)){console.error("Invalid response from fetchBooks:",o);return}r("category");let t=new URL(a("cGAW0")).href,s=o.flat().map(e=>`
      <div class="books__book" data-book-id="${e._id}">
        <div class="books__book--cover">
          <img class="lazyload" 
          src="${t}"
          data-src="${e.book_image}"
          alt="${e.title}">
          <div class="books__book--cover-overlay">
            <div class="books__book--cover-overlay-text">Quick View</div>
          </div>
        </div>
        <div class="books__book--title">${e.title}</div>
        <div class="books__book--author">${e.author}</div>
      </div>
      `).join(""),i=`
    <div class="books-category visible" data-category="${e}">
      <h2 class="books__heading">${e}</h2>
      <div class="books__category--books">
        ${s}
      </div>
    </div>
  `;l.innerHTML=i,document.querySelectorAll(".books__book").forEach(e=>{e.addEventListener("click",()=>{let o=e.dataset.bookId;console.log("Displaying book with ID:",o),u(o)})})},_=()=>{l?l.scrollIntoView({behavior:"smooth",block:"start"}):console.error("Books not found.")};i.addEventListener("click",e=>{let o=e.target.closest('button[name="See more"]');if(o){let e=o.getAttribute("data-category");m(e),document.querySelectorAll(".category-list button[name]").forEach(o=>{o.classList.remove("active"),o.getAttribute("name")===e&&(o.classList.add("active"),o.scrollIntoView({behavior:"smooth",block:"center"}))}),_()}}),document.querySelector(".category-list").addEventListener("click",e=>{let o=e.target.closest("button[name]");if(o){document.querySelectorAll("button[name]").forEach(e=>e.classList.remove("active")),o.classList.add("active");let e=o.getAttribute("name");"All categories"===e?v():(m(e),_())}});
//# sourceMappingURL=index.568630f4.js.map
