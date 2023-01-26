/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const NotContainer = styled.div`
  height: 90vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const NotImg = styled.img`
  height: 200px;
  width: 250px;
`
