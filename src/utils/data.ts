import { Experience, Education } from "../types/resume";
import { Project } from "../types/project";
import portfolio from "../assets/images/portfolio.png";
import kanji from "../assets/images/kanji.png";
import anatoken from "../assets/images/anatoken.png";
import bol from "../assets/images/bol.png";
import ssc from "../assets/images/ssc.png";
import og from "../assets/images/og.jpeg";
import hhs from "../assets/images/hhs.png";
import glr from "../assets/images/glr.png";

const projects: Array<Project> = [
  {
    img: kanji,
    title: "Kanji To Hiragana",
    description:
      "User can input kanji and the kanji will be transformed to hiragana",
    codeLink: "https://github.com/djamaile/kanji-to-hiragana/",
    liveLink: "https://djamaile.github.io/kanji-to-hiragana/",
    techstack: ["ReactJS"],
  },
  {
    img: anatoken,
    title: "AnaToken",
    description:
      "Developed an application that runs on the Ethereum blockchain to help address plastic waste problems in Ghana. The plan is to take this project and further develop it in the upcoming hackathon of odyssey",
    codeLink: "https://github.com/anatoken",
    liveLink: "",
    techstack: ["ReactJS", "Solidity", "Ethereum"],
  },
  {
    img: portfolio,
    title: "Portfolio",
    description: "Personal portfolio",
    codeLink: "https://github.com/djamaile/portfolio",
    liveLink: "djamaile.dev",
    techstack: ["ReactJS", "TypeScript"],
  },
];

const experience: Array<Experience> = [
  {
    img: bol,
    jobTitle: "Software Engineer Graduation Intern",
    company: "Bol.com",
    date: "Feb 2020 - Jun 2020",
    workLength: "5 mos",
    location: "Utrecht Area, Netherlands",
    tasks: [
      "ReactJS, Typescript, Python, Google Cloud Platform, Istio",
      "Developed a proof of concept that visualizes the effect a microservice can have on the cloud landscape if it stops working",
    ],
    techstack: [
      "ReactJS",
      "TypeScript",
      "Python",
      "Google Cloud Platform",
      "Istio",
    ],
  },
  {
    img: ssc,
    jobTitle: "Full Stack Engineer (Part-time)",
    company: "SSC-ICT",
    date: "Aug 2018 - Feb 2020",
    workLength: "1 yr 7 mos",
    location: "Den Haag, Netherlands",
    tasks: [
      "ReactJS, Node.JS, Docker, Kubernetes, GraphQL",
      "Developed a self-service portal that automated business processes regarding Atlassian products",
      "Supervising interns",
      "Holding workshops",
      "Facilitating Design Sprints",
    ],
    techstack: [
      "ReactJS",
      "NodeJS",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "GraphQL",
    ],
  },
  {
    img: og,
    jobTitle: "Web Developer",
    company: "OGonline",
    date: "Dec 2015 - May 2016",
    workLength: "6 mos",
    location: "Den Haag, Netherlands",
    tasks: [
      "PHP, Javascript",
      "Developing websites for clients",
      "Improving old CSS",
    ],
    techstack: ["PHP", "Javascript"],
  },
];

const education: Array<Education> = [
  {
    img: hhs,
    school: "The Hague University of Applied Sciences",
    study: "Minor: Blockchain & Cryptocurrencies: Business, Law & IT",
    date: "2019 - 2020",
  },
  {
    img: hhs,
    school: "The Hague University of Applied Sciences",
    study: "BSc, Software Engineering",
    date: "2016 - 2020",
  },
  {
    img: glr,
    school: "Grafisch Lyceum Rotterda",
    study: "MBO, Application and media development",
    date: "2013 - 2016",
  },
];

export { projects, experience, education };
