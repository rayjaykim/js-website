const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';

const root = document.documentElement;

/* Build Portfolio Grid items */
const portfolioGrid = '.portfolio-grid';

const divStart = document.querySelector(portfolioGrid);

const portfolioArray = [
  ['web', 'Web Development', 'Food Website', "./assets/images/portfolio-1.jpg", "web-1", "Web Project 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras tincidunt lobortis feugiat vivamus at augue eget arcu."],
  ['web', 'Web Development', 'Skate Website', "./assets/images/portfolio-2.jpg", "web-2", "Web Project 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus."],
  ['web', 'Web Development', 'Eating Website', "./assets/images/portfolio-3.jpg", "web-3", "Web Project 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique senectus et."],
  ['ui', 'UI Design', 'Cool Design', "./assets/images/portfolio-4.jpg", "ui-1", "UI Project 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque."],
  ['app', 'App Development', 'Game App', "./assets/images/portfolio-5.jpg", "app-1", "App Project 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus mattis molestie a iaculis at."],
  ['app', 'App Development', 'Gambling App', "./assets/images/portfolio-6.jpg", "app-2", "App Project 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh praesent tristique magna sit amet purus gravida quis blandit."],
  ['app', 'App Development', 'Money App', "./assets/images/portfolio-7.jpg", "app-3", "App Project 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis."],
  ['ui', 'UI Design', 'Fantastic Design', "./assets/images/portfolio-8.jpg", "ui-2", "UI Project 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non consectetur a."]
]
portfolioArray.forEach(element => {
  document.body.onload = addModal(element);
});

function addModal(item) {
  const newDiv = document.createElement("div");
  newDiv.className = "portfolio-card";
  newDiv.dataset.item = item[0];
  newDiv.dataset.open = item[4];
  divStart.appendChild(newDiv);
  
  const newDiv1 = document.createElement("div");
  newDiv1.className = "card-body";
  newDiv.appendChild(newDiv1);

  const img = document.createElement("img");
  img.src = item[3];
  newDiv1.appendChild(img);

  const link = document.createElement("div");
  link.className = "card-popup-box";
  newDiv1.appendChild(link);

  const divContent = document.createElement("div");
  const content = document.createTextNode(item[1]);
  divContent.appendChild(content);
  link.appendChild(divContent);

  const h3Content = document.createElement("h3");
  const content1 = document.createTextNode(item[2]);
  h3Content.appendChild(content1);
  link.appendChild(h3Content);
}

const popup = '.popUp'

const PopUpStart = document.querySelector(popup);

portfolioArray.forEach(element => {
  document.body.onload = fillModal(element);
})

function fillModal(item) {
  const newDiv = document.createElement("div");
  newDiv.id = item[4];
  newDiv.className = "modal";
  newDiv.dataset.animation = "slideInOutTop";
  PopUpStart.appendChild(newDiv);

  const newDiv1 = document.createElement("div");
  newDiv1.className = "modal-dialogue";
  newDiv.appendChild(newDiv1);

  const head = document.createElement("header");
  head.className = "modal-header";
  newDiv1.appendChild(head);

  const title = document.createElement("h3");
  head.appendChild(title);
  const titleText = document.createTextNode(item[5]);
  title.appendChild(titleText);
  const exit = document.createElement("i");
  exit.className = "fas fa-times";
  exit.dataset.close = '';
  head.appendChild(exit);

  const newDiv2 = document.createElement("div");
  newDiv2.className = "modal-body";
  newDiv1.appendChild(newDiv2);

  const imgDiv = document.createElement("div");
  imgDiv.className = "img-wrapper";
  newDiv2.appendChild(imgDiv);
  const img = document.createElement("img");
  img.src = item[3];
  imgDiv.appendChild(img);

  const textDiv = document.createElement("div");
  textDiv.className = "text-wrapper";
  newDiv2.appendChild(textDiv);
  const text = document.createElement("p");
  const strong = document.createElement("strong");
  const textStrong = document.createTextNode(item[2]);
  strong.appendChild(textStrong);
  text.appendChild(strong);
  textDiv.appendChild(text);
  
  const details = document.createTextNode(item[6]);
  textDiv.appendChild(details);
}

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search');

/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (elm, selector) => {
  document.querySelector(`${selector}.${active}`).classList.remove(active);
  elm.classList.add(active);
};

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  };
};

toggleTheme.addEventListener('click', function() {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener('click', function() {
    const toggle = this.dataset.toggle;
    setActive(elm, switcherBtn);
    setTheme(toggle);
  })
};

searchBox.addEventListener('keyup', (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
})

for (const link of filterLink) {
  link.addEventListener('click', function() {
    setActive(link, '.filter-link');
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else if (card.dataset.item === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    })
  })
}


// Full Site Modal and Modal "open buttons"
for (const elm of openModal) {
  elm.addEventListener('click', function(e) {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  })
}

for (const elm of closeModal) {
  elm.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  })
}

// Modal
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
})

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
})

