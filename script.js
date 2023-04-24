/*scroll suave*/
const menuItens = document.querySelectorAll('.links a ');
menuItens.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target)

    scrollToPosition(to);
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: 'smooth',
    });
}

function getScrollTopByHref(linkId){
    const id = linkId.getAttribute('href');
    return document.querySelector(id).offsetTop
}


/*funçao de scroll suave para navehadores que nao suportam*/
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 700;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

/*carosel*/
var swiper = new Swiper(".mySwiper",{
    slidesPerView:3,
    spaceBetween:30,
    slidesPerGroup:3,
    loop:true,
    loopFillGroupWithBlack:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})

/*view img*/ 
document.querySelectorAll('.image img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
      
    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

/*text animation */

function typeWriter(elemento){
    const textoArray = elemento.innerText.split('');
    elemento.innerText = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(()=> elemento.innerText += letra , 75 * i)
    });
}

    const about = document.querySelector('p');

    typeWriter(about);

const btn = document.getElementById("btnToTop")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)

    
})
document.addEventListener('scroll', ocultar)

function ocultar(){

    if(window.scrollY > 10){
        btn.style.display = "flex"
    }else{
        btn.style.display = "none"
    }
  
}
ocultar()


