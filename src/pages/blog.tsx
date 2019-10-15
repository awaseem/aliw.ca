import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { BlogContainer } from '../components/BlogContainer'
import { NameHeader } from '../components/NameHeader'
import { BlogPostRow } from '../components/BlogPostRow'
import { Footer } from '../components/Footer'
import { Animation } from '../components/AnimatedContainer'

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            slug: string
          }
          timeToRead: number
          frontmatter: {
            date: string
            title: string
          }
        }
      }>
    }
  }
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

const TitleContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`

const Title = styled.h1`
  font-size: 4rem;
`

const Tagline = styled.p`
  font-style: italic;
`

const TagLineContainer = styled.div`
  margin-bottom: 3rem;
`

function Blog({ data }: BlogProps) {
  const [animated, setAnimation] = useState(Animation.hidden)

  const blogPosts = data.allMarkdownRemark.edges.map(data => (
    <BlogPostRow
      key={data.node.fields.slug}
      title={data.node.frontmatter.title}
      date={data.node.frontmatter.date}
      timeToRead={data.node.timeToRead}
      link={data.node.fields.slug}
    />
  ))

  return (
    <IndexLayout>
      <Page>
        <BlogContainer>
          <NameHeader />
          <TitleContainer>
            <Title>Blog.</Title>
          </TitleContainer>
          <TagLineContainer>
            <Tagline>Opinions on development, design and life.</Tagline>
          </TagLineContainer>
          {blogPosts}
        </BlogContainer>
      </Page>
    </IndexLayout>
  )
}

export default Blog
