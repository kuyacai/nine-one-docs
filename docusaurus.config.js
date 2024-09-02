// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const dotenv = require('dotenv');

dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nine One AI',
  tagline: 'Nine One AI are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nineone.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kuyacai', // Usually your GitHub org/user name.
  projectName: 'nine-one-docs', // Usually your repo name.

  onBrokenLinks: 'warn', // 'ignore' | 'throw' | 'warn' 
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      zh: {
        label: '中文简体',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
      },
    },
  },
  themes: [
    // 其他主题...
    [
      '@docusaurus/theme-classic',
      {
        id: 'custom-toc',
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [[require('./plugins/remark-custom-numbered-headings'), { separator: '.' }]],
          //editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [[require('./plugins/remark-custom-numbered-headings'), { separator: '.' }]],
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/nine-one-400-1800.png',
      navbar: {
        title: 'Nine One AI',
        logo: {
          alt: 'Nine One AI Logo',
          src: 'img/nine_one.svg',
          href: 'https://nineone.ai',
        },
        items: [
          {
            to: '/#',
            label: 'Agents',
            position: 'left'
          },
          {
            to: '/#',
            label: 'Chat Bots',
            position: 'left'
          },
          {
            to: '/#',
            label: 'Tookits',
            position: 'left'
          },
          {
            to: '/#',
            label: 'Models',
            position: 'left'
          },
          {
            to: '/#',
            label: 'Download',
            position: 'left'
          },
          {
            to: '/#',
            label: 'Pricing',
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Help Center',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',

            className: "header-github-link",
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Agents',
            items: [
              {
                label: 'I18n Assistant',
                to: '/',
              },
              {
                label: 'AI Translator',
                to: '/',
              },
              {
                label: 'Amazon Assistant',
                to: '/',
              },
              {
                label: 'Shopify Assistant',
                to: '/',
              },
              {
                label: 'Academic Master',
                to: '/',
              },
            ],
          },
          {
            title: 'Chat Bots',
            items: [
              {
                label: '中文润色专家',
                to: '/',
              },
              {
                label: 'Slogan Master',
                to: '/',
              },
              {
                label: 'Title Generator',
                to: '/',
              },
              {
                label: '小红书写作专家',
                to: '/',
              },
              {
                label: '公文写作专家',
                to: '/',
              }
            ],
          },
          {
            title: 'Image Tools',
            items: [
              {
                label: 'Remove Background',
                to: '/',
              },
              {
                label: 'Image Converter',
                to: '/',
              },
              {
                label: 'Old Photo Restoration',
                to: '/',
              },
              {
                label: 'Image Upscaler',
                to: '/',
              },
              {
                label: 'Image to Excel',
                to: '/',
              }
            ],
          },
          {
            title: 'PDF Tools',
            items: [
              {
                label: 'PDF Converter',
                to: '/',
              },
              {
                label: 'PDF OCR',
                to: '/',
              },
              {
                label: 'PDF Summary',
                to: '/',
              }
            ],
          },
          {
            title: 'Video Tools',
            items: [
              {
                label: 'Transcribe master',
                to: '/',
              },
              {
                label: 'Video to PDF',
                to: '/',
              }
            ],
          },
          {
            title: 'Models',
            items: [
              {
                label: 'GPT-4o',
                to: '/',
              },
              {
                label: 'GPT-4o',
                to: '/',
              }
            ],
          },

          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy',
                to: '/docs/privacy', // 对应 privacy.md 文件的路径
              },
              {
                label: 'Terms & Conditions',
                to: '/docs/terms', // 对应 privacy.md 文件的路径
              }

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nine On AI. `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  stylesheets: [
    {
      href: '/css/custom.css',
      type: 'text/css',
    },
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // 最大缩放图片尺寸
        min: 640, // 最小缩放图片尺寸
        steps: 2, // 在 min 和 max 之间生成的图片数量
        disableInDev: false,
      },
    ],
    './plugins/docusaurus-plugin-env',
    './plugins/docusaurus-plugin-proxy',
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-DD28CVV37B',
        anonymizeIP: true,
      },
    ]
  ],
};

export default config;
