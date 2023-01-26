import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from 'js-cookie'

import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus, BiX} from 'react-icons/bi'

import {BsSearch} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'

import {RowContainer, ColContainer} from '../LoginForm/styleComponents'

import {
  BodyBoxContainer,
  CancelBtn,
  NxtImg,
  GetBtn,
  BodyContainer,
  HomeUlContainer,
  HomeLiContainer,
  ThumbImg,
  ProfileImg,
  ListPara,
  RowJustContainer,
  LoaderContainer,
  FailImg,
  SearchContainer,
  InputContainer,
  RetryBtn,
  LeftNavContainer,
  ListItem,
  Icons,
  Paragraph,
  Support,
  MiniApps,
} from './styleComponents'
import Header from '../Header'
import {Bg} from '../Trending/styledComponents'
import NxtContext from '../../context/NxtContext'

const allVideosStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    allVideoArray: [],
    hide: true,
    isDark: false,
    status: allVideosStatus.loading,
    search: '',
    searchIp: '',
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const {search} = this.state
    const JWTtoken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${search}`

    const options = {
      headers: {
        Authorization: `Bearer ${JWTtoken}`,
      },
      method: 'GET',
    }

    const resVideos = await fetch(url, options)

    if (resVideos.ok === true) {
      const allVideoData = await resVideos.json()
      const updateVideoData = await allVideoData.videos.map(each => ({
        allVideosId: each.id,
        allVideosTitle: each.title,
        allVideosThumb: each.thumbnail_url,
        allVideosName: each.channel.name,
        allVideosProfile: each.channel.profile_image_url,
        allVideosViewCount: each.view_count,
        allVideosPublished: each.published_at,
      }))
      //  console.log(updateVideoData)
      this.setState({
        allVideoArray: updateVideoData,
        status: allVideosStatus.success,
      })
    } else {
      this.setState({status: allVideosStatus.failure})
    }
  }

  bgHide = () => {
    this.setState({hide: false})
  }

  renderLoading = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#fa2" height="50" width="50" />
    </LoaderContainer>
  )

  renderRetry = () => {
    this.setState({search: '', searchIp: ''}, this.getAllVideos)
  }

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
        <RetryBtn type="button" onClick={this.renderRetry}>
          Retry
        </RetryBtn>
      </LoaderContainer>
    )
  }

  renderSuccessAllVideos = () => {
    const {allVideoArray} = this.state
    console.log(allVideoArray)

    const VideoItem = props => {
      const {videoItem} = props
      const {
        allVideosId,
        allVideosTitle,
        allVideosThumb,
        allVideosName,
        allVideosProfile,
        allVideosViewCount,
        allVideosPublished,
      } = videoItem

      return (
        <NxtContext.Consumer>
          {value => {
            const {isDark} = value

            return (
              <Link
                to={`/videos/${allVideosId}`}
                style={{textDecoration: 'none'}}
              >
                <HomeLiContainer isDark={isDark}>
                  <ThumbImg src={allVideosThumb} alt="video thumbnail" />

                  <RowContainer>
                    <ProfileImg src={allVideosProfile} alt="channel logo" />
                    <ColContainer>
                      <ListPara isDark={isDark}>{allVideosTitle}</ListPara>
                      <ListPara>{allVideosName}</ListPara>

                      <RowContainer>
                        <ListPara>{allVideosViewCount} views</ListPara>

                        <ListPara>
                          .{formatDistanceToNow(new Date(allVideosPublished))}{' '}
                          ago
                        </ListPara>
                      </RowContainer>
                    </ColContainer>
                  </RowContainer>
                </HomeLiContainer>
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
            <BodyContainer isDark={isDark}>
              {allVideoArray.length === 0 ? (
                <LoaderContainer>
                  <FailImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <h1>No Search results found</h1>
                  <p>Try different key words or remove search filter</p>
                  <RetryBtn type="button" onClick={this.renderRetry}>
                    Retry
                  </RetryBtn>
                </LoaderContainer>
              ) : (
                <HomeUlContainer>
                  {allVideoArray.map(each => (
                    <VideoItem key={each.allVideosId} videoItem={each} />
                  ))}
                </HomeUlContainer>
              )}
            </BodyContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderVideos = () => {
    const {status} = this.state
    switch (status) {
      case allVideosStatus.success:
        return this.renderSuccessAllVideos()

      case allVideosStatus.loading:
        return this.renderLoading()
      case allVideosStatus.failure:
        return this.renderFailure()

      default:
        return null
    }
  }

  renderSearch = () => {
    const {searchIp} = this.state
    this.setState({search: searchIp})
    this.getAllVideos()
  }

  onSearch = event => {
    event.preventDefault()
    this.setState({searchIp: event.target.value})
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
    const {hide, searchIp} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <Bg isDark={isDark}>
              <Header />
              <RowContainer>
                {this.renderNavBar()}
                <div>
                  {hide && (
                    <BodyBoxContainer data-testid="banner">
                      <RowJustContainer>
                        <NxtImg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CancelBtn
                          type="button"
                          onClick={this.bgHide}
                          data-testid="close"
                        >
                          <BiX />
                        </CancelBtn>
                      </RowJustContainer>
                      <p>
                        Buy Nxt Watch Premium prepaid plans with
                        <br /> UPI
                      </p>
                      <GetBtn type="button">GET IT NOW</GetBtn>
                    </BodyBoxContainer>
                  )}
                  <SearchContainer>
                    <InputContainer
                      type="search"
                      onChange={this.onSearch}
                      placeholder="Search"
                      value={searchIp}
                    />
                    <CancelBtn
                      type="button"
                      onClick={this.renderSearch}
                      data-testid="searchButton"
                    >
                      <BsSearch />
                    </CancelBtn>
                  </SearchContainer>

                  {this.renderVideos()}
                </div>
              </RowContainer>
            </Bg>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Home
