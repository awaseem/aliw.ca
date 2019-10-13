import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import { AnimatedContainer, Animation } from './AnimatedContainer'

const skills = ['TypeScript', 'Golang']

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
  margin-left: 10px;
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
  currentJob: string
  previousJob: string
  animateSkills: boolean
}

export function MainContent({ email, currentJob, previousJob, animateSkills }: MainContentProps) {
  const [skillIndex, setSkillIndex] = useState(0)
  const [techAnimation, setTechAnimation] = useState(Animation.show)

  useEffect(() => {
    if (animateSkills) {
      setTimeout(() => {
        setTechAnimation(Animation.leave)
      }, 1500)

      setTimeout(() => {
        if (skillIndex === skills.length - 1) {
          setSkillIndex(0)
        } else {
          setSkillIndex(skillIndex + 1)
        }
      }, 2000)

      setTimeout(() => {
        setTechAnimation(Animation.show)
      }, 2500)
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
