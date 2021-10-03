import React from 'react';
import Chip from '@mui/material/Chip';

interface TechStackProps {
  stack: Array<string>;
}

export const TechStacks: React.FC<TechStackProps> = ({ stack }) => {
  return (
    <>
      {stack.map(tech => {
        return (
          <Chip
            label={tech}
            color="secondary"
            style={{ marginRight: 5 }}
            key={tech}
          />
        );
      })}
    </>
  );
};
