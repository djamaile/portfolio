import React from 'react';
import Box from '@mui/material/Box';
import styles from './HomepageFeatures.module.css';
import { PersonalTabs } from './Tabs';

export default function HomepageFeatures() {
  return (
    <Box component="section" className={styles.features}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 900,
          mx: 'auto',
          px: { xs: 2, md: 3 },
        }}
      >
        <PersonalTabs />
      </Box>
    </Box>
  );
}
