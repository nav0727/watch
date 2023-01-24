import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {TiWeatherSunny} from 'react-icons/ti'
import Cookies from 'js-cookie'

import NxtContext from '../../context/NxtContext'

import {
  HeadContainer,
  HeaderItemsContainer,
  ButtonBg,
  Logout,
  NxtWatch,
  Profile,
  LogoutContainer,
  Para,
  RowContainer,
  ConfirmBtn,
  Cancel,
} from './styleComponents'

const Header = props => {
  const onLogout = () => {
    const {history} = props

    const JWTToken = Cookies.remove('jwt_token')
    console.log(JWTToken)
    if (JWTToken !== undefined) {
      return history.replace('/')
    }
    return history.replace('/login')
  }

  const renderLogout = () => (
    <Popup modal trigger={<Logout type="button">Logout</Logout>}>
      {close => (
        <LogoutContainer>
          <Para>Are you sure, you want to logout</Para>
          <RowContainer>
            <Cancel type="button" onClick={() => close()} data-testid="close">
              Cancel
            </Cancel>
            <div>
              <ConfirmBtn type="button" onClick={onLogout}>
                Confirm
              </ConfirmBtn>
            </div>
          </RowContainer>
        </LogoutContainer>
      )}
    </Popup>
  )

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark, toggleTheme} = value

        // eslint-disable-next-line prettier/prettier
        const changeTheme = () => {
          toggleTheme()
        }

        return (
          <HeadContainer isDark={isDark} data-testid="banner">
            <Link to="/" style={{textDecoration: 'none'}}>
              <NxtWatch
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </Link>

            <HeaderItemsContainer>
              <ButtonBg
                type="button"
                isDark={isDark}
                onClick={changeTheme}
                data-testid="theme"
              >
                {isDark ? <FaMoon /> : <TiWeatherSunny />}
              </ButtonBg>

              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              {renderLogout()}
            </HeaderItemsContainer>
          </HeadContainer>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default withRouter(Header)
