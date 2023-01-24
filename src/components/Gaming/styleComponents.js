/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const GameLiContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 2vw;
  background-color: transparent;
`
export const GameUlContainer = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 2vw;
  flex-wrap: wrap;
  overflow-y: scroll;
  background-color: transparent;
`

export const GameImg = styled.img`
  height: 200px;
  width: 140px;
`
export const GameBg = styled.div`
  display: flex;
  flex-direction: column;
`
export const BgGame = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const GameBodyContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  background-color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
`

export const Para = styled.p`
  color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  margin: 2px;
`
