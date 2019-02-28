import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

const AddBuddit =  ({name}) => {
    let input;
    return(
        <Route render={({history}) =>
            (
            <button onClick={()=>{
                history.push('/fillBuddit/'+name)
            }
            }>
                ADD BUDDIT
            </button>)
        } />
    )
}

export default AddBuddit;