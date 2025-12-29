import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Go', 'Python'] },
  { category: 'Cloud', items: ['Kubernetes', 'GCP', 'AWS'] },
  { category: 'Tools', items: ['Backstage', 'Prometheus', 'Docker'] },
];

export const About: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 3 },
        maxWidth: 900,
        mx: 'auto',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 3,
          textAlign: 'center',
          color: 'var(--ifm-heading-color)',
        }}
      >
        About Me
      </Typography>

      <Typography
        sx={{
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: 'var(--ifm-font-color-base)',
          textAlign: 'center',
          maxWidth: 700,
          mx: 'auto',
          mb: 4,
        }}
      >
        Software Engineer at Spotify working on Backstage. Passionate about
        developer experience, cloud infrastructure, and building tools that
        make developers more productive. Based in Amsterdam.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        {skills.map(skillGroup => (
          <Box
            key={skillGroup.category}
            sx={{
              textAlign: 'center',
              minWidth: 150,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--portfolio-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                mb: 1,
              }}
            >
              {skillGroup.category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
              {skillGroup.items.map(skill => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{
                    bgcolor: 'var(--ifm-color-primary)',
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
