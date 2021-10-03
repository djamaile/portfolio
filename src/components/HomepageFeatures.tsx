import React from 'react';
import styles from './HomepageFeatures.module.css';
import { Navigation } from '.';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div
        className="container"
        style={{ margin: '60 px auto', maxWidth: 800 }}
      >
        <div className="row">
          <Navigation />
        </div>
      </div>
    </section>
  );
}
