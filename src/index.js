import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './navbar';
import * as Initializer from './initialize.js';
import * as Tabs from './tabs.js';
import './mobile.css';
const  { heading, subHeading, image, paragraph } = Initializer;

//Add all this to initialize!
heading.classList.add('display-1', 'text-center', 'fw-thin');

subHeading.classList.add('display-2', 'fw-bold');

const content = document.createElement('div');
content.setAttribute('id', 'content');
content.classList.add('row', 'text-light', 'position-relative');
document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${image.src}') no-repeat center`;
document.body.style.backgroundSize = 'stretch';
content.style.height = '100vh';
content.style.width = '100vw';

const colLeft = document.createElement('div');
const colRight = document.createElement('div');
colLeft.classList.add('col-lg-4');
colRight.classList.add('col-lg');

document.body.appendChild(navbar);
document.body.appendChild(content);
content.appendChild(colLeft);
content.appendChild(colRight);
colLeft.appendChild(subHeading);
colRight.appendChild(Tabs.tabsContainer);


Tabs.initializeTabs();