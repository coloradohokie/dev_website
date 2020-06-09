import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from './components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import Resume from './containers/Resume/Resume'
import Blog from './containers/Blog/Blog'
import Portfolio from './containers/Portfolio/Portfolio'
import Contact from './containers/Contact/Contact'


class App extends Component {
  render() {
    return (
      <Layout className={classes.App}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/blog" component={Blog} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
