import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledContainer = styled.div``

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  margin-bottom: 1.75rem;
`

const MainHeader = styled.h1`
  font-size: 4rem;
  font-weight: 300;
`

const TechWeight = styled.b`
  font-weight: 500;
`

const TaglineContainer = styled.div`
  margin-bottom: 1.75rem;
`

const EmailTag = styled.a`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${colors.black};
  cursor: pointer;
`

const JobLocationHref = styled.a`
  font-weight: 500;
  color: ${colors.black};
  text-decoration: underline;
  cursor: pointer;
`

export interface MainContentProps {
  email: string
  currentJob: string
  previousJob: string
}

export function MainContent({ email, currentJob, previousJob }: MainContentProps) {
  return (
    <StyledContainer>
      <HeadingContainer>
        <MainHeader>
          Let's talk about <TechWeight>TypeScript.</TechWeight>
        </MainHeader>
      </HeadingContainer>
      <TaglineContainer>
        <p>
          Ali is a <b>Full Stack Developer</b> currently working at{' '}
          <JobLocationHref onClick={() => undefined}>{currentJob}.</JobLocationHref>
        </p>
        <p>
          Previously at <JobLocationHref>{previousJob}</JobLocationHref>
        </p>
      </TaglineContainer>
      <EmailTag>{email}</EmailTag>
    </StyledContainer>
  )
}
