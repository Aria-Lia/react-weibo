import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

/**
 * Use Redux Degugger as Enhancer
 * https://github.com/jhen0409/react-native-debugger/issues/280
 */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Initial State
 */
let preloadedState = {
  appData: {
    clientId: "1237279317",
    redirectUrl: "https://aria-lia.github.io/react-weibo/",
    logoutUrl: "https://aria-lia.github.io/react-weibo/logout",
    basePath: '/react-weibo'
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

/**
 * Create Store
 */
const store = createStore(rootReducer,
  {...preloadedState},
  composeEnhancer(applyMiddleware(thunk))
)

export default store