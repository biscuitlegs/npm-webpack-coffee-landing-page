import * as Initializer from './initialize.js';

const content = document.querySelector('#content');
const  { heading, image, paragraph } = Initializer;
Initializer.insertIntoParent(content, heading, image, paragraph);