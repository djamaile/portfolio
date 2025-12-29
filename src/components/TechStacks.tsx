import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

interface TechStackProps {
  stack: string[];
}

export const TechStacks: React.FC<TechStackProps> = ({ stack }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
      {stack.map(tech => (
        <Chip
          key={tech}
          label={tech}
          size="small"
          variant="outlined"
          sx={{
            borderColor: 'var(--ifm-color-primary-light)',
            color: 'var(--ifm-color-primary)',
            fontWeight: 500,
            fontSize: '0.75rem',
            height: 24,
            '&:hover': {
              bgcolor: 'var(--ifm-color-primary)',
              color: 'white',
              borderColor: 'var(--ifm-color-primary)',
            },
            transition: 'all 0.15s ease',
          }}
        />
      ))}
    </Box>
  );
};
