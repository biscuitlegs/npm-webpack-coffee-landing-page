import restaurantImage from './restaurant.jpg';

const heading = document.createElement('h1');
heading.textContent = 'Bob\'s Barista';

const subHeading = document.createElement('h2');
subHeading.innerHTML = `Greatest.<br> Coffee.<br> Ever.<br> Period.`;
subHeading.classList.add('subheading');

const image = new Image();
image.src = restaurantImage;

const paragraph = document.createElement('p');
paragraph.textContent = 'Incididunt excepteur dolore nulla nulla laboris cillum nisi eiusmod. Quis pariatur sit officia aliquip tempor ipsum ullamco officia quis. Fugiat dolore ullamco in labore aliqua commodo aute labore.';


export { heading, subHeading, image, paragraph };