import React from 'react'
import {Route} from 'react-router-dom'

import Header from '../Header/component'
import Footer from '../Footer/component'

export default ({component: Component,...rest})=>{

	console.log('test')

    return(

           <>
                <Header />
                <Route {...rest} render={(props)=>{

                    return <Component {...props} />

                }} />
                <Footer />
           </>
        
      

    )

}

    


