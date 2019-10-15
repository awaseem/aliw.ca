import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export interface BlogPostRowProps {
  title: string
  date: string
  timeToRead: number
  link: string
}

const Container = styled.div`
  margin-bottom: 4rem;
`

export function BlogPostRow({ title, date, timeToRead, link }: BlogPostRowProps) {
  return (
    <Container>
      <Link to={link}>
        <h1>{title}</h1>
      </Link>
      <p>
        {date} -{' '}
        <i>
          {timeToRead} {timeToRead === 1 ? 'minute' : 'minutes'} to read.
        </i>
      </p>
    </Container>
  )
}
