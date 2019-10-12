import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { NameHeader } from '../components/NameHeader'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <NameHeader name={'Ali Waseem'} />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
