import Hero from "../../components/Hero"
import Gallery from "../../components/Gallery"
import ItemDescription from "../../components/ItemDescription"

import { SectionTitle } from "../../styles"

import heroBoard from '../../assets/hero-boards.webp'
import fullBoard from '../../assets/fullboard00.webp'
import thumb01 from '../../assets/thumb-harp.webp'
import thumb02 from '../../assets/thumb-magictree.webp'
import thumb03 from '../../assets/thumb-darkwoods.webp'
import thumb04 from '../../assets/thumb-flyingwhale.webp'
import thumb05 from '../../assets/thumb-moon.webp'

import fullprint01 from '../../assets/fullboard01.webp'
import fullprint02 from '../../assets/fullboard02.webp'
import fullprint03 from '../../assets/fullboard03.webp'
import fullprint04 from '../../assets/fullboard04.webp'
import fullprint05 from '../../assets/fullboard05.webp'

const Boards = () => {

    const displayImage = fullBoard

    const printsData = [
        { thumb: thumb01, full: fullprint01 },
        { thumb: thumb02, full: fullprint02 },
        { thumb: thumb03, full: fullprint03 },
        { thumb: thumb04, full: fullprint04 },
        { thumb: thumb05, full: fullprint05 }
    ]

    const cardsInfo = [
        'Quadros em MDF de 2mm',
        'Cores vibrantes em papel fotográfico matte de alta qualidade',
        'Contam com aplicação de verniz com proteção UV',
        'Possuem adesivos dupla face de ótima qualidade no verso',
        'Produtos exclusivos com artes do VFO Studio'
    ]

    return (
        <section>
            <Hero bgimage={heroBoard} />
            <SectionTitle><span className="mobileHide">✦</span> Quadros em MDF</SectionTitle>
            <Gallery
                displayImage={displayImage}
                thumbs={printsData}
            />
            <ItemDescription info={cardsInfo} />
        </section>
    )
}

export default Boards
