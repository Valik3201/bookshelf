const button = document.querySelector("#scrollUp");

function scrollUp() {
  window.scrollTo(0, 0);
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}


button.addEventListener("click", scrollUp);
document.addEventListener("scroll" ,scrollFunction);