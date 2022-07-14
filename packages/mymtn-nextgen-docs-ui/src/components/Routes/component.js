
import React, {Component} from 'react'
import {Switch,withRouter} from 'react-router-dom'
import Public from '../Public/component'
import routes from '../Essentials/routes'



class Routes extends Component{

    render(){

        return(
            
            <Switch>

                {

                    routes.map((r,i)=>{

                        return <Public {...this.props}  exact path={r.path} component={r.component} key={i} /> 
                    })
                }
            </Switch>
        )
    }
}

export default Routes