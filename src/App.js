import React from 'react';
import Cover from './Cover/pages/Cover';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Projects from './Projects/pages/Projects';
import About from './About/pages/About';


function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Cover />
        </Route>
        <Route path='/projects' exact>
        <Projects />
        </Route>
        <Route path='/about' exact>
        <About />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
