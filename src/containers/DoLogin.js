import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {addUser} from '../actions'
import './login.css'

const DoLogin =  ({ dispatch }) => {
    let input;
    return(
        <Route render={({history}) =>
            (<div className='login-holder'><form className='form-login'
            onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addUser(input.value))
                history.push('/main/'+input.value) 
            }}
        >
        <input ref={node => input = node} />
            <button type="submit">
                LOGIN
            </button>
        </form></div>)
        } />
    )
}

export default connect()(DoLogin);