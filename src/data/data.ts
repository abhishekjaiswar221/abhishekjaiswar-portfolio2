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
    title: "Sass",
    imgSrc: "/techIcons/sass.svg",
    altText: "Sass Logo",
  },
  {
    id: 4,
    title: "Bootstrap CSS",
    imgSrc: "/techIcons/bootstrap.svg",
    altText: "Bootstrap CSS Logo",
  },
  {
    id: 5,
    title: "Tailwind CSS",
    imgSrc: "/techIcons/tailwindcss.svg",
    altText: "Tailwind CSS Logo",
  },
  {
    id: 6,
    title: "Shadcn/UI",
    imgSrc: "/techIcons/shadcnui.svg",
    altText: "Shadcn/ui Logo",
  },
  {
    id: 7,
    title: "Radix UI",
    imgSrc: "/techIcons/radixui.svg",
    altText: "Radix UI Logo",
  },
  {
    id: 8,
    title: "Framer Motion",
    imgSrc: "/techIcons/framer.svg",
    altText: "Framer Motion Logo",
  },
  {
    id: 9,
    title: "Javascript",
    imgSrc: "/techIcons/js.svg",
    altText: "Javascript Logo",
  },
  {
    id: 10,
    title: "React JS",
    imgSrc: "/techIcons/reactjs.svg",
    altText: "React JS Logo",
  },
  {
    id: 11,
    title: "Redux JS",
    imgSrc: "/techIcons/redux.svg",
    altText: "Redux JS Logo",
  },
  // {
  //   id: 12,
  //   title: "Zod",
  //   imgSrc: "/techIcons/zod.svg",
  //   altText: "Zod Logo",
  // },
];

export const othersTechIcons: Array<TechIconType> = [
  {
    id: 1,
    title: "REST API",
    imgSrc: "/techIcons/restapi.svg",
    altText: "REST API Logo",
  },
  {
    id: 2,
    title: "Postman",
    imgSrc: "/techIcons/postman.svg",
    altText: "Postman Logo",
  },
  {
    id: 3,
    title: "Canva",
    imgSrc: "/techIcons/canva.svg",
    altText: "Canva Logo",
  },
  {
    id: 4,
    title: "Vite JS",
    imgSrc: "/techIcons/vitejs.svg",
    altText: "Vite Js Logo",
  },
  {
    id: 5,
    title: "Rollup Js",
    imgSrc: "/techIcons/rollup.svg",
    altText: "Rollup Js Logo",
  },
  {
    id: 6,
    title: "Eslint",
    imgSrc: "/techIcons/eslint.svg",
    altText: "Eslint Logo",
  },
  {
    id: 7,
    title: "Prettier",
    imgSrc: "/techIcons/prettier.svg",
    altText: "Prettier Logo",
  },
  // {
  //   id: 8,
  //   title: "JSON",
  //   imgSrc: "/techIcons/json.svg",
  //   altText: "JSON Logo",
  // },
  // {
  //   id: 9,
  //   title: "Figma",
  //   imgSrc: "/techIcons/figma.svg",
  //   altText: "Figma Logo",
  // },
  // {
  //   id: 10,
  //   title: "Markdown",
  //   imgSrc: "/techIcons/markdown.svg",
  //   altText: "Markdown Logo",
  // },
];

export const devToolsTechIcons: Array<TechIconType> = [
  {
    id: 1,
    title: "VS Code",
    imgSrc: "/techIcons/vscode.svg",
    altText: "VS Code Logo",
  },
  {
    id: 2,
    title: "Webstorm",
    imgSrc: "/techIcons/webstorm.svg",
    altText: "Webstorm Logo",
  },
  {
    id: 3,
    title: "Intellij IDEA",
    imgSrc: "/techIcons/intellij.svg",
    altText: "Intellij IDEA Logo",
  },
  {
    id: 4,
    title: "Datagrip",
    imgSrc: "/techIcons/datagrip.svg",
    altText: "Datagrip Logo",
  },
  // {
  //   id: 5,
  //   title: "JetBrains",
  //   imgSrc: "/techIcons/jetbrains.svg",
  //   altText: "JetBrains Logo",
  // },
];

export const backend_devopsTechIcons: Array<TechIconType> = [
  {
    id: 1,
    title: "Java",
    imgSrc: "/techIcons/java.svg",
    altText: "Java Logo",
  },
  {
    id: 2,
    title: "MySQL",
    imgSrc: "/techIcons/mysql.svg",
    altText: "MySQL Logo",
  },
  {
    id: 3,
    title: "MongoDB",
    imgSrc: "/techIcons/mongodb.svg",
    altText: "MongoDB Logo",
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
  {
    id: 6,
    title: "Vercel",
    imgSrc: "/techIcons/vercel.svg",
    altText: "Vercel Logo",
  },
  {
    id: 7,
    title: "Cloudflare Pages",
    imgSrc: "/techIcons/cloudflare.svg",
    altText: "Cloudflare Pages Logo",
  },
  {
    id: 8,
    title: "Netlify",
    imgSrc: "/techIcons/netlify.svg",
    altText: "Netlify Logo",
  },
  // {
  //   id: 9,
  //   title: "Mongoose Js",
  //   imgSrc: "/techIcons/mongoose.svg",
  //   altText: "Mongoose Logo",
  // },
];

// export const devopsTechIcons: Array<TechIconType> = [
//   {
//     id: 1,
//     title: "Git",
//     imgSrc: "/techIcons/git.svg",
//     altText: "Git Logo",
//   },
//   {
//     id: 2,
//     title: "Github",
//     imgSrc: "/techIcons/github.svg",
//     altText: "Github Logo",
//   },
//   {
//     id: 3,
//     title: "Vercel",
//     imgSrc: "/techIcons/vercel.svg",
//     altText: "Vercel Logo",
//   },
//   {
//     id: 4,
//     title: "Cloudflare Pages",
//     imgSrc: "/techIcons/cloudflare.svg",
//     altText: "Cloudflare Pages Logo",
//   },
//   {
//     id: 5,
//     title: "Netlify",
//     imgSrc: "/techIcons/netlify.svg",
//     altText: "Netlify Logo",
//   },
// ];

// export const build_lintingToolsTechIcons: Array<TechIconType> = [
//   {
//     id: 1,
//     title: "Vite JS",
//     imgSrc: "/techIcons/vitejs.svg",
//     altText: "Vite Js Logo",
//   },
//   {
//     id: 2,
//     title: "Rollup Js",
//     imgSrc: "/techIcons/rollup.svg",
//     altText: "Rollup Js Logo",
//   },
//   {
//     id: 3,
//     title: "Eslint",
//     imgSrc: "/techIcons/eslint.svg",
//     altText: "Eslint Logo",
//   },
//   {
//     id: 4,
//     title: "Prettier",
//     imgSrc: "/techIcons/prettier.svg",
//     altText: "Prettier Logo",
//   },
// ];

// export const packageManagersTechIcons: Array<TechIconType> = [
//   {
//     id: 1,
//     title: "NPM",
//     imgSrc: "/techIcons/npm.svg",
//     altText: "NPM Logo",
//   },
//   {
//     id: 2,
//     title: "PNPM",
//     imgSrc: "/techIcons/pnpm.svg",
//     altText: "PNPM Logo",
//   },
//   {
//     id: 3,
//     title: "Yarn",
//     imgSrc: "/techIcons/yarn.svg",
//     altText: "Yarn Logo",
//   },
// ];

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
