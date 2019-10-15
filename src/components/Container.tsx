import * as React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 850px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

function Container({ children, className }: ContainerProps) {
  return <StyledContainer className={className}>{children}</StyledContainer>
}

export default Container
