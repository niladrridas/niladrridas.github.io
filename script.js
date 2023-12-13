document.addEventListener('DOMContentLoaded', function () {
    // Sample data for projects and skills
    const projectsData = [
        { name: 'Project 1', description: 'Brief description', link: 'link-to-project-1' },
        { name: 'Project 2', description: 'Brief description', link: 'link-to-project-2' },
    ];

    const skillsData = ['JavaScript (React, Node.js)', 'HTML5, CSS3', 'Git, GitHub'];

    // Update content dynamically
    document.getElementById('project-list').innerHTML = projectsData.map(project =>
        `<div><a href="${project.link}">${project.name}</a> - ${project.description}</div>`
    ).join('');

    document.getElementById('skills-list').innerHTML = skillsData.map(skill =>
        `<li>${skill}</li>`
    ).join('');
});
