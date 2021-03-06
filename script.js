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
  /*---------------typed effect--------*/
document.addEventListener("DOMContentLoaded", function(event) {
  var typed = new Typed('#typed',{
      stringsElement: '#typed-strings',
      backSpeed: 50,
      typeSpeed: 50,
      loop: true
    });
});
/* progress bar*/
let progress = document.getElementsByClassName('progress');
let progressBar = document.getElementsByClassName("progress-bar");
for (let i =0; i<progressBar.length; i++){
  progressBar[i].addEventListener('focuson', function(event){
  let current = document.getElementsByClassName("progress-bar");
  current[0].classList.add('secondProgress');
})
}


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

  let slider = tns({
    container: ".slider",
    items: 2,
    slideBy: "page",
    swipeAngle: false,
    speed: 400,
    mouseDrag: true,
    arrowKeys: true,
    controlsPosition:"top",
    controlsText:["&lt","&gt"],
    controlsContainer:".tns-controls",
    autoplay:false,
    nav:false,
    controls:true,
   
  })

  var btnContainer = document.getElementById("portBtn");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  
  function filterSelection(c) {
      let boxes = document.getElementsByClassName("filterItem");
  
      for(item of boxes){
          if (c == "all")  {
              item.classList.remove("hide");
              item.classList.add("show");
          }
          else if(item.getAttribute("data-filter") == c)
          {
              item.classList.remove("hide");
              item.classList.add("show");
          }
          else {
              item.classList.remove("show");
              item.classList.add("hide");
          }
      };
  }
let formBtn = document.getElementById("send");
formBtn.addEventListener("click", function Validate(){
  let inputs=document.querySelectorAll(".form-control");
  let required = document.getElementsByClassName("form-group");
  if(inputs != required ){
    alert("please fill the requested fields");
  }
})
