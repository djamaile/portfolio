import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';
import useThemeContext from '@theme/hooks/useThemeContext';
import Icon from '@mui/material/Icon';

const socialDetails = [
  {
    name: 'linkedin',
    classname: 'fab fa-linkedin fa-fw',
    link: 'https://www.linkedin.com/in/djamaile/',
  },
  {
    name: 'github',
    classname: 'fab fa-github fa-fw',
    link: 'https://github.com/djamaile',
  },
  {
    name: 'youtube',
    classname: 'fab fa-youtube fa-fw',
    link: 'https://www.linkedin.com/in/djamaile/',
  },
  {
    name: 'mail',
    classname: 'fab fa-envelope fa-fw',
    link: 'mailto:rdjamaile@gmail.com',
  },
];

const getHoverIconColor = (site: string): string => {
  switch (site) {
    case 'linkedin':
      return '#0a66c2';
    case 'github':
      return 'purple';
    case 'youtube':
      return '#c4302b';
    case 'mail':
      return 'brown';
    default:
      return 'blue';
  }
};

export const Socials: React.FC = () => {
  const { isDarkTheme } = useThemeContext();

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      if (node.parentNode !== undefined) {
        node.parentNode.removeChilde(node);
      }
    };
  }, []);

  return (
    <div>
      {socialDetails.map(cn => {
        return (
          <a
            href={cn.link}
            target="_blank"
            rel="noopener noreferrer"
            key={cn.classname}
          >
            <Icon
              className={cn.classname}
              sx={{
                color: isDarkTheme ? 'white' : 'black',
                fontSize: 30,
                marginTop: 1,
                marginRight: 1,
                '&:hover': {
                  color: `${getHoverIconColor(cn.name)}`,
                },
              }}
            />
          </a>
        );
      })}
    </div>
  );
};
