import React from 'react'
import styled from '@emotion/styled'

const AbsoluteCenteredDiv = styled.div``

const IntroH1 = styled.h1`
  font-size: 4rem;
  font-weight: 500;
`

export interface IntoHeaderProps {
  text: string
}

export function IntoHeader({ text }: IntoHeaderProps) {
  return (
    <AbsoluteCenteredDiv>
      <IntroH1>{text}</IntroH1>
    </AbsoluteCenteredDiv>
  )
}
