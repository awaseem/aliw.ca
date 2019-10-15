import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { BlogContainer } from '../components/BlogContainer'
import { NameHeader } from '../components/NameHeader'
import { BlogPostRow } from '../components/BlogPostRow'
import { Animation, AnimatedContainer } from '../components/AnimatedContainer'

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
  margin-top: 3.5rem;
  margin-bottom: 1rem;
`

const TagLineContainer = styled.div`
  margin-bottom: 0rem;
`

const Title = styled.h1`
  font-size: 4rem;
`

const Tagline = styled.p`
  font-style: italic;
`

const PostsContainer = styled.div`
  margin-top: 3rem;
`

function Blog({ data }: BlogProps) {
  const [animated, setAnimation] = useState(Animation.hidden)

  useEffect(() => {
    setAnimation(Animation.show)
  }, [])

  const blogPosts = data.allMarkdownRemark.edges.map((data, index) => (
    <AnimatedContainer key={data.node.fields.slug} animation={animated} delay={300 + index * 100}>
      <BlogPostRow
        title={data.node.frontmatter.title}
        date={data.node.frontmatter.date}
        timeToRead={data.node.timeToRead}
        link={data.node.fields.slug}
      />
    </AnimatedContainer>
  ))

  return (
    <IndexLayout>
      <Page>
        <BlogContainer>
          <AnimatedContainer animation={animated} delay={100}>
            <NameHeader />
          </AnimatedContainer>
          <AnimatedContainer animation={animated} delay={200}>
            <TitleContainer>
              <Title>Blog.</Title>
            </TitleContainer>
            <TagLineContainer>
              <Tagline>Opinions on development, design and life.</Tagline>
            </TagLineContainer>
            <hr />
          </AnimatedContainer>
          <PostsContainer>{blogPosts}</PostsContainer>
        </BlogContainer>
      </Page>
    </IndexLayout>
  )
}

export default Blog
