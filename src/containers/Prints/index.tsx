import Hero from "../../components/Hero"
import Gallery from "../../components/Gallery"

import heroPrints from '../../assets/hero-prints.webp'
import fullprint00 from '../../assets/fullprint00.webp'

import thumb01 from '../../assets/thumb-darkwoods.webp'
import thumb02 from '../../assets/thumb-hairsea.webp'
import thumb03 from '../../assets/thumb-paperboat.webp'
import thumb04 from '../../assets/thumb-flyingwhale.webp'
import thumb05 from '../../assets/thumb-harp.webp'
import thumb06 from '../../assets/thumb-moon.webp'

import fullprint01 from '../../assets/fullprint01.webp'
import fullprint02 from '../../assets/fullprint02.webp'
import fullprint03 from '../../assets/fullprint03.webp'
import fullprint04 from '../../assets/fullprint04.webp'
import fullprint05 from '../../assets/fullprint05.webp'
import fullprint06 from '../../assets/fullprint06.webp'

const Prints = () => {

    const displayImage = fullprint00

    const printsData = [
        { thumb: thumb01, full: fullprint01 },
        { thumb: thumb02, full: fullprint02 },
        { thumb: thumb03, full: fullprint03 },
        { thumb: thumb04, full: fullprint04 },
        { thumb: thumb05, full: fullprint05 },
        { thumb: thumb06, full: fullprint06 }
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
