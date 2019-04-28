import { createStore } from 'redux'
import rootReducer from './reducers/index'

let preloadedState = {
  appData: {
    clientId: "1237279317",
    redirectUrl: "https://aria-lia.github.io/react-weibo/",
    logoutUrl: "https://aria-lia.github.io/react-weibo/logout"
  }
}
// const API_KEY = process.env.REACT_APP_OPEN_WEIBO_API_KEY
const URL = window.location.href
if (URL) {
  const tokenFlag = "code="
  const codeIndex = URL.indexOf(tokenFlag)
  if (codeIndex !== -1) {
    const authorizeToken = URL.slice(codeIndex + tokenFlag.length)
    preloadedState.credentialData = {
      authorizeToken: authorizeToken
    }
  }
}
const store = createStore(rootReducer,
  {...preloadedState},   
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store