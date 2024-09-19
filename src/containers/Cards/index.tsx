import { SectionTitle } from "../../styles"
import Hero from "../../components/Hero"
import Gallery from "../../components/Gallery"
import ItemDescription from "../../components/ItemDescription"

import heroCard from '../../assets/hero-card.webp'
import fullcard00 from '../../assets/fullcard00.webp'

import thumb01 from '../../assets/thumb-flyingwhale.webp'
import thumb02 from '../../assets/thumb-darkwoods.webp'
import thumb03 from '../../assets/thumb-harp.webp'
import thumb04 from '../../assets/thumb-moon.webp'
import thumb05 from '../../assets/thumb-paperboat.webp'
import thumb06 from '../../assets/thumb-hairsea.webp'
import thumb07 from '../../assets/thumb-magictree.webp'

import fullprint01 from '../../assets/fullcard01.webp'
import fullprint02 from '../../assets/fullcard02.webp'
import fullprint03 from '../../assets/fullcard03.webp'
import fullprint04 from '../../assets/fullcard04.webp'
import fullprint05 from '../../assets/fullcard05.webp'
import fullprint06 from '../../assets/fullcard06.webp'
import fullprint07 from '../../assets/fullcard07.webp'

const Cards = () => {

    const displayImage = fullcard00

    const printsData = [
        { thumb: thumb01, full: fullprint01 },
        { thumb: thumb02, full: fullprint02 },
        { thumb: thumb03, full: fullprint03 },
        { thumb: thumb04, full: fullprint04 },
        { thumb: thumb05, full: fullprint05 },
        { thumb: thumb06, full: fullprint06 },
        { thumb: thumb07, full: fullprint07 }
    ]

    const cardsInfo = [
        'Cartões no formato 10x15cm',
        'Impressão de alta qualidade em papel cartão 300g matte',
        'Produtos exclusivos com artes do VFO Studio'
    ]

    return (
        <section>
            <Hero bgimage={heroCard} />
            <SectionTitle><span className="mobileHide">✦</span> Cartões</SectionTitle>
            <Gallery
                displayImage={displayImage}
                thumbs={printsData}
            />
            <ItemDescription info={cardsInfo} />
        </section>
    )
}

export default Cards
