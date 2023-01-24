import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import {Bg} from '../Trending/styledComponents'
import Header from '../Header'
import NavBar from '../NavBar'
import {RowContainer} from '../LoginForm/styleComponents'
import {LoaderContainer, FailImg} from '../Home/styleComponents'
import {PlayContainer, PlayImg} from './styleComponents'

const play = {
  success: 'SUCCESS',
  loading: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoPlay extends Component {
  state = {playArray: [], playStatus: play.loading}

  componentDidMount() {
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

  renderPlayVideo = () => {
    const {playArray} = this.state

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
          <RowContainer>
            <p>{playViewCount} views </p>
            <p> .{formatDistanceToNow(new Date(playPublished))} ago</p>
          </RowContainer>
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
    <LoaderContainer>
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
          alt="failure"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. Please try again.
        </p>
        <button type="button">Retry</button>
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
