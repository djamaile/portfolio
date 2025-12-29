import React from 'react';
import styles from './HomepageFeatures.module.css';
import { PersonalTabs } from './Tabs';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Work</span>
          <div className={styles.sectionLine} />
        </div>
        <PersonalTabs />
      </div>
    </section>
  );
}
