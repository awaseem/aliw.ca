import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { NameHeader } from '../components/NameHeader'
import { MainContent } from '../components/MainContent'
import { Footer } from '../components/Footer'
import { AnimatedContainer, Animation } from '../components/AnimatedContainer'

const IndexContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`
function IndexPage() {
  const [animation, setAnimation] = useState(Animation.hidden)

  useEffect(() => {
    setAnimation(Animation.show)
  }, [])

  return (
    <IndexLayout>
      <Page>
        <Container>
          <IndexContainer>
            <AnimatedContainer animation={animation} key={'Header'} delay={350}>
              <NameHeader name={'Ali Waseem'} />
            </AnimatedContainer>
            <AnimatedContainer animation={animation} key={'Content'} delay={200}>
              <MainContent currentJob={'ATB Innovation'} previousJob={'Shareworks by Morgan Stanley'} email={'hello@aliwaseem.com'} />
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
