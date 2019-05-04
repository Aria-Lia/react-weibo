import * as type from './type'

/**
 * Action Creators
 */

export function getAccessToken() {
  return { type: type.GET_ACCESS_TOKEN }
}