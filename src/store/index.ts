import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { AlertReducer } from './Alerts/Reducers'
import { LoaderReducer } from './Loader/Reducers'
import { UserReducer } from './User/Reducers'

const RootReducers = combineReducers({
    loader: LoaderReducer,
    alert: AlertReducer,
    users: UserReducer
})

export type AppState = ReturnType<typeof RootReducers>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return createStore(RootReducers, middleWareEnhancer);
}
