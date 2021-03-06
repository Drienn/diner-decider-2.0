import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import users from './users'
import login from './login'
import dinerdecider from './dinerdecider'
import passport from './passport'
import comments from './comments'

const rootReducer = combineReducers({
  dinerdecider,
  comments,
  passport,
  login,
  users,
  form: formReducer
});
export default rootReducer;
