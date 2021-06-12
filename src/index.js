import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Initializer from './initialize.js';

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

const  { heading, image, paragraph } = Initializer;
Initializer.insertIntoParent(content, heading, image, paragraph);