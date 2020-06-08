let nav = document.getElementsByClassName("ul");
let list = document.getElementsByClassName("list");
for( let i=0; i<list.length; i++){
    list[i].addEventListener("click", function(){
    let current = document.getElementsByClassName(" active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active"
  });
  let hiddenNav = document.querySelector(".hiddenNav");
  const menu = document.getElementById("navList");
  if (hiddenNav.clientHeight > 0) {
      menu.classList.remove("navList-open");
  }
}

/*let hiddenNav = document.querySelector(".hiddenNav");
if(){
hiddenNav.classList.add("show");
}*/

let mainNavLinks = document.querySelectorAll("ul li a");
let mainSections = document.querySelectorAll("#mainBody section");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  mainNavLinks.forEach(link => {
    
    let section= document.querySelector(link.hash);
    if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});


function openCloseMenu(){
  const menu = document.getElementById("navList");
  if(menu.clientWidth <=0){
    menu.classList.add("navList-open");
  } else{
    menu.classList.add("navList-hidden");
  }
}

let progress = document.querySelectorAll(".progress");
progress.addEventListener("focusin", function move(){
  let i=0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("firstProgress");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
});



let togBtn = document.querySelector(".navbar-toggler");
togBtn.addEventListener("click", function openCloseMenu(){
  animateCSS("#navList", "backInLeft");
})
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


let contactBTn = document.getElementById("contactBtn");
contactBTn.addEventListener("click", function(){
   /* const element = document.querySelector('#getInTouch');
    element.classList.add('animate__animated', 'animate__heartBeat');*/
    animateCSS("#getInTouch", "heartBeat");
})

/*const animateCSS = (element, animation, prefix = 'animate__') =>
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
  });*/

  let slider = tns({
    container: ".slider",
    items: 2,
    slideBy: "page",
    swipeAngle: false,
    speed: 400,
    controls:false,
    nav:false,
    mouseDrag: true,
    arrowKeys: true,
    
    /*responsive: {
      350: {
        items: 1,
        edgePadding: 30
      },
      500: {
        items:2
      }
    },*/

  })

 