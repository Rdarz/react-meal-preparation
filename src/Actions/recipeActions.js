export const FETCH_MEAL_RECIPE = "FETCH_MEAL_RECIPE"

export const fetchMealRecipeSuccess = payload => {
  return {
    type: FETCH_MEAL_RECIPE,
    payload
  }
}
