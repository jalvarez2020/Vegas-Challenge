import React from 'react'
import { Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './Display_Components/dashboard'

function App() {
  return (
    <div className="App">

    <Route path='/' exact 
    render={ props => <Dashboard {...props} />}
    />

    </div>
  );
}

export default App;
