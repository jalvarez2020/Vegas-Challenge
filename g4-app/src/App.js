import React from 'react'
import { Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './Display_Components/dashboard'
import Clients from './Display_Components/search'
import Signup from './Display_Components/signup'
import Usermodal from './Display_Components/userModal'

function App() {
  return (
    <div className="App">

    <Route path='/' exact 
    render={ props => <Dashboard {...props} />}
    />  
    
    <Route path='/customer/signup' exact 
    render={ props => <Signup {...props} />}
    />

    <Route path='/customer/userprofile' exact render={props => <Usermodal {...props}  />} />
    
    <Route path='/customer/search' exact 
    render={ props => <Clients {...props} />}
    />
    </div>
  );
}

export default App;
