import { FETCH_MEAL_RECIPE } from "Actions/recipeActions"

const ACTION_HANDLERS = {
  [FETCH_MEAL_RECIPE]: (state, action) => ({
    ...state,
    recipeDetails: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function recipeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
