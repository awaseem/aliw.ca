import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { IntoHeader } from '../components/IntroHeader'

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <IntoHeader text={'404.'} />
      </Container>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
