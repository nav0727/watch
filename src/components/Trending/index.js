import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from 'js-cookie'

import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {formatDistanceToNow} from 'date-fns'

import {RowContainer, ColContainer} from '../LoginForm/styleComponents'

import {
  BodyContainer,
  ListPara,
  LoaderContainer,
  FailImg,
  Paragraph,
  MiniApps,
  Support,
  ListItem,
  Icons,
  LeftNavContainer,
} from '../Home/styleComponents'
import Header from '../Header'
import {
  RowCon,
  Circle,
  TrendUlContainer,
  TrendLiContainer,
  TrendImg,
  Bg,
} from './styledComponents'
import NxtContext from '../../context/NxtContext'

const allTrendStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    allVideoArray: [],
    isDark: false,
    status: allTrendStatus.loading,
  }

  componentDidMount() {
    this.getTrends()
  }

  getTrends = async () => {
    const JWTtoken = Cookies.get('jwt_token')

    const trendurl = `https://apis.ccbp.in/videos/trending`

    const option = {
      headers: {
        Authorization: `Bearer ${JWTtoken}`,
      },
      method: 'GET',
    }

    const resVideos = await fetch(trendurl, option)

    if (resVideos.ok === true) {
      const allTrendData = await resVideos.json()
      const updateTrendData = allTrendData.videos.map(each => ({
        TrendId: each.id,
        TrendTitle: each.title,
        TrendThumb: each.thumbnail_url,
        TrendName: each.channel.name,
        TrendViewCount: each.view_count,
        TrendPublished: each.published_at,
      }))
      this.setState({
        allVideoArray: updateTrendData,
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
          alt="failure"
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
    const {allVideoArray} = this.state
    console.log(allVideoArray)

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
        <Link to={`/videos/${TrendId}`} style={{textDecoration: 'none'}}>
          <TrendLiContainer id={TrendId}>
            <TrendImg src={TrendThumb} alt="video thumbnail" />

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
          {allVideoArray.map(each => (
            <VideoItem key={each.TrendId} videoItem={each} />
          ))}
        </TrendUlContainer>
      </BodyContainer>
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
          {this.renderNavBar()}
          <div>
            <RowCon>
              <Circle>
                <HiFire />
              </Circle>
              <h1>Trending</h1>
            </RowCon>

            {this.renderTrend()}
          </div>
        </RowContainer>
      </Bg>
    )
  }
}

export default Trending
