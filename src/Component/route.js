import React from 'react'
import about from '../Component/about'
import home from '../Component/home'

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends  React.Component{
    render() {
      return (
         
        <Route>
            <Route exact path='/' component={home} />
            <Route path='/about' component={about} />

       </Route>
  
     
      )
    }
  }
   export default App;