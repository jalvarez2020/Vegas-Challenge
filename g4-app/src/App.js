import React from 'react'
import { Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './Display_Components/dashboard'
import Clientupdate from './Display_Components/clientupdate';

function App() {
  return (
    <div className="App">

    <Route path='/' exact 
    render={ props => <Dashboard {...props} />}
    />

    <Route path='/update' exact 
    render={ props => <Clientupdate {...props} />}
    />  
    
    </div>
  );
}

export default App;
