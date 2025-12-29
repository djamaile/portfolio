import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@docusaurus/Link';

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/djamaile/',
    icon: 'fab fa-linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/djamaile',
    icon: 'fab fa-github',
  },
];

export const Contact: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 3 },
        bgcolor: 'var(--ifm-background-surface-color)',
        borderTop: '1px solid var(--portfolio-card-border)',
      }}
    >
      <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'var(--ifm-heading-color)',
          }}
        >
          Get In Touch
        </Typography>

        <Typography
          sx={{
            fontSize: '1rem',
            color: 'var(--portfolio-text-muted)',
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          Have a question or want to work together? Feel free to reach out
          through any of the platforms below.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          {contactLinks.map(link => (
            <Button
              key={link.label}
              component={Link}
              to={link.href}
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'var(--ifm-color-primary)',
                color: 'var(--ifm-color-primary)',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'var(--ifm-color-primary)',
                  color: 'white',
                  borderColor: 'var(--ifm-color-primary)',
                },
              }}
            >
              <i className={link.icon} style={{ marginRight: 8 }} />
              {link.label}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
