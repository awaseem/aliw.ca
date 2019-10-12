import * as React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => <StyledContainer className={className}>{children}</StyledContainer>

export default Container
