import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  margin: 1.5rem auto;
  width: 52rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export interface BlogContainerProps {
  children: React.ReactNode
}

export function BlogContainer({ children }: BlogContainerProps) {
  return <Container>{children}</Container>
}
