import React, { Component } from "react";
import MenuNav from "../components/MenuNav";
import Wijn from "../components/Wijn";

class Menu extends Component {
  state = {
    activeMenu: null
  }

  showMenu = (menuToShow) => {
    this.setState({
      activeMenu: menuToShow
    })
  }

  render() {
    const gerechten = this.props.data.allContentfulGerechten.edges.filter(edge => edge.node.type === this.state.activeMenu).map(edge => (
      <div className="menuItem" key={edge.node.omschrijving}>
        <p>
          {edge.node.omschrijving}
          {edge.node.prijs !== null && (
            <span style={{ float: "right" }}>&euro; {edge.node.prijs}</span>
          )}
        </p>
        {edge.node.ingredienten !== null && (
          <p className="ingredienten">
            {edge.node.ingredienten.map(ingredient => `${ingredient} `)}
          </p>
        )}
      </div>
    ));

    return (
      <div>
        <MenuNav menuChangedHandler={this.showMenu} activeMenu={this.state.activeMenu} />
        {this.state.activeMenu === "Wijn" ? <Wijn data={this.props.data.allContentfulWijnen.edges} /> : gerechten}
      </div>
    )

  }
}

export default Menu;

export const MenuQuery = graphql`
  query MenuQuery {
          allContentfulGerechten {
        edges {
          node {
        type
        omschrijving
        prijs
        ingredienten
      }
    }
  }
    allContentfulWijnen {
          edges {
        node {
          type
          naam
        streek
        prijs
      }
    }
  }
}
`;



