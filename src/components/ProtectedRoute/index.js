import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const JWTtoken = Cookies.get('jwt_token')

  if (JWTtoken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
