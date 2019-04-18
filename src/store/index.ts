import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {IParam, params} from './params'

export const stateUrl = 'https://server-info-ea885.firebaseio.com/.json'

export interface IStoreState {
  params: IParam[],
}

const storeFactory = (initialState: IStoreState) =>
  createStore(
    combineReducers({params}),
    (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      initialState,
    compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() || compose
    )
  )

export const fetchStateJson = () =>
  fetch(stateUrl)
    .then(res => res.json())

export const getStore = () =>
  fetchStateJson()
    .then((json) => storeFactory(json))

export default getStore