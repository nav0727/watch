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

export const LeftNavContainer = styled.nav`
  color: ${props => (props.isDark ? '#fff' : '#181818')};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  width: 16vw;
  display: flex;
  padding-right: 30px;
  height: 90vh;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 5677px) {
    width: 150px;
  }
`

export const Paragraph = styled.p`
  color: ${props => (props.isDark ? '#fff' : '#181818')};
  padding: 0px;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
`

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  background-color: ${props =>
    props.activeId && props.isDark ? '#d7dfe9' : '#ebebeb'};
  color: '#000000';

  align-items: center;
  width: 12vw;
  margin-bottom: 1vh;
`

export const MiniApps = styled.img`
  height: 25px;
  margin: 5px;
`
export const Support = styled.div`
  margin-left: 15px;
`

export const Icons = styled.button`
  font-size: 25px;
  border: none;
  background-color: transparent;
  margin-right: 10px;
  color: ${props => (props.activeId ? '#ff0b37' : '#f9f9f9')};
`
