import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
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
          url
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

const Container = styled.div`
  margin: 0 auto;
  max-width: 52rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
  return (
    <IndexLayout>
      <Page>
        <Container>
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
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default PageTemplate
