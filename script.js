// Array of project data
const projects = [
    {
      title: "DailyTaskManager",
      //image: "images/project1.jpg",
      description: "Keep your schedule organized and tasks on track with this intuitive web-based Calendar and Task Manager. View a monthly calendar, add tasks to specific dates, and set start and due times for each task to stay productive and focused. Designed for simplicity, this tool ensures tasks are saved even if you refresh the page, giving you a seamless experience. Perfect for managing your daily tasks with ease!",
      techStack: "JavaScript, CSS, HTML",
      github: "https://github.com/HeirBeam/NewTaskManagementWebsite"
    },

    {
        title: "CS-MiniGames",
        //image: "images/project2.jpg",
        description: "Explore CS MiniGames, a fun and interactive C# project featuring classic games like Tic-Tac-Toe and Hangman! Built with Windows Forms, this project showcases fundamental C# skills, game logic, and GUI design. Choose between playing Tic-Tac-Toe against a friend or a basic AI, and enjoy Hangman with random word selection. With real-time score tracking, a user-friendly interface, and plans for future updates like improved AI and adjustable difficulty levels, CS MiniGames is perfect for anyone looking to enjoy or expand their coding and gaming skills.",
        techStack: "C#",
        github: "https://github.com/HeirBeam/CS-MiniGames"
    },

    {
      title: "Personal Finance Manager",
        //image: "images/project2.jpg",
        description: "Easily track, analyze, and forecast your finances with our Personal Finance Manager. This intuitive app helps you organize monthly income and expenses, visualize spending by category, and project future expenses with ARIMA forecasting. Featuring a user-friendly transaction entry tool with validation, you can quickly add transactions, download them as formatted files, and receive alerts when your spending surpasses set thresholds. Perfect for individuals and small business owners looking to gain insights and control over their finances.",
        techStack: "Python",
        github: "https://github.com/HeirBeam/personal-finance-manager"
    },

    {
      title: "ColdTurkey",
        //image: "images/project2.jpg",
        description: "The ColdTurkey Chrome Extension helps improve focus and productivity by automatically closing tabs from specified websites after a set amount of time. Simply add the URLs you want to limit, set the timer, and let ColdTurkey handle the rest—perfect for cutting down on distractions while working or studying. Customize it for any website, and enjoy a cleaner, more intentional browsing experience.",
        techStack: "JavaScript, CSS, HTML",
        github: "https://github.com/HeirBeam/Chromeapp-ColdTurkey"
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
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech Stack:</strong> ${project.techStack}</p>
        <div class="project-links">
          <a href="${project.github}" target="_blank" class="button secondary">GitHub</a>
        </div>
      `;
      projectGrid.appendChild(projectCard);
    });
  }
  
  // Call displayProjects on page load
  document.addEventListener('DOMContentLoaded', displayProjects);
  