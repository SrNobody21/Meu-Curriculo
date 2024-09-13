document.addEventListener("DOMContentLoaded", function() {
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skill => {
        const skillPercentage = skill.getAttribute('data-skill');
        skill.style.width = skillPercentage + '%';
    });
});
