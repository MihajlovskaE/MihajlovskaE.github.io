let slider = tns({
    container: ".slider",
    items: 5,
    slideBy: 1,
    swipeAngle: false,
    speed: 400,
    mouseDrag: true,
    arrowKeys: true,
    controls:false,
    controlsContainer:false,
    nav:false,
    responsive:{
        360:{
            items:1,
          
        },
        640: {
          edgePadding: 20,
          
          items:2
        },
        700: {
          
          items:3
        },
        900: {
          items: 4,
        
        }
      }
});

const overlay= document.querySelectorAll(".slider-item");
overlay.classList.add("animate_animated", "animate__zoomOut");
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd);
  });