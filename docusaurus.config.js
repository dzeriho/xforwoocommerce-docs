// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XforWooCommerce Documentation',
  tagline: 'Documentation for XforWooCommerce plugins pack.',
  favicon: 'img/xforwoocommerce-logo.ico',

  // Set the production url of your site here
  url: 'https://docs.xforwoocommerce.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'xdocumentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          /*// Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
        blog: {
          showReadingTime: true,
          /*// Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
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
      image: 'img/docs-xforwoocommerce-com.png',
      navbar: {
        logo: {
          alt: 'XforWooCommerce Logo',
          src: 'img/xforwoocommerce-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/faq', label: 'FAQ', position: 'left'},
          {
            href: 'https://help.xforwoocommerce.com/',
            label: 'Back to Help Center',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'XforWooCommerce',
            items: [
              {
                label: 'XWC',
                href: 'https://xforwoocommerce.com/',
              },
              {
                label: 'XWC Demos',
                href: 'https://demos.xforwoocommerce.com/',
              },
              {
                label: 'XWC Help Center',
                href: 'https://help.xforwoocommerce.com/',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/introduction',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/XforWooCommerce',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XforWooCommerce`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],
      },
    }),
};

module.exports = config;
