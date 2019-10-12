import * as React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => <StyledContainer className={className}>{children}</StyledContainer>

export default Container
