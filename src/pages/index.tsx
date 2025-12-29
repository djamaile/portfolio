import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomepageFeatures from '../components/HomepageFeatures';
import { Socials, About, Contact } from '../components';
import { MuiThemeWrapper } from '../theme/MuiThemeWrapper';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Box
      component="header"
      className={styles.heroBanner}
      sx={{
        background: 'linear-gradient(135deg, var(--portfolio-gradient-start) 0%, var(--portfolio-gradient-end) 100%)',
        color: 'white',
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          mx: 'auto',
          px: 3,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Avatar
          alt={siteConfig.title}
          src={useBaseUrl('/img/pp.png')}
          sx={{
            width: { xs: 120, md: 160 },
            height: { xs: 120, md: 160 },
            mx: 'auto',
            mb: 3,
            border: '4px solid rgba(255,255,255,0.3)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            mb: 2,
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          {siteConfig.title}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1rem', md: '1.25rem' },
            fontWeight: 400,
            mb: 4,
            opacity: 0.9,
            maxWidth: 600,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          {siteConfig.tagline}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Socials />
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button
            component={Link}
            to="/blog"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'var(--portfolio-gradient-start)',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            Read Blog
          </Button>
          <Button
            component={Link}
            to="https://github.com/djamaile"
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'rgba(255,255,255,0.5)',
              color: 'white',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255,255,255,0.1)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            View GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="Portfolio of Djamaile Rahamat - Software Engineer at Spotify working on Backstage">
      <MuiThemeWrapper>
        <HomepageHeader />
        <main>
          <About />
          <HomepageFeatures />
          <Contact />
        </main>
      </MuiThemeWrapper>
    </Layout>
  );
}
