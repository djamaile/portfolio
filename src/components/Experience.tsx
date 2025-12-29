import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { TechStacks } from '.';

interface ExperienceProps {
  img?: string;
  jobTitle: string;
  company: string;
  date: string;
  workLength: string;
  location: string;
  tasks: string[];
  techstack: string[];
}

export const Experience = ({
  img,
  jobTitle,
  company,
  date,
  workLength,
  location,
  tasks,
  techstack,
}: ExperienceProps) => {
  return (
    <Card
      sx={{
        mb: 2,
        border: '1px solid var(--portfolio-card-border)',
        bgcolor: 'var(--portfolio-card-bg)',
        boxShadow: 'var(--ifm-global-shadow-md)',
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: 'var(--ifm-global-shadow-tl)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Avatar
            src={img}
            alt={company}
            sx={{
              width: 48,
              height: 48,
              bgcolor: 'var(--ifm-color-primary-lightest)',
              color: 'var(--ifm-color-primary)',
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {!img && company.charAt(0)}
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: '1rem',
                color: 'var(--ifm-heading-color)',
                mb: 0.5,
              }}
            >
              {jobTitle}
            </Typography>
            <Typography
              sx={{
                color: 'var(--ifm-color-primary)',
                fontWeight: 500,
                fontSize: '0.9rem',
              }}
            >
              {company}
            </Typography>
            <Typography
              sx={{
                color: 'var(--portfolio-text-muted)',
                fontSize: '0.8rem',
                mt: 0.5,
              }}
            >
              {date} · {workLength} · {location}
            </Typography>
          </Box>
        </Box>

        <Box
          component="ul"
          sx={{
            pl: 2,
            mb: 2,
            '& li': {
              color: 'var(--ifm-font-color-base)',
              fontSize: '0.9rem',
              lineHeight: 1.6,
              mb: 0.5,
            },
          }}
        >
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </Box>

        <TechStacks stack={techstack} />
      </CardContent>
    </Card>
  );
};
