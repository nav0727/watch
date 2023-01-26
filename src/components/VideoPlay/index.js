import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike, AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import {formatDistanceToNow} from 'date-fns'

import {Bg} from '../Trending/styledComponents'
import Header from '../Header'
import NavBar from '../NavBar'
import {RowContainer} from '../LoginForm/styleComponents'
import {
  LeftNavContainer,
  ListItem,
  Icons,
  Paragraph,
  Support,
  MiniApps,
  PlayContainer,
  PlayImg,
  LikeBtn,
  DislikeBtn,
  SaveBtn,
} from './styleComponents'
import NxtContext from '../../context/NxtContext'
import {
  LoaderContainer,
  FailImg,
  RowJustContainer,
} from '../Home/styleComponents'

const play = {
  success: 'SUCCESS',
  loading: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoPlay extends Component {
  state = {
    playArray: [],
    playStatus: play.loading,
    like: false,
    dislike: false,
    isSave: false,
  }

  componentDidMount() {
    this.getPlayVideo()
  }

  renderRetry = () => {
    this.getPlayVideo()
  }

  getPlayVideo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const playUrl = `https://apis.ccbp.in/videos/${id}`

    const JWTtoken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `BEARER ${JWTtoken}`,
      },
    }

    const playRes = await fetch(playUrl, options)

    if (playRes.ok === true) {
      const playData = await playRes.json()

      const playUpdate = {
        playId: playData.video_details.id,
        playTitle: playData.video_details.title,
        playVideoUrl: playData.video_details.video_url,
        playThumb: playData.video_details.thumbnail_url,
        playName: playData.video_details.channel.name,
        playProf: playData.video_details.channel.profile_image_url,
        playSubScribers: playData.video_details.channel.subscriber_count,
        playViewCount: playData.video_details.view_count,
        playPublished: playData.video_details.published_at,
        playDescription: playData.video_details.description,
      }
      console.log(playUpdate)
      this.setState({playArray: playUpdate, playStatus: play.success})
    } else {
      this.setState({playStatus: play.failure})
    }
  }

  onLike = () => {
    this.setState({like: true, dislike: false})
  }

  onDislike = () => {
    this.setState({like: false, dislike: true})
  }

  onSave = () => {
    this.setState(prev => ({isSave: !prev.isSave}))
  }

  renderPlayVideo = () => {
    const {playArray, like, dislike, isSave} = this.state

    const {
      playId,
      playName,
      playPublished,
      playSubScribers,
      playProf,
      playVideoUrl,
      playTitle,
      playViewCount,
      playDescription,
    } = playArray
    return (
      <PlayContainer>
        <ReactPlayer
          url={playVideoUrl}
          controls="controls"
          width="100%"
          loop="true"
          autoplay="autoplay"
          muted
          type="video/mp4"
        />
        <p>{playTitle}</p>
        <div id={playId}>
          <RowJustContainer>
            <RowContainer>
              <p>{playViewCount} views </p>
              <p> .{formatDistanceToNow(new Date(playPublished))} ago</p>
            </RowContainer>
            <RowContainer>
              <RowContainer>
                <LikeBtn type="button" like={like} onClick={this.onLike}>
                  <AiOutlineLike />
                  Like
                </LikeBtn>
                <DislikeBtn
                  type="button"
                  isDislike={dislike}
                  onClick={this.onDislike}
                >
                  <AiOutlineDislike />
                  Dislike
                </DislikeBtn>
                <SaveBtn type="button" onClick={this.onSave} isSave={isSave}>
                  <BiListPlus />
                  {isSave ? 'Saved' : 'Save'}
                </SaveBtn>
              </RowContainer>
            </RowContainer>
          </RowJustContainer>
          <hr />
          <RowContainer>
            <PlayImg src={playProf} alt="profile" />
            <div>
              <div>
                <p>{playName}</p>
                <p>{playSubScribers} subscribers</p>
              </div>

              <p>{playDescription}</p>
            </div>
          </RowContainer>
        </div>
      </PlayContainer>
    )
  }

  renderLoading = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#fa2" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailure = () => {
    const {isDark} = this.state
    return (
      <LoaderContainer>
        <FailImg
          src={
            isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          }
          alt="failure view"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. Please try again.
        </p>
        <button type="button" onClick={this.renderRetry}>
          Retry
        </button>
      </LoaderContainer>
    )
  }

  renderPlayVideos = () => {
    const {playStatus} = this.state
    switch (playStatus) {
      case play.success:
        return this.renderPlayVideo()

      case play.loading:
        return this.renderLoading()

      case play.failure:
        return this.renderFailure()

      default:
        return null
    }
  }

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

  render() {
    return (
      <Bg>
        <Header />

        <RowContainer>
          <NavBar />
          {this.renderPlayVideos()}
        </RowContainer>
      </Bg>
    )
  }
}

export default VideoPlay
