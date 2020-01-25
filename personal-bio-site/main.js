console.log("PERSONAL BIO");	

const projects = [	
    {	
        title: 'Pet Adoption',	
        screenshot: 'https://i.ibb.co/ysVkhXK/Pet-Adoption-SS.jpg',	
        description: 'A real cute pet adoption website for the lonley and longing.',	
        techUsed: 'HTML, CSS, Flexbox',	
        available: true,	
        url: 'https://github.com/AaronLain/pet-adoption',	
        githubUrl: 'https://github.com/AaronLain/pet-adoption'	
    }	
]	

const printToDom = (divId, textToPrint) =>{	
    const selectedDiv = document.getElementById(divId);	
    selectedDiv.innerHTML = textToPrint;	
}	

const createProjectCards = (projectArray) => {	
    let domString ='';	
    projectArray.forEach((project) => { 	
        if (project.available) {	
            domString +=    `<div class="project-card">`           	
            domString +=    `<header class="cardheader"><h2>${project.title}</h2></header>`;	
            domString +=    `<img src=${project.screenshot} alt="A screen shot of my ${project.title} project!">`;	
            domString +=    `<h3>Technology Used:<h3>`;	
            domString +=    `<p>${project.techUsed}</p>`;	
            domString +=    `<h3>Description:</h3>`;	
            domString +=    `<p>${project.description}</p>`;	
            domString +=    `<a href=${project.url} target= "_blank">Project Url</a>`;	
            domString +=    `<a href=${project.githubUrl} target= "_blank">Github Url</a>`;	
            domString += `</div>`;	
        }	
        printToDom('projectsPage', domString);	
    });	
};	

createProjectCards(projects)