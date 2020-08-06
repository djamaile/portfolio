import { Project } from "../types/project";
import portfolio from "../assets/images/portfolio.png";

const projects: Array<Project> = [
  {
    img: portfolio,
    title: "Portfolio",
    description: "Personal portfolio",
    codeLink: "github.com",
    liveLink: "djamaile.dev",
    techstack: ["ReactJS", "TypeScript"],
  },
];

export { projects };
