import React from 'react' 
import links from './links'




export default ()=>{


    const showSitemap = ()=>{

       return links.map((group,i)=>{

         return (

            <section className="footer__sitemap--i">

                {group.title ? <h5 className="footer__sitemap--i-title">{group.tile}</h5>: null}

                <nav className="footer__sitemap--i-nav">

                {
                    group.links.map((link,lI)=>{

                        return(

                            <a href={`${link.url}`} className="footer__sitemap--i-nav-link">{link.text}</a>
                        )
                    })
                }
                </nav>
            
            </section>
         )

       })
    }


    return(

        <div className="footer__sitemap">

           
            {showSitemap()}
            <strong className="clearfix" />

        </div>
    )
}