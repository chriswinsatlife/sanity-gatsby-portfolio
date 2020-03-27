export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7e1c22aeb353e69f717edf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-phgqtex2',
                  apiId: '01459874-5864-457c-b6a4-91173965b057'
                },
                {
                  buildHookId: '5e7e1c23bbae5d0dc366d89f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-m2f8t131',
                  apiId: '05bc5120-a404-4c3b-bdfc-a96cdf888a5f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chriswinsatlife/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-m2f8t131.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
