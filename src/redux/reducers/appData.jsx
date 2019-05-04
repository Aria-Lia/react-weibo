// import * as type from '../actions/type'

/**
 * Initial State
 */
const clientId = "1237279317"
const redirectUrl = "https://aria-lia.github.io/react-weibo/"
const logoutUrl = "https://aria-lia.github.io/react-weibo/logout"
let initialState = {
  clientId: clientId,
  redirectUrl: redirectUrl,
  logoutUrl: logoutUrl,
  authUrl: `https://api.weibo.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code`,
  basePath: '/react-weibo'
}

/**
 * Reducer
 */
const appData = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default appData