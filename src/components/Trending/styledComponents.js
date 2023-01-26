import styled from 'styled-components'

export const RowCon = styled.div`
  display: flex;
  align-items: center;
`
export const Circle = styled.div`
  height: 50px;
  font-size: 25px;
  width: 50px;
  display: flex;
  flex-direction: column;
  color: #ff0000;
  background-color: #181818;
  border-radius: 30px;
  margin-left: 5vw;
  align-items: center;
  justify-content: center;
  margin-right: 1vw;
`
export const TrendUlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 83vw;
`
export const TrendLiContainer = styled.li`
  display: flex;
  width: 100%;
  padding: 1vw;
  color: #181818;
`
export const TrendImg = styled.img`
  height: 100px;
  width: 230px;
  margin-right: 2vw;
`

export const Bg = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
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
