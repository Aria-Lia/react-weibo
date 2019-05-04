import * as type from '../actions/type'
import {getAuthorizeToken} from '../../utils/index'

/**
 * Initial State
 */
const authorizeToken = getAuthorizeToken()
const initialState = {
  authorizeToken
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