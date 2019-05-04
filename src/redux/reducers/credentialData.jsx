import * as type from '../actions/type'
import {getAuthorizeToken} from '../../utils/index'

/**
 * Initial State
 */
const authorizeToken = getAuthorizeToken()
const initialState = {
  authorizeToken,
  isFetchingAccessToken: false,
  accessToken: null,
  error: null
}

/**
 * Reducer
 */
const credentialData = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ACCESS_TOKEN_SUCCESS:
      return {...state, 
        accessToken: action.data, 
        isFetchingAccessToken: false,
        error: null
      }
    case type.GET_ACCESS_TOKEN_FAILURE:
      return {...state, 
        accessToken: null, 
        isFetchingAccessToken: false,
        error: action.error
      }
    case type.GET_ACCESS_TOKEN_STARTED:
      return {...state, isFetchingAccessToken: true}
    default:
      return state;
  }
}

export default credentialData