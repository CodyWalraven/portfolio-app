import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "../components/Header"
import NotFoundPage from "../components/NotFoundPage"
import Portfolio from '../components/Portfolio'
import Home from '../components/Home'
import Contact from '../components/Contact'
import PortfolioItems from './../components/PortfolioItems'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/portfolio/" component={Portfolio} />
        <Route path="/portfolio/:id" component={PortfolioItems} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
