import { combineReducers } from 'redux'
import appData from './appData'
import credentialData from './credentialData'

export default combineReducers({
  appData,
  credentialData
})