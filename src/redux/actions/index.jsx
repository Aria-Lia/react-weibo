import * as type from './type'

/**
 * Action Creators
 */
export function getAuthCode() {
  return { type: type.GET_AUTH_CODE }
}

export function getAccessToken() {
  return { type: type.GET_ACCESS_TOKEN }
}