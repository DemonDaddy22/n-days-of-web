(function() {
const THEME = Object.freeze({
  LIGHT : {
    KEY : 'LIGHT',
    COLOR : '#F0F0F0',
  },
  DARK : {
    KEY : 'DARK',
    COLOR : '#1F1F1F',
  },
});

const body = document.body;
const button = document.getElementById('theme-toggler');

const getCurrentTheme =
    () => { return localStorage.getItem('wb-theme') ?? THEME.LIGHT.KEY; };

const setCurrentTheme = () => {
  const isDefaultTheme = getCurrentTheme() === THEME.LIGHT.KEY;
  body.style.backgroundColor = THEME[isDefaultTheme ? 'LIGHT' : 'DARK'].COLOR;
};

const toggleTheme = () => {
  const isDefaultTheme = getCurrentTheme() === THEME.LIGHT.KEY;
  const newTheme = isDefaultTheme ? THEME.DARK : THEME.LIGHT;
  localStorage.setItem('wb-theme', newTheme.KEY);
  body.style.backgroundColor = newTheme.COLOR;
};

setCurrentTheme();
button.addEventListener('click', toggleTheme);
}())