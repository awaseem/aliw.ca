import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { NameHeader } from '../components/NameHeader'
import { MainContent } from '../components/MainContent'
import { Footer } from '../components/Footer'
import { AnimatedContainer, Animation } from '../components/AnimatedContainer'
import { IntoHeader } from '../components/IntroHeader'

import homeData from '../data/home'

const IndexContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const IntroContainer = styled.div`
  position: fixed;
  top: 45%;
  left: 45%;
`

function IndexPage() {
  const [introAnimation, setIntroAnimation] = useState(Animation.hidden)
  const [animation, setAnimation] = useState(Animation.hidden)
  const [startSkillAnimation, setStartSkillAnimation] = useState(false)

  // useEffect(() => setAnimation(Animation.show), [])

  useEffect(() => {
    setIntroAnimation(Animation.show)

    setTimeout(() => {
      setIntroAnimation(Animation.leave)
    }, 1250)

    setTimeout(() => {
      setAnimation(Animation.show)
    }, 1400)

    setTimeout(() => {
      setStartSkillAnimation(true)
    }, 1600)
  }, [])

  return (
    <IndexLayout>
      <Page>
        <Container>
          <IndexContainer>
            <IntroContainer>
              <AnimatedContainer animation={introAnimation} delay={150}>
                <IntoHeader />
              </AnimatedContainer>
            </IntroContainer>
            <AnimatedContainer animation={animation} key={'Header'} delay={350}>
              <NameHeader name={homeData.name} />
            </AnimatedContainer>
            <AnimatedContainer animation={animation} key={'Content'} delay={200}>
              <MainContent
                skills={homeData.skills}
                animateSkills={startSkillAnimation}
                currentJob={homeData.currentCompany.name}
                previousJob={homeData.previousCompany.name}
                email={homeData.email}
              />
            </AnimatedContainer>
            <AnimatedContainer key={'Footer'} animation={animation}>
              <Footer key={'Footer'} />
            </AnimatedContainer>
          </IndexContainer>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
