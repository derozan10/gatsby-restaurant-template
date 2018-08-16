import React, { Component } from "react";
import styled from "styled-components";
import pizza from "../assets/img/pizza.jpg";
import logo from "../assets/img/logo-Ristretto-wit.svg";
import "animate.css";
// import fiat from '../assets/img/fiat.jpg'
// import terras from '../assets/img/buitenterras.jpg'

const StyledHero = styled.div`
  height: 40vh;
  background: url(${pizza});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: #fff;
  img {
    width: 600px;
    height: auto;
  }
  .notVisible {
    opacity: 0;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(17, 33, 6, 0.75));
    opacity: 0.8;
    z-index: -1;
  }
  h1 {
    font-family: "Italianno";
    font-size: 10rem;
  }
  @media (max-width: 576px) {
    height: 25vh h1 {
      font-size: 5rem;
    }
  }
`;

class Hero extends Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;

    const imgClasses = ["animated", isVisible ? "fadeIn" : "notVisible"];
    return (
      <StyledHero>
        <img src={logo} className={imgClasses.join(" ")} alt="logo Ristretto" />
      </StyledHero>
    );
  }
}

export default Hero;
