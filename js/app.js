import { createProjects } from "./projects.js";

const main = document.querySelector('main');

createProjects();

function lerp(start, end, t) {
    return start * (1-t) + end * t;
}
const stickyPortfolio = document.querySelector('.sticky_portfolio');
const projectsSlider = document.querySelector('.projects_slider');
const project_images = projectsSlider.querySelectorAll('.project_image');

let projectTargetX = 0;
let projectCurrentX = 0;

let percentages = {
    small: 700,
    medium: 300, 
    large: 100
}

let limit = window.innerWidth < 600 ? percentages.small : window.innerWidth < 1100 ? percentages.medium : percentages.large

function setLimits() {
    limit = window.innerWidth < 600 ? percentages.small : window.innerWidth < 1100 ? percentages.medium : percentages.large
}

window.addEventListener('resize', setLimits);


function animatePortfolio() {
    let offsetTop = stickyPortfolio.parentElement.offsetTop;
    let percentage = ((main.scrollTop - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > limit ? limit : percentage;
    projectTargetX = percentage;
    projectCurrentX = lerp(projectCurrentX, projectTargetX, .04);
    projectsSlider.style.transform = `translate3d(${-(projectCurrentX)}vw, 0, 0)`;

    for (const image of project_images) {
        image.style.objectPosition = `${100.0*percentage / limit}% 50%`;
    }
}



function animate() {
    animatePortfolio();
    requestAnimationFrame(animate);
}

animate();









