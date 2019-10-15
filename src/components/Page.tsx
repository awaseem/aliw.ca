import * as React from 'react'
import styled from '@emotion/styled'

const StyledPage = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`

interface PageProps {
  className?: string
  children: React.ReactNode
}

export function Page({ children, className }: PageProps) {
  return <StyledPage className={className}>{children}</StyledPage>
}

export default Page
