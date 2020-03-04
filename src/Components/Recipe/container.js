import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Recipe from "./SubComponent"
import { fetchMealRecipe } from "Services/recipeServices"

const mapDispatchToProps = {
  fetchMealRecipe
}

const mapStateToProps = state => ({
  recipeDetails: state.recipe.recipeDetails
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Recipe)
)
