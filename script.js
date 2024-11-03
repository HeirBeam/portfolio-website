// Array of project data
const projects = [
    {
      title: "Project 1 Title",
      image: "images/project1.jpg",
      description: "Brief description of Project 1.",
      techStack: "HTML, CSS, JavaScript",
      liveDemo: "#",
      github: "https://github.com/HeirBeam/NewTaskManagementWebsite"
    },
    // Add more project objects as needed
  ];
  
  // Function to display projects dynamically
  function displayProjects() {
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title} Screenshot">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech Stack:</strong> ${project.techStack}</p>
        <div class="project-links">
          <a href="${project.liveDemo}" target="_blank" class="button">Live Demo</a>
          <a href="${project.github}" target="_blank" class="button secondary">GitHub</a>
        </div>
      `;
      projectGrid.appendChild(projectCard);
    });
  }
  
  // Call displayProjects on page load
  document.addEventListener('DOMContentLoaded', displayProjects);
  