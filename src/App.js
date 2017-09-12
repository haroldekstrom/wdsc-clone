import React, { Component } from "react"
import "./App.css"
import home from "./home.svg"
import phone from "./phone-sound.svg"
import cloud from "./cloud.svg"
import gear from "./gear.svg"
import globalnet from "./globe-connections.svg"

class NavItem extends Component {
  render() {
    return (
      <button className="nav-button">
        <img src={this.props.icon} alt="" />
      </button>
    )
  }
}

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavItem id={"home"} icon={home} title="Home" />
        <NavItem id={"phone"} icon={phone} title="Devices" />
        <NavItem id={"cloud"} icon={cloud} title="Cloud" />
        <NavItem id={"globalnet"} icon={globalnet} title="Global Network" />
        <NavItem id={"settings"} icon={gear} title="Settings" />
      </nav>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navPage: "home",
    }
  }

  render() {
    return (
      <div className="app">
        <header>
          <h2>Welcome to Foo</h2>
        </header>
        <Nav />
      </div>
    )
  }
}

export default App
