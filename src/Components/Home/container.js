import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Home from "./SubComponent"
import {
  fetchCategories,
  fetchIngredients,
  filterByCategories,
  filterByIngredients
} from "Services/homeServices"

const mapDispatchToProps = {
  fetchCategories,
  fetchIngredients,
  filterByCategories,
  filterByIngredients
}

const mapStateToProps = state => ({
  categoryList: state.home.categoryList,
  ingredientList: state.home.ingredientList,
  searchResult: state.home.searchResult
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
