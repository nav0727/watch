import {Bg} from '../Trending/styledComponents'
import Header from '../Header'
import {RowContainer} from '../LoginForm/styleComponents'
import NavBar from '../NavBar'
import {NotContainer, NotImg} from './styleComponents'
import NxtContext from '../../context/NxtContext'

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <Bg>
          <Header />
          <RowContainer>
            <NavBar />
            <NotContainer isDark={isDark}>
              <NotImg
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
              />
              <h1>Page Not Found</h1>
              <p>we are sorry, the page you requested could not be found.</p>
            </NotContainer>
          </RowContainer>
        </Bg>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
