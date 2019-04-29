import * as type from '../actions/type'
/**
 * Auth reducers
 */
const auth = (state = {}, action) => {
  switch (action.type) {
    case type.GET_ACCESS_TOKEN:
      return {
        ...state,
        
      }
  
    default:
      break;
  }
}