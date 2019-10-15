import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import { AnimatedContainer, Animation } from '../components/AnimatedContainer'
import { BlogContainer } from '../components/BlogContainer'
import { NameHeader } from '../components/NameHeader'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

const HeadingContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
`

const ArticleInfoContainer = styled.div`
  margin-bottom: 3.5rem;
`

const Header = styled.h1`
  font-style: italic;
  font-weight: 500;
  font-size: 4rem;
`

export function PageTemplate({ data }: PageTemplateProps) {
  const [animation, setAnimation] = useState(Animation.hidden)

  useEffect(() => {
    setAnimation(Animation.show)
  }, [])

  return (
    <IndexLayout>
      <Page>
        <BlogContainer>
          <NameHeader />
          <AnimatedContainer animation={animation} delay={100}>
            <HeadingContainer>
              <Header>{data.markdownRemark.frontmatter.title}</Header>
            </HeadingContainer>
            <ArticleInfoContainer>
              <p>
                by{' '}
                <Link style={{ color: colors.black, fontWeight: 500 }} to={'/'}>
                  Ali Waseem
                </Link>{' '}
                on <i>{data.markdownRemark.frontmatter.date}</i>
              </p>
            </ArticleInfoContainer>
          </AnimatedContainer>
          <AnimatedContainer animation={animation} delay={300}>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </AnimatedContainer>
        </BlogContainer>
      </Page>
    </IndexLayout>
  )
}

export default PageTemplate
