import restaurantImage from './restaurant.jpg';

const heading = document.createElement('h1');
heading.textContent = 'Greatest Restaurant Ever.';

const image = new Image();
image.src = restaurantImage;

const paragraph = document.createElement('p');
paragraph.textContent = 'Incididunt excepteur dolore nulla nulla laboris cillum nisi eiusmod. Quis pariatur sit officia aliquip tempor ipsum ullamco officia quis. Fugiat dolore ullamco in labore aliqua commodo aute labore.';

function insertIntoParent(parent) {
    for (let index in arguments) {
        if (index == 0) continue;
        parent.appendChild(arguments[index]);
    }
}


export { heading, image, paragraph, insertIntoParent };