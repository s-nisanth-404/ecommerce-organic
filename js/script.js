//butter.js
butter.init();
//GSAP - Page Starting Animation
gsap.from(".asideImg", { duration: 1, x: "100%", ease: "Power4.easeIn" });
gsap.from(".main-content", { duration: 1, opacity: 0, delay: 0.5 });

//Text Animation
window.addEventListener("scroll", () => {
  let animationText = document.querySelectorAll(".animator");
  animationText.forEach((animation) => {
    let animationPosition = animation.getBoundingClientRect().top;
    let screenHeight = window.innerHeight / 1;

    if (animationPosition <= screenHeight) {
      animation.classList.add("animationText");
    }
    if (animationPosition >= screenHeight) {
      animation.classList.remove("animationText");
    }
  });
});
