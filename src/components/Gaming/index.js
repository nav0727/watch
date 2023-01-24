import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from 'js-cookie'

import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'

import {RowContainer, ColContainer} from '../LoginForm/styleComponents'

import {LoaderContainer, FailImg} from '../Home/styleComponents'
import Header from '../Header'
import LeftNav from '../NavBar'
import {RowCon, Circle} from '../Trending/styledComponents'
import {
  GameLiContainer,
  GameUlContainer,
  GameImg,
  GameBg,
  BgGame,
  GameBodyContainer,
  Para,
} from './styleComponents'
import NxtContext from '../../context/NxtContext'

const allTrendStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gameArray: [],
    isDark: false,
    status: allTrendStatus.loading,
  }

  componentDidMount() {
    this.getTrends()
  }

  getTrends = async () => {
    const JWTtoken = Cookies.get('jwt_token')

    const gameurl = `https://apis.ccbp.in/videos/gaming`

    const option = {
      headers: {
        Authorization: `Bearer ${JWTtoken}`,
      },
      method: 'GET',
    }

    const gameVideos = await fetch(gameurl, option)

    if (gameVideos.ok === true) {
      const allGameData = await gameVideos.json()
      const updateGameData = allGameData.videos.map(each => ({
        gameId: each.id,
        gameTitle: each.title,
        gameThumb: each.thumbnail_url,
        gameViewCount: each.view_count,
      }))
      this.setState({
        gameArray: updateGameData,
        status: allTrendStatus.success,
      })
    } else {
      this.setState({status: allTrendStatus.failure})
    }
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

  renderSuccessAllVideos = () => {
    const {gameArray} = this.state
    console.log(gameArray)

    const VideoItem = props => {
      const {videoItem} = props
      const {gameId, gameTitle, gameThumb, gameViewCount} = videoItem

      return (
        <NxtContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <Link to={`/videos/${gameId}`} style={{textDecoration: 'none'}}>
                <GameLiContainer isDark={isDark} data-testid="videoItemDetails">
                  <GameImg src={gameThumb} alt="video thumbnail" />

                  <ColContainer>
                    <Para isDark={isDark}>{gameTitle}</Para>

                    <Para isDark={isDark}>
                      {gameViewCount} Watching Worldwide
                    </Para>
                  </ColContainer>
                </GameLiContainer>
              </Link>
            )
          }}
        </NxtContext.Consumer>
      )
    }

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <GameBodyContainer isDark={isDark}>
              <GameUlContainer>
                {gameArray.map(each => (
                  <VideoItem key={each.gameId} videoItem={each} />
                ))}
              </GameUlContainer>
            </GameBodyContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderTrend = () => {
    const {status} = this.state
    switch (status) {
      case allTrendStatus.success:
        return this.renderSuccessAllVideos()

      case allTrendStatus.loading:
        return this.renderLoading()
      case allTrendStatus.failure:
        return this.renderFailure()

      default:
        return null
    }
  }

  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <BgGame data-testid="gaming" isDark={isDark}>
              <Header isDark={isDark} />
              <RowContainer>
                <LeftNav />
                <GameBg>
                  <RowCon>
                    <Circle>
                      <SiYoutubegaming />
                    </Circle>
                    <h1>Gaming</h1>
                  </RowCon>

                  {this.renderTrend()}
                </GameBg>
              </RowContainer>
            </BgGame>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Gaming
