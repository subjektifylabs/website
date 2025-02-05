import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Subjektify',
  tagline: 'Decentralized applications development environment for professionals',
  favicon: 'img/favicon.ico',
  url: 'https://subjektify.dev',
  baseUrl: '/',

  organizationName: 'subjektify',
  projectName: 'website',

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
          label: 'Learn',
          to: '/docs/learn',
          position: 'left',
        },
        {
          type: 'html',
          value: '<a>Solutions</a>',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          items: [
            {
              label: 'Guides',
              to: '/docs/guides',
            },
            {
              label: 'Courses',
              to: '/courses',
            },
            {
              label: 'Reference',
              to: '/docs/reference',
            }
          ],
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
          title: 'Learn',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Resources',
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
              href: 'https://github.com/subjektifylabs',
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
