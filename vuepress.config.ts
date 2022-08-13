import {
  gitPlugin,
} from '@vuepress/plugin-git';
import {
  defaultTheme,
  defineUserConfig,
} from 'vuepress';

export default defineUserConfig(
  {
    title: '原神萌新笔记',
    description: '旅行者你将去往何方',
    theme: defaultTheme(
      {
        docsRepo: "Omico/GenshinImpactRookieNotes",
        docsDir: "docs",
        docsBranch: "main",
        editLink: true,
        editLinkText: "帮助我们改善此页面！",
        navbar: [
          { text: "初识原神", link: "/first-acquaintance/" },
          { text: "指南", link: "/guide/" },
        ],
      },
    ),
    plugins: [
      gitPlugin(
        {
          contributors: false,
        }
      )
    ]
  }
)
