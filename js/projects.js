// Projects

const projects = [
    {
        name: 'PROJECT 1',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706480883919-35e25a04f90a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 2',
        type: 'GAME DEV',
        image: 'website/images/headshot.png',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 3',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706088604350-f3c46951ee02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 4',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706480883919-35e25a04f90a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 5',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706276902620-fc6fa70aedb4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 6',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706088604350-f3c46951ee02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 7',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706480883919-35e25a04f90a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 8',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706276902620-fc6fa70aedb4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 9',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706088604350-f3c46951ee02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 7',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706480883919-35e25a04f90a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 8',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706276902620-fc6fa70aedb4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    },
    {
        name: 'PROJECT 9',
        type: 'GAME DEV',
        image: 'https://images.unsplash.com/photo-1706088604350-f3c46951ee02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        link: 'project1.html'
    }
]

const createProjects = () => {
    projects.forEach(project => {
        let projectDiv = document.createElement('a');
        projectDiv.href = project.link;
        projectDiv.classList.add('project');
        projectDiv.classList.add('enter-on-scroll');
        projectDiv.draggable = false;
        

        let image = document.createElement('img');
        image.classList.add('project_image');
        image.classList.add('on-scroll-right');

        image.draggable = false;
        image.src = project.image;

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project_details');
        projectDetails.classList.add('on-scroll-right');

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectType = document.createElement('p');
        projectType.innerText = project.type;
        projectDetails.append(projectTitle, projectType)
        projectDiv.append(image, projectDetails);

        document.getElementById('image-track').append(projectDiv);
    })

}

export {
    createProjects
}