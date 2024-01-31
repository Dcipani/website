import { createProjects } from "./projects.js";
// createProjects();

// ------------------------------------------------------- BARBA SETUP -------------------------------------------------------

// ------------------------------------------------------- LENIS SETUP -------------------------------------------------------
const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)




// ------------------------------------------------------- SCROLL ANIMATIONS -------------------------------------------------------

const scrollEntry = document.querySelectorAll(".enter-on-scroll")

scrollEntry.forEach(scrollEntry => {
    let entryLeft = scrollEntry.querySelector(".on-scroll-left")
    let entryRight = scrollEntry.querySelector(".on-scroll-right")
  
    let gt = gsap.timeline({
        scrollTrigger: {
            trigger: scrollEntry,
            start: 'top 50%',
            end: 'bottom 70%',
            markers: true,
            scrub: true
        }
    })
    
    gt.fromTo(entryLeft, {xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1})
    gt.fromTo(entryRight, {xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1}, '<')


    
})
// ------------------------------------------------------- ABOUT -------------------------------------------------------


let cards = document.querySelectorAll(".card");
      let stackArea = document.querySelector(".stack-area");

      function rotateCards() {
        let angle = 0;
        cards.forEach((card) => {
          if (card.classList.contains("active")) {
            card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
          } else {
            card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            angle = angle - 15;
          }
        });
      }

      rotateCards();

      window.addEventListener("scroll", () => {
        let proportion =
          stackArea.getBoundingClientRect().top / window.innerHeight;
        if (proportion <= 0) {
          let n = cards.length;
          let index = Math.ceil((proportion * n) / 2);
          index = Math.abs(index) - 1;
          for (let i = 0; i < n; i++) {
            if (i <= index) {
              cards[i].classList.add("active");
            } else {
              cards[i].classList.remove("active");
            }
          }
          rotateCards();
        }
      });
// ------------------------------------------------------- GALLERY -------------------------------------------------------

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -80);
  track.dataset.percentage = nextPercentage;

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.querySelectorAll(".project_image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });

  }

}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);



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








