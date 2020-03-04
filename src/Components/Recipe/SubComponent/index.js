import React, { Component } from "react"
import "App.scss"
import "./../style.scss"

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: null
    }
  }

  componentDidMount = () => {
    const { fetchMealRecipe } = this.props
    const { pathname } = this.props.location
    const path = pathname.split("/")
    fetchMealRecipe(path[path.length - 1]).then(res => {
      if (res.status === 200) {
        this.setState({
          recipe: res.data.meals && res.data.meals[0]
        })
      } else {
      }
    })
  }
  render() {
    const { recipe } = this.state
    const ingredientList =
      recipe &&
      Object.keys(recipe)
        .map(k => {
          return k.includes("Ingredient") && recipe[k] !== "" && recipe[k]
        })
        .filter(Boolean)
    const measureList =
      recipe &&
      Object.keys(recipe)
        .map(k => {
          return k.includes("Measure") && recipe[k] !== "" && recipe[k]
        })
        .filter(Boolean)
    return (
      <div className="recipe">
        <div className="content">
          <div className="recipeImage">
            <img
              src={recipe && recipe.strMealThumb}
              alt={recipe && recipe.strMeal}
            />
          </div>
          <div className="recipeDesc">
            <h1>{recipe && recipe.strMeal}</h1>
            <h4>{`${recipe && recipe.strCategory} | ${recipe &&
              recipe.strTags}`}</h4>
            <div className="desc">
              <div className="list-title">{`Ingredients:`}</div>
              <ol>
                {ingredientList &&
                  ingredientList.map((ing, i) => {
                    return <li>{`${measureList[i]} ${ing}`}</li>
                  })}
              </ol>

              <div className="list-title">{`Steps:`}</div>
              <ol>
                {recipe &&
                  recipe.strInstructions &&
                  recipe.strInstructions
                    .split(".")
                    .map(step => step && step !== "" && <li>{`${step}.`}</li>)}
              </ol>
              <div className="list-title">{`Source:`}</div>
              <p>{recipe && recipe.strSource}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe
