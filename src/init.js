
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from 'react-router-dom'


export default (App)=>{


    ReactDOM.render(

        <Router >

            <Route component={App} />

            
        </Router>,
        document.getElementById('root')
    )
}

