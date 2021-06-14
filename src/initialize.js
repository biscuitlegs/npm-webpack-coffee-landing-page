import navbar from "./navbar";
import heroImage from "./heroImage";
import content from './content';
import footer from "./footer";
import { initializeTabs } from './tabs';

function initializePage() {
    setBackground();
    [navbar, content, footer].forEach(element => document.body.appendChild(element));
    initializeTabs();
}

function setBackground() {
    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${heroImage.src}') center`;
    document.body.style.backgroundSize = 'cover';
}


export default initializePage;