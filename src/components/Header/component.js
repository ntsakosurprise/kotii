import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      width: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  toggleMenu = () => {
    const { state } = this;
    const { showMenu = false } = state;

    console.log("tOGGLE MENU", showMenu);

    this.setState({ showMenu: !showMenu });
  };

  render() {
    const { state } = this;
    const { showMenu = false, width = 0 } = state;
    console.log("the state", showMenu, width);

    return (
      <header className="header">
        <section className="header__brand">
          <figure className="header__brand--fig">
            <Link to="/" className="header__brand--fig-link">
              <img
                src="/img/mtn_logo.png"
                alt="MTN Logo"
                className="header__brand--fig-link-logo"
              />
            </Link>
          </figure>
          <p className="header__brand--em-text">Nextgen</p>
          <p className="header__brand--docs-circle">
            <small className="header__brand--docs-circle-text">docs</small>
          </p>
        </section>
        <section className="header__primary-nav">
          {width <= 900 && !showMenu ? (
            <div className="header__menu" onClick={() => this.toggleMenu()}>
              <span className="header__menu-bar-1"></span>
              <span className="header__menu-bar-2"></span>
              <span className="header__menu-bar-3"></span>
            </div>
          ) : null}

          {width <= 900 && showMenu ? (
            <div className="header__close" onClick={() => this.toggleMenu()}>
              <span className="header__close-text">x</span>
            </div>
          ) : null}

          {/* <div  className="header__menu" onClick={()=>this.toggleMenu()}>

                        <span className="header__menu-bar-1"></span>
                        <span className="header__menu-bar-2"></span>
                        <span className="header__menu-bar-3"></span>
                    </div> */}

          {width <= 900 ? (showMenu ? primaryMenu() : null) : primaryMenu()}
        </section>
        <section className="header__secondary-nav">
          <nav className="header__secondary-nav--nav">
            <Link to="/personal" className="header__secondary-nav--nav-link">
              <span className="header__secondary-nav--nav-link-circle">
                <img src="/img/docs_search.png" alt="Search image" />
              </span>
              {/* <span className="header__secondary-nav--nav-link-text">
                Personal
              </span> */}
            </Link>
          </nav>
        </section>
        <strong className="clearfix" />
      </header>
    );
  }
}

export default Header;

function primaryMenu() {
  return (
    <nav className="header__primary-nav--nav">
      <Link to="/intro" className="header__primary-nav--nav-link">
        Introduction
      </Link>
      <Link to="/get-started" className="header__primary-nav--nav-link">
        Get started
      </Link>
      <Link to="/contribute" className="header__primary-nav--nav-link">
        Contributing
      </Link>
      <Link
        to="https://www.github.com"
        className="header__primary-nav--nav-link"
      >
        Github
      </Link>
    </nav>
  );
}
