/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const PlayContainer = styled.div`
  height: 90vh;
  width: 84vw;
  overflow-y: scroll;
  padding: 2vw;
  padding-bottom: 50vh;
`
export const PlayImg = styled.img`
  height: 30px;
  margin: 2vh 2vw;
`

export const LikeBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 10px;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
  font-size: 15px;
`

export const DislikeBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 10px;
  font-size: 15px;
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
`
export const SaveBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 10px;
  color: ${props => (props.isSave ? '#2563eb' : '#64748b')};
  font-size: 15px;
`
