import React from 'react'
import styled from '@emotion/styled'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import homeData from '../data/home'

const StyledContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledText = styled.span`
  font-weight: 400;
  font-size: 1.35rem;
`

export function NameHeader() {
  return (
    <StyledContainer>
      <div>
        <StyledText>{homeData.name}</StyledText>
      </div>
      <div>
        <a target={'_blank'} href={homeData.github}>
          <FaGithub size={24} />
        </a>
        <a target={'_blank'} href={homeData.linkedin}>
          <FaLinkedinIn style={{ marginLeft: '0.75rem' }} size={24} />
        </a>
      </div>
    </StyledContainer>
  )
}
