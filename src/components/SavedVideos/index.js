import {Component} from 'react'

import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'

import {formatDistanceToNow} from 'date-fns'

import {ColContainer, RowContainer} from '../LoginForm/styleComponents'
import NavBar from '../NavBar'
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
import {ListPara, BodyContainer} from '../Home/styleComponents'

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
            <NavBar />

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
