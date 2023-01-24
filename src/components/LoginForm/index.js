import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  BgContainer,
  LoginContainer,
  ColContainer,
  RowContainer,
  LoginButton,
  ErrorMsg,
  LoginImg,
} from './styleComponents'
import NxtContext from '../../context/NxtContext'

class LoginForm extends Component {
  state = {
    isChecked: false,
    username: '',
    password: '',
    errorMsg: '',
    errorStatus: false,
  }

  loginSuccess = JWTtoken => {
    const {history} = this.props
    Cookies.set('jwt_token', JWTtoken, {expires: 30, path: '/'})
    history.replace('/')
  }

  loginFailure = errorMsg => {
    const {history} = this.props

    this.setState({errorMsg, errorStatus: true})
    history.replace('/login')
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const loginRes = await fetch(loginUrl, options)

    const loginData = await loginRes.json()

    if (loginRes.ok === true) {
      this.loginSuccess(loginData.jwt_token)
    } else {
      this.loginFailure(loginData.error_msg)
    }
  }

  changeCheck = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  changeUser = event => {
    this.setState({username: event.target.value})
  }

  changePass = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <ColContainer>
        <label htmlFor="userText">USERNAME</label>
        <input
          type="text"
          placeholder="Username"
          id="userText"
          onChange={this.changeUser}
          value={username}
        />
      </ColContainer>
    )
  }

  renderPassword = () => {
    const {password, isChecked} = this.state

    return (
      <ColContainer>
        <label htmlFor="pass">PASSWORD</label>
        <input
          type={isChecked ? 'text' : 'password'}
          placeholder="Password"
          id="pass"
          onChange={this.changePass}
          value={password}
        />
      </ColContainer>
    )
  }

  render() {
    const {isChecked, errorMsg, errorStatus} = this.state

    const {history} = this.props
    const JWTtoken = Cookies.get('jwt_token')

    if (JWTtoken !== undefined) {
      return history.replace('/')
    }

    return (
      <BgContainer>
        <NxtContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <LoginContainer isDark={isDark}>
                <LoginImg
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <form onSubmit={this.onLogin}>
                  {this.renderUserName()}
                  {this.renderPassword()}
                  <RowContainer>
                    <input
                      type="checkbox"
                      id="check"
                      checked={isChecked}
                      onClick={this.changeCheck}
                    />
                    <label htmlFor="check">Show Password</label>
                  </RowContainer>

                  <LoginButton type="submit">Login</LoginButton>
                  {errorStatus && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </form>
              </LoginContainer>
            )
          }}
        </NxtContext.Consumer>
      </BgContainer>
    )
  }
}

export default LoginForm
