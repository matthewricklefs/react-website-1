import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem
                        img="react-website-1/public/image/img-1.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'                    
                     />

                    </ul>
                </div>
            </div>            
        </div>
    )
}

export default Cards
