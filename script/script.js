// Create an object for all speakers
const speakers = [
  {
    name: 'Prof. K. N. Rao',
    title: 'Master in all branches of astrology',
    description: 'A renowned professor of Vedic Astrology and Master of all branches of Vedic Astrology.',
    image: 'images/features/thumbnail1.png',
  },
  {
    name: 'Pt. Sanjay Rath',
    title: 'Pandit and a Professor in Vedic Astrology',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/features/thumbnail2.png',
  },
  {
    name: 'Claire Nakti',
    title: 'Master in Tantric Astrology and Nakshatras',
    description: "She is a researcher and a Master in nakshatras' association with trantric Devis and Devas.",
    image: 'images/features/thumbnail3.png',
  },
  {
    name: 'Barbara Pijan',
    title: 'M.A. in History of Religions from the University of Chicago',
    description: 'She uses traditional Jyotishavidya techniques from the Sanskrit lineage commentaries. Her readings are philosophically influenced by classical Western thought as well as Tibetan Buddhist precepts.',
    image: 'images/features/thumbnail4.png',
  },
  {
    name: 'Dr. Kadamberi Sharma',
    title: 'Founder of Vedic Oracle By Kadambari; Tarot Reader',
    description: 'She is a young astrology who dedicated her life to reviving Jyotish tradition back home and completely dedicated to the Science of Space , Time and Traditions',
    image: 'images/features/thumbnail5.png',
  },
  {
    name: 'Dr. Arjun Pai',
    title: 'PhD in Vedic Astrology from University of Delhi',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/features/thumbnail6.png',
  },
];

// Dynamically create cards for each speaker
const featSpeakers = document.getElementById('feat_speakers'); // Parent div where dynamic element appends
speakers.forEach((speaker, index) => {
  const featuredElement = document.createElement('div'); // div for each speaker = featuredElement
  featuredElement.classList.add('program');

  if (index >= 2) {
    featuredElement.classList.add('speaker-hidden', 'hide');
  }

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

seeMoreButton.addEventListener('click', () => {
  const hiddenSpeakers = featSpeakers.querySelectorAll('.hide');

  hiddenSpeakers.forEach((speaker) => {
    speaker.classList.toggle('speaker-hidden');
  });

  // seeMoreButton.classList.toggle('displayBlock');
  seeMoreButton.innerText = seeMoreButton.innerText === 'more'.toLocaleUpperCase() ? 'hide'.toLocaleUpperCase() : 'more'.toLocaleUpperCase();
});
