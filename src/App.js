import React, { Component } from "react"
import "./App.css"
import menu from "./menu.svg"
import home from "./home.svg"
import phone from "./phone-sound.svg"
import cloud from "./cloud.svg"
import gear from "./gear.svg"
import globalnet from "./globe-connections.svg"

class NavItem extends Component {
  render() {
    const { id, active, icon, title } = this.props
    const className = active ? "nav-item active" : "nav-item"
    //console.log("id=", id, "active=", active)
    return (
      <div id={id} className={className}>
        <button onClick={e => this.props.onNavClick(id)}>
          <img src={icon} height="18" width="18" alt="" />
          {title && <div>{title}</div>}
        </button>
      </div>
    )
  }
}

class Nav extends Component {
  render() {
    const { active, expand, onNavClick } = this.props
    const items = [
      { id: "menu", icon: menu, title: null },
      { id: "home", icon: home, title: "Home" },
      { id: "devices", icon: phone, title: "Devices" },
      { id: "cloud", icon: cloud, title: "Cloud" },
      { id: "globalnet", icon: globalnet, title: "Global Network" },
      { id: "settings", icon: gear, title: null },
    ]
    return (
      <nav className="nav">
        {items.map((item, i) => {
          return (
            <NavItem
              key={i}
              id={item.id}
              onNavClick={onNavClick}
              active={item.id === active}
              icon={item.icon}
              title={expand ? item.title : null}
            />
          )
        })}
      </nav>
    )
  }
}

class HomeTab extends Component {
  render() {
    return <div>Home Tab</div>
  }
}

class DevicesTab extends Component {
  render() {
    return <div>Devices Tab</div>
  }
}

class CloudTab extends Component {
  render() {
    return <div>Cloud Tab</div>
  }
}

class GlobalNetworkTab extends Component {
  render() {
    return <div>Global Network Tab</div>
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.onSwitchTab = this.onSwitchTab.bind(this)
    this.state = {
      navTab: "home",
      navExpand: true,
    }
  }

  onSwitchTab(tab) {
    if (tab === "menu") {
      this.setState({
        navExpand: !this.state.navExpand,
      })
    } else {
      this.setState({
        navTab: tab,
      })
    }
  }

  render() {
    let tab = null
    switch (this.state.navTab) {
      case "home":
        tab = <HomeTab />
        break
      case "devices":
        tab = <DevicesTab />
        break
      case "cloud":
        tab = <CloudTab />
        break
      case "globalnet":
        tab = <GlobalNetworkTab />
        break
      default:
        break
    }
    return (
      <div className="app">
        <Nav
          active={this.state.navTab}
          expand={this.state.navExpand}
          onNavClick={this.onSwitchTab}
        />
        <main className="tab">{tab}</main>
      </div>
    )
  }
}

export default App
