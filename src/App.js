import React, { Component } from 'react';
import axios from "axios";
import { Container } from 'reactstrap';
import Menu from './Menu';
import NavBar from "./NavBar";
import Home from "./Home";

class App extends Component {
  constructor() {
    super();

    this.pages = [
      { readableName: "Appetizer", url: "#" },
      { readableName: "Entree", url: "#" },
      { readableName: "Sides", url: "#" },
      { readableName: "Dessert", url: "#" },
      { readableName: "Special", url: "#" }
    ];

    this.state = {
      menu: [
        { name: "Appetizer", amount: 8, data: [] },
        { name: "Entree", amount: 15, data: [] },
        { name: "Sides", amount: 8, data: [] },
        { name: "Dessert", amount: 8, data: [] },
        { name: "Special", amount: 1, data: [] },
      ],
      currentPage: -1
    }

    this.setPage = this.setPage.bind(this)
  }

  async api() {

    let arr = await Promise.all(this.state.menu.map(async (item, index) => {
      let api = `https://entree-f18.herokuapp.com/v1/menu/${item.amount}`

      let data = await axios.get(api)
        .then(function (response) {
          console.log(response.data.menu_items)
          return response.data.menu_items
        })
        .catch(function (error) {
          // do if error
          console.log(error)
        })

      item.data = data
      console.log(item)
      return item

    }))
    console.log(arr)
    this.setState({ menu: arr })

  }

  setPage(newPageNum) {
    this.setState({ currentPage: newPageNum })
  }

  showPage(){
    if (this.state.currentPage === -1){
      return <Home />
    }
    else{
      return <Menu menu={this.state.menu[this.state.currentPage]}/>
    }
  }
  

  componentDidMount() {
    console.log("in componentDidMount")

    let menu = window.localStorage.getItem("menu")
    let currentPage = window.localStorage.getItem("currentPage")

    if (menu) {
      this.setState({ menu: JSON.parse(menu) })
    }

    else {
      this.api()
    }

    if (currentPage) {
      console.log("found currentPage, ")
      this.setState({ currentPage: JSON.parse(currentPage) })
    }

    else {
      console.log("did not find currentPage")
      window.localStorage.setItem("currentPage", this.state.currentPage)
    }
  }

  componentDidUpdate() {
    console.log("in componentDidUpdate")
    window.localStorage.setItem("currentPage", JSON.stringify(this.state.currentPage))
    window.localStorage.setItem("menu", JSON.stringify(this.state.menu))
  }

  render() {
    return (
      <div class="brand-main">
        <NavBar
          pages={this.pages}
          currentPage={this.state}
          setPage={this.setPage}
        />
        <Container mt-5>

        {this.showPage()}

        </Container>
      </div>
    )
  }
}

export default App;
