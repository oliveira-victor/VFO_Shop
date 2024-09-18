import Hero from "../../components/Hero"

import heroCard from '../../assets/hero-card.webp'

const Cards = () => {
    return (
        <>
            <Hero bgimage={heroCard} />
            <h2 style={{ textAlign: 'center' }}>Em breve.</h2>
        </>
    )
}

export default Cards
