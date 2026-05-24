
import { Project } from './types';
import { IMAGES } from './assets/images';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ToppiCare',
    year: 2025,
    overview: '',
    role: 'Mobile developer',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    image: IMAGES.projects.ToppiCare,
    outcomes: ['60FPS rendering', 'Clean Architecture', 'Heatlcare'],
    links: {
      android: '',
      ios: '',
    }
  },
  {
    id: '2',
    title: 'English For Life',
    year: 2025,
    overview: '',
    role: 'Flutter Developer (Webapp)',
    technologies: ['Flutter', 'Firebase'],
    image: IMAGES.projects.EFL,
    outcomes: ['BLE Handshake optimized', 'Custom UI kit', 'Cross-platform'],
    links: {
      web: 'https://englishforlife.edu.vn/#/login'
    }
  },
  {
    id: '3',
    title: 'Mosaic (Tam Son Fashion)',
    year: 2025,
    overview: '',
    role: 'Mobile developer',
    technologies: ['Flutter', 'Firebase'],
    image: IMAGES.projects.STS,
    outcomes: ['300+ Component System', 'UX flow +45%', 'Mobile Design Award'],
  },
  {
    id: '4',
    title: 'Da Nang Transportation',
    year: 2024,
    overview: '',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'Firebase', 'Google Place'],
    image: IMAGES.projects.VantaiDN,
    outcomes: ['50k+ items handled', 'Dynamic theming', 'Enterprise Security'],
    links: {
      ios: 'https://apps.apple.com/vn/app/xe-t%E1%BA%A3i-%C4%91%C3%A0-n%E1%BA%B5ng/id1494561894',
      android: 'https://play.google.com/store/apps/details?id=vn.com.danang.user&pcampaignid=web_share'
    }
  },
  {
    id: '5',
    title: 'DQ Smart Pro',
    year: 2024,
    overview: '',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'BLE Mesh', 'IOT'],
    image: IMAGES.projects.DienQuang,
    outcomes: ['50k+ items handled', 'Dynamic theming', 'Enterprise Security'],
    links: {
      ios: 'https://apps.apple.com/vn/app/dqsmart-pro/id1554210275',
      android: 'https://play.google.com/store/apps/details?id=com.dienquangsmartv2.app'
    }
  },
  {
    id: '6',
    title: 'Hera Rental Car',
    year: 2024,
    overview: '',
    role: 'Mobile Developer',
    technologies: ['Flutter'],
    image: IMAGES.projects.Hera,
    outcomes: ['50k+ items handled', 'Dynamic theming', 'Enterprise Security'],
    links: {
      ios: 'https://apps.apple.com/cn/app/hera-car-rental/id6738185775?l=en-GB%20Hera%20Car%20Rental',
      android: 'https://play.google.com/store/apps/details?id=com.heratrading.app&pcampaignid=web_share'
    }
  },
  {
    id: '7',
    title: 'Vinacis',
    year: 2023,
    overview: '',
    role: 'Mobile Developer',
    technologies: ['Flutter'],
    image: IMAGES.projects.Vinacis,
    outcomes: ['50k+ items handled', 'Dynamic theming', 'Enterprise Security'],
    links: {
      ios: '',
      android: ''
    }
  },
  {
    id: '8',
    title: 'Repeat',
    year: 2023,
    overview: '',
    role: 'Mobile Developer',
    technologies: ['Flutter'],
    image: IMAGES.projects.Repeat,
    outcomes: ['50k+ items handled', 'Dynamic theming', 'Enterprise Security'],
    links: {
      ios: 'https://apps.apple.com/vn/app/repeat-english/id6670188894',
      android: 'https://play.google.com/store/apps/details?id=com.card.vn.flash_card'
    }
  },
  {
    id: '9',
    title: 'Cua Viet',
    year: 2023,
    overview: '',
    role: 'Mobile Developer',
    technologies: ['Flutter'],
    image: IMAGES.projects.CuaViet,
    outcomes: ['50k+ items handled', 'Dynamic theming', 'Enterprise Security'],
    links: {
      ios: 'https://apps.apple.com/cn/app/cua-vi%E1%BB%87t/id6479001541?l=en-GB',
      android: 'https://play.google.com/store/apps/details?id=vn.com.pccua.prod&pcampaignid=web_share'
    }
  },
];
