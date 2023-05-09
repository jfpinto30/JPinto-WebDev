const COLOR_LIST = ["#0e0e0e", "#dddddd", "#2BE29C", "#007fff", "#FF44CC"];
let $targetList;

const init = () => {
  $targetList = document.querySelectorAll('[data-js="reveal"]');

  setup();

  window.addEventListener("scroll", onScroll, false);
  window.dispatchEvent(new Event("scroll"));
};

const getArrayRandomValue = (array) =>
array[Math.floor(Math.random() * array.length)];

const setup = () => {
  for (const $target of $targetList) {
    const content = $target.innerHTML;
    const color =
    "revealColor" in $target.dataset ?
    $target.dataset.revealColor :
    getArrayRandomValue(COLOR_LIST);
    $target.innerHTML = `<span data-reveal="content"><div data-reveal="cover" style="background-color:${color}"></div><span data-reveal="text">${content}</span></span>`;
  }
};

const onScroll = () => {
    const windowH = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const isMostScroll = document.body.clientHeight <= scrollTop + windowH;
  
    for (const $target of $targetList) {
      const rect = $target.getBoundingClientRect();
      const top = rect.top + scrollTop;
      const bottom = rect.bottom + scrollTop;
  
      if (isMostScroll || (top <= scrollTop + windowH * 0.8 && bottom >= scrollTop)) {
        $target.classList.add("loaded");
      } else {
        $target.classList.remove("loaded");
      }
    }
  };

document.addEventListener("DOMContentLoaded", init, false);