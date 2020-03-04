import React, { Component } from "react"
import "./../style.scss"
import "App.scss"
import Select from "react-select"

const filterOptions = [
  { value: "Ingredient", label: "Ingredient" },
  { value: "Category", label: "Category" }
]
class Home extends Component {
  state = {
    selectedFilter: {
      value: "Ingredient",
      label: "Ingredient"
    },
    selectedSearch: null,
    searchResult: null,
    loading: true
  }
  componentDidMount = () => {
    // this.fetchCategories()
    this.fetchIngredients()
    this.fetchSearchResult("Ingredient")
  }

  handleChangeSearch = async selectedSearch => {
    await this.setState({
      selectedSearch: !selectedSearch ? "" : selectedSearch,
      searchResult: null
    })
    await this.setState({ loading: true })
    await this.fetchSearchResult(this.state.selectedFilter.value)
  }

  handleChangeFilter = async selectedFilter => {
    await this.setState({
      selectedFilter: selectedFilter === null ? "" : selectedFilter,
      selectedSearch: "",
      searchResult: null
    })
    if (this.state.selectedFilter.value === "Ingredient") {
      await this.setState({ loading: true })
      await this.fetchIngredients()
      await this.fetchSearchResult("Ingredient")
    } else {
      await this.fetchCategories()
    }
  }

  fetchCategories = () => {
    const { fetchCategories } = this.props
    fetchCategories().then(res => {
      if (res.status === 200) {
        let categoryOptions =
          res.data &&
          res.data.meals &&
          res.data.meals.map(meal => {
            return {
              value: meal.strCategory,
              label: meal.strCategory
            }
          })
        this.setState({
          searchOptions: categoryOptions
        })
      } else {
        console.log("Error status", res.status)
      }
    })
  }

  fetchIngredients = () => {
    const { fetchIngredients } = this.props
    fetchIngredients().then(res => {
      if (res.status === 200) {
        let ingredientOptions =
          res.data &&
          res.data.meals &&
          res.data.meals.map(meal => {
            return {
              value: meal.strIngredient,
              label: meal.strIngredient
            }
          })
        this.setState({
          searchOptions: ingredientOptions
        })
      } else {
        console.log("Error status", res.status)
      }
    })
  }

  fetchSearchResult = str => {
    const { filterByIngredients, filterByCategories } = this.props
    const { selectedSearch } = this.state
    if (str === "Ingredient") {
      let values =
        selectedSearch &&
        selectedSearch.map(m => {
          return m.value
        })
      values = (values && values.length > 0 && values.join(",")) || []
      filterByIngredients(`?i=${values}`).then(res => {
        if (res.status === 200) {
          this.setState({
            loading: false,
            searchResult: res.data && res.data.meals
          })
        } else {
          this.setState({
            loading: false
          })
          console.log("Error status", res.status)
        }
      })
    } else {
      let values = selectedSearch.value
      filterByCategories(`?c=${values}`).then(res => {
        if (res.status === 200) {
          this.setState({
            loading: false,
            searchResult: res.data && res.data.meals
          })
        } else {
          this.setState({
            loading: false
          })
          console.log("Error status", res.status)
        }
      })
    }
  }

  render() {
    const {
      selectedFilter,
      selectedSearch,
      searchOptions,
      searchResult,
      loading
    } = this.state

    return (
      <div className="home">
        <div className="banner">
          <div className="searchInput">
            <Select
              className="searchBox"
              placeholder={"Search recipe for your meal"}
              value={selectedSearch}
              onChange={this.handleChangeSearch}
              options={searchOptions}
              isMulti={selectedFilter.value === "Category" ? false : true}
              isClearable
            />
            <Select
              className="filterBox"
              placeholder={"Search by"}
              value={selectedFilter}
              onChange={this.handleChangeFilter}
              options={filterOptions}
              isClearable
            />
          </div>
        </div>
        {((searchResult && searchResult.length === 0) || !searchResult) &&
          loading === false && <div className="note">No recipies found</div>}
        {loading && (
          <div className="loader">
            <img src="https://i.gifer.com/4V0b.gif" />
          </div>
        )}
        <div className="content">
          <div className="listItem">
            {searchResult &&
              searchResult.map(item => {
                return (
                  <div
                    className="CardItem"
                    index={item.idMeal}
                    onClick={() =>
                      this.props.history.push(`/recipe/${item.idMeal}`)
                    }
                  >
                    <img src={item.strMealThumb} alt={item.strMeal} />
                    <p>{item.strMeal}</p>
                  </div>
                )
              })}
          </div>
          {}
        </div>
      </div>
    )
  }
}

export default Home
