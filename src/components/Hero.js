import React, { Component } from "react";
import styled from "styled-components";
import heroBackground from "../assets/img/hero-bg.jpg";
import logo from "../assets/img/restaurantLogo-white.svg";
import "animate.css";

const StyledHero = styled.div`
  height: 50vh;
  background: url(${heroBackground});
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
    width: 300px;
    height: auto;
  }
  .notVisible {
    opacity: 0;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top,rgba(0,0,0,0.25),rgba(0,0,0,0.25)),linear-gradient(to bottom,rgba(0,0,0,0.25),rgba(0, 0, 0, 0.5));
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

    const imgClasses = ["heroLogo animated", isVisible ? "fadeIn" : "notVisible"];
    return (
      <StyledHero>
        <img src={logo} className={imgClasses.join(" ")} alt="logo Ristretto" />
      </StyledHero>
    );
  }
}

export default Hero;
