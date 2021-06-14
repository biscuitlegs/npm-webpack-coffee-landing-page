import subHeading from "./subHeading";
import { tabs } from "./tabs";

const content = document.createElement('div');
content.setAttribute('id', 'content');
content.classList.add('row', 'text-light', 'position-relative');
content.style.height = '100vh';
content.style.width = '100vw';

const colLeft = document.createElement('div');
const colRight = document.createElement('div');
colLeft.classList.add('col-lg-4');
colRight.classList.add('col-lg');

content.appendChild(colLeft);
content.appendChild(colRight);

colLeft.appendChild(subHeading);
colRight.appendChild(tabs);


export default content;