import './social-icon.scss';

document.addEventListener('DOMContentLoaded', () => {
  const svgSprite = document.body.firstElementChild;
  const defs = svgSprite.querySelectorAll('defs');

  // fixes the visibility of gradient icons in firefox
  defs.forEach((item) => {
    svgSprite.prepend(item.cloneNode(true));
    item.remove();
  });
});
