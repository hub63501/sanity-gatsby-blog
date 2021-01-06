export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ff5a1c7081f8ed5c39c9aff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-j1h98ve8',
                  apiId: '9edbe9eb-737d-4f81-95fe-702a2225ee20'
                },
                {
                  buildHookId: '5ff5a1c7081f8ed56a9c9aad',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r7dj13v5',
                  apiId: '749b6b9f-7e97-4711-a1a4-093da4ee948c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hub63501/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r7dj13v5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
