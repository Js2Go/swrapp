import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  color: ${props => props.color || 'green'};
  text-align: center;
  
  h4 {
    font-size: 4rem;
  }
`

const Header = () => {
  return (
    <HeaderWrapper color="red">
      <h4>
        Todo
      </h4>
    </HeaderWrapper>
  )
}

export default Header
