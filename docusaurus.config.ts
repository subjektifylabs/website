import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Subjektify',
  tagline: 'Decentralized applications development environment for professionals',
  favicon: 'img/favicon.ico',
  url: 'https://subjektify.dev',
  baseUrl: '/',

  organizationName: 'subjektify',
  projectName: 'dapp',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
        },
        pages: {
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { converters: ['pnpm'] },
            ],
          ]
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Subjektify',
      logo: {
        alt: 'Subjektify Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'html',
          value: '<a>Learn</a>',
          position: 'left',
        },
        {
          type: 'html',
          value: '<a>Solutions</a>',
          position: 'left',
        },
        {
          type: 'html',
          value: '<a>Resources</a>',
          position: 'left',
        },
        {
          type: 'html',
          value: '<a>Community</a>',
          position: 'left',
        },
        {
          href: 'https://github.com/subjektifylabs',
          position: 'right',
          className: "header-github-link",
          "aria-label": "GitHub"
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
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/subjektify',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/subjektifylabs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Release Notes',
              to: '/docs/release-notes',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/subjektify',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Subjektify Labs Ltd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
