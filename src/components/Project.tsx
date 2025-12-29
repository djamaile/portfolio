import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TechStacks } from '.';

interface ProjectProps {
  img: string;
  title: string;
  description: string;
  codeLink?: string;
  liveLink?: string;
  techstack: string[];
}

export const Project = ({
  img,
  title,
  description,
  codeLink,
  liveLink,
  techstack,
}: ProjectProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        mb: 2,
        border: '1px solid var(--portfolio-card-border)',
        bgcolor: 'var(--portfolio-card-bg)',
        boxShadow: 'var(--ifm-global-shadow-md)',
        overflow: 'hidden',
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: 'var(--ifm-global-shadow-tl)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt={title}
        sx={{
          width: { xs: '100%', sm: 200 },
          height: { xs: 160, sm: 'auto' },
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ flex: 1, p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'var(--ifm-heading-color)',
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: 'var(--portfolio-text-muted)',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          {codeLink && (
            <Button
              component="a"
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              variant="outlined"
              sx={{
                borderColor: 'var(--ifm-color-primary)',
                color: 'var(--ifm-color-primary)',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': {
                  bgcolor: 'var(--ifm-color-primary)',
                  color: 'white',
                  borderColor: 'var(--ifm-color-primary)',
                },
              }}
            >
              Code
            </Button>
          )}
          {liveLink && (
            <Button
              component="a"
              href={liveLink.startsWith('http') ? liveLink : `https://${liveLink}`}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              variant="contained"
              sx={{
                bgcolor: 'var(--ifm-color-primary)',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': {
                  bgcolor: 'var(--ifm-color-primary-dark)',
                },
              }}
            >
              Live
            </Button>
          )}
        </Box>

        <TechStacks stack={techstack} />
      </CardContent>
    </Card>
  );
};
