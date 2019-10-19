import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import { AnimatedContainer, Animation } from './AnimatedContainer'
import { getRandomArbitrary } from '../utils/mainUtil'

const StyledContainer = styled.div``

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`

const MainHeader = styled.h1`
  font-size: 4rem;
  font-weight: 300;
`

const TechWeight = styled.b`
  margin-left: 15px;
  font-weight: 500;

  @media screen and (max-width: 850px) {
    margin-left: 0px;
  }
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
  jobTitle: string
  currentJob: string
  currentJobLink: string
  previousJob: string
  previousJobLink: string
  animateSkills: boolean
  skills: string[]
}

export function MainContent({
  email,
  currentJob,
  currentJobLink,
  jobTitle,
  previousJob,
  previousJobLink,
  animateSkills,
  skills
}: MainContentProps) {
  const [skillIndex, setSkillIndex] = useState(0)
  const [techAnimation, setTechAnimation] = useState(Animation.show)

  useEffect(() => {
    if (animateSkills) {
      setTimeout(() => {
        setTechAnimation(Animation.leave)
      }, 1250)

      setTimeout(() => {
        const num = getRandomArbitrary(0, skills.length)
        if (num === skillIndex) {
          setSkillIndex(num + 1)
        } else {
          setSkillIndex(num)
        }
        setTechAnimation(Animation.show)
      }, 2000)
    }
  }, [animateSkills, skillIndex])

  return (
    <StyledContainer>
      <HeadingContainer>
        <MainHeader>Let's talk about</MainHeader>
        <AnimatedContainer animation={techAnimation}>
          <MainHeader>
            <TechWeight>{skills[skillIndex]}.</TechWeight>
          </MainHeader>
        </AnimatedContainer>
      </HeadingContainer>
      <TaglineContainer>
        <p>
          Ali is a <b>{jobTitle}</b> currently working at{' '}
          <JobLocationHref href={currentJobLink} target="_blank">
            {currentJob}.
          </JobLocationHref>
        </p>
        <p>
          Previously at{' '}
          <JobLocationHref href={previousJobLink} target="_blank">
            {previousJob}.
          </JobLocationHref>
        </p>
      </TaglineContainer>
      <EmailTag href={`mailto:${email}`}>{email}</EmailTag>
    </StyledContainer>
  )
}
