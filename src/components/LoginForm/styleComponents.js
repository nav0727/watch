/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#212121' : '#f8fafc')};
`
export const LoginContainer = styled.div`
  height: 70vh;
  width: 40vw;
  padding: 0px 3vw 0px 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#323232' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#fff' : '#323232')};
`
export const RowContainer = styled.div`
  display: flex;
`
export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  width: 100%;
  padding: 10px;
  margin-top: 2vh;
  border: none;
  border-radius: 6px;
  color: #ffffff;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
`
export const LoginImg = styled.img`
  height: 5vh;
  width: 300px;
  align-self: center;
  margin-bottom: 2vh;
`
