import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

export interface ProfileImageQuery {
  fileName: {
    childImageSharp: {
      fluid: any
    }
  }
}

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/footer-pic-2-much-pomade.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Container = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export function BlogFooter() {
  const data = useStaticQuery<ProfileImageQuery>(query)

  return (
    <Container>
      <Img
        style={{ width: '100%', maxWidth: 100, height: 100, borderRadius: '100%', marginRight: 25 }}
        imgStyle={{ objectPosition: '50% 25%' }}
        fluid={data.fileName.childImageSharp.fluid}
      />
      <div>
        <h3>Ali Waseem</h3>
        <p>
          <i>
            Thanks for reading my post, feel free to <a href="https://ca.linkedin.com/in/waseema393">connect</a> and message me on LinkedIn.
            I answer every message!
          </i>
        </p>
      </div>
    </Container>
  )
}
