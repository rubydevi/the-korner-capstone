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
    <img width="20%" src="${speaker.image}" alt="speaker image">
    <div>
      <h1>${speaker.name}</h1>
      <p style="color:tomato">${speaker.title}</p>
      <hr>
      <p>${speaker.description}</p>
    </div>
  `;

  featSpeakers.appendChild(featuredElement); // append all the cards in the main .card-grid
});

// Create button for 'See More'
const seeMoreButton = document.createElement('button');

seeMoreButton.classList.add('btn', 'text-white', 'displayBlock');
seeMoreButton.innerText = 'More';

const dropdownIcon = document.createElement('span');
dropdownIcon.className = 'fas fa-chevron-down';

seeMoreButton.appendChild(dropdownIcon);

featSpeakers.appendChild(seeMoreButton);
