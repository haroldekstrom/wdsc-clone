import React, { Component } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import styled, { createGlobalStyle, ThemeProvider, withTheme } from "styled-components/macro"
import Toggle from "react-toggle"
import "react-toggle/style.css"
import "font-awesome/css/font-awesome.css"
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
  border-left: ${props => (props.active ? "6px solid rgb(0, 120, 215)" : "6px solid transparent")};
  border-radius: 0;
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 8px;
  text-align: left;
  height: 50px;
  width: ${props => (props.fullWidth ? "100%" : "50px")};
  font-size: 16px;
  color: ${props => (props.active ? "rgb(0, 120, 215)" : props.theme.textColor)};

  &:focus,
  &:active:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${props => props.theme.hoverColor};
    color: ${props => props.theme.hoverTextColor};
  }

  &:active {
    background-color: ${props => props.theme.activeColor};
  }

  > * {
    display: inline-block;
  }

  > div {
    padding: 0 32px 0 8px;
  }
`

const GlobalStyle = createGlobalStyle`
  #settings {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .tab-enter {
    opacity: 0;
    transform: translateY(20px);
    transition: visibility 0s 0.12s linear, opacity 0.12s ease-in,
      transform 0.12s ease-in;
  }

  .tab-enter.tab-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: visibility 0s 0s linear, opacity 0.36s ease-out,
      transform 0.36s ease-out;
  }

  .tab-exit.tab-exit-active {
    opacity: 0;
  }

  .tab-exit {
    opacity: 0;
  }
`

class NavItem extends Component {
  render() {
    const { id, active, icon, fullWidth, title } = this.props
    return (
      <div id={id}>
        <NavItemButton
          active={active}
          fullWidth={fullWidth}
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
  flex-shrink: 0;
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
      {
        id: "account",
        icon: shieldIcon,
        title: "Account protection",
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
              fullWidth={item.title !== null}
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
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
`

const TabHeader = styled.div`
  font-size: 28px;
  margin-bottom: 32px;
`

const TabTitle = styled.div`
  display: flex;
  margin-bottom: 16px;

  > * {
    display: inline-block;
  }

  > div {
    line-height: 32px;
    padding-left: 16px;
  }
`

const TabSubTitle = styled.div`
  font-size: 14px;
  color: ${props => props.theme.subTitleColor};
  max-width: 600px;
`

const HomeTabWrapper = styled(Tab)`
  padding: 0;
`

const HomeTabBanner = styled.div`
  background-color: ${props => props.theme.bannerBackgroundColor};
  padding: 32px;

  > div:first-child {
    padding: 24px 0;
    font-size: 44px;
    font-weight: 300;
  }

  > div:last-child {
    font-size: 14px;
    color: #777;
  }
`

const HomeTabPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
`

const HomeTabPanelButton = styled.button`
  padding: 24px;
  text-align: left;
  background-color: transparent;
  color: ${props => props.theme.textColor};
  border: none;

  &:focus,
  &:active:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${props => props.theme.hoverColor};
  }

  &:active {
    background-color: ${props => props.theme.activeColor};
  }
`

const PanelItemIcon = styled.i`
  color: rgb(0, 120, 215);
`

const PanelItemTitle = styled.div`
  font-size: 15px;
  font-weight: normal;
  padding-top: 16px;
`

const PanelItemSubTitle = styled.div`
  font-size: 14px;
  color: ${props => props.theme.subTitleColor};
