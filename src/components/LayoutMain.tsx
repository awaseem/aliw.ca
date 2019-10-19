import * as React from 'react'
import styled from '@emotion/styled'

const StyledLayoutMain = styled.main`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
`

interface LayoutMainProps {
  className?: string
  children: React.ReactNode
}

function LayoutMain({ children, className }: LayoutMainProps) {
  return <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
}

export default LayoutMain
