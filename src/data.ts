// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/mehtasaaaaab/',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sandeep-mehta-25bb99231/',
  },
  {
    label: 'X',
    url: 'https://x.com/mehtasaaaaab',
  },
];

const resourceLinks = [
  {
    label: 'Behance',
    url: 'https://www.behance.net/sandeepmehta27/projects',
  },
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/user/31soi6fjx5tkwnxuzashvxfzemya?si=75fc361336a04275?',
  },
];

const heroText =
  'A freelance photographer and filmmaker, capturing moments and telling stories through cinematic visuals since 2023.';

const locationPlace = `19°04'33.0"N 72°52'40.0"E`;
const locationCountry = 'Mumbai, India';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'mehtasaaaaab/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
