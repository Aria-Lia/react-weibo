import * as type from './type'
import axios from 'axios'
import {ACCESS_TOKEN_URL} from '../../utils/urls'

/**
 * Action Creators
 */
export const getAccessToken = (data) => {
  return dispatch => {
    dispatch(getAccessTokenStarted)

    axios
      .post(ACCESS_TOKEN_URL, data)
      .then(response => {
        dispatch(getAccessTokenSuccess(response.data))
      })
      .catch(error => {
        dispatch(getAccessTokenFailure(error))
      })
  }
}

const getAccessTokenSuccess = accessToken => ({
  type: type.GET_ACCESS_TOKEN_SUCCESS,
  accessToken
})

const getAccessTokenFailure = error => ({
  type: type.getAccessTokenFailure,
  error
})

const getAccessTokenStarted = () => ({
  type: type.getAccessTokenStarted
})