// Projects

const projects = [
    {
        name: 'PROJECT 1',
        type: 'GAME DEV',
        image: '../images/headshot.png'
    },
    {
        name: 'PROJECT 2',
        type: 'GAME DEV',
        image: '../images/headshot.png'
    },
    {
        name: 'PROJECT 3',
        type: 'GAME DEV',
        image: '../images/work-1.png'
    },
    {
        name: 'PROJECT 4',
        type: 'GAME DEV',
        image: '../images/headshot.png'
    },
    {
        name: 'PROJECT 5',
        type: 'GAME DEV',
        image: '../images/headshot.png'
    },
    {
        name: 'PROJECT 6',
        type: 'GAME DEV',
        image: '../images/headshot.png'
    },
    {
        name: 'PROJECT 7',
        type: 'GAME DEV',
        image: '../images/headshot.png'
    },
    {
        name: 'PROJECT 8',
        type: 'GAME DEV',
        image: '../images/headshot.png'
    },

]

const createProjects = () => {
    projects.forEach(project => {
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.classList.add('enter-on-scroll');


        let image = document.createElement('img');
        image.classList.add('project_image');
        image.classList.add('on-scroll-right');

        image.draggable = false;
        image.src = project.image;

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project_details');

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectType = document.createElement('p');
        projectType.innerText = project.type;
        projectDetails.append(projectTitle, projectType)
        projectDiv.append(image, projectDetails);

        document.getElementById('image-track').appendChild(projectDiv);
    })

}

export {
    createProjects
}