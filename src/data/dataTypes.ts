export interface TechIconType {
  id: number;
  title: string;
  imgSrc: string;
  altText: string;
}

export interface TechCardProps {
  iterableArray: Array<TechIconType>;
  cardTitle: string;
}

export interface SocialIconsType {
  id: number;
  title: string;
  imgSrc: string;
  altText: string;
  bgColor: string;
  borderColor: string;
  href: string;
}

export interface MainProjectsType {
  id: number;
  title: string;
  techStacks: string;
  imgSrc: string;
  altText: string;
  github: string;
  live: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  website: string;
  github: string;
}
