/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const HeadContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#fff')};
  display: flex;
  align-items: center;
  height: 10vh;
  justify-content: space-between;
  width: 100%;
`
export const HeaderItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonBg = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  font-size: 25px;
`
export const Logout = styled.button`
  margin-right: 3vw;
`

export const Cancel = styled.button`
  margin-right: 3vw;
  height: 40px;
  width: 100px;
  border-radius: 8px;
`

export const NxtWatch = styled.img`
  height: 20px;
  margin-left: 3vw;
`
export const Profile = styled.img`
  height: 30px;
  margin-right: 1vw;
`

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  background-color: #fff;
  width: 50vw;
  align-items: center;
  justify-content: center;
`
export const Para = styled.p`
  color: ${props => (props.isDark ? '#fff' : '#181818')};
`
export const RowContainer = styled.div`
  display: flex;
`
export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  padding: 5px;
  border: none;
  height: 40px;
  width: 100px;
  border-radius: 8px;
`
