import React, { Component } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import styled from "styled-components"
import "./App.css"
import menuIcon from "./menu.svg"
import homeIcon from "./home.svg"
import shieldIcon from "./phone-sound.svg"
import healthIcon from "./cloud.svg"
import firewallIcon from "./globe-connections.svg"
import appIcon from "./globe-connections.svg"
import familyIcon from "./globe-connections.svg"
import gearIcon from "./gear.svg"

const NavItemButton = styled.button`
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 6px solid transparent;
  border-radius: 0;
  display: flex;
  padding: 8px 8px 8px 2px;
  width: 100%;
  font-size: 16px;
  color: #333;

  &.active {
    border-left: 6px solid rgb(0, 120, 215);
    color: rgb(0, 120, 215);
  }

  &:hover {
    background-color: #f5f5f5;
    color: rgb(0, 120, 215);
  }

  & > * {
    display: inline-block;
  }

  & > img {
    padding: 8px;
  }

  & > div {
    line-height: 34px;
    padding: 0 32px 0 8px;
  }
`

class NavItem extends Component {
  render() {
    const { id, active, icon, title } = this.props
    const className = active ? "active" : ""
    //console.log("id=", id, "active=", active)
    return (
      <div id={id}>
        <NavItemButton
          className={className}
          onClick={e => this.props.onNavClick(id)}
        >
          <img src={icon} height="18" width="18" alt="" />
          {title && <div>{title}</div>}
        </NavItemButton>
      </div>
    )
  }
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  /*background-color: #fafafa;*/
`

class NavBar extends Component {
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
      <Nav>
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
      </Nav>
    )
  }
}

const Tab = styled.div`
  padding: 32px 0 0 32px;

  &-enter {
    opacity: 0;
    transform: translateY(20px);
    transition: visibility 0s 0.12s linear, opacity 0.12s ease-in,
      transform 0.12s ease-in;
  }

  &-enter&-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: visibility 0s 0s linear, opacity 0.36s ease-out,
      transform 0.36s ease-out;
  }

  &-exit&-exit-active {
    opacity: 0;
  }

  &-exit {
    opacity: 0;
  }
`

const TabHeader = styled.div`
  font-size: 28px;
  margin-bottom: 32px;
`

const TabTitle = styled.div`
  display: flex;
  margin-bottom: 16px;

  & > * {
    display: inline-block;
  }

  & > div {
    line-height: 32px;
    padding-left: 16px;
  }
`

const TabSubTitle = styled.div`
  font-size: 14px;
  color: #777;
  max-width: 600px;
`

class HomeTab extends Component {
  render() {
    return (
      <Tab className="tab hometab">
        <div>
          <div>Your device is being protected.</div>
          <div>
            Last threat scan: 9/13/2017<br />
            Last threat definition update: 9/13/2017<br />
            Last health scan: 9/14/2017
          </div>
        </div>
      </Tab>
    )
  }
}

class ProtectionTab extends Component {
  render() {
    return (
      <Tab className="tab protectiontab">
        <TabHeader>
          <TabTitle>
            <img src={shieldIcon} height="32" width="32" alt="" />
            <div>Virus & threat protection</div>
          </TabTitle>
          <TabSubTitle>
            View threat history, scan for viruses and other threats, specify
            protection settings, and get protection udpates.
          </TabSubTitle>
        </TabHeader>
      </Tab>
    )
  }
}

class HealthTab extends Component {
  render() {
    return (
      <Tab className="tab healthtab">
        <TabHeader>
          <TabTitle>
            <img src={healthIcon} height="32" width="32" alt="" />
            <div>Device performance & health</div>
          </TabTitle>
          <TabSubTitle>
            Check that your Windows is up-to-date and if there are any issues
            impacting your device health. The Health report shows the status of
            the most recent scan.
          </TabSubTitle>
        </TabHeader>
      </Tab>
    )
  }
}

class FirewallTab extends Component {
  render() {
    return (
      <Tab className="tab firewalltab">
        <TabHeader>
          <TabTitle>
            <img src={firewallIcon} height="32" width="32" alt="" />
            <div>Firewall & network protection</div>
          </TabTitle>
          <TabSubTitle>
            View network connections, specify Windows Firewall settings, and
            troubleshoot network and Internet problems.
          </TabSubTitle>
        </TabHeader>
      </Tab>
    )
  }
}

const SettingsGroupTitle = styled.h2`
  font-size: 22px;
  font-weight: normal;
`

const SettingsGroupSubtitle = styled.div`
  max-width: 600px;
  color: #777;
`

class SettingsControlGroup extends Component {
  render() {
    const { title, subtitle, enabled } = this.props
    return (
      <div>
        <SettingsGroupTitle>
          <div>{title}</div>
        </SettingsGroupTitle>
        <SettingsGroupSubtitle>{subtitle}</SettingsGroupSubtitle>
        <div>{enabled}</div>
      </div>
    )
  }
}

class AppTab extends Component {
  render() {
    return (
      <Tab className="tab apptab">
        <TabHeader>
          <TabTitle>
            <img src={appIcon} height="32" width="32" alt="" />
            <div>App & browser control</div>
          </TabTitle>
          <TabSubTitle>
            Set up Windows Defender SmartScreen settings for apps and browsers.
          </TabSubTitle>
        </TabHeader>
        <SettingsControlGroup
          title="Warn me about unrecognized apps"
          subtitle="Windows Defender SmartScreen can help protect your device by warning you before running unrecognized apps and files from the Web."
          enabled={true}
        />
      </Tab>
    )
  }
}

class FamilyTab extends Component {
  render() {
    return (
      <Tab className="tab familytab">
        <TabHeader>
          <TabTitle>
            <img src={familyIcon} height="32" width="32" alt="" />
            <div>Family options</div>
          </TabTitle>
          <TabSubTitle>
            Get what you need to simplify your family's digital life.
          </TabSubTitle>
        </TabHeader>
      </Tab>
    )
  }
}

class SettingsTab extends Component {
  render() {
    return (
      <Tab className="tab settingstab">
        <TabHeader>
          <TabTitle>
            <img src={gearIcon} height="32" width="32" alt="" />
            <div>Settings</div>
          </TabTitle>
          <TabSubTitle>
            Windows Defender will send notifications with critical information
            about the health and security of your device. You can specify which
            non-critical notifications you would like.
          </TabSubTitle>
        </TabHeader>
      </Tab>
    )
  }
}

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`

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
      <AppContainer>
        <NavBar
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
      </AppContainer>
    )
  }
}

export default App
