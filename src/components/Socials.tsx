import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

const socialDetails = [
  {
    name: 'linkedin',
    classname: 'fab fa-linkedin',
    link: 'https://www.linkedin.com/in/djamaile/',
    label: 'LinkedIn',
  },
  {
    name: 'github',
    classname: 'fab fa-github',
    link: 'https://github.com/djamaile',
    label: 'GitHub',
  },
];

export const Socials = () => {
  useEffect(() => {
    const existing = document.getElementById('font-awesome-css');
    if (!existing) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://use.fontawesome.com/releases/v5.15.4/css/all.css';
      link.id = 'font-awesome-css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
      }}
    >
      {socialDetails.map(social => (
        <IconButton
          key={social.name}
          component="a"
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 28,
            transition: 'all 0.2s ease',
            '&:hover': {
              color: 'white',
              transform: 'translateY(-3px)',
              bgcolor: 'rgba(255,255,255,0.15)',
            },
          }}
        >
          <Icon className={social.classname} sx={{ fontSize: 'inherit' }} />
        </IconButton>
      ))}
    </Box>
  );
};
