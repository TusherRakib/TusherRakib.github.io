const projects = [
  {
    number: '01',
    name: 'ChatBud',
    url: 'https://github.com/TusherRakib/ChatBud---Flutter-x-CloudFirestore',
    description:
      'A Flutter-based real-time chat platform powered by Cloud Firestore, designed for instant messaging, user engagement, and smooth mobile communication experiences.',
    tags: ['Flutter', 'Firebase', 'Firestore'],
  },
  {
    number: '02',
    name: 'RentFlow',
    url: 'https://github.com/TusherRakib/RentFlow',
    description:
      'A rental and property management app focused on listing discovery, workflow tracking, and streamlined tenant-owner coordination for modern housing needs.',
    tags: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    number: '03',
    name: 'TradeService',
    url: 'https://github.com/TusherRakib/TradeService_backend',
    description:
      'A backend API project for service and trading workflows, built to support secure transactions, data handling, and business process integration across connected systems.',
    tags: ['REST API', 'Backend', 'Java'],
  },
  {
    number: '04',
    name: 'PDF Analyzer',
    url: 'https://github.com/TusherRakib/nltk-pdf-analyzer',
    description:
      'A Python-based document intelligence project that extracts text from PDFs and uses NLTK for analysis, summarization, and deeper information retrieval workflows.',
    tags: ['Python', 'NLTK', 'PDF'],
  },
  {
    number: '05',
    name: 'COVID Live Update',
    url: 'https://github.com/TusherRakib/Covid-19_Live_Update',
    description:
      'A live tracking dashboard for COVID-19 insights, presenting updated statistics, regional patterns, and public health information in a clear, easy-to-read format.',
    tags: ['Analytics', 'Dashboard', 'Data'],
  },
];

const projectList = document.querySelector('#project-list');

if (projectList) {
  projectList.innerHTML = projects
    .map(
      ({ number, name, url, description, tags }) => `
        <article class="project-card">
          <div class="project-card-inner">
            <div class="project-card-top">
              <span class="project-number">${number}</span>
              <a
                class="project-arrow-link"
                href="${url}"
                target="_blank"
                rel="noreferrer"
                aria-label="Open ${name} repository"
              >↗</a>
            </div>

            <div class="project-visual">
              <div class="mock-window"></div>
              <div class="mock-panel"></div>
            </div>

            <div class="project-content">
              <h4 class="project-title">${name}</h4>
              <p class="project-description">${description}</p>
              <div class="project-tags">
                ${tags.map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
              </div>
            </div>
          </div>
        </article>
      `,
    )
    .join('');
}

const currentYear = document.querySelector('#current-year');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('.submit-btn');
    if (submitButton) {
      submitButton.textContent = 'Submitted';
      submitButton.disabled = true;
    }
  });
}
