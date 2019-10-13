import React from 'react'
import posed from 'react-pose'
import { PositionProperty } from 'csstype'

export enum Animation {
  hidden = 'hidden',
  show = 'show',
  leave = 'leave'
}

export interface AnimatedContainerProps {
  animation: Animation
  children: React.ReactNode
  delay?: number
  position?: PositionProperty
}

const AnimatedNameContainer = posed.div({
  [Animation.hidden]: { opacity: 0, y: 20 },
  [Animation.show]: { opacity: 1, y: 0, delay: (props: { delay: number }) => props.delay || 0 },
  [Animation.leave]: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 150
    }
  }
})

export function AnimatedContainer({ animation = Animation.hidden, children, delay = 0, position }: AnimatedContainerProps) {
  return (
    <AnimatedNameContainer style={{ position: position || 'relative' }} delay={delay} pose={animation}>
      {children}
    </AnimatedNameContainer>
  )
}
