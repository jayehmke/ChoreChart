import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  goalRequest: ['id'],
  goalSuccess: ['goals'],
  goalFailure: null
})

export const GoalTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  goals: null,
  fetching: null,
  error: null,
  id: null,
  adding: false
})

/* ------------- Reducers ------------- */

// request the temperature for a city
export const request = (state, { id }) =>
  state.merge({ fetching: true, id, goals: null })

// successful temperature lookup
export const success = (state, action) => {
  const { goals } = action
  return state.merge({ fetching: false, error: null, goals })
}

// failed to get the temperature
export const failure = (state) =>
  state.merge({ fetching: false, error: true, goals: null })

export const addGoal = (state, { id }) =>
  state.merge({ adding: true })

export const addGoalSuccess = (state, action) => {
  // const { goals } = action
  return state.merge({ adding: false, error: null })
}

export const addGoalFailure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GOAL_REQUEST]: request,
  [Types.GOAL_SUCCESS]: success,
  [Types.GOAL_FAILURE]: failure,
  [Types.GOAL_ADD]: addGoal,
  [Types.GOAL_ADD_SUCCESS]: addGoalSuccess,
  [Types.GOAL_ADD_FAILURE]: addGoalFailure
})
