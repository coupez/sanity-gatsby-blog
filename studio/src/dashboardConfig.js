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
                  buildHookId: '5e99fb55b0c1348b39b6274b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-49g2hpio',
                  apiId: '7cbf3e62-7820-4c83-877e-4318628d9e92'
                },
                {
                  buildHookId: '5e99fb5504f5e18206b3c050',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vxz6pwo2',
                  apiId: 'ee7aa2ac-4c07-4da4-94e4-5fb10f34d0f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coupez/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vxz6pwo2.netlify.app', category: 'apps' }
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
