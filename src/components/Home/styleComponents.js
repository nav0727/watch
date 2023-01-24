/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const BodyBoxContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 20vh;
  padding-top: 2vh;
  background-color: #f9f9f9;
  padding-left: 5vw;
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
  color: #181818;
`

export const ListPara = styled.p`
  font-size: 12px;
  padding: 2px;
  margin: 2px;
  color:${props => (props.isDark ? '#fff' : '#323232')}
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
