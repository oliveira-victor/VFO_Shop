import Hero from "../../components/Hero"
import Gallery from "../../components/Gallery"

import heroPrints from '../../assets/hero-prints.webp'
import fullprint00 from '../../assets/fullprint00.webp'

import thumb01 from '../../assets/thumb-darkwoods.webp'

import fullprint01 from '../../assets/fullprint01.webp'

const Prints = () => {

    const displayImage = fullprint00

    const printsData = [
        { thumb: thumb01, full: fullprint01 }
    ]

    return (
        <>
            <Hero bgimage={heroPrints} />
            <Gallery
                displayImage={displayImage}
                thumbs={printsData}
            />
        </>
    )
}

export default Prints