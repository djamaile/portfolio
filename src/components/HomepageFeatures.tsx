import React from 'react';
import Chip from "@material-ui/core/Chip";
import styles from './HomepageFeatures.module.css';
import { Experience as ExperienceType, Education as EducationType } from '../types/resume';
import { Project as ProjectType } from '../types/project';
import SwipeableViews from "react-swipeable-views";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useThemeContext from '@theme/hooks/useThemeContext';
import { resumeStyles } from '../css/resume';

const projects: Array<ProjectType> = [
  {
    img: "img/kanji.png",
    title: "Kanji To Hiragana",
    description:
      "User can input kanji and the kanji will be transformed to hiragana",
    codeLink: "https://github.com/djamaile/kanji-to-hiragana/",
    liveLink: "https://djamaile.github.io/kanji-to-hiragana/",
    techstack: ["ReactJS"],
  },
  {
    img: "img/anatoken.png",
    title: "AnaToken",
    description:
      "Developed an application that runs on the Ethereum blockchain to help address plastic waste problems in Ghana. The plan is to take this project and further develop it in the upcoming hackathon of odyssey",
    codeLink: "https://github.com/anatoken",
    liveLink: "",
    techstack: ["ReactJS", "Solidity", "Ethereum"],
  },
  {
    img: "img/portfolio.png",
    title: "Portfolio",
    description: "Personal portfolio",
    codeLink: "https://github.com/djamaile/portfolio",
    liveLink: "djamaile.dev",
    techstack: ["ReactJS", "TypeScript"],
  },
];

const experience: Array<ExperienceType> = [
  {
    img: "img/bol.png",
    jobTitle: "Software Engineer - Team Insights",
    company: "Bol.com",
    date: "Sep 2020 - Aug 2021",
    workLength: "11 mos",
    location: "Utrecht Area, Netherlands",
    tasks: [
      "Part of team insights which is responsible for the metrics, monitoring and logging platform of Bol.com.",
      "Developing Elastic Cloud in Kubernetes",
      "Developing and managing the centralised metrics platform (Prometheus/Thanos)",
      "Developing and managing internal puppet modules",
      "Handeling incidents",
    ],
    techstack: [
      "Elasticsearch (ECK)",
      "Prometheus",
      "Puppet",
      "Jsonnet",
    ],
  },
  {
    img: "img/bol.png",
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
    img: "img/ssc.png",
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
    img: "img/og.jpeg",
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

const education: Array<EducationType> = [
  {
    img: "img/hhs.png",
    school: "The Hague University of Applied Sciences",
    study: "Minor: Blockchain & Cryptocurrencies: Business, Law & IT",
    date: "2019 - 2020",
  },
  {
    img: "img/hhs.png",
    school: "The Hague University of Applied Sciences",
    study: "BSc, Software Engineering",
    date: "2016 - 2020",
  },
  {
    img: "img/glr.png",
    school: "Grafisch Lyceum Rotterda",
    study: "MBO, Application and media development",
    date: "2013 - 2016",
  },
];

const projectStyles = makeStyles(() =>
  createStyles({
    container: {
      flexDirection: "row",
      margin: 20,
      display: "flex",
    },
    imgContainer: {
      flex: "1 1",
      marginRight: 10,
    },
    img: {
      width: 250,
      borderRadius: 6,
      border: "1px solid #e8e8e8",
      flex: "1 1",
    },
    content: {
      flex: "2 1",
    },
    titleContainer: {
      display: "flex",
      flexDirection: "row",
    },
    title: {
      flex: "2 0",
      fontWeight: 800,
      fontSize: 18,
    },
    description: {
      fontSize: 14,
    },
    linkContainer: {
      display: "flex",
    },
    link: {
      marginRight: ".7rem",
      marginLeft: "-.7rem",
      padding: ".5rem .7rem",
      color: 'blue',
    },
  })
);

interface TechStackProps {
  stack: Array<string>;
}

const TechStacks: React.FC<TechStackProps > = ({ stack }) => {
  return (
    <>
      {stack.map((tech) => {
        return (
          <Chip label={tech} color="secondary" style={{ marginRight: 5 }} />
        );
      })}
    </>
  );
};

function Project({img, title, description, codeLink, liveLink, techstack}){
  const classes = projectStyles();
  const {isDarkTheme} = useThemeContext();
  const linkColor = isDarkTheme ? 'white' : '#18191a';

  return (
    <section className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={img} className={classes.img} alt="dummy img" />
      </div>
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <span className={classes.title}>{title}</span>
        </div>
        <span className={classes.description}>{description}</span>
        <div className={classes.linkContainer}>
          <a style={{marginRight: ".7rem", marginLeft: "-.7rem", padding: ".5rem .7rem", color: linkColor}} href={codeLink}>
            Code
          </a>
          <a style={{marginRight: ".7rem", marginLeft: "-.7rem", padding: ".5rem .7rem", color: linkColor}} href={liveLink}>
            Live
          </a>
        </div>
        <TechStacks stack={techstack} />
      </div>
    </section>
  ); 
}

function Experience({img, jobTitle, company, date, workLength, location, tasks, techstack}){
  const classes = resumeStyles();
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.fullWidth}>
            <div className={classes.imgContainer}>
              <img
                alt={company}
                src={img}
                className={classes.img}
              />
            </div>
            <div className={classes.companyContainer}>
              <h3 className={classes.jobTitle}>{jobTitle}</h3>
              <span className={classes.company}>{company}</span>
              <div className={classes.flex}>
                <h4 className={classes.date}>
                  <span>{date} •</span>
                </h4>
                <h4 className={classes.date}>
                  <span> {workLength}</span>
                </h4>
              </div>
              <div style={{ display: "block", fontSize: 10 }}>
                <span>{location}</span>
              </div>
            </div>
          </div>
          <div className={classes.city}>
            <span className={classes.information}>
              {tasks.map((task) => {
                return (
                  <>
                    • {task} <br />
                  </>
                );
              })}
            </span>
            <TechStacks stack={techstack} />
          </div>
        </div>
      </div>
    </section>
  );
};

function Education({img, school, study, date}){
  const classes = resumeStyles();
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.fullWidth}>
            <div className={classes.imgContainer}>
              <img alt={school} src={img} className={classes.img} />
            </div>
            <div className={classes.companyContainer}>
              <h3 className={classes.jobTitle}>{school}</h3>
              <span className={classes.company}>{study}</span>
              <div className={classes.flex}>
                <h4 className={classes.date}>
                  <span>{date}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); 
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const defaultProps = {
  children: null,
  dir: "",
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.defaultProps = defaultProps;

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

const Navigation: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const {isDarkTheme} = useThemeContext();

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  
  const properBackgroundColor = isDarkTheme ? '#18191a' : 'white';
  const linkColor = isDarkTheme ? 'white' : '#18191a';

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{
          backgroundColor: properBackgroundColor,
          boxShadow: "none",
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          aria-label="full width tabs example">
          <Tab label="Projects" {...a11yProps(0)} style={{color: linkColor }}/>
          <Tab label="Resume" {...a11yProps(1)} style={{color: linkColor }}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ backgroundColor: properBackgroundColor }}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          {projects.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h2>Experience</h2>
          {experience.map((props, idx) => (
            <Experience key={idx} {...props} />
          ))}
          <h2>Education</h2>
          {education.map((props, idx) => (
            <Education key={idx} {...props} />
          ))}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={{margin: "60 px auto", maxWidth: 800}}>
        <div className="row">
          <Navigation />
        </div>
      </div>
    </section>
  );
}
