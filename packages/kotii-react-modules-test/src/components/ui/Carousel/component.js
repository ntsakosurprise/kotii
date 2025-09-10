import React, {Component} from 'react'


class Carousel extends Component{

    constructor(){

        super()

        this.state = {

            carouselItems: [
                {
                    media: '/img/carousel_img_1',
                    text: 'Mobile Internet',
                    alt: 'Carousel Mobile internet image'
                },
                {
                    media: '/img/carousel_img_2',
                    text: 'Home Internet',
                    alt: 'Carousel Home internet image'
                },
                {
                    media: '/img/carousel_img_3',
                    text: 'Get a device',
                    alt: 'Carousel Get a device image'
                },
                {
                    media: '/img/carousel_img_4',
                    text: 'Add a phone-line',
                    alt: 'Carousel Add a phone-line image'
                },
                {
                    media: '/img/carousel_img_5',
                    text: 'Upgrade',
                    alt: 'Carousel Upgrade image'
                }
            ]
        }
    }

    // getCarouselItems = ()=>{

    //     const {state} = this 
    //     const {carouselItems} = state 

    //     const carouselElements = carouselItems.map((item,i)=>{

    //         return <section className={`carousel__item carousel__item-num_${i}`} key={i}>
    //                  <figure className="carousel__item--fig">
    //                      <img src={`${item.media}.jpg`} alt={item.alt} className="carousel__item--fig-img" />
    //                  </figure>
    //                  <div className="carousel__item--content">
    //                      <h4 className="carousel__item--content-head">{item.text}</h4>
    //                  </div>
    //                  {
                     
    //                         i+1 === 3 
    //                             ? <section className="carousel__item--action">
    //                                     <button className="carousel__item--action-btn">Start Here</button>
    //                                 </section>
    //                             : null
    //                  }
    //                </section>
    //     })

    //     return carouselElements

    // }

    getNextCard = ()=>{

        const {state} = this 
        const newCarouselItems = [...state.carouselItems]
        newCarouselItems.push(newCarouselItems.shift()) 

        this.setState({carouselItems: newCarouselItems})


    }

    getPreviousCard = ()=>{

        const {state} = this 
        const newCarouselItems = [...state.carouselItems]
        newCarouselItems.unshift(newCarouselItems.pop()) 

        this.setState({carouselItems: newCarouselItems})


    }




    showCardInContext = (navigationDirection='next',e=null)=>{

        if(e) e.preventDefault()
        if(navigationDirection === 'next'){

            this.getNextCard()

        }else{
            this.getPreviousCard()
        }

    }

    render(){

        const {state} = this 
        const {carouselItems} = state 

        return(
            <div>

                {carouselItems.map((item,i)=>{

                    return <section className={`carousel__item carousel__item-num_${i+1}`} key={i}>
                            <figure className="carousel__item--fig">
                                <img src={`${item.media}.jpg`} alt={item.alt} className="carousel__item--fig-img" />
                            </figure>
                            <div className="carousel__item--content">
                                <h4 className="carousel__item--content-head">{item.text}</h4>
                            </div>
                            {
                            
                                    i+1 === 3 
                                        ? <section className="carousel__item--action">
                                                <button className="carousel__item--action-btn">Start Here</button>
                                            </section>
                                        : null
                            }
                        </section>
                    })
                    }
                <section className="carousel__navigators">
                    <button className="carousel__navigators--p-control" onClick={(e)=>this.showCardInContext('previous',e)}>
                        <span className="carousel__navigators--p-control-text">
                            Previous
                        </span>
                    </button>
                    <button className="carousel__navigators--n-control" onClick={(e)=>this.showCardInContext('next',e)}>
                        <span className="carousel__navigators--n-control-text">
                            Next
                        </span>
                    </button>
                </section>

            </div>
        )
    }
}


export default Carousel