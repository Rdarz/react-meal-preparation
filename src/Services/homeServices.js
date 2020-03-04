import { axiosInstance } from "./apiInstance"
import {
  fetchCategoriesSuccess,
  fetchIngredientsSuccess,
  filterByCategoriesSuccess,
  filterByIngredientsSuccess
} from "../Actions/homeActions"

export const fetchCategories = () => {
  return (dispatch, getState) => {
    return axiosInstance
      .get("/list.php?c=list")
      .catch(err => {
        console.log(err)
        throw err
      })
      .then(response => {
        if (response.status === 200) {
          console.log("response===>>>", response)
          dispatch(fetchCategoriesSuccess(response.data))
        } else {
          let err = new Error("Something went wrong")
          console.log(err)
          throw err
        }
        return response
      })
  }
}

export const fetchIngredients = () => {
  return (dispatch, getState) => {
    return axiosInstance
      .get("/list.php?i=list")
      .catch(err => {
        console.log(err)
        throw err
      })
      .then(response => {
        if (response.status === 200) {
          console.log("response===>>>", response)
          dispatch(fetchIngredientsSuccess(response.data))
        } else {
          let err = new Error("Something went wrong")
          console.log(err)
          throw err
        }
        return response
      })
  }
}

export const filterByCategories = params => {
  return (dispatch, getState) => {
    return axiosInstance
      .get(`/filter.php${params}`)
      .catch(err => {
        console.log(err)
        throw err
      })
      .then(response => {
        if (response.status === 200) {
          console.log("response===>>>", response)
          dispatch(filterByCategoriesSuccess(response.data))
        } else {
          let err = new Error("Something went wrong")
          console.log(err)
          throw err
        }
        return response
      })
  }
}

export const filterByIngredients = params => {
  return (dispatch, getState) => {
    return axiosInstance
      .get(`/filter.php${params}`)
      .catch(err => {
        console.log(err)
        throw err
      })
      .then(response => {
        if (response.status === 200) {
          console.log("response===>>>", response)
          dispatch(filterByIngredientsSuccess(response.data))
        } else {
          let err = new Error("Something went wrong")
          console.log(err)
          throw err
        }
        return response
      })
  }
}
