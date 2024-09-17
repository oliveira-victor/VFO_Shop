import Hero from "../../components/Hero"

import heroPrints from '../../assets/hero-prints.webp'

const Prints = () => {
    return (
        <>
            <Hero bgimage={heroPrints} />
            <h2 style={{ textAlign: 'center' }}>Em breve.</h2>
        </>
    )
}

export default Prints