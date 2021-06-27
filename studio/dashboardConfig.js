export default {
  widgets: [
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
                  buildHookId: '60d84f4db2ce2d64a1a110a3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchensink-studio-9u62jn7u',
                  apiId: '14295e0e-2654-4caa-a278-7c9aefd4056e'
                },
                {
                  buildHookId: '60d84f4d3228688955d17e9d',
                  title: 'Blog Website',
                  name: 'sanity-kitchensink-web-nbtqawnt',
                  apiId: '959f01bb-289a-455c-ac76-330f1653b6d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gavin-hall/sanity-kitchensink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchensink-web-nbtqawnt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
