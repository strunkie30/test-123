import "./styles.scss";

import gsap from "gsap";

function moveTo($el, x, y, duration) {
  requestAnimationFrame(() => {
    gsap.to($el, {
      x,
      y,
      duration: duration,
      overwrite: true
    });
  });
}

document.querySelectorAll("a").forEach($el => {
  let offsetTop = null;
  let offsetLeft = null;
  let boundingWidth = null;
  let boundingHeight = null;

  $el.addEventListener("mouseenter", e => {
    const bounding = $el.getBoundingClientRect();
    offsetTop = bounding.y; //bounding.y - window.scrollTop();
    offsetLeft = bounding.x; //bounding.x - window.scrollLeft();
    boundingWidth = bounding.width;
    boundingHeight = bounding.height;
  });

  $el.addEventListener("mouseleave", e => {
    moveTo($el, 0, 0, 1);
  });

  $el.addEventListener("mousemove", e => {
    const clientY = e.clientY;
    const clientX = e.clientX;

    moveTo(
      $el,
      (clientX - offsetLeft - boundingWidth / 2) / 1.7,
      (clientY - offsetTop - boundingHeight / 2) / 1.7,
      0.3
    );
  });
});
