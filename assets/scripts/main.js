// home page typewriter 
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('Selamat Datang di IndiHome')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Berdiri Sejak 2015 dan Tersedia Hingga Pelosok Negeri')
    .pauseFor(2500)
    .deleteAll(7)
    .typeString('Solusi Internet Cepat, Berkelas, dan Cerdas untuk Aktivitas Tanpa Batas')
    .start();

    // faq questions
    const items = document.querySelectorAll('.accordion button');
    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');
      for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
      if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }
    items.forEach((item) => item.addEventListener('click', toggleAccordion));




  // hamburger menu 
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector("#navbar");
  hamburger.addEventListener('click',()=>{
    navbar.classList.toggle("display");
    document.body.classList.toggle("disable-scroll")
  })
  
  const link=()=>{
  navbar.classList.remove("display");
  document.body.classList.remove("disable-scroll")
}

function tampilkanPaket(idTab) {
  var semuaPaket = document.querySelectorAll(".package");
  semuaPaket.forEach(function(paket) {
    paket.style.display = "none";
  });

  var paketYangDitampilkan = document.getElementById(idTab);
  if (paketYangDitampilkan) {
    paketYangDitampilkan.style.display = "flex";
  }

  var semuaTombol = document.querySelectorAll(".tab-button");
  semuaTombol.forEach(function(tombol) {
    tombol.classList.remove("active");
  });

  var tombolYangAktif = document.querySelector("button[onclick=\"tampilkanPaket('" + idTab + "')\"]");
  if (tombolYangAktif) {
    tombolYangAktif.classList.add("active");
  }
}

document.querySelectorAll(".track").forEach(button => {
  button.addEventListener("click", () => {
      const popupId = button.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      if (popup) {
          const overlay = document.getElementById("overlay");
          overlay.style.display = "flex";
          popup.style.display = "block";
          document.body.classList.add("no-scroll");
      }
  });
});

document.querySelectorAll(".close").forEach(closeButton => {
  closeButton.addEventListener("click", () => {
      const popup = closeButton.closest(".popup-card");
      if (popup) {
          const overlay = document.getElementById("overlay");
          overlay.style.display = "none";
          document.body.classList.remove("no-scroll");
          // Find the actual scrollable element
          const scrollable = popup.querySelector(".scrollable");
          if (scrollable) {
              // Reset scroll position before hiding the popup
              scrollable.scrollTop = 0;
          }
          popup.style.display = "none";
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      const popupId = button.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      if (popup) {
        const overlay = document.getElementById("popupOverlay");
        overlay.style.display = "flex";
        popup.style.display = "block";
        document.body.classList.add("no-scroll");
      }
    });
  });

  document.querySelectorAll(".close-btn").forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      const popup = closeButton.closest(".popup");
      if (popup) {
        const overlay = document.getElementById("popupOverlay");
        overlay.style.display = "none";
        document.body.classList.remove("no-scroll");
        const scrollable = popup.querySelector(".scrollable");
        if (scrollable) {
          scrollable.scrollTop = 0;
        }
        popup.style.display = "none";
      }
    });
  });
});

function toggleWidget() {
  var widget = document.getElementById("floatingWidget");
  var floatingButton = document.getElementById("floatingButton");

  widget.classList.toggle("show-widget");
  floatingButton.style.display = (widget.classList.contains("show-widget")) ? "none" : "block";
}

function closeWidget() {
  var widget = document.getElementById("floatingWidget");
  var floatingButton = document.getElementById("floatingButton");

  widget.classList.remove("show-widget");
  floatingButton.style.display = "flex";
}







