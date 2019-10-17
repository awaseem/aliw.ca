'use strict'

module.exports = {
  siteMetadata: {
    title: 'Ali Waseem',
    description: 'My personal website and blog to talk about anything related from life to development',
    keywords: 'ali waseem, awaseem, github, full stack developer, calgary, yyc, yycdev',
    siteUrl: 'https://aliwaseem.com',
    author: {
      name: 'Ali Waseem',
      email: 'hello@aliwaseem.com',
      linkedin: 'https://ca.linkedin.com/in/waseema393',
      github: 'https://github.com/awaseem',
      jobTitle: 'Full Stack Developer',
      currentCompany: {
        name: 'ATB Innovation',
        link: 'https://alphabeta.atb.com/'
      },
      previousCompany: {
        name: 'Shareworks by Morgan Stanley',
        link: 'https://www.shareworks.com/'
      }
    },
    skills: [
      'TypeScript',
      'Golang',
      'Java',
      'Kotlin',
      'Swift',
      'Xcode',
      'CSS',
      'JavaScript',
      'AWS',
      'GCP',
      'Machine Learning',
      'Artificial Intelligence',
      'Jenkins X',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Rust',
      'Continuous Deployment',
      'Full Stack Development',
      'Design',
      'Swift UI',
      'React Native',
      'React',
      'Vue.js',
      'gRPC',
      'GraphQL',
      'REST Api',
      'Node.js',
      'C++',
      'C#',
      'Unity',
      'Linting',
      'Debugging',
      'Decision Architecture',
      'TensorFlow',
      'Python',
      'Scala',
      'Apache Beam',
      'MySQL',
      'MongoDB',
      'PostgreSQL'
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ali Waseem`,
        short_name: `awaseem`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin: 2rem auto;'
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: ['100', '100i', '300', '300i', '400', '400i', '500', '500i', '700', '700i', '900', '900i']
          }
        ]
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
