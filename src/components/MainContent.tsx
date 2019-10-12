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
  font-weight: 300;
`

const TechWeight = styled.b`
  font-weight: 500;
`

const EmailTag = styled.a`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${colors.black};
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
      <p>
        Ali is a <b>Full Stack Developer</b> currently working at <i>{currentJob}.</i> Previously at <i>{previousJob}</i>
      </p>
      <EmailTag>{email}</EmailTag>
    </StyledContainer>
  )
}
