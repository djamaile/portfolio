import React from 'react';
import { experience, education, projects } from '../utils/data';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useThemeContext from '@theme/hooks/useThemeContext';
import { Project, Experience, Education } from '.';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const defaultProps = {
  children: null,
  dir: '',
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.defaultProps = defaultProps;

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export const Navigation: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // TODO: is a bug which makes isDarkTheme usless on first render
  const { isDarkTheme } = useThemeContext();

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const properBackgroundColor = isDarkTheme ? '#18191a' : 'white';
  const linkColor = isDarkTheme ? 'white' : '#18191a';

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{
          backgroundColor: properBackgroundColor,
          boxShadow: 'none',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          aria-label="full width tabs example"
        >
          <Tab
            label="Projects"
            {...a11yProps(0)}
            style={{ color: linkColor }}
          />
          <Tab label="Resume" {...a11yProps(1)} style={{ color: linkColor }} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ backgroundColor: properBackgroundColor }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {projects.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h2>Experience</h2>
          {experience.map((props, idx) => (
            <Experience key={idx} {...props} />
          ))}
          <h2>Education</h2>
          {education.map((props, idx) => (
            <Education key={idx} {...props} />
          ))}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};
