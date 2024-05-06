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
