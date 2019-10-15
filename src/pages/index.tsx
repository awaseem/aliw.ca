import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { NameHeader } from '../components/NameHeader'
import { MainContent } from '../components/MainContent'
import { Footer } from '../components/Footer'
import { AnimatedContainer, Animation } from '../components/AnimatedContainer'
import { IntroAnimationHeader } from '../components/IntroAnimationHeader'

const IndexContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

interface IndexProps {
  data: {
    site: {
      siteMetadata: {
        skills: string[]
        author: {
          previousCompany: {
            link: string
            name: string
          }
          currentCompany: {
            link: string
            name: string
          }
          email: string
          jobTitle: string
        }
      }
    }
  }
}

export const query = graphql`
  {
    site {
      siteMetadata {
        skills
        author {
          name
          linkedin
          previousCompany {
            link
            name
          }
          currentCompany {
            link
            name
          }
          email
          jobTitle
        }
      }
    }
  }
`

function IndexPage({ data }: IndexProps) {
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
            <IntroAnimationHeader text={'Hi.'} delay={150} animation={introAnimation} />
            <AnimatedContainer animation={animation} key={'Header'} delay={350}>
              <NameHeader />
            </AnimatedContainer>
            <AnimatedContainer animation={animation} key={'Content'} delay={200}>
              <MainContent
                jobTitle={data.site.siteMetadata.author.jobTitle}
                skills={data.site.siteMetadata.skills}
                animateSkills={startSkillAnimation}
                currentJob={data.site.siteMetadata.author.currentCompany.name}
                currentJobLink={data.site.siteMetadata.author.currentCompany.link}
                previousJob={data.site.siteMetadata.author.previousCompany.name}
                previousJobLink={data.site.siteMetadata.author.previousCompany.link}
                email={data.site.siteMetadata.author.email}
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
