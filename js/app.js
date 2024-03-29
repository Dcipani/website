const timeline = gsap.timeline({
  scrollTrigger: {
      trigger: ".image-track-holder",
      start: "top 20%",
      end: "+=400", // adjust based on your content
      scrub: true
  }
});

timeline.to(".image-track-holder", {
  backgroundColor: "#333333"
});
ScrollTrigger.create({
  trigger: ".image-track-holder",
  start: "top 20%",
  end: "+=400", // adjust based on your content
  onEnter: () => document.querySelector(".image-track-holder").classList.remove("dark-bg"),
  onLeaveBack: () => document.querySelector(".image-track-holder").classList.add("dark-bg"),
  });

// ------------------------------------------------------- NAVBAR -------------------------------------------------------


window.addEventListener("scroll", () => {


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
            end: 'bottom 95%',
            markers: false,
            scrub: true
        }
    })
    
    gt.fromTo(entryLeft, {xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1})
    gt.fromTo(entryRight, {xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1}, '<')

})


// ------------------------------------------------------- SVG -------------------------------------------------------
let path = document.querySelector('path');
let pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;
window.addEventListener('scroll', ()=> {
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var drawLength = pathLength * scrollPercentage * 1.4;

  path.style.strokeDashoffset = pathLength - drawLength;

  
});
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








