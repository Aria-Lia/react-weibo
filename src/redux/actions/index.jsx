import * as type from './type'
import axios from 'axios'
import {ACCESS_TOKEN_URL} from '../../utils/urls'

/**
 * Action Creators
 */
export const getAccessToken = () => {
  return (dispatch, getState) => {
    dispatch(getAccessTokenStarted)
    const {appData, credentialData} = getState()
    const {clientId, redirectUrl} = appData
    const {authorizeToken} = credentialData
    const client_secret = process.env.REACT_APP_OPEN_WEIBO_API_KEY
    
    axios
      .post(ACCESS_TOKEN_URL, {
        client_id: clientId,
        client_secret: client_secret,
        grant_type: "authorization_code",
        code: authorizeToken,
        redirect_uri: redirectUrl
      })
      .then(response => {
        dispatch(getAccessTokenSuccess(response.data))
      })
      .catch(error => {
        dispatch(getAccessTokenFailure(error))
      })
  }
}

const getAccessTokenSuccess = data => ({
  type: type.GET_ACCESS_TOKEN_SUCCESS,
  data
})

const getAccessTokenFailure = error => ({
  type: type.GET_ACCESS_TOKEN_FAILURE,
  error
})

const getAccessTokenStarted = () => ({
  type: type.GET_ACCESS_TOKEN_STARTED
})