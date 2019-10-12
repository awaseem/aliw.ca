import * as React from 'react'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { NameHeader } from '../components/NameHeader'
import { MainContent } from '../components/MainContent'
import { Footer } from '../components/Footer'

const IndexContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <IndexContainer>
          <NameHeader name={'Ali Waseem'} />
          <MainContent currentJob={'ATB Innovation'} previousJob={'Shareworks by Morgan Stanley'} email={'hello@aliwaseem.com'} />
          <Footer />
        </IndexContainer>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
