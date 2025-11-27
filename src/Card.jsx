import {cardsData} from './data.js'
import { useState } from 'react'

export default function Card({ filter }){

    const [cards, setCards] = useState(cardsData)

    function handleToggle(name){
        setCards(prevCards =>
            prevCards.map(card =>
                card.name === name
                ? { ...card, isActive: !card.isActive }
                : card
            )
        )
    }

    function handleRemove(name) {
    setCards(prevCards =>
        prevCards.filter(card => card.name !== name)
    );
}



    const visibleCards = cards.filter(card => {
        if (filter === 'all') return true
        if (filter === 'active') return card.isActive
        if (filter === 'inactive') return !card.isActive
        return true
    })

    return (
        <div className='card-container'>
            {visibleCards.map(cardData => {
                return(
                    <div className='box' key={cardData.name}>
                        <div className='top'>
                            <div className="small-logo">
                                <img width='50px' height='50px' src={cardData.logo} alt="" />
                            </div>
                            <div className='name-description'>
                                <h2>{cardData.name}</h2>
                                <p style={{width: '250px'}}>{cardData.description}</p>
                            </div>
                        </div>

                        <div className="bottom">
                            <button 
                                className='remove-btn' 
                                onClick={() => handleRemove(cardData.name)}
                            >
                                Remove
                            </button>
                                                        
                           <button className="toggle-btn" onClick={() => handleToggle(cardData.name)}>
                                <div className={`thumb ${cardData.isActive ? 'active' : ''}`}></div>
                            </button>


                        </div>
                    </div>
                )
            })}
        </div>
    )
}