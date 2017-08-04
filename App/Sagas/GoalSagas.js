import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import GoalActions from '../Redux/GoalRedux'

export function * getGoals (api, action) {
  const { username } = action
  // make the call to the api
  const response = yield call(api.getUser, username)

  if (response.ok) {
    const goals = path(['data'], response)
    // do data conversion here if needed
    yield put(GoalActions.goalSuccess(goals))
  } else {
    yield put(GoalActions.goalFailure())
  }
}
