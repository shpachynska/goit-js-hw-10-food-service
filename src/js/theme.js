const checkLocalStorage = function () {
  const userTheme = localStorage.getItem('user-theme');
  if (!userTheme) {
    document.body.classList.add('light-theme');
    localStorage.setItem('user-theme', 'light-theme');
  }
};
checkLocalStorage();

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeToggle = document.querySelector('#theme-switch-toggle');
themeToggle.addEventListener('change', onToggleChange);

const currentTheme = localStorage.getItem('user-theme');
document.body.classList.add(currentTheme);

const setCheckedStatus = function () {
  if (currentTheme === Theme.DARK) {
    themeToggle.checked = true;
  }
};
setCheckedStatus();

function onToggleChange() {
  if (themeToggle.checked) {
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('user-theme', Theme.DARK);
    document.body.classList.toggle(Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('user-theme', Theme.LIGHT);
    document.body.classList.toggle(Theme.LIGHT);
  }
}
