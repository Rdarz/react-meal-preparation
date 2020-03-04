import { combineReducers } from "redux"
import recipeReducer from "./recipeReducer"
import homeReducer from "./homeReducer"

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    recipe: recipeReducer,
    home: homeReducer,
    ...asyncReducers
  })
}

export default {
  makeRootReducer
}
