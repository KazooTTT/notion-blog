import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'KazooTTT-Blog-adb63de9152d4d05aea07d6f28680506',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'KazooTTT Blog',
  domain: 'kazoottt.top',
  author: 'KazooTTT',

  // open graph metadata (optional)
  description: 'KazooTTT Blog | 声控烤箱',

  // social usernames (optional)
  twitter: 'kazoottt',
  github: 'kazoottt',
  // linkedin: '#',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '博文',
      pageId: '3e5c0b67923444efaa045926d8355cd1'
    },
    {
      title: '项目',
      pageId: '6fcb144bb98f4c70821fdfe30f298a74'
    },
    {
      title: '周报',
      pageId: 'a8c6ff27e66a4c8a9051ea745deb4bf6'
    },
    {
      title: '安利',
      pageId: 'c4058ec70cf0467a85e404020615dd42'
    },
    {
      title: '关于我',
      pageId: '54de916b2a7e46ca9d91ab8d38087245'
    },
    {
      title: 'rss',
      url: '/feed'
    }
  ],

  giscusProps: {
    repo: 'kazoottt/notion-blog',
    repoId: 'R_kgDOKEsy1g',
    category: 'Announcements',
    categoryId: 'DIC_kwDOKEsy1s4CYiQt',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme',
    lang: 'zh-CN',
    loading: 'lazy'
  }
})
