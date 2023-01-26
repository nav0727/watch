import {Component} from 'react'

import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {
  LeftNavContainer,
  Paragraph,
  ListItem,
  Support,
  MiniApps,
  Icons,
} from './styleComponents'
import NxtContext from '../../context/NxtContext'

/*
const ButtonElements = [
  {
    path: '/',
    icon: <AiFillHome />,
    text: 'Home',
    id: 0,
  },
  {
    path: '/trending',
    icon: <HiFire />,
    text: 'Trending',
    id: 1,
  },
  {
    path: '/gaming',
    icon: <SiYoutubegaming />,
    text: 'Gaming',
    id: 2,
  },
  {
    path: '/saved-videos',
    icon: <BiListPlus />,
    text: 'Saved Videos',
    id: 3,
  },
]
*/

class NavBar extends Component {
  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <LeftNavContainer isDark={isDark}>
              <ul>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <ListItem>
                    <Icons type="button">
                      <AiFillHome />
                    </Icons>
                    <Paragraph isDark={isDark}>Home</Paragraph>
                  </ListItem>
                </Link>

                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <ListItem>
                    <Icons type="button">
                      <HiFire />
                    </Icons>
                    <Paragraph isDark={isDark}>Trending</Paragraph>
                  </ListItem>
                </Link>

                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <ListItem>
                    <Icons type="button">
                      <SiYoutubegaming />
                    </Icons>
                    <Paragraph isDark={isDark}>Gaming</Paragraph>
                  </ListItem>
                </Link>

                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <ListItem>
                    <Icons type="button">
                      <BiListPlus />
                    </Icons>
                    <Paragraph isDark={isDark}>Saved Videos</Paragraph>
                  </ListItem>
                </Link>
              </ul>

              <Support>
                <Paragraph isDark={isDark}>CONTACT US</Paragraph>

                <div>
                  <MiniApps
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />

                  <MiniApps
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <MiniApps
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <Paragraph isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </Paragraph>
              </Support>
            </LeftNavContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default NavBar
