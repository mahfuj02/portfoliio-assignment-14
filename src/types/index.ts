export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    techList: string[];
  };
  
  export type Resource = {
    id: number;
    title: string;
    image: string;
    summary: string;
    link: string;
  };
  
  export type Skill = {
    name: string;
    category: 'language' | 'framework' | 'tool';
  };