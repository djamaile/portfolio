import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Project, Experience, Education } from '.';
import { projects, experience, education } from '../utils/data';

export const PersonalTabs = () => {
  return (
    <Tabs>
      <TabItem value="projects" label="Projects" default>
        <Box sx={{ py: 2 }}>
          {projects.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </Box>
      </TabItem>
      <TabItem value="resume" label="Resume">
        <Box sx={{ py: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: 'var(--ifm-heading-color)',
            }}
          >
            Experience
          </Typography>
          {experience.map((props, idx) => (
            <Experience key={idx} {...props} />
          ))}

          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2,
              mt: 4,
              color: 'var(--ifm-heading-color)',
            }}
          >
            Education
          </Typography>
          {education.map((props, idx) => (
            <Education key={idx} {...props} />
          ))}
        </Box>
      </TabItem>
    </Tabs>
  );
};
