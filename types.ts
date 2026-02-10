export interface Division {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  color: string;
}

export interface Project {
  id: string;
  client: string;
  tags: string[];
  description: string;
  image: string;
}

export enum DivisionType {
  MEDIA = 'MEDIA',
  NETWORKS = 'NETWORKS',
  DEV = 'DEV',
}