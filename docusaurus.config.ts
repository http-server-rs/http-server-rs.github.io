import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import tailwindPlugin from "./plugins/tailwind-config.cjs";
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rust HTTP Server',
  tagline: 'Serve static files or proxy requests to other servers with a single command.',
  favicon: 'icons/logo.svg',

  // Set the production url of your site here
  url: 'https://http-server-rs.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Rust HTTP Server', // Usually your GitHub org/user name.
  projectName: 'http-server-rs.github.io ', // Usually your repo name.

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
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [tailwindPlugin],
  themeConfig: {
    // Replace with your project's social card
    image: 'icons/logo.svg',
    navbar: {
      title: '',
      logo: {
        alt: 'Http Server Logo',
        src: 'icons/logo.svg',
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
