// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OrbisMC',
  tagline: 'Geopolitical Sandbox done right',
  url: 'https://orbismc-dev.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'orbismc', // Usually your GitHub org/user name.
  projectName: 'orbismc-docs', // Usually your repo name.

  scripts: [
    {
      src: 'https://plausible.io/js/plausible.js',
      async: false,
      defer: true,
      'data-domain': 'https://orbismc-dev.github.io/docs/',
    },
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@docusaurus/theme-classic',
      /** @type {import('@docusaurus/theme-classic').Options} */
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'src/docs',
        routeBasePath: '/',
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        routeBasePath: '/pages',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        path: 'src/posts',
        routeBasePath: '/posts',
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'OrbisMC docs',
      // logo: {
      //   alt: 'orbismc Logo',
      //   src: 'img/logo.svg',
      // },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'IP: play.orbismc.com',
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ATbfuv5Caq',
            },
            {
              label: 'Wiki',
              href: 'https://wiki.orbismc.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/orbismc-dev/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} orbismc.com.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;