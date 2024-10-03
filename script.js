function showProjectDetails(title, description, link) {
    document.getElementById('project-title').innerText = title;
    document.getElementById('project-description').innerText = description;
    document.getElementById('project-link').href = link;

    document.getElementById('project-details').style.display = 'block';
}

function hideProjectDetails() {
    document.getElementById('project-details').style.display = 'none';
}
