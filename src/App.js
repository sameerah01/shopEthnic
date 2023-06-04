import React, { useEffect, useState } from "react"
import "./App.scss"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListingPage from "./components/catalogue"
import Details from "./components/Details"

function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    setAppIsReady(true)
  }, [])

  if (!appIsReady) return null

  return <BrowserRouter>
            <Switch>
              <Route exact path="/"><ListingPage/></Route>
              <Route  path="/product-details"><Details /></Route>
            </Switch>
        </BrowserRouter>
}

export default App
