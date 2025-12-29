import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Djamaile Rahamat',
  tagline: 'Software Engineer at Spotify. Passionate about developer experience, cloud infrastructure, and building tools that make developers productive.',
  url: 'https://djamaile.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'djamaile',
  projectName: 'portfolio',
  trailingSlash: true,

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/mob-2.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#6366f1',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black-translucent',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/mob-2.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/mob-2.png',
            color: '#6366f1',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/mob-2.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#6366f1',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'Djamaile Rahamat',
      logo: {
        alt: 'Djamaile Rahamat',
        src: 'img/mob-2.png',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/djamaile',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/djamaile',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `${new Date().getFullYear()} Djamaile Rahamat. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      { name: 'keywords', content: 'software engineer, developer, react, typescript, backstage, spotify, cloud, kubernetes' },
      { name: 'author', content: 'Djamaile Rahamat' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Djamaile Rahamat' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@daborhon' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/djamaile/portfolio/edit/master/',
          feedOptions: {
            type: 'all',
          },
          postsPerPage: 3,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};

export default config;
