const tabContents = {
    0: 
    `<p>
        Commodo ipsum culpa nulla laborum sunt nostrud. Lorem commodo est irure culpa eiusmod esse eiusmod deserunt Lorem minim pariatur in. Ad ipsum exercitation sint laborum ullamco aliqua mollit cupidatat magna do consequat non occaecat.
    </p>`,
    1:
    `<p>
        Id consectetur qui adipisicing veniam aute minim consectetur ad cupidatat dolore incididunt commodo qui adipisicing. Consectetur reprehenderit occaecat nisi deserunt irure exercitation labore magna voluptate nulla eiusmod consequat cillum. Est commodo adipisicing cupidatat tempor mollit ex magna in. Velit minim aliquip ea do anim fugiat labore nostrud adipisicing voluptate. Veniam ea nisi Lorem eiusmod nostrud aliquip. Excepteur amet veniam nisi sit tempor ipsum in sunt cupidatat ipsum do occaecat adipisicing.
    </p>`,
    2:
    `<p>
        Nulla aliquip enim officia aliquip irure aute. Cupidatat id aliqua esse eiusmod enim ut laborum id cillum. Pariatur laboris dolor ad aute sit adipisicing enim eu non nisi consequat nostrud Lorem occaecat. Sunt sit eiusmod occaecat voluptate nostrud reprehenderit in do nostrud.
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
tabsContainer.classList.add('tabs-container');
tabsContainer.innerHTML = `
<ul class="nav nav-tabs">
<li class="nav-item">
  <a class="nav-link active" data-tab-id="0" aria-current="page" href="#">About</a>
</li>
<li class="nav-item">
  <a class="nav-link" data-tab-id="1" href="#">Menu</a>
</li>
<li class="nav-item">
  <a class="nav-link" data-tab-id="2" href="#">Contact</a>
</li>
</ul>
<div class="nav-tabs-content">${tabContents[0]}</div>`;

tabsContainer.style.margin = '5em 2em 0 1em';

export { tabsContainer, initializeTabs }