`

class HomeTab extends Component {
  render() {
    return (
      <HomeTabWrapper className="tab hometab">
        <HomeTabBanner>
          <div>Your device is being protected.</div>
          <div>
            Last threat scan: 9/13/2017
            <br />
            Last threat definition update: 9/13/2017
            <br />
            Last health scan: 9/14/2017
          </div>
        </HomeTabBanner>
        <HomeTabPanel>
          <HomeTabPanelButton>
            <PanelItemIcon className="fa fa-shield fa-4x" />
            <PanelItemTitle>Virus & threat protection</PanelItemTitle>
            <PanelItemSubTitle>No action needed.</PanelItemSubTitle>
          </HomeTabPanelButton>
          <HomeTabPanelButton>
            <PanelItemIcon className="fa fa-heartbeat fa-4x" />
            <PanelItemTitle>Device performance & health</PanelItemTitle>
            <PanelItemSubTitle>No action needed.</PanelItemSubTitle>
          </HomeTabPanelButton>
          <HomeTabPanelButton>
            <PanelItemIcon className="fa fa-wifi fa-4x" />
            <PanelItemTitle>Firewall & network protection</PanelItemTitle>
            <PanelItemSubTitle>No action needed.</PanelItemSubTitle>
          </HomeTabPanelButton>
          <HomeTabPanelButton>
            <PanelItemIcon className="fa fa-window-maximize fa-4x" />
            <PanelItemTitle>App & browser control</PanelItemTitle>
            <PanelItemSubTitle>
              You're using
              <br />
              recommended settings.
            </PanelItemSubTitle>
          </HomeTabPanelButton>
          <HomeTabPanelButton>
            <PanelItemIcon className="fa fa-child fa-4x" />
            <PanelItemTitle>Family options</PanelItemTitle>
            <PanelItemSubTitle>
              Manage how your family
              <br />
              uses their devices.
            </PanelItemSubTitle>
          </HomeTabPanelButton>
        </HomeTabPanel>
      </HomeTabWrapper>
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
            View threat history, scan for viruses and other threats, specify protection settings,
            and get protection udpates.
          </TabSubTitle>
        </TabHeader>
        <div>
          <div />
          <div>Scan history</div>
          <div>No threats found</div>
        </div>
        <div>
          <div>
            <div>0</div>
            <div>Threats found</div>
          </div>
          <div>
            <div>81994</div>
            <div>Files scanned</div>
          </div>
          <button>Quick scan</button>
          <div>Advanced scan</div>
        </div>
        <div>
          <div>
            <div />
            <div>Virus & threat protection settings</div>
          </div>
          <div>You are using the settings that Microsoft recommends.</div>
        </div>
        <div>
          <div>
            <div />
            <div>Protection updates</div>
          </div>
          <div>Protection definitions are up to date.</div>
        </div>
      </Tab>
    )
  }
}

class AccountTab extends Component {
  render() {
    return (
      <Tab className="tab accounttab">
        <TabHeader>
          <TabTitle>
            <img src={shieldIcon} height="32" width="32" alt="" />
            <div>Account protection</div>
          </TabTitle>
          <TabSubTitle>Security for your account and sign-in.</TabSubTitle>
        </TabHeader>
        <div />
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
            Check that your Windows is up-to-date and if there are any issues impacting your device
            health. The Health report shows the status of the most recent scan.
          </TabSubTitle>
        </TabHeader>
        <div>
          <div>
            <div />
            <div>Health report</div>
          </div>
          <div>Last scan: 10/16/2017</div>
          <div>
            <div>
              <div />
              <div>Windows Update</div>
              <div>No issues</div>
            </div>
            <div>
              <div />
              <div>Storage capacity</div>
              <div>No issues</div>
            </div>
            <div>
              <div />
              <div>Device driver</div>
              <div>No issues</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div />
            <div>Fresh start</div>
          </div>
          <div>
            <p>
              Start fresh with a clean and up-to-date installation of Windows. This will keep your
              personal files and some Windows settings, and remove some of your apps.
            </p>
            <p>
              In some cases, this may improve your device's startup and shutdown experience, memory
              usage, Store apps performance, browsing experience, and battery life.
            </p>
          </div>
          <div>Additional info</div>
        </div>
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
            View network connections, specify Windows Firewall settings, and troubleshoot network
            and Internet problems.
          </TabSubTitle>
        </TabHeader>

        <div>
          <div>
            <div />
            <div>Private (discoverable) network</div>
          </div>
          <div>Firewall is on.</div>
          <div>Network is not connected.</div>
        </div>

        <div>
          <div>
            <div />
            <div>Public (non-discoverable) network</div>
          </div>
          <div>Firewall is on.</div>
          <div>Network is connected.</div>
        </div>

        <div>
          <div>Allow an app through firewall</div>
          <div>Network and Internet troubleshooter</div>
          <div>Firewall notification settings</div>
          <div>Advanced settings</div>
          <div>Restore firewalls to default</div>
        </div>
      </Tab>
    )
  }
}

const SettingsGroupTitle = styled.h2`
  font-size: 22px;
  font-weight: normal;
`

const SettingsGroupSubtitle = styled.div`
  font-size: 14px;
  max-width: 600px;
  color: ${props => props.theme.subTitleColor};
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

