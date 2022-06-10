const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


function imageMode(color) {
    image1.src = `./img/undraw_proud_coder_${color}.svg`;
    image2.src = `./img/undraw_feeling_proud_${color}.svg`;
    image3.src = `./img/undraw_conceptual_idea_${color}.svg`;
}
//  ja ir light ? tad taads ,ja ne tad shis : 
function toggleThemeMode(isLightMode) {
    nav.style.backgroundColor = isLightMode === 'light' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLightMode === 'light' ? 'rgb(0 0 0 / 50%' : 'rgb(255 255 255 / 50%';
    toggleIcon.children[0].textContent = isLightMode === 'light' ? 'Light Mode' : 'Dark Mode';
    if (isLightMode === 'light') {
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
        imageMode('light');
    } else if (isLightMode === 'dark') {
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
        imageMode('dark');
    }
}
// Switch Theme Dynamaically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleThemeMode('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleThemeMode('light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleThemeMode('dark');
    }
}