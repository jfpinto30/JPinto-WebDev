var card = document.getElementById("activator");
var tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

var toggle = false;

tl.to(".activator", {
  background: "#2BE29C",
  borderRadius: "5em 5em 0 0"
});
tl.to(
  ".navIconList",
  {
    clipPath: "ellipse(100% 100% at 50% 50%)"
  },
  "-=.5"
);
tl.to(
  "nav img",
  {
    opacity: 1,
    transform: "translateX(0)",
    stagger: 0.05
  },
  "-=.5"
);
tl.pause();

card.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle ? tl.play() : tl.reverse());
});