const VerticalRadioGroup = styled.div`
  label {
    display: block;
    margin: 0;
  }
`

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

        <div>
          <div>Check apps and files</div>
          <div>
            Windows Defender SmartScreen helps protect your device by checking for unrecognized apps
            and files from the Web.
          </div>
          <VerticalRadioGroup>
            <label>
              <input type="radio" /> Block
            </label>
            <label>
              <input type="radio" /> Warn
            </label>
            <label>
              <input type="radio" /> Off
            </label>
          </VerticalRadioGroup>
          <a href="#/">Privacy statement</a>
        </div>

        <div>
          <div>SmartScreen for Microsoft Edge</div>
          <div>
            Windows Defender SmartScreen Filter helps protect your device from malicious sites and
            downloads.
          </div>
          <VerticalRadioGroup>
            <label>
              <input type="radio" /> Block
            </label>
            <label>
              <input type="radio" /> Warn
            </label>
            <label>
              <input type="radio" /> Off
            </label>
          </VerticalRadioGroup>
          <a href="#/">Privacy statement</a>
        </div>

        <div>
          <div>SmartScreen for Windows Store apps</div>
          <div>
            Windows Defender SmartScreen Filter helps protect your device by checking web content
            that Windows Store apps use.
          </div>
          <VerticalRadioGroup>
            <label>
              <input type="radio" /> Block
            </label>
            <label>
              <input type="radio" /> Warn
            </label>
            <label>
              <input type="radio" /> Off
            </label>
          </VerticalRadioGroup>
          <a href="#/">Privacy statement</a>
          <br />
          <label>
            <Toggle icons={false} />
            <span>No icons</span>
          </label>
        </div>
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
          <TabSubTitle>Get what you need to simplify your family's digital life.</TabSubTitle>
        </TabHeader>

        <div>
          <div>Parental controls</div>
          <div>
            <div />
            <div>Help protect your kids online.</div>
            <div>
              Choose which websites your kids can visit as they explore the web using Microsoft
              Edge.
            </div>
          </div>

          <div>
            <div />
            <div>Set good screen time habits.</div>
            <div>Choose when and how much time your kids can use their devices.</div>
          </div>

          <div>
            <div />
            <div>Keep track of your child's digital life.</div>
            <div>Get weekly activity reports of your kids' online activity.</div>
          </div>

          <div>
            <div />
            <div>Let your kids buy appropriate apps and games.</div>
            <div>Choose what they see and purchase for their devices.</div>
          </div>

          <a href="#/">View family settings</a>
        </div>

        <div>
          <div>See your family's devices at a glance</div>

          <div>
            <div />
            <div>Check the health and safety of your family's devices.</div>
            <div>Make sure they're up-to-date and see device security and health status.</div>
          </div>

          <a href="#/">View devices</a>
        </div>

        <div>Not all features are available in all markets.</div>
      </Tab>
    )
  }
}

class SettingsTabBase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: props.theme,
    }
  }

  render() {
    return (
      <Tab className="tab settingstab">
        <TabHeader>
          <TabTitle>
            <img src={gearIcon} height="32" width="32" alt="" />
            <div>Settings</div>
          </TabTitle>
          <TabSubTitle>
            Windows Defender will send notifications with critical information about the health and
            security of your device. You can specify which non-critical notifications you would
            like.
          </TabSubTitle>
        </TabHeader>
        <VerticalRadioGroup>
          <label>
            <input
              type="radio"
              name="lighttheme"
              checked={this.props.theme.name === "light"}
              onChange={this.props.onSetLightTheme}
            />{" "}
            Light
          </label>
          <label>
            <input
              type="radio"
              name="darktheme"
              checked={this.props.theme.name === "dark"}
              onChange={this.props.onSetDarkTheme}
            />{" "}
            Dark
          </label>
        </VerticalRadioGroup>
      </Tab>
    )
  }
}

const SettingsTab = withTheme(SettingsTabBase)

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};

  > main {
    flex: 1;
  }
`

const lightTheme = {
  name: "light",
  backgroundColor: "#fff",
  textColor: "#333",
  textMutedColor: "#999",
  bannerBackgroundColor: "#f2f2f2",
  hoverColor: "#f5f5f5",
  hoverTextColor: "rgb(0, 120, 215)",
  activeColor: "#ccc",
  subTitleColor: "#777",
}

const darkTheme = {
  name: "dark",
  backgroundColor: "#000",
  textColor: "#fff",
  textMutedColor: "#999",
  bannerBackgroundColor: "#181818",
  hoverColor: "#181818",
  hoverTextColor: "rgb(0, 120, 215)",
  activeColor: "#333",
  subTitleColor: "#777",
}

class App extends Component {
  constructor(props) {
    super(props)
    this.onSwitchTab = this.onSwitchTab.bind(this)
    this.onSetLightTheme = this.onSetLightTheme.bind(this)
    this.onSetDarkTheme = this.onSetDarkTheme.bind(this)
    this.state = {
      navTab: "home",
      navExpand: true,
      theme: lightTheme,
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

  onSetLightTheme() {
    console.log("set light theme")
    this.setState({ theme: lightTheme })
  }

  onSetDarkTheme() {
    console.log("set dark theme")
    this.setState({ theme: darkTheme })
  }

  render() {
    let tab = null
    switch (this.state.navTab) {
      case "home":
        tab = <HomeTab onSwitchTab={this.onSwitchTab} />
        break
      case "protection":
        tab = <ProtectionTab />
        break
      case "account":
        tab = <AccountTab />
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
        tab = (
          <SettingsTab
            onSetLightTheme={this.onSetLightTheme}
            onSetDarkTheme={this.onSetDarkTheme}
          />
        )
        break
      default:
        break
    }
    return (
      <ThemeProvider theme={this.state.theme}>
        <AppContainer>
          <GlobalStyle />
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
      </ThemeProvider>
    )
  }
}

export default App
