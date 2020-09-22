import React from "react"
import "./App.css"
import 'fontsource-roboto'
import Layout from "./components/Layout"
import Routes from "./components/Routes"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import useDefaultUsername from "./hooks/useDefaultUsername"
import GlobalStateProvider from "./state/GlobalStateProvider"

const App = () => {
  const [username] = useDefaultUsername()

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <QueryParamProvider ReactRouterRoute={Route} >
        <GlobalStateProvider>
          <Layout>
            {username && <Routes />}
          </Layout>
        </GlobalStateProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App