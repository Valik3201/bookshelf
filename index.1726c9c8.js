var e=globalThis,t={},o={},a=e.parcelRequire0688;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire0688=a);var s=a.register;s("ifJdc",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,a=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)a.set(t[o],{baseUrl:e,path:t[o+1]})}}),s("jaNa7",function(e,t){e.exports=new URL("amazon.702e28b6.png",import.meta.url).toString()}),s("4g0bO",function(e,t){e.exports=new URL("apple-books.75f7682c.png",import.meta.url).toString()}),s("cGAW0",function(e,t){e.exports=new URL("placeholder.18062ded.jpg",import.meta.url).toString()}),a("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["lbZNw","index.1726c9c8.js","i6YUf","amazon.702e28b6.png","jHlqi","apple-books.75f7682c.png","9zlPt","placeholder.18062ded.jpg","5TVzx","shopping-list.88ab9f6f.js","8BfbS","shopping-list.runtime.a01acd50.js"]')),a("dyvSB");const r=document.querySelector('[data-content="top-books"]'),i=document.querySelector('[data-content="category"]'),l=e=>{"topBooks"===e?(r.classList.add("visible"),r.classList.remove("right","hidden"),i.classList.remove("visible"),i.classList.add("left","hidden")):"category"===e&&(i.classList.add("visible"),i.classList.remove("left","hidden"),r.classList.remove("visible"),r.classList.add("right","hidden"))};var n=a("dyvSB");(async()=>{let e=document.querySelector(".category-list"),t=await (0,n.fetchCategories)();t.sort((e,t)=>e.list_name.localeCompare(t.list_name));let o=`<div>
          <button class="category-list__item active" type="button" name="All categories">All categories</button>
        </div>`;o+=t.map(({list_name:e})=>`<div>
            <button class="category-list__item" type="button" name="${e}">${e}</button>
        </div>`).join(""),e.insertAdjacentHTML("beforeend",o)})();var n=(a("dyvSB"),a("dyvSB"));const c=document.querySelector(".modal-pop-up-content"),d=e=>{let t=document.querySelector(".backdrop-pop-up");e?t.classList.remove("is-hidden"):t.classList.add("is-hidden")},u=document.querySelector(".backdrop-pop-up");u.addEventListener("click",function(e){e.target===u&&d(!1)}),document.querySelector(".close-modal-button").addEventListener("click",function(){c.innerHTML="",d(!1)}),document.addEventListener("keydown",function(e){"Escape"===e.key&&d(!1)});var m=a("lthku"),g=a("46SdE"),b=a("gwo96");const p=()=>{let e=document.querySelectorAll(".modal-pop-up-btn");(0,g.onAuthStateChanged)(b.auth,t=>{t?e.forEach(function(e){let t=e.getAttribute("data-book-id");(0,m.checkIfBookInLocalStorage)(t)?(e.textContent="Remove from the shopping list",(0,m.toggleCongratulatoryMessage)(!0)):(0,m.toggleCongratulatoryMessage)(!1),e.addEventListener("click",function(){(0,m.checkIfBookInLocalStorage)(t)?((0,m.removeFromLocalStorage)(t),e.textContent="Add to shopping list",(0,m.toggleCongratulatoryMessage)(!1)):((0,m.addToLocalStorage)(t),e.textContent="Remove from the shopping list",(0,m.toggleCongratulatoryMessage)(!0))})}):((0,m.toggleCongratulatoryMessage)(!1),document.querySelector(".auth-message").style.display="block",e.forEach(function(e){e.id="not-allowed"}))})},v=async e=>{d(!0);let{_id:t,title:o,author:s,book_image:r,description:i,buy_links:l}=await (0,n.fetchBookById)(e),u=[{name:"Amazon",imageUrl:new URL(a("jaNa7")).href,buyUrl:""},{name:"Apple Books",imageUrl:new URL(a("4g0bO")).href,buyUrl:""}],m=l.filter(e=>u.some(t=>t.name===e.name));u.forEach(e=>{let t=m.find(t=>t.name===e.name);e.buyUrl=t?t.url:""});let g=u.map(e=>`<a href="${e.buyUrl}" target="_blank"><img src="${e.imageUrl}" alt="${e.name}"></a>`).join(""),b=new URL(a("cGAW0")).href,v=`
    <div class="modal">
      <div class="modal__info">
        <div class="modal__cover">
        <img class="lazyload" src="${b}" data-src="${r}" alt="${o}">
        </div>
        <div class="modal__details">
            <div class="modal__details-header">
              <p class="modal__details-title">${o}</p>
              <p class="modal__details-author">${s}</p>
            </div>
            <p class="modal__details-description">${i||"Sorry, the description for this book is not available."}</p>
            <div class="modal__details-links">${g}</div>
        </div>
      </div>
    </div>
    <button type = "button" class = "modal-pop-up-btn button" data-book-id = "${t}">Add to shopping list</button>
  `;c.innerHTML=v,p()},_=({_id:e,title:t,author:o,book_image:s})=>{let r=new URL(a("cGAW0")).href;return`
      <div class="books__book" data-book-id="${e}">
        <div class="books__book--cover">
          <img class="lazyload" 
            src="${r}"
            data-src="${s}"
            alt="${t}">
          <div class="books__book--cover-overlay">
            <div class="books__book--cover-overlay-text">Quick View</div>
          </div>
        </div>
        <div class="books__book--title">${t}</div>
        <div class="books__book--author">${o}</div>
      </div>
    `},y=async()=>{l("topBooks");let e=(await (0,n.fetchTopBooks)()).map(e=>{let t=e.books.map(e=>_(e)).join("");return`
      <div class="books__category">
        <h2 class="books__category--title">${e.list_name}</h2>
        <div class="books__category--books">
          ${t}
        </div>
        <button class="see-more-btn" type="button" name="See more" data-category="${e.list_name}">See more</button>
      </div>
    `}).join("");r.innerHTML=`
      <h1 class="books__heading">Best Sellers <span class="books__heading--highlight">Books</span></h1>
      ${e}`;let t=document.querySelectorAll(".books__category--books"),o=document.querySelectorAll(".books__category");function a(){let e=window.innerHeight;o.forEach(t=>{t.getBoundingClientRect().top<e+400?(t.style.transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out",t.style.opacity="1",t.style.transform="translateY(0)"):(t.style.transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out",t.style.opacity="0",t.style.transform="translateY(100%)")})}a(),window.addEventListener("scroll",function(){a()}),t.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".books__book");t&&v(t.dataset.bookId)})})};y();var n=a("dyvSB");const f=async e=>{let t=await (0,n.fetchBooksByCategory)(e);if(!t||!Array.isArray(t)){console.error("Invalid response from fetchBooks:",t);return}l("category");let o=t.flat().map(e=>_(e)).join(""),a=`
    <div class="books-category visible" data-category="${e}">
      <h2 class="books__heading">${e}</h2>
      <div class="books__category--books">
        ${o}
      </div>
    </div>
  `;i.innerHTML=a,document.querySelectorAll(".books__book").forEach(e=>{e.addEventListener("click",()=>{v(e.dataset.bookId)})})},k=()=>{i?i.scrollIntoView({behavior:"smooth",block:"start"}):console.error("Books not found.")};r.addEventListener("click",e=>{let t=e.target.closest('button[name="See more"]');if(t){let e=t.getAttribute("data-category");f(e),document.querySelectorAll(".category-list button[name]").forEach(t=>{t.classList.remove("active"),t.getAttribute("name")===e&&(t.classList.add("active"),t.scrollIntoView({behavior:"smooth",block:"center"}))}),k()}}),document.querySelector(".category-list").addEventListener("click",e=>{let t=e.target.closest("button[name]");if(t){document.querySelectorAll("button[name]").forEach(e=>e.classList.remove("active")),t.classList.add("active");let e=t.getAttribute("name");"All categories"===e?y():(f(e),k())}});
//# sourceMappingURL=index.1726c9c8.js.map
