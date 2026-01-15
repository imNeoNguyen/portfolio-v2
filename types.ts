
export interface Project {
  id: string;
  title: string;
  year: number;
  overview: string;
  role: string;
  technologies: string[];
  image: string;
  outcomes: string[];
  links?: {
    android?: string;
    ios?: string;
    web?: string;
  };
}

export type YearCategory = 2023 | 2024 | 2025;
