document.querySelector('.next').addEventListener('click', function() {
    changeProject(1);
});

document.querySelector('.prev').addEventListener('click', function() {
    changeProject(-1);
});

let slideIndex = 0;
showProject(slideIndex);

function changeProject(n) {
    showProject(slideIndex += n);
}

function showProject(n) {
    let i;
    let projects = document.querySelectorAll('.project-item');
    if (n >= projects.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = projects.length - 1;
    }
    for (i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    projects[slideIndex].style.display = "block";
}
