// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn Uni-V.CC',
  tagline: 'Get started with Uni-V.CC.\nThe central repository for all your VRChat Creator Companion needs!',
  favicon: 'img/favicon.ico',

  url: 'https://learn.uni-v.cc',
  baseUrl: '/',

  organizationName: 'uni-v-cc',
  projectName: 'learn',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Uni-V.CC',
        logo: {
          alt: 'Uni-V.CC Logo',
          src: 'https://uni-v.cc/favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userSidebar',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'creatorSidebar',
            position: 'left',
            label: 'Creator Guide',
          },
          {
            href: 'https://github.com/uni-v-cc/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'For Users',
                to: '/docs/user/intro',
              },
              {
                label: 'For Creators',
                to: '/docs/creator/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://uni-v.cc/go/discord',
              },
              {
                label: 'Bluesky',
                href: 'https://uni-v.cc/go/bsky',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Uni-V.CC. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['json', 'properties'],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
