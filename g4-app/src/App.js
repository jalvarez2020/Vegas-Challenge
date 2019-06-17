import React from 'react'
import { Route, NavLink, } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Clients from './Display_Components/search'
import Dashboard from './Display_Components/dashboard'

function App() {
  return (
    <div className="App">
    
    <Route path='/' exact 
    render={ props => <Dashboard {...props} />}
    />
    
    <Route path='/search' exact 
    render={ props => <Clients {...props} />}
    />
    </div>
  );
}

export default App;
