//window.addEventListener("scroll", function() {
    //const navbar = document.querySelector(".navbar");
    //if (window.scrollY > 50) {
      //  navbar.classList.add("scrolled");
   // } else {
     //   navbar.classList.remove("scrolled");
    //}
//});


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
