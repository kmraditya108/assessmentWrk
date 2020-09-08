import { combineReducers } from 'redux'
import WelcomeReducer from '../../module/welcome/reducer/WelcomeReducer';

const reducers = combineReducers({
    WelcomeReducer
})

const rootReducer = (state, action) => {
  return reducers(state, action)
}

export default rootReducer
