// Create an object for all speakers
const speakers = [
  {
    name: 'Yaochai Benkler',
    title: 'Berkman professor of enterpreneurial legal studies at harvard law school',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/features/photo1.jpg',
  },
  {
    name: 'Chongtham Ruby Devi',
    title: 'Software Engineer',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/features/photo4.jpg',
  },
  {
    name: 'Yaochai Benkler',
    title: 'Berkman professor of enterpreneurial legal studies at harvard law school',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/features/photo5.jpg',
  },
  {
    name: 'Yaochai Benkler',
    title: 'Berkman professor of enterpreneurial legal studies at harvard law school',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/features/photo7.jpg',
  },
  {
    name: 'Yaochai Benkler',
    title: 'Berkman professor of enterpreneurial legal studies at harvard law school',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/features/photo8.jpg',
  },
  {
    name: 'Yaochai Benkler',
    title: 'Berkman professor of enterpreneurial legal studies at harvard law school',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/features/photo9.jpg',
  },
];

// Dynamically create cards for each speaker
const featSpeakers = document.getElementById('feat_speakers'); // Parent div where dynamic element appends
speakers.forEach((speaker) => {
  const featuredElement = document.createElement('div'); // div for each speaker = featuredElement
  featuredElement.classList.add('program');

  // Create HTML structure for each speaker
  featuredElement.innerHTML = `
    <img src="${speaker.image}" alt="speaker image">
    <div class="speaker-details">
      <h1 class="headline speaker-head">${speaker.name}</h1>
      <p class="text-primary speaker-title">${speaker.title}</p>
      <hr class="feature-hr">
      <p class="speaker-description">${speaker.description}</p>
    </div>
  `;

  featSpeakers.appendChild(featuredElement); // append all the cards in the main .card-grid
});

// Create button for 'See More'
const seeMoreButton = document.createElement('button');

seeMoreButton.classList.add('btn', 'btn-seemore', 'displayBlock');
seeMoreButton.innerText = 'More'.toLocaleUpperCase();

const dropdownIcon = document.createElement('span');
dropdownIcon.className = 'fas fa-chevron-down';

seeMoreButton.appendChild(dropdownIcon);

featSpeakers.appendChild(seeMoreButton);

// const moreContent = document.getElementById('moreContent');

// seeMoreButton.addEventListener('click', () => {
//   additionalContent.style.display = 'flex';
//   seeMoreButton.style.display = 'none';
// });

// Navlinks Popup
const openNav = document.getElementById('openNav');
const modalNav = document.getElementById('modalSetting');
const closeNav = document.getElementById('btnCloseNav');

openNav.addEventListener('click', () => {
  modalNav.style.display = 'flex';
});

closeNav.addEventListener('click', () => {
  modalNav.style.display = 'none';
});

const menuList = document.querySelectorAll('#menuList li');

menuList.forEach((list) => {
  list.addEventListener('click', (event) => {
    const url = list.querySelector('a');
    const sectionId = url.getAttribute('href');

    document.querySelector(sectionId).scrollIntoView();

    const modalSection = document.getElementById('modalSetting');

    modalSection.style.display = 'none';
    event.preventDefault();
  });
});
