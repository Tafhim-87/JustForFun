function navAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.from("#logo", {
    opacity: 0,
    duration: 1,
    y: -50,
  });
  tl.from(
    "nav h3",
    {
      opacity: 0,
      duration: 1,
      y: -50,
      stagger: 0.3,
    },
    "-=0.5"
  );
  tl.from(
    "#icon",
    {
      opacity: 0,
      duration: 1,
      y: -50,
      stagger: 0.3,
    },
    "-=0.5"
  );
}
function footerAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.from(".header", {
    x: -300,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
    stagger: 0.2,
  });
  tl.from(".circle", {
    scale: 0,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from("#mid img", {
    scale: 0,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from("#mid h1", {
    x: 300,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  });

  tl.from(
    "#footer i",
    {
      y: 30,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    },
    "-=0.8"
  );
  tl.from(
    "#footer h5",
    {
      y: 30,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    },
    "-=0.8"
  );
}

navAnimation();

footerAnimation();

var typed = new Typed("#element", {
  strings: ["more.", "enough.", "less."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
