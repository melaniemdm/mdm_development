import './style.scss';

import Navigate from '../../components/Navigate';

//const root = document.querySelector(':root');
const sun = 'https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg';
const moon = 'https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg';
let themeIcon;
let container;
let html;
let theme = 'dark';


function Header() {
  document.body.style='background-color: var(--bs-dark);transition: 0.5s;';
 
  return (
    <header id="accueil">

      <div className="theme-container shadow-dark" onClick={setTheme}>
        <img
          id="theme-icon"
          src="https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
          alt="ERR"
        />
      </div>


      <div className="containerLogoHeader">
        <img alt="logo mdm development" src='https://res.cloudinary.com/dst61tkcz/image/upload/v1658826239/mdm-devlopment/logo-site-header_ipmiqs.webp' className="logoHeader" />
      </div>
      <div className="containerTxt">
        <Navigate />
      </div>
   
    </header>
  );
}
export default Header;



function setTheme() {
  themeIcon = document.querySelector('#theme-icon');
  container = document.querySelector('.theme-container');
  html = document.querySelector('html');
  switch (theme) {
    case 'dark':
      setLight();
      theme = 'light';
      break;
    case 'light':
      setDark();
      theme = 'dark';
      break;
  }
}
function setLight() {
 
  container.classList.remove('shadow-dark');
  html.classList.remove('dark');
  setTimeout(() => {
    container.classList.add('shadow-light');
    html.classList.add('light');
    themeIcon.classList.remove('change');
  }, 300);
  themeIcon.classList.add('change');
  themeIcon.src = sun;
}
function setDark() {
  //root.style.setProperty('--bs-dark', '#212529');
  container.classList.remove('shadow-light');
  html.classList.remove('light');
  setTimeout(() => {
    container.classList.add('shadow-dark');
    html.classList.add('dark');
    themeIcon.classList.remove('change');
  }, 300);
  themeIcon.classList.add('change');
  themeIcon.src = moon;
}