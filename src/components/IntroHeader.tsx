import React from 'react'
import styled from '@emotion/styled'

const AbsoluteCenteredDiv = styled.div``

const IntroH1 = styled.h1`
  font-size: 4rem;
  font-weight: 500;
`

export function IntoHeader() {
  return (
    <AbsoluteCenteredDiv>
      <IntroH1>Hi.</IntroH1>
    </AbsoluteCenteredDiv>
  )
}
