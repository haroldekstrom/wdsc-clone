import React, { Component } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./App.css"
import menuIcon from "./menu.svg"
import homeIcon from "./home.svg"
import shieldIcon from "./phone-sound.svg"
import healthIcon from "./cloud.svg"
import firewallIcon from "./globe-connections.svg"
import appIcon from "./globe-connections.svg"
import familyIcon from "./globe-connections.svg"
import gearIcon from "./gear.svg"

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
      { id: "menu", icon: menuIcon, title: null },
      { id: "home", icon: homeIcon, title: "Home" },
      {
        id: "protection",
        icon: shieldIcon,
        title: "Virus & threat protection",
      },
      { id: "health", icon: healthIcon, title: "Device performance & health" },
      {
        id: "firewall",
        icon: firewallIcon,
        title: "Firewall & network protection",
      },
      { id: "app", icon: appIcon, title: "App & browser control" },
      { id: "family", icon: familyIcon, title: "Family options" },
      { id: "settings", icon: gearIcon, title: null },
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
    return (
      <div className="tab hometab">
        <div>
          <div>Your device is being protected.</div>
          <div>
            Last threat scan: 9/13/2017<br />
            Last threat definition update: 9/13/2017<br />
            Last health scan: 9/14/2017
          </div>
        </div>
      </div>
    )
  }
}

class ProtectionTab extends Component {
  render() {
    return (
      <div className="tab protectiontab">
        <div className="tab-header">
          <div className="tab-title">
            <img src={shieldIcon} height="32" width="32" alt="" />
            <div>Virus & threat protection</div>
          </div>
          <div className="tab-subtitle">
            View threat history, scan for viruses and other threats, specify
            protection settings, and get protection udpates.
          </div>
        </div>
      </div>
    )
  }
}

class HealthTab extends Component {
  render() {
    return (
      <div className="tab healthtab">
        <div className="tab-header">
          <div className="tab-title">
            <img src={healthIcon} height="32" width="32" alt="" />
            <div>Device performance & health</div>
          </div>
          <div className="tab-subtitle">
            Check that your Windows is up-to-date and if there are any issues
            impacting your device health. The Health report shows the status of
            the most recent scan.
          </div>
        </div>
      </div>
    )
  }
}

class FirewallTab extends Component {
  render() {
    return (
      <div className="tab firewalltab">
        <div className="tab-header">
          <div className="tab-title">
            <img src={firewallIcon} height="32" width="32" alt="" />
            <div>Firewall & network protection</div>
          </div>
          <div className="tab-subtitle">
            View network connections, specify Windows Firewall settings, and
            troubleshoot network and Internet problems.
          </div>
        </div>
      </div>
    )
  }
}

class AppTab extends Component {
  render() {
    return (
      <div className="tab apptab">
        <div className="tab-header">
          <div className="tab-title">
            <img src={appIcon} height="32" width="32" alt="" />
            <div>App & browser control</div>
          </div>
          <div className="tab-subtitle">
            Set up Windows Defender SmartScreen settings for apps and browsers.
          </div>
        </div>
      </div>
    )
  }
}

class FamilyTab extends Component {
  render() {
    return (
      <div className="tab familytab">
        <div className="tab-header">
          <div className="tab-title">
            <img src={familyIcon} height="32" width="32" alt="" />
            <div>Family options</div>
          </div>
          <div className="tab-subtitle">
            Get what you need to simplify your family's digital life.
          </div>
        </div>
      </div>
    )
  }
}

class SettingsTab extends Component {
  render() {
    return (
      <div className="tab settingstab">
        <div className="tab-header">
          <div className="tab-title">
            <img src={gearIcon} height="32" width="32" alt="" />
            <div>Settings</div>
          </div>
          <div className="tab-subtitle">
            Windows Defender will send notifications with critical information
            about the health and security of your device. You can specify which
            non-critical notifications you would like.
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.onSwitchTab = this.onSwitchTab.bind(this)
    this.state = {
      navTab: "protection",
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
      case "protection":
        tab = <ProtectionTab />
        break
      case "health":
        tab = <HealthTab />
        break
      case "firewall":
        tab = <FirewallTab />
        break
      case "app":
        tab = <AppTab />
        break
      case "family":
        tab = <FamilyTab />
        break
      case "settings":
        tab = <SettingsTab />
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
        <TransitionGroup component="main">
          <CSSTransition
            key={this.state.navTab}
            classNames="tab"
            timeout={{ enter: 500, exit: 0 }}
          >
            {tab}
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default App
