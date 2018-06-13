import React from "react"
import ReactDOM from "react-dom"
import "bootstrap-v4-dev/dist/css/bootstrap-reboot.css"
import "./index.css"
import App from "./App"
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById("root"))
//registerServiceWorker();

/*
// https://daveceddia.com/hot-reloading-create-react-app/
if (module.hot) {
  module.hot.accept()
}
*/
