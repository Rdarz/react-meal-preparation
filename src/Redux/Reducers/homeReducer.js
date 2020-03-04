import {
  FECTH_CATEGORIES,
  FETCH_INGREDIENTS,
  FILTERBY_CATEGORIES,
  FILTERBY_INGREDIENTS
} from "Actions/homeActions"

const ACTION_HANDLERS = {
  [FECTH_CATEGORIES]: (state, action) => ({
    ...state,
    categoryList: action.payload
  }),
  [FETCH_INGREDIENTS]: (state, action) => ({
    ...state,
    ingredientList: action.payload
  }),
  [FILTERBY_CATEGORIES]: (state, action) => ({
    ...state,
    searchResult: action.payload
  }),
  [FILTERBY_INGREDIENTS]: (state, action) => ({
    ...state,
    searchResult: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
