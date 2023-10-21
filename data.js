const bcrypt = require('bcryptjs');

const data = {
  users: [
    {
      firstName: 'Catalin',
      lastName: 'Istratoae',
      email: 'catalin@peakngo.com',
      password: bcrypt.hashSync('251122aa15'),
      isAdmin: true,
    },
    {
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
      password: bcrypt.hashSync('123'),
      isAdmin: false,
    },
  ],
  packs: [
    {
      title: 'Basic',
      slug: 'basic',
      description:
        'Oferă automatizarea gestionării a 10 pagini de Facebook și 10 grupuri de Facebook. Acest pachet de servicii este ideal pentru companiile sau persoanele care au un număr mic de conturi de social media, dar care încă doresc să profite de beneficiile automatizării pentru a-și îmbunătăți prezența online. Prin automatizarea acestor conturi, veți putea economisi timp și energie în gestionarea acestora și veți putea crește prezența dvs. online. Prin automatizarea postărilor și programarea lor, veți putea păstra un conținut constant și coerent pentru a menține angajamentul utilizatorilor.',
      list: ['10 grupuri Facebook', '10 pagini Facebook', 'Instagram'],
      price: 50,
      discount: 0,
      trial: true,
      trialPeriod: 5,
      limit: 10,
    },
    {
      title: 'Professional',
      slug: 'professional',
      description:
        'Oferă automatizarea gestionării a 25 de pagini de Facebook și 25 de grupuri de Facebook si a profilului de Instagram. De asemenea, puteți alege să adăugați opțiunea de a automatiza și alte rețele de socializare, cum ar fi TikTok, Youtube, Twitter și LinkedIn, pentru doar 10 euro pe fiecare rețea. Acest pachet de servicii este proiectat pentru a ajuta la gestionarea mai multor conturi de social media și a postărilor.',
      list: ['25 pagini Facebook', '25 grupuri Facebook', 'Instagram'],
      price: 100,
      discount: 0,
      trial: true,
      trialPeriod: 5,
      limit: 25,
    },
    {
      title: 'Elite',
      slug: 'elite',
      description:
        'Oferă automatizarea gestionării a 50 de pagini de Facebook, 50 de grupuri de Facebook, Instagram, TikTok, Youtube, Twitter și LinkedIn. În plus, acest pachet include și gestionarea comentariilor paginilor de Facebook, astfel încât să puteți rămâne conectat cu audiența dvs. și să răspundeți la întrebările lor în timp util. Pentru a vă ajuta să urmăriți performanțele conturilor dvs. de Facebook, acest pachet oferă și statistici detaliate privind vizualizările, angajamentul și alte metrici relevante. În general, acest pachet vă oferă un mod eficient de a gestiona și crește prezența dvs. pe mai multe platforme de social media fără a fi nevoie să petreceți timp prea mult timp și resurse pentru a face acest lucru manual.',
      list: [
        '50 pagini Facebook',
        '50 grupuri Facebook',
        'Instagram',
        'Tiktok',
        'Youtube',
        'Twitter',
        'Linkedin',
        'Gestionare comentarii Facebook',
        'Statistici pagini',
      ],
      price: 200,
      discount: 0,
      trial: true,
      trialPeriod: 5,
      limit: 50,
    },
  ],
};
module.exports = { data };
