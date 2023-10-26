import React from 'react' 




export default ()=>{


    return(

        <div className="footer__company">

            <section className="footer__brand footer__tool">
                <img src="/img/ioco_footer.png" alt="ioco footer logo" className="footer__brand--logo" />
                <span className="footer__brand--text">iOCO is the ICT services brand of the EOH Group</span>
            </section>

            <section className="footer__contact footer__tool">
                <h4 className="footer__contact--title">Contact us:</h4>
                <nav>
                    <a href="tel:+27116078100" className="footer__contact--link">
                    +27 11 607 8100
                    </a>
                    <a href="mailto:solve@ioco.tech" className="footer__contact--link">
                    solve@ioco.tech
                    </a>
                </nav>
            </section>

            <section className="footer__business footer__tool">
            <h4 className="footer__business--title">EOH BUSINESS PARK</h4>

                <a href="https://www.google.com/maps/place/EOH/@-26.1740667,28.1259228,17z/data=!4m12!1m6!3m5!1s0x1e95121b7622edc3:0x478a1b07bef2abb3!2sEOH!8m2!3d-26.1740667!4d28.1281115!3m4!1s0x1e95121b7622edc3:0x478a1b07bef2abb3!8m2!3d-26.1740667!4d28.1281115"
                className="footer__business--link">
                    Gillooly's View,  Osborne Lane, Bedfordview,2007
                </a>
                
        
            </section>
            <section className="footer__social footer__tool">
               
                <nav>
                    <a href="tel:+27116078100" className="footer__business--link">
                    +27 11 607 8100
                    </a>
                    <a href="mailto:solve@ioco.tech" className="footer__business--link">
                    solve@ioco.tech
                    </a>
                </nav>
            </section>
            <strong className="clearfix" />

        </div>
    )
}