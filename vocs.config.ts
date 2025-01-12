import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started/quick-start',
      collapsed: true,
      items: [
        {
          text: 'Build a simple app',
          link: '/getting-started/build-app/1-build-app',
        },
        {
          text: 'Deploy your app',
          link: '/getting-started/build-app/2-deploy-app',
        },
      ],
    
    },
    {
      text: 'Architecture',
      collapsed: true,
      items: [
        {
          text: 'Overview',
          link: '/architecture/overview',
        },
        {
          text: 'Interoperability',
          link: '/architecture/interoperability',
        },
      ],
    },
    {
      text: 'App Tutorials',
      link: '/app-tutorials/tutorials',
      collapsed: true,
      items: [
        {
          text: 'Minesweeper',
          collapsed: true,
          items: [
            {
              text: 'Intro into Minesweeper',
              link: '/app-tutorials/minesweeper/0-minesweeper-intro',
            },
            {
              text: 'The interact function',
              link: '/app-tutorials/minesweeper/1-init-and-interact',
            },
            {
              text: 'Finalize the game',
              link: '/app-tutorials/minesweeper/2-implement-rest',
            },
          ],
        },
      ],
    },
  ],
})
