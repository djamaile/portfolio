import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import HomepageFeatures from '../components/HomepageFeatures';
import { About, Contact } from '../components';
import styles from './index.module.css';

function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroPattern} />
        <div className={styles.heroGradient} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroMain}>
          <div className={styles.heroLabel}>
            <span className={styles.labelDot} />
            Software Engineer
          </div>

          <h1 className={styles.heroTitle}>
            {siteConfig.title.split(' ')[0]}
            <br />
            <span className={styles.titleAccent}>{siteConfig.title.split(' ')[1]}</span>
          </h1>

          <p className={styles.heroTagline}>
            {siteConfig.tagline}
          </p>

          <div className={styles.heroMeta}>
            <span className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 8.5C9.38071 8.5 10.5 7.38071 10.5 6C10.5 4.61929 9.38071 3.5 8 3.5C6.61929 3.5 5.5 4.61929 5.5 6C5.5 7.38071 6.61929 8.5 8 8.5Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 14C8 14 13 10.5 13 6.5C13 3.73858 10.7614 1.5 8 1.5C5.23858 1.5 3 3.73858 3 6.5C3 10.5 8 14 8 14Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Amsterdam
            </span>
            <span className={styles.metaDivider}>·</span>
            <span className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4.5H14M2 4.5V12.5C2 13.0523 2.44772 13.5 3 13.5H13C13.5523 13.5 14 13.0523 14 12.5V4.5M2 4.5L3.5 2.5H12.5L14 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 7.5L7.5 9L10 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Spotify
            </span>
          </div>

          <div className={styles.heroActions}>
            <Link to="/blog" className={styles.primaryButton}>
              Read Journal
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="https://github.com/djamaile" className={styles.secondaryButton}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </Link>
            <Link to="https://linkedin.com/in/djamaile" className={styles.secondaryButton}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.avatarContainer}>
            <img
              src={useBaseUrl('/img/pp.png')}
              alt={siteConfig.title}
              className={styles.avatar}
            />
            <div className={styles.avatarRing} />
            <div className={styles.avatarGlow} />
          </div>
          <div className={styles.visualDecor}>
            <div className={styles.decorLine} />
            <div className={styles.decorCircle} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="Portfolio of Djamaile Rahamat - Software Engineer at Spotify working on Backstage">
      <HomepageHero />
      <main className={styles.mainContent}>
        <About />
        <HomepageFeatures />
        <Contact />
      </main>
    </Layout>
  );
}
