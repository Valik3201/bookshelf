var e=globalThis,o={},t={},r=e.parcelRequire0688;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequire0688=r),(0,r.register)("iIDod",function(e,o){let t=()=>{let e=JSON.parse(localStorage.getItem("selectedBook")),o=document.querySelector(".book-card");if(o){if(e){let t=o.querySelector(".books-card-img"),r=o.querySelector(".book-title"),n=o.querySelector(".book-genre"),l=o.querySelector(".book-plot"),c=o.querySelector(".book-author");t.src=e.book_image,t.alt=e.title,r.textContent=e.title,n.textContent=e.genre,l.textContent=e.plot,c.textContent=e.author}else console.warn("Brak danych o książce w local storage.")}else console.warn("Div .book-card nie istnieje.")};function r(){localStorage.removeItem("selectedBook");let e=document.querySelector(".book-card");e?(e.remove(),n(!0)):console.warn("Div .book-card do usunięcia nie istnieje.")}function n(e){let o=document.querySelector(".book-card"),t=document.querySelector(".book-message");if(o)t&&t.remove();else if(!t&&e){let e=document.createElement("div");e.className="book-message",e.textContent="This page is empty, add some books and proceed to order.",document.body.appendChild(e)}}document.addEventListener("DOMContentLoaded",()=>{t(),n(!1)}),document.querySelectorAll(".button-delete").forEach(e=>{e.addEventListener("click",r)})}),r("iIDod");
//# sourceMappingURL=shopping-list.b58986bb.js.map
