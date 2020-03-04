import { axiosInstance } from "./apiInstance"
import { fetchMealRecipeSuccess } from "../Actions/recipeActions"

export const fetchMealRecipe = id => {
  return (dispatch, getState) => {
    return axiosInstance
      .get(`/lookup.php?i=${id}`)
      .catch(err => {
        console.log(err)
        throw err
      })
      .then(response => {
        if (response.status === 200) {
          console.log("response===>>>", response)
          dispatch(fetchMealRecipeSuccess(response.data))
        } else {
          let err = new Error("Something went wrong")
          console.log(err)
          throw err
        }
        return response
      })
  }
}
