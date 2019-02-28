import React from 'react';
import {Route} from 'react-router-dom'
import DoLogin from '../containers/DoLogin'
import ShowBuddits from '../containers/ShowBuddits'
import FillBuddit from '../containers/FillBuddit'

const App = () =>{
     return (
         <div>
             <Route exact path="/" component={DoLogin}/> 
             <Route path='/main/:login' component={ShowBuddits}/>
             <Route path='/fillBuddit/:login' component={FillBuddit}/>
         </div>
     )
 }

 export default App;