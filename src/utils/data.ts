import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types';

const caculateWorkLength = (startMonth: Date, endMonth: Date): number => {
  let months = (endMonth.getFullYear() - startMonth.getFullYear()) * 12;
  months -= startMonth.getMonth() + 1;
  months += endMonth.getMonth();
  return months <= 0 ? 0 : months;
};

const projects: Array<ProjectType> = [
  {
    img: 'img/ourmanga.png',
    title: 'Our Manga Community',
    description:
      'Users can see the latest manga releases from different publishers',
    codeLink: 'https://github.com/djamaile/ourmanga.community',
    liveLink: 'https://ourmanga.community',
    techstack: ['ReactJS', 'TypeScript', 'Golang'],
  },
  {
    img: 'img/kanji.png',
    title: 'Kanji To Hiragana',
    description:
      'User can input kanji and the kanji will be transformed to hiragana',
    codeLink: 'https://github.com/djamaile/kanji-to-hiragana/',
    liveLink: 'https://djamaile.github.io/kanji-to-hiragana/',
    techstack: ['ReactJS'],
  },
  {
    img: 'img/anatoken.png',
    title: 'AnaToken',
    description:
      'Developed an application that runs on the Ethereum blockchain to help address plastic waste problems in Ghana. The plan is to take this project and further develop it in the upcoming hackathon of odyssey',
    codeLink: 'https://github.com/anatoken',
    liveLink: '',
    techstack: ['ReactJS', 'Solidity', 'Ethereum'],
  },
  {
    img: 'img/djamaile-light.png',
    title: 'Portfolio',
    description: 'Personal portfolio',
    codeLink: 'https://github.com/djamaile/portfolio',
    liveLink: 'djamaile.dev',
    techstack: ['ReactJS', 'TypeScript'],
  },
];

const experience: Array<ExperienceType> = [
  {
    img: 'img/spotify.svg',
    jobTitle: 'Software Engineer',
    company: 'Spotify',
    date: 'Sep 2022 - pres',
    workLength: `${caculateWorkLength(new Date(2022, 9, 1), new Date())} mos`,
    location: 'Amsterdam, Noord-Holland, Nederland',
    tasks: ['Working on Backstage'],
    techstack: ['ReactJS', 'TypeScript'],
  },
  {
    img: 'img/bol.png',
    jobTitle: 'Software Engineer - Team Developer Experience',
    company: 'Bol.com',
    date: 'Aug 2020 - Sep 2022',
    workLength: `1 yr 2 mos`,
    location: 'Utrecht Area, Netherlands',
    tasks: [
      'Developing a developer experience portal based on https://backstage.io within Bol.com',
      'Scrum master'
    ],
    techstack: ['ReactJS', 'TypeScript', 'NodeJS'],
  },
  {
    img: '',
    jobTitle: 'Software Engineer - Team Insights',
    company: 'Bol.com',
    date: 'Sep 2020 - Aug 2021',
    workLength: '11 mos',
    location: 'Utrecht Area, Netherlands',
    tasks: [
      'Part of team insights which is responsible for the metrics, monitoring and logging platform of Bol.com.',
      'Developing Elastic Cloud in Kubernetes',
      'Developing and managing the centralised metrics platform (Prometheus/Thanos)',
      'Developing and managing internal puppet modules',
      'Handeling incidents',
    ],
    techstack: ['Elasticsearch (ECK)', 'Prometheus', 'Puppet', 'Jsonnet'],
  },
  {
    img: '',
    jobTitle: 'Software Engineer Graduation Intern',
    company: 'Bol.com',
    date: 'Feb 2020 - Jun 2020',
    workLength: '5 mos',
    location: 'Utrecht Area, Netherlands',
    tasks: [
      'Developed a proof of concept that visualizes the effect a microservice can have on the cloud landscape if it stops working',
    ],
    techstack: [
      'ReactJS',
      'TypeScript',
      'Python',
      'Google Cloud Platform',
      'Istio/Kiali',
    ],
  },
  {
    img: 'img/ssc.png',
    jobTitle: 'Full Stack Engineer (Part-time)',
    company: 'SSC-ICT',
    date: 'Aug 2018 - Feb 2020',
    workLength: '1 yr 7 mos',
    location: 'Den Haag, Netherlands',
    tasks: [
      'Developed a self-service portal that automated business processes regarding Atlassian products',
      'Supervising interns',
      'Holding workshops',
      'Facilitating Design Sprints',
    ],
    techstack: [
      'ReactJS',
      'NodeJS',
      'TypeScript',
      'Docker',
      'Kubernetes',
      'GraphQL',
    ],
  },
  {
    img: 'img/og.jpeg',
    jobTitle: 'Web Developer',
    company: 'OGonline',
    date: 'Dec 2015 - May 2016',
    workLength: '6 mos',
    location: 'Den Haag, Netherlands',
    tasks: [
      'PHP, Javascript',
      'Developing websites for clients',
      'Improving old CSS',
    ],
    techstack: ['PHP', 'Javascript'],
  },
];

const education: Array<EducationType> = [
  {
    img: 'img/hhs.png',
    school: 'The Hague University of Applied Sciences',
    study: 'Minor: Blockchain & Cryptocurrencies: Business, Law & IT',
    date: '2019 - 2020',
  },
  {
    img: 'img/hhs.png',
    school: 'The Hague University of Applied Sciences',
    study: 'BSc, Software Engineering',
    date: '2016 - 2020',
  },
  {
    img: 'img/glr.png',
    school: 'Grafisch Lyceum Rotterdam',
    study: 'MBO, Application and media development',
    date: '2013 - 2016',
  },
];

export { experience, projects, education };
