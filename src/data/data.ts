export interface TechIconType {
  id: number;
  title: string;
  imgSrc: string;
  altText: string;
}

export interface IterableArray {
  cardTitle: string;
  iterableArray: TechIconType[];
}

export const frontendTechIcons: Array<TechIconType> = [
  {
    id: 1,
    title: "HTML",
    imgSrc: "/techIcons/html5.svg",
    altText: "HTML Logo",
  },
  {
    id: 2,
    title: "CSS",
    imgSrc: "/techIcons/css3.svg",
    altText: "CSS Logo",
  },
  {
    id: 3,
    title: "Bootstrap CSS",
    imgSrc: "/techIcons/bootstrap.svg",
    altText: "Bootstrap CSS Logo",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    imgSrc: "/techIcons/tailwindcss.svg",
    altText: "Tailwind CSS Logo",
  },
  {
    id: 5,
    title: "Shadcn/UI",
    imgSrc: "/techIcons/shadcnui.svg",
    altText: "Shadcn/ui Logo",
  },
  {
    id: 6,
    title: "Radix UI",
    imgSrc: "/techIcons/radixui.svg",
    altText: "Radix UI Logo",
  },
  {
    id: 7,
    title: "Framer Motion",
    imgSrc: "/techIcons/framer.svg",
    altText: "Framer Motion Logo",
  },
  {
    id: 8,
    title: "Javascript",
    imgSrc: "/techIcons/js.svg",
    altText: "Javascript Logo",
  },
  {
    id: 9,
    title: "React JS",
    imgSrc: "/techIcons/reactjs.svg",
    altText: "React JS Logo",
  },
  {
    id: 10,
    title: "Redux JS",
    imgSrc: "/techIcons/redux.svg",
    altText: "Redux JS Logo",
  },
];

export const devopsTechIcons: Array<TechIconType> = [
  {
    id: 1,
    title: "Netlify",
    imgSrc: "/techIcons/netlify.svg",
    altText: "Netlify Logo",
  },
  {
    id: 2,
    title: "Vercel",
    imgSrc: "/techIcons/vercel.svg",
    altText: "Vercel Logo",
  },
  {
    id: 3,
    title: "Cloudflare Pages",
    imgSrc: "/techIcons/cloudflare.svg",
    altText: "Cloudflare Pages Logo",
  },
  {
    id: 4,
    title: "Git",
    imgSrc: "/techIcons/git.svg",
    altText: "Git Logo",
  },
  {
    id: 5,
    title: "Github",
    imgSrc: "/techIcons/github.svg",
    altText: "Github Logo",
  },
];

export const backend_databaseTechIcons: Array<TechIconType> = [
  {
    id: 1,
    title: "Java",
    imgSrc: "https://www.tech-stack-icons.com/assets/light/java.svg",
    altText: "Java Logo",
  },
  {
    id: 2,
    title: "Mongoose Js",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    altText: "Mongoose Logo",
  },
  {
    id: 3,
    title: "MongoDB",
    imgSrc: "https://www.tech-stack-icons.com/assets/light/mongodb.svg",
    altText: "MongoDB Logo",
  },
  {
    id: 4,
    title: "MySQL",
    imgSrc: "https://www.tech-stack-icons.com/assets/light/mysql.svg",
    altText: "MySQL Logo",
  },
];

export interface MainProjectsType {
  id: number;
  title: string;
  description: string;
  tech1: string;
  tech2: string;
}
export const mainProjects: Array<MainProjectsType> = [
  {
    id: 1,
    title: "web development",
    description: "This is description",
    tech1: "React",
    tech2: "Shadcn/ui",
  },
  {
    id: 2,
    title: "web development",
    description: "This is description",
    tech1: "React",
    tech2: "Shadcn/ui",
  },
  {
    id: 3,
    title: "web development",
    description: "This is description",
    tech1: "React",
    tech2: "Shadcn/ui",
  },
];

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  website: string;
  github: string;
}

export const projects: Array<ProjectType> = [
  {
    id: 1,
    title: "The Shopping Booth",
    description:
      "The Shopping Booth is an API based ecommerce website which uses dummyjson’s fake API to display various products.Built using React Js, Javascript, Redux Tookit and ShadCN UI",
    imageSrc: "/projects/jetbrains.jpg",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221/the-shopping-booth",
  },
  {
    id: 2,
    title: "Taskify Cloud Todo",
    description:
      "Takify Cloud Todo is a task management web application.Built using React Js, Tailwind CSS, ShadCN UI, Node Js and Express Js.",
    imageSrc: "/projects/preview.png",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221",
  },
  {
    id: 3,
    title: "The Annapurnas",
    description:
      "The Annapurnas is an application for ordering tiffin, with a three-day trial and monthly subscription option. It is built using HTML, CSS, Bootstrap 5, JQuery, Java, JSP, Servlet,JDBC, and MySQL .",
    imageSrc: "/projects/webstorm.png",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221",
  },
];
