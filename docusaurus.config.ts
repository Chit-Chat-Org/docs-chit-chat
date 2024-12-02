import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Chit Chat',
  tagline: 'Chatbot integration made easy.',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://chit-chat-org.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Chit-Chat-Org', // Usually your GitHub org/user name.
  projectName: 'docs-chit-chat', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve documentation at the root
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/Chit-Chat-Org/docs-chit-chat/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Chit-Chat-Org/docs-chit-chat/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/chit-chat.png',
    navbar: {
      title: 'Chit Chat',
      logo: {
        alt: 'Chit Chat Logo',
        src: 'img/chit-chat.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/Chit-Chat-Org/',
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
              label: 'Tutorial',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/chatbot',
            },
            {
              label: 'Community Forum',
              href: 'https://github.com/Chit-Chat-Org/chit-chat-v2/issues',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/apurvjha_eth',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Chit-Chat-Org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chit Chat Org.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
