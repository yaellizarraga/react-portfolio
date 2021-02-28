import React from 'react'
import Card from './Card'
import './Card.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Soporte Sigma',
        image: image1,
        text:'Reprehenderit aliquip tempor id ex cupidatat veniam labore ea qui ad. Sunt est Lorem ipsum duis adipisicing in enim aute laboris. Excepteur ea sunt occaecat ea proident. Deserunt culpa occaecat eiusmod do voluptate sunt ex anim cillum id. Non nostrud do irure ipsum dolor in elit nisi qui do qui quis. Laborum excepteur dolor officia pariatur nostrud elit cupidatat.',
        link:'#!'
    },
    {
        id: 2,
        title: 'Sistema Valladolid',
        image: image2,
        text:'Reprehenderit aliquip tempor id ex cupidatat veniam labore ea qui ad. Sunt est Lorem ipsum duis adipisicing in enim aute laboris. Excepteur ea sunt occaecat ea proident. Deserunt culpa occaecat eiusmod do voluptate sunt ex anim cillum id. Non nostrud do irure ipsum dolor in elit nisi qui do qui quis. Laborum excepteur dolor officia pariatur nostrud elit cupidatat.',
        link:'#!'
    },
    {
        id: 3,
        title: 'Escuela Digital',
        image: image3,
        text:'Reprehenderit aliquip tempor id ex cupidatat veniam labore ea qui ad. Sunt est Lorem ipsum duis adipisicing in enim aute laboris. Excepteur ea sunt occaecat ea proident. Deserunt culpa occaecat eiusmod do voluptate sunt ex anim cillum id. Non nostrud do irure ipsum dolor in elit nisi qui do qui quis. Laborum excepteur dolor officia pariatur nostrud elit cupidatat.',
        link:'#!'
    }
];

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                    {
                        cards.map(card => (
                            <div className="col-md-4" key={card.id}>
                                <Card title={card.title} image={card.image} text={card.text} link={card.link} />
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default Cards
