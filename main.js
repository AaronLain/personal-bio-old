console.log("PERSONAL BIO");

const projects = [
    {
        title: 'Cool-ass project',
        screenshot: 'dope-ass url',
        description: 'see title',
        techUsed: 'cool-ass tech',
        available: true,
        url: 'www.dopeaf.gov/creedthoughts',
        githubUrl: 'git hub url'
    }
]

const printToDom = (divId, textToPrint) =>{
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const createProjectCards = () => {
    let domString ='';
    for (project in projects) {
        if (projects[project].available) {
        domString += `<div class="project-card">`;
        domString +=    `<header class="cardheader"><h2>${projects[project].title}</h2></header>`;
        domString +=    `<img src=${projects[project].screenshot} alt="A screen shot of my ${projects[project].title} project!">`;
        domString +=    `<h3>"Technologies Used:"<h3>`;
        domString +=    `<p>${projects[project].techUsed}</p>`;
        domString +=    `<h3>Description:</h3>`;
        domString +=    `<p>${projects[project].description}</p>`;
        domString +=    `<a href=${projects[project].url} target= "_blank">Project Url</a>`;
        domString +=    `<a href=${projects[project].githubUrl} target= "_blank">Github Url</a>`;
        domString += `</div>`;
        }
    }
    printToDom('projectsPage', domString);
}

createProjectCards();