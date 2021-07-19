const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeToggle = document.querySelector('#theme-switch-toggle');
themeToggle.addEventListener('change', onToggleChange);

const userTheme = localStorage.getItem('userTheme');
document.body.classList.add(`${userTheme}`);

const checkCurrentTheme = function () {
  if (userTheme === Theme.DARK) {
    themeToggle.checked = true;
  }
};
checkCurrentTheme();

function onToggleChange() {
  if (themeToggle.checked) {
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('userTheme', Theme.DARK);
    document.body.classList.toggle(Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('userTheme', Theme.LIGHT);
    document.body.classList.toggle(Theme.LIGHT);
  }
}
