import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {addBuddit} from '../actions'
import {numbToMonth} from './tools'

const DoLogin =  ({ dispatch, match:{params} }) => {
    let title;
    let image;
    
    return(
        <Route render={({history}) =>
            (<form
            onSubmit={e => {
                e.preventDefault()
                if (!title.value.trim()) {
                    return
                }
                let reader = new FileReader();
                reader.addEventListener("load", function () {
                    { console.log(reader.result)}
                    let time = new Date();
                    let date = numbToMonth(time.getMonth())+" "+time.getDate()+", "+time.getFullYear()+" "+time.getHours()+":"+time.getMinutes();
                    let username = params.login;
                    dispatch(addBuddit(title.value, reader.result, date, username));
                    history.push('/main/'+params.login);
                }, false);
                if(image.files[0]){
                    let base64Img = reader.readAsDataURL(image.files[0]);
                }
                else{
                    let time = new Date();
                    let date = numbToMonth(time.getMonth())+" "+time.getDate()+", "+time.getFullYear()+" "+time.getHours()+":"+time.getMinutes();
                    let username = params.login;
                    dispatch(addBuddit(title.value, image.value, date, username));
                    history.push('/main/'+params.login);
                }
            }}
        >
        <div>
            <p>TITLE: </p>
            <input ref={node => title = node} />
        </div>
        <div>
            <p>IMAGE: </p>
            <input ref={node => image = node} type="file" accept="image/x-png, image/jpeg"/>
        </div>
        <div>
            <br/>
            <button type="submit">
                SAVE
            </button>
        </div>
        </form>)
        } />
    )
}

export default connect()(DoLogin);