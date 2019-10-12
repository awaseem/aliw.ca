import React from 'react'
import posed from 'react-pose'

export enum Animation {
  hidden = 'hidden',
  show = 'show'
}

export interface AnimatedContainerProps {
  animation: Animation
  children: React.ReactNode
  delay?: number
}

const AnimatedNameContainer = posed.div({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, delay: (props: { delay: number }) => props.delay || 0 }
})

export function AnimatedContainer({ animation = Animation.hidden, children, delay = 0 }: AnimatedContainerProps) {
  return (
    <AnimatedNameContainer delay={delay} pose={animation}>
      {children}
    </AnimatedNameContainer>
  )
}
