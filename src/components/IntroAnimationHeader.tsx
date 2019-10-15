import React from 'react'
import styled from '@emotion/styled'
import { Animation, AnimatedContainer } from './AnimatedContainer'
import { IntoHeader } from './IntroHeader'

const IntroContainer = styled.div`
  position: fixed;
  top: 45%;
  left: 45%;
`

export interface IntroAnimationHeaderProps {
  animation: Animation
  delay: number
  text: string
}

export function IntroAnimationHeader({ animation, delay, text }: IntroAnimationHeaderProps) {
  return (
    <IntroContainer>
      <AnimatedContainer animation={animation} delay={delay}>
        <IntoHeader text={text} />
      </AnimatedContainer>
    </IntroContainer>
  )
}
