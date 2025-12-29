import React from 'react';
import styles from './About.module.css';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Go', 'Python'] },
  { category: 'Cloud', items: ['Kubernetes', 'GCP', 'AWS'] },
  { category: 'Tools', items: ['Backstage', 'Prometheus', 'Docker'] },
];

export const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>About</span>
          <div className={styles.sectionLine} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            Building tools that make
            <br />
            <span className={styles.titleAccent}>developers productive</span>
          </h2>

          <p className={styles.description}>
            Software Engineer at Spotify working on Backstage, the open platform for
            building developer portals. Passionate about AI-powered developer experience, cloud
            infrastructure, and creating tools that help teams ship faster. Based in Amsterdam.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className={styles.skillGroup}>
              <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
              <div className={styles.skillTags}>
                {skillGroup.items.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
