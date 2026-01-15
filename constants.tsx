
import { Project } from './types';
import { IMAGES } from './assets/images';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ToppiCare',
    year: 2025,
    overview: '',
    role: 'Mobile developer',
    technologies: ['Flutter', 'Dart', 'Native', 'Firebase'],
    image: IMAGES.projects.ToppiCare,
    outcomes: ['60FPS rendering', 'Clean Architecture', 'Biometric Auth'],
    links: {
      android: 'https://play.google.com/store',
      ios: 'https://apps.apple.com/app',
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
      web: 'https://ecotrack-iot.io'
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
      ios: 'https://apps.apple.com/app',
      android: 'https://play.google.com/marketmaster'
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
      ios: 'https://apps.apple.com/app',
      android: 'https://play.google.com/marketmaster'
    }
  },
  {
    id: '6',
    title: 'Hera Holding Group',
    year: 2024,
    overview: '',
    role: 'Mobile Developer',
    technologies: ['Flutter'],
    image: IMAGES.projects.Hera,
    outcomes: ['50k+ items handled', 'Dynamic theming', 'Enterprise Security'],
    links: {
      ios: 'https://apps.apple.com/app',
      android: 'https://play.google.com/marketmaster'
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
      ios: 'https://apps.apple.com/app',
      android: 'https://play.google.com/marketmaster'
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
      ios: 'https://apps.apple.com/app',
      android: 'https://play.google.com/marketmaster'
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
      ios: 'https://apps.apple.com/app',
      android: 'https://play.google.com/marketmaster'
    }
  },
];
