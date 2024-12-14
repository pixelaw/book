import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'PixeLAW Documentation',
  description: 'Documentation for PixeLAW - an autonomous pixel playground',
  iconUrl: '/pixelaw-icon.jpeg',
  logoUrl: '/pixelaw-icon.jpeg',
  font: {
    google: 'Open Sans',
  },
  theme: {
    colorScheme: 'dark',
    variables: {
      color: {
        textAccent: '#65B4F7',
        background: '#0c0c0c',
        backgroundDark: '#121212',
        noteBackground: '#1a1a1a',
      },
    },
  },
  // サイドバーの設定
  sidebar: [
    {
      text: 'Getting Started',
      items: [
        { text: 'Quick Start (Dojo)', link: '/getting-started/quick-start' },
        { text: 'Quick Start (MUD)', link: '/getting-started/quick-start-mud' },
      ],
    },
    {
      text: 'Build Your App',
      items: [
        { text: 'Build App (Dojo)', link: '/build-app/build-app' },
        { text: 'Deploy App (Dojo)', link: '/build-app/deploy-app' },
        { text: 'Build App (MUD)', link: '/build-app/build-app-mud' },
        { text: 'Deploy App (MUD)', link: '/build-app/deploy-app-mud' },
      ],
    },
    {
      text: 'Architecture',
      items: [
        { text: 'Overview', link: '/architecture/overview' },
        { text: 'Interoperability', link: '/architecture/interoperability' },
      ],
    },
    {
      text: 'Games',
      items: [
        { text: 'Overview', link: '/games/overview' },
        { text: 'Paint', link: '/games/paint' },
        { text: 'Snake', link: '/games/snake' },
        { text: 'Minesweeper', link: '/games/minesweeper' },
        { text: 'RPS', link: '/games/rps' },
        { text: 'TicTacToe', link: '/games/tictactoe' },
        { text: 'Treasure Hunt', link: '/games/treasure-hunt' },
      ],
    },
    {
      text: 'App Tutorials',
      items: [
        { text: 'Minesweeper', link: '/app-tutorials/minesweeper/intro' },
        {
          text: 'Init and Interact',
          link: '/app-tutorials/minesweeper/init-interact',
        },
        {
          text: 'Implementation',
          link: '/app-tutorials/minesweeper/implementation',
        },
      ],
    },
    {
      text: 'Community',
      link: '/community',
    },
  ],

  // トップナビゲーション
  topNav: [
    { text: 'Guide', link: '/getting-started/quick-start' },
    { text: 'Games', link: '/games/overview' },
    { text: 'Tutorials', link: '/app-tutorials/minesweeper/intro' },
  ],

  // ソーシャルリンク
  socials: [
    { icon: 'github', link: 'https://github.com/pixelaw' },
    { icon: 'x', link: 'https://twitter.com/0xPixeLAW' },
    { icon: 'discord', link: 'https://t.co/jKDjNbFdZ5' },
  ],
})
