document.addEventListener("DOMContentLoaded", () => {

  /* ================= Loader ================= */

  const loader = document.querySelector("#loader-cont");
  loader.classList.add("active");

  window.addEventListener("load", () => {
    loader.classList.remove("active");
  });


  /* ================= Slider ================= */

  const slides = document.querySelectorAll(".slider");
  const container = document.querySelector(".slider-cont");
  let index = 0;

  function showSlide() {
    container.style.transform = `translateX(-${index * 100}%)`;
    index = (index + 1) % slides.length;
  }

  setInterval(showSlide, 4000);

  window.slideForward = function () {
    index = (index + 1) % slides.length;
    container.style.transform = `translateX(-${index * 100}%)`;
  };

  window.slideBack = function () {
    index = (index - 1 + slides.length) % slides.length;
    container.style.transform = `translateX(-${index * 100}%)`;
  };


  /* ================= Icons ================= */

  lucide.createIcons();


  /* ================= Mobile Menu ================= */

  const navMenu = document.querySelector("nav .nav-cont>ul");

  window.openMenu = function () {
    navMenu.style.right = "0";
  };

  window.closeMenu = function () {
    navMenu.style.right = "-100%";
  };


  /* ================= Contact Options ================= */

  window.contactOptions = function () {
    Swal.fire({
      title: "Contact Us",
      text: "How would you like to reach us?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "📞 Call",
      cancelButtonText: "💬 WhatsApp",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "tel:+923035591912";
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.open("https://wa.me/923035591912", "_blank");
      }
    });
  };


  /* ================= Show More / Less Products ================= */

  const productCardCont = document.getElementById("cc-c");

  window.showFull = function () {
    productCardCont.classList.add("active");
  };

  window.showLess = function () {
    productCardCont.classList.remove("active");
  };


  /* ================= Offers Data ================= */

  const offers = [
    {
      id: "HB1",
      name: "Collagen + B-12",
      img: "herbiotic_images/1.webp",
      disc: "7%",
    },
    {
      id: "HB2",
      name: "Biotin Plus + Biotin Shampoo",
      img: "herbiotic_images/2.webp",
      disc: "5%",
    },
  ];


  /* ================= Modal Functions ================= */

  window.closeModal = function (id) {
    const modal = document.getElementById(id);
    modal.style.transition = "all 0.3s ease";
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
  };


  /* ================= Modal Timer ================= */

  function modalTimer() {
    let remaining = 10;
    const timerDisplay = document.querySelector("#closeTimer");

    if (!timerDisplay) return;

    const timer = setInterval(() => {
      timerDisplay.textContent = "Close in " + remaining + "s";
      remaining--;

      if (remaining < 0) {
        clearInterval(timer);
        closeModal("offerModal1");
      }
    }, 1000);
  }


  /* ================= Random Offer ================= */

  function showRandomOffer() {

    const randomIndex = Math.floor(Math.random() * offers.length);
    const offer = offers[randomIndex];

    const modalImage = document.getElementById("modalImage");
    const offerLink = document.getElementById("offerLink");

    if (!modalImage || !offerLink) return;

    modalImage.src = offer.img;

    const message = `Hello, I am interested in this offer:
Offer ID: ${offer.id}
Product: ${offer.name}
Discount: ${offer.disc}
Image: https://idreesiamedicalhall912.github.io/idreesiamedicalhall.com/${offer.img}`;

    offerLink.href =
      "https://wa.me/923035591912?text=" + encodeURIComponent(message);

    modalTimer();
  }

  showRandomOffer();

});