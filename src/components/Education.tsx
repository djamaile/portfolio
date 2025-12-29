import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

interface EducationProps {
  img: string;
  school: string;
  study: string;
  date: string;
}

export const Education = ({ img, school, study, date }: EducationProps) => {
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
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Avatar
            src={img}
            alt={school}
            sx={{
              width: 48,
              height: 48,
              bgcolor: 'var(--ifm-color-primary-lightest)',
              color: 'var(--ifm-color-primary)',
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {school.charAt(0)}
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
              {school}
            </Typography>
            <Typography
              sx={{
                color: 'var(--ifm-font-color-base)',
                fontSize: '0.9rem',
              }}
            >
              {study}
            </Typography>
            <Typography
              sx={{
                color: 'var(--portfolio-text-muted)',
                fontSize: '0.8rem',
                mt: 0.5,
              }}
            >
              {date}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
