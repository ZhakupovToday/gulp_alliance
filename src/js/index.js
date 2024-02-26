//burger
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuIcon = document.querySelector(".burger-menu-icon");
  const burger = document.querySelector(".burger");

  burgerMenuIcon.addEventListener("click", function () {
    if (burger.style.display === "none" || burger.style.display === "") {
      burger.style.display = "block";
      burgerMenuIcon.src = "./img/burger_close_icon.svg";
    } else {
      burger.style.display = "none";
      burgerMenuIcon.src = "./img/burger_open_icon.svg";
    }
  });
});

//slider_services

document.addEventListener("DOMContentLoaded", function () {
  const navDots = document.querySelectorAll(".nav-dot");
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;

  navDots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
  });

  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-track__slide");
  const slideWidth = slides[0].offsetWidth;

  track.addEventListener("touchstart", touchStart);
  track.addEventListener("touchmove", touchMove);
  track.addEventListener("touchend", touchEnd);

  function touchStart(event) {
    isDragging = true;
    startX = event.touches[0].clientX;
    event.preventDefault();
  }

  function touchMove(event) {
    if (!isDragging) return;
    const currentPosition = event.touches[0].clientX;
    const diff = startX - currentPosition;
    const currentOffset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${currentOffset - diff}px)`;
    event.preventDefault();
  }

  function touchEnd() {
    isDragging = false;
    const currentPosition = event.changedTouches[0].clientX;
    const diff = startX - currentPosition;
    if (Math.abs(diff) > slideWidth / 3) {
      if (diff > 0 && currentIndex < slides.length - 1) {
        currentIndex += 1;
      } else if (diff < 0 && currentIndex > 0) {
        currentIndex -= 1;
      }
    }
    goToSlide(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    const offset = -index * slideWidth;
    track.style.transform = `translateX(${offset}px)`;

    navDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }
});

//slider_blog

document.addEventListener("DOMContentLoaded", function () {
  const navDots = document.querySelectorAll(".blog-nav__dot");
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;

  navDots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
  });

  const track = document.querySelector(".blog-carousel__track");
  const slides = document.querySelectorAll(".blog-carousel__slide");
  const slideWidth = slides[0].offsetWidth;

  track.addEventListener("touchstart", touchStart);
  track.addEventListener("touchmove", touchMove);
  track.addEventListener("touchend", touchEnd);

  function touchStart(event) {
    isDragging = true;
    startX = event.touches[0].clientX;

    event.preventDefault();
  }

  function touchMove(event) {
    if (!isDragging) return;
    const currentPosition = event.touches[0].clientX;
    const diff = startX - currentPosition;
    const currentOffset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${currentOffset - diff}px)`;
    event.preventDefault();
  }

  function touchEnd() {
    isDragging = false;
    const currentPosition = event.changedTouches[0].clientX;
    const diff = startX - currentPosition;
    if (Math.abs(diff) > slideWidth / 3) {
      if (diff > 0 && currentIndex < slides.length - 1) {
        currentIndex += 1;
      } else if (diff < 0 && currentIndex > 0) {
        currentIndex -= 1;
      }
    }
    goToSlide(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    const offset = -index * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
    navDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }
});
