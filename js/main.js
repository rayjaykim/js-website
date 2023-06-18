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
  ['web', 'Web Development', 'Food Website', "./assets/images/portfolio-1.jpg"],
  ['web', 'Web Development', 'Skate Website', "./assets/images/portfolio-2.jpg"],
  ['web', 'Web Development', 'Eating Website', "./assets/images/portfolio-3.jpg"],
  ['ui', 'UI Design', 'Cool Design', "./assets/images/portfolio-4.jpg"],
  ['app', 'App Development', 'Game App', "./assets/images/portfolio-5.jpg"],
  ['app', 'App Development', 'Gambling App', "./assets/images/portfolio-6.jpg"],
  ['app', 'App Development', 'Money App', "./assets/images/portfolio-7.jpg"],
  ['ui', 'UI Design', 'Fantastic Design', "./assets/images/portfolio-8.jpg"]
]
portfolioArray.forEach(element => {
  document.body.onload = addElement(element);
});

function addElement(item) {
  const newDiv = document.createElement("div");
  newDiv.className = "portfolio-card";
  newDiv.dataset.item = item[0];
  divStart.appendChild(newDiv);
  
  const newDiv1 = document.createElement("div");
  newDiv1.className = "card-body";
  newDiv.appendChild(newDiv1);

  const img = document.createElement("img");
  img.src = item[3];
  newDiv1.appendChild(img);

  const link = document.createElement("a");
  link.href = "#";
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


// Full Site Modal "open buttons"
for (const elm of openModal) {
  elm.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  })
}

for (const elm of closeModal) {
  elm.addEventListener('click', function() {
    this.parentElement.parentElement.classList.remove(isVisible);
  })
}