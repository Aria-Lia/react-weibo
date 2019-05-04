// import * as type from '../actions/type'

/**
 * Initial State
 */
let initialState = {}
const URL = window.location.href
if (URL) {
  const tokenFlag = "code="
  const codeIndex = URL.indexOf(tokenFlag)
  if (codeIndex !== -1) {
    const authorizeToken = URL.slice(codeIndex + tokenFlag.length)
    initialState.authorizeToken = authorizeToken
  }
}

/**
 * Reducer
 */
const credentialData = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default credentialData