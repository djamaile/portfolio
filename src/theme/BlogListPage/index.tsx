import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/BlogListPage';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function BlogHeader(): JSX.Element {
  return (
    <header className={styles.blogHeader}>
      <div className={styles.headerContent}>
        <div className={styles.issueLabel}>
          <span className={styles.issueDot} />
          Engineering Journal
        </div>
        <h1 className={styles.blogTitle}>
          Thoughts on
          <br />
          <span className={styles.titleAccent}>Code & Craft</span>
        </h1>
        <p className={styles.blogSubtitle}>
          Explorations in developer experience, cloud infrastructure, and the art of building software.
        </p>
        <div className={styles.headerMeta}>
          <span className={styles.postCount}>6 articles</span>
          <span className={styles.divider}>·</span>
          <span className={styles.latestLabel}>Latest: October 2022</span>
        </div>
      </div>
      <div className={styles.headerDecoration}>
        <div className={styles.decorCircle} />
        <div className={styles.decorLine} />
      </div>
    </header>
  );
}

interface FeaturedPostProps {
  post: Props['items'][0];
}

function FeaturedPost({ post }: FeaturedPostProps): JSX.Element {
  const { metadata } = post.content;
  const { title, description, permalink, date, readingTime, tags } = metadata;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className={styles.featuredPost}>
      <div className={styles.featuredBadge}>Featured</div>
      <div className={styles.featuredContent}>
        <div className={styles.featuredMeta}>
          <time dateTime={date} className={styles.featuredDate}>
            {formattedDate}
          </time>
          {readingTime && (
            <>
              <span className={styles.metaDot}>·</span>
              <span className={styles.readingTime}>
                {Math.ceil(readingTime)} min read
              </span>
            </>
          )}
        </div>
        <Link to={permalink} className={styles.featuredTitleLink}>
          <h2 className={styles.featuredTitle}>{title}</h2>
        </Link>
        <p className={styles.featuredDescription}>{description}</p>
        <div className={styles.featuredFooter}>
          <div className={styles.tagList}>
            {tags.slice(0, 3).map((tag) => (
              <Link key={tag.permalink} to={tag.permalink} className={styles.tag}>
                {tag.label}
              </Link>
            ))}
          </div>
          <Link to={permalink} className={styles.readMoreLink}>
            Read article
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
      <div className={styles.featuredVisual}>
        <div className={styles.visualPattern} />
      </div>
    </article>
  );
}

interface BlogCardProps {
  post: Props['items'][0];
  index: number;
}

function BlogCard({ post, index }: BlogCardProps): JSX.Element {
  const { metadata } = post.content;
  const { title, description, permalink, date, readingTime, tags } = metadata;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <article
      className={styles.blogCard}
      style={{ '--card-index': index } as React.CSSProperties}
    >
      <div className={styles.cardNumber}>
        {String(index + 2).padStart(2, '0')}
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <time dateTime={date}>{formattedDate}</time>
          {readingTime && (
            <span className={styles.cardReadTime}>
              {Math.ceil(readingTime)}m
            </span>
          )}
        </div>
        <Link to={permalink} className={styles.cardTitleLink}>
          <h3 className={styles.cardTitle}>{title}</h3>
        </Link>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardTags}>
          {tags.slice(0, 2).map((tag) => (
            <span key={tag.permalink} className={styles.cardTag}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      <Link to={permalink} className={styles.cardArrow} aria-label={`Read ${title}`}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </article>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const { items, metadata } = props;
  const [featuredPost, ...remainingPosts] = items;

  return (
    <div className={styles.blogContainer}>
      <BlogHeader />

      {featuredPost && <FeaturedPost post={featuredPost} />}

      {remainingPosts.length > 0 && (
        <section className={styles.postsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Archive</h2>
            <div className={styles.sectionLine} />
          </div>
          <div className={styles.postsGrid}>
            {remainingPosts.map((post, index) => (
              <BlogCard
                key={post.content.metadata.permalink}
                post={post}
                index={index}
              />
            ))}
          </div>
        </section>
      )}

      {(metadata.previousPage || metadata.nextPage) && (
        <nav className={styles.pagination}>
          {metadata.previousPage && (
            <Link to={metadata.previousPage} className={styles.paginationLink}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Newer
            </Link>
          )}
          {metadata.nextPage && (
            <Link to={metadata.nextPage} className={clsx(styles.paginationLink, styles.paginationNext)}>
              Older
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <Layout title="Blog" description="Engineering articles and thoughts">
      <BlogListPageContent {...props} />
    </Layout>
  );
}
