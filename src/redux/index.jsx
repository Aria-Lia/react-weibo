import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

/**
 * Use Redux Degugger as Enhancer
 * https://github.com/jhen0409/react-native-debugger/issues/280
 */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


/**
 * Create Store
 */
const store = createStore(rootReducer,
  {},
  composeEnhancer(applyMiddleware(thunk))
)

export default store