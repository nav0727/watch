/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const BodyBoxContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding-top: 2vh;
  background-color: #f9f9f9;
  padding-left: 5vw;
  padding-bottom: 1vh;
`
export const RowJustContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CancelBtn = styled.button`
  font-size: 25px;
  border: none;
  margin-right: 5vw;
  background-color: transparent;
`

export const NxtImg = styled.img`
  height: 20px;
  width: 100px;
`
export const GetBtn = styled.button`
  margin-right: 5vw;
  background-color: transparent;
  padding: 5px 10px 5px 10px;
`
export const BodyContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  width: 84vw;
  overflow-y: scroll;
  color: ${props => (props.isDark ? '#fff' : '#212121')};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  padding-bottom: 50vh;
`
export const HomeUlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`
export const ThumbImg = styled.img`
  height: 120px;
  width: 100%;
`
export const ProfileImg = styled.img`
  height: 40px;
  padding-top: 5px;
`
export const HomeLiContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 310px;
  margin: 20px;
  color: ${props => (props.isDark ? '#212121' : '#fff')};
  background-color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const ListPara = styled.p`
  font-size: 12px;
  padding: 2px;
  margin: 2px;
  color:${props => (props.isDark ? '#323232' : '#fff')}
  font-weight: 500;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 70vw;
`
export const FailImg = styled.img`
  height: 140px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between
  border: 1px #181818 solid;
  margin-left: 5vw;
  margin-top: 2vh;
`

export const InputContainer = styled.input`
  width: 30vw;
  padding: 6px;
`

export const RetryBtn = styled.button`
  padding: 10px 20px 10px 20px;
  color: #fff;
  background-color: #2563eb;
  border: none;
  border-radius: 6px;
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
