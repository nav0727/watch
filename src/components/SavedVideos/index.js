import {Component} from 'react'

import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {formatDistanceToNow} from 'date-fns'

import {ColContainer, RowContainer} from '../LoginForm/styleComponents'
import Header from '../Header'
import {
  Bg,
  RowCon,
  Circle,
  TrendLiContainer,
  TrendImg,
  TrendUlContainer,
} from '../Trending/styledComponents'
import {SavedContainer, SavedImg} from './styleComponents'
import {
  ListPara,
  BodyContainer,
  LeftNavContainer,
  ListItem,
  Icons,
  Paragraph,
  Support,
  MiniApps,
} from '../Home/styleComponents'
import NxtContext from '../../context/NxtContext'

class SavedVideos extends Component {
  state = {savedArray: []}

  renderNoVideos = () => (
    <SavedContainer>
      <SavedImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <h1>No saved videos found</h1>
      <p>You can save your videos while watching them</p>
    </SavedContainer>
  )

  renderNavBar = () => (
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

  renderSuccessAllVideos = () => {
    const {savedArray} = this.state

    const VideoItem = props => {
      const {videoItem} = props
      const {
        TrendId,
        TrendTitle,
        TrendThumb,
        TrendName,
        TrendViewCount,
        TrendPublished,
      } = videoItem

      return (
        <Link to={`/videos:/${TrendId}`} style={{textDecoration: 'none'}}>
          <TrendLiContainer>
            <TrendImg src={TrendThumb} alt={TrendName} />

            <RowContainer>
              <ColContainer>
                <ListPara>{TrendTitle}</ListPara>
                <ListPara>{TrendName}</ListPara>

                <RowContainer>
                  <ListPara>{TrendViewCount} views</ListPara>

                  <ListPara>
                    .{formatDistanceToNow(new Date(TrendPublished))} ago
                  </ListPara>
                </RowContainer>
              </ColContainer>
            </RowContainer>
          </TrendLiContainer>
        </Link>
      )
    }

    return (
      <BodyContainer>
        <TrendUlContainer>
          {savedArray.map(each => (
            <VideoItem key={each.id} videoItem={each} />
          ))}
        </TrendUlContainer>
      </BodyContainer>
    )
  }

  render() {
    const {savedArray} = this.state
    return (
      <Bg>
        <ColContainer>
          <Header />
          <RowContainer>
            {this.renderNavBar()}

            <div>
              <RowCon>
                <Circle>
                  <HiFire />
                </Circle>
                <h1>Saved Videos</h1>
              </RowCon>
              {savedArray.length === 0
                ? this.renderNoVideos()
                : this.renderNoVideos()}
            </div>
          </RowContainer>
        </ColContainer>
      </Bg>
    )
  }
}

export default SavedVideos
