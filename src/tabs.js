import baristaImage from './barista.jpg';
import latteImage from './latte.jpg';
import expressoImage from './expresso.jpg';
import cappuccinoImage from './cappuccino.jpg';

const tabContents = {
    0: `<div class="row">
            <div class="col-lg">
                <img class="w-100 h-100 pt-3 rounded" src="${baristaImage}">
            </div>
            <div class="col-lg">
                <p class="pt-3 pl-3 fw-lighter">
                Commodo ipsum culpa nulla laborum sunt nostrud. Lorem commodo est irure culpa eiusmod esse eiusmod deserunt Lorem minim pariatur in. Ad ipsum exercitation sint laborum ullamco aliqua mollit cupidatat magna do consequat non occaecat.
                </p>
                <p class="pt-1 pl-3 fw-lighter">
                Quis fugiat ad ex laborum do ea ipsum occaecat. Laboris veniam nulla excepteur est quis nostrud sint ipsum deserunt pariatur Lorem enim enim.
                </p>
            </div>
        </div>
    `,
    1: `<h3 class="pt-2">Latte<h3>
            <img class="w-100 h-100 rounded" src="${latteImage}">
            <p class="pt-1 pl-3 fs-6 fw-lighter">
                Quis fugiat ad ex laborum do ea ipsum occaecat. Laboris veniam nulla excepteur est quis nostrud sint ipsum deserunt pariatur Lorem enim enim.
            </p>
            <p class="pt-1 pl-3 fs-6 fw-lighter">
                Et duis excepteur fugiat aliquip. Pariatur irure magna anim officia et. Duis sint labore elit non sint ullamco consequat magna id voluptate velit reprehenderit est. Pariatur aute occaecat minim tempor consequat duis adipisicing amet dolore cillum mollit aliqua exercitation cupidatat.
            </p>

            <h3 class="pt-2">Expresso<h3>
            <img class="w-100 h-100 rounded" src="${expressoImage}">
            <p class="pt-1 pl-3 fs-6 fw-lighter">
                Sint et nostrud magna deserunt velit dolore esse enim velit aliquip eu aliquip. Ipsum minim non et nostrud enim aliqua minim nisi sit. Reprehenderit sunt qui officia sit ipsum enim dolore officia irure. Ad amet ea incididunt veniam enim. Cillum aliqua magna velit ipsum eu. Dolore ipsum adipisicing commodo labore et amet in qui. Do voluptate sunt voluptate sit voluptate voluptate anim elit proident excepteur cupidatat do aute.
            </p>
            <p class="pt-1 pl-3 fs-6 fw-lighter">
                Amet officia nisi fugiat enim pariatur. Sunt commodo non nostrud labore consectetur. Laborum ad ea ea voluptate ut amet dolor Lorem. Pariatur duis cupidatat proident ea anim aliqua consectetur dolore consectetur aliquip aute ad ipsum. Et exercitation ex enim exercitation.
            </p>
            <p class="pt-1 pl-3 fs-6 fw-lighter">
                Reprehenderit mollit est mollit minim irure sunt laborum cupidatat eu fugiat laboris minim ullamco. Mollit in irure velit consectetur. Velit cupidatat aliquip do velit ea duis occaecat quis culpa eiusmod laborum.
            </p>

            <h3 class="pt-2">Cappuccino<h3>
            <img class="w-100 h-100 rounded" src="${cappuccinoImage}">
            <p class="pt-1 pl-3 fs-6 fw-lighter">
                Consectetur officia non sint pariatur incididunt irure irure adipisicing nisi excepteur. Magna eu cupidatat nulla laboris. Exercitation eiusmod ut non veniam. Exercitation mollit mollit labore eiusmod ullamco ad magna labore. Deserunt culpa deserunt nulla ad nostrud amet culpa. Voluptate fugiat duis excepteur duis id proident amet enim aute voluptate minim fugiat Lorem ipsum.
            </p>
            <p class="pt-1 pl-3 fs-6 fw-lighter">
                Eiusmod eiusmod do consectetur quis Lorem occaecat nulla et esse incididunt laborum reprehenderit. Quis sit nostrud exercitation culpa sunt do. Est cillum Lorem duis anim exercitation ullamco. Adipisicing aliqua amet incididunt velit velit aute ullamco non. Nisi incididunt ad culpa aliquip magna qui aliquip ea nulla aute excepteur sit. Ea deserunt est deserunt amet amet deserunt cillum cupidatat pariatur sit officia mollit proident incididunt. Aute id id do deserunt minim.
            </p>
    `,
    2: `<p class="pt-3 fs-6 fw-lighter">
        Nulla aliquip enim officia aliquip <a class="fw-normal" href="#">coffee@example.com</a>. Cupidatat id aliqua esse eiusmod enim ut laborum id cillum. Pariatur laboris dolor ad aute sit adipisicing enim eu non nisi consequat nostrud Lorem occaecat. Sunt sit eiusmod occaecat voluptate nostrud reprehenderit in do nostrud.
        </p>`
}

function activateTab() {
    resetTabs();
    resetContent();
    setTabContents(this.dataset.tabId, tabContents);
    this.classList.add('active');
}

function resetContent() {
    const tabsContent = document.querySelector('.nav-tabs-content');
    tabsContent.innerHTML = '';
}

function setTabContents(id, contents) {
    const tabsContent = document.querySelector('.nav-tabs-content');
    tabsContent.innerHTML = contents[id];
}

function resetTabs() {
    const tabs = document.querySelectorAll('.nav-tabs .nav-link');
    tabs.forEach(tab => tab.classList.remove('active'));
}

function initializeTabs() {
    const tabs = document.querySelectorAll('.nav-tabs .nav-link');
    tabs.forEach(tab => tab.addEventListener('click', activateTab));
}

const tabsContainer = document.createElement('div');
tabsContainer.classList.add('tabs-container', 'rounded', 'overflow-scroll', 'pb-4');
tabsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
tabsContainer.style.padding = '0.5em';
tabsContainer.style.maxHeight = '700px';
tabsContainer.style.margin = '5em 2em 0 1em';
tabsContainer.innerHTML = ` <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active text-success" data-tab-id="0" aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-success" data-tab-id="1" href="#">Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-success" data-tab-id="2" href="#">Contact</a>
                                </li>
                            </ul>
                            <div class="nav-tabs-content">${tabContents[0]}</div>
                           `;

export { tabsContainer as tabs, initializeTabs }