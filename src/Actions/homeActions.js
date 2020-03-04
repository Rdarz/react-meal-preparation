export const FECTH_CATEGORIES = "FECTH_CATEGORIES"
export const FETCH_INGREDIENTS = "FETCH_INGREDIENTS"
export const FILTERBY_CATEGORIES = "FILTERBY_CATEGORIES"
export const FILTERBY_INGREDIENTS = "FILTERBY_CATEGORIES"

export const fetchCategoriesSuccess = payload => {
  return {
    type: FECTH_CATEGORIES,
    payload
  }
}

export const fetchIngredientsSuccess = payload => {
  return {
    type: FETCH_INGREDIENTS,
    payload
  }
}

export const filterByCategoriesSuccess = payload => {
  return {
    type: FILTERBY_CATEGORIES,
    payload
  }
}

export const filterByIngredientsSuccess = payload => {
  return {
    type: FILTERBY_INGREDIENTS,
    payload
  }
}
