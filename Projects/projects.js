document.getElementById('project-filter').addEventListener('change', function() {
    const category = this.value;
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle event listener
    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });

    // Check and apply dark mode from local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
