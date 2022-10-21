//Pin the first page
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'power1.out' } });
tl.fromTo(
  '.hero',
  { zIndex: 10, opacity: 1, scale: 1 },
  { zIndex: 0, opacity: 0, scale: 1.2, duration: 0.5 }
);
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: '.first-page',
    markers: true,
    start: '0%',
    end: '100%',
  },
});

//Highlight PAGE 2
gsap.set('.text-container', { color: 'black', opacity: 0 });
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    markers: true,
    start: '-10%',
    end: '40%',
    pin: true,
    scrub: true,
    // pinSpacing:true
  },
});

tlH.to('.text-container', { color: 'purple', opacity: 1 });

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    markers: true,
    pin: true,
    start: '-9.9%',
    end: '60%',
    scrub: true,
  },
});

tlHRemove.fromTo('.text-container', { color: 'purple' }, { color: 'black' });

// //Page 3
// const tlSplit = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".third-page",
//     start: "-25%",
//     end: "30%",
//     scrub: true,
//   },
// });

// tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
// tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");
// tlSplit.fromTo(
//   ".product-text-left",
//   { x: 50, opacity: 0 },
//   { opacity: 1, x: 0 },
//   "<"
// );
// tlSplit.fromTo(
//   ".product-text-right",
//   { x: -50, opacity: 0 },
//   { opacity: 1, x: 0 },
//   "<"
// );

// const tlSplitPin = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".third-page",
//     pin: true,
//     pinSpacing: false,
//     start: "0%",
//     end: "100%",
//   },
// });

// //Carousel

// const swatches = document.querySelectorAll(".swatches img");
// const gallery = document.querySelector(".phone-gallery");
// const slides = document.querySelectorAll(".phone-gallery-container");

// let currentSwatch = "blue";
// let topIndex = 2;

// swatches.forEach((swatch, index) => {
//   const coord = slides[index].getBoundingClientRect().left;

//   swatch.addEventListener("click", (e) => {
//     let swatchName = e.target.getAttribute("swatch");
//     let closeUp = document.querySelector("." + swatchName);
//     //Check if we are on the same swatch
//     if (currentSwatch === swatchName) return;

//     gsap.set(closeUp, { zIndex: topIndex });
//     gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });

//     //Gallery
//     gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });
//     //Increment zIndex
//     topIndex++;
//     currentSwatch = swatchName;
//   });
// });

// //Page 5 video on scroll
// const tlVideo = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".fifth-page",
//     start: "0%",
//     end: "150%",
//     scrub: true,
//     pin: true,
//   },
// });
// tlVideo.fromTo(
//   ".product-video",
//   { currentTime: 0 },
//   { currentTime: 3, duration: 1 }
// );

// tlVideo.fromTo(
//   ".product-info-container h3",
//   { opacity: 0 },
//   { opacity: 1, stagger: 0.25, duration: 0.5 },
//   "<"
// );

// //6th Page
// const tlParallax = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sixth-page",
//     start: "-25%",
//     end: "50%",
//     scrub: true,
//   },
// });

// tlParallax.fromTo(".photo-description", { y: 0 }, { y: -80 });
// tlParallax.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
// tlParallax.fromTo(".phone-video", { y: 0 }, { y: -200 }, "<");
