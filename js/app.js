
// ------------------------------------------------------- LENIS SETUP -------------------------------------------------------
// const lenis = new Lenis()
//     lenis.on('scroll', ScrollTrigger.update)

//     gsap.ticker.add((time)=>{
//     lenis.raf(time * 1000)
//     })

//     gsap.ticker.lagSmoothing(0)

// ------------------------------------------------------- NAVBAR -------------------------------------------------------

let lastScroll = 0;
let body = document.body;
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (lastScroll <= 0) {
        body.classList.remove("scroll-up");
    }

    if (currentScroll >= lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;

    //highlight current func
    let sections =document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav ul li a');
    sections.forEach(sec =>{
      let top = window.scrollY+300;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove("active");
              document.querySelector('nav ul li a[href*='+id+']').classList.add('active');
          });
      }
    });
});



    
// ------------------------------------------------------- SCROLL ANIMATIONS -------------------------------------------------------

const scrollEntry = document.querySelectorAll(".enter-on-scroll")

scrollEntry.forEach(scrollEntry => {
    let entryLeft = scrollEntry.querySelector(".on-scroll-left")
    let entryRight = scrollEntry.querySelector(".on-scroll-right")
  
    let gt = gsap.timeline({
        scrollTrigger: {
            trigger: scrollEntry,
            start: 'top 40%',
            end: 'bottom 80%',
            markers: false,
            scrub: true
        }
    })
    
    gt.fromTo(entryLeft, {xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1})
    gt.fromTo(entryRight, {xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1}, '<')

})


// ------------------------------------------------------- ABOUT -------------------------------------------------------



// ------------------------------------------------------- GALLERY -------------------------------------------------------

const track = document.getElementById("image-track");
let trackArea = document.getElementById("portfolio");


window.addEventListener("scroll", () => {
  let proportion = trackArea.getBoundingClientRect().top / window.innerHeight;
  console.log(proportion)
  if (proportion <= 0 && proportion >= -2) {
  
    track.animate({
      transform: `translate(${proportion * 100}%, 0%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track.querySelectorAll(".project_image")) {
      image.animate({
        objectPosition: `${ 100+ proportion* 50}% center`
      }, { duration: 1200, fill: "forwards" });

    } 
  }
  });



// ------------------------------------------------------- EMAIL BREAK -------------------------------------------------------



const explodeText = id => {
    const element = document.getElementById(id),
        text = element.innerText.split('');
    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement('span');
        span.className = "exploding_letter";
        span.innerText = letter;
        element.appendChild(span);
    })
}

explodeText("exploding_text");








