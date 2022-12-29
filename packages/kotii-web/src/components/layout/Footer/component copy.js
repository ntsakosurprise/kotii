import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{


    constructor(){

        super()
        this.state = {
            showMenu: false,
            width:0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    componentDidMount(){

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
       
    }

    componentWillUnmount(){

        window.removeEventListener('resize', this.updateWindowDimensions);
      
     }
  


    toggleMenu = ()=>{

       const {state} = this 
       const {showMenu=false} = state 

       console.log('tOGGLE MENU')

       this.setState({showMenu: !showMenu})
    }

    render(){

        const {state} = this 
        const {showMenu=false,width=0} = state 

        return(
            <header className="header">
               <section className="header__brand">
                   <Link to='/'  className="header__brand--link">
                    <img src="/img/mtn_logo.png" alt="MTN Logo" className="header__brand--link-logo" />
                   </Link>
               </section>
               <section className="header__primary-nav">

                    
                    
                    {

                        width <= 600 && !showMenu
                        ? <div  className="header__menu" onClick={()=>this.toggleMenu()}>
    
                            <span className="header__menu-bar-1"></span>
                            <span className="header__menu-bar-2"></span>
                            <span className="header__menu-bar-3"></span>
                        </div>
                        : null
                        }

                    {

                    width <= 600 && showMenu
                    ? <div  className="header__close" onClick={()=> this.toggleMenu()}>
                        <span className="header__close-text">x</span>
                    </div>
                    : null
                    }
                    
                    {/* <div  className="header__menu" onClick={()=>this.toggleMenu()}>

                        <span className="header__menu-bar-1"></span>
                        <span className="header__menu-bar-2"></span>
                        <span className="header__menu-bar-3"></span>
                    </div> */}
                   

                   

                   
                       {

                       width <= 600
                        ? showMenu ? primaryMenu() : null
                        : primaryMenu()
                       
                       } 
                        

                 
               </section>
               <section className="header__secondary-nav">
                   <nav className="header__secondary-nav--nav">
                        
                        <Link to='/personal' className="header__secondary-nav--nav-link">
                            <span className="header__secondary-nav--nav-link-circle" />
                            <span className="header__secondary-nav--nav-link-text">
                                Personal
                            </span></Link>

                   </nav>
               </section>
               <strong className="clearfix" />
            </header>
        )
    }
}


export default Header


function primaryMenu(){

    return(

       

        <nav className="header__primary-nav--nav">
            <Link to='/store' className="header__primary-nav--nav-link">Store</Link>
            <Link to='/products-services' className="header__primary-nav--nav-link">Products & Services</Link>
            <Link to='/help-support' className="header__primary-nav--nav-link">Help & Support</Link>
        </nav>

       

    )
}