import React from 'react'
import styled from '@emotion/styled'
import { FaGithub, FaLinkedinIn, FaBookOpen } from 'react-icons/fa'
import { graphql, useStaticQuery, Link } from 'gatsby'

const StyledContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledText = styled.span`
  font-weight: 400;
  font-size: 1.35rem;
`

export interface HeaderQuery {
  site: {
    siteMetadata: {
      author: {
        name: string
        linkedin: string
        github: string
      }
    }
  }
}

export function NameHeader() {
  const data = useStaticQuery<HeaderQuery>(graphql`
    {
      site {
        siteMetadata {
          author {
            name
            linkedin
            github
          }
        }
      }
    }
  `)

  return (
    <StyledContainer>
      <div>
        <StyledText>{data.site.siteMetadata.author.name}</StyledText>
      </div>
      <div>
        <Link to={'/blog'}>
          <FaBookOpen size={24} />
        </Link>
        <a target={'_blank'} href={data.site.siteMetadata.author.github}>
          <FaGithub size={24} style={{ marginLeft: '0.75rem' }} />
        </a>
        <a target={'_blank'} href={data.site.siteMetadata.author.linkedin}>
          <FaLinkedinIn style={{ marginLeft: '0.75rem' }} size={24} />
        </a>
      </div>
    </StyledContainer>
  )
}
