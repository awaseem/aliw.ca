import React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

const StyledText = styled.span`
  font-weight: 600;
  font-size: 1.35rem;
`

export interface NameHeaderProps {
  name: string
}

export function NameHeader({ name }: NameHeaderProps) {
  return (
    <StyledContainer>
      <StyledText>{name}</StyledText>
    </StyledContainer>
  )
}
