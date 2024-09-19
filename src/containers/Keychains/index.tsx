import { SectionTitle } from "../../styles"
import Hero from "../../components/Hero"
import Gallery from "../../components/Gallery"
import ItemDescription from "../../components/ItemDescription"

import heroKeys from '../../assets/hero-keys.webp'
import key01a from '../../assets/thumb-alice-a.webp'
import key01b from '../../assets/thumb-alice-b.webp'
import key01c from '../../assets/thumb-alice-c.webp'
import key02 from '../../assets/thumb-darkwoods.webp'
import key03 from '../../assets/thumb-paperboat.webp'
import key04 from '../../assets/thumb-girlcat.webp'
import key05 from '../../assets/thumb-gothiccouple.webp'
import key06a from '../../assets/thumb-ballet-a.webp'
import key06b from '../../assets/thumb-ballet-b.webp'
import key06c from '../../assets/thumb-ballet-c.webp'
import key07 from '../../assets/thumb-hearts.webp'
import key08 from '../../assets/thumb-gator.webp'
import key09 from '../../assets/thumb-harp.webp'
import key10 from '../../assets/thumb-flyingwhale.webp'
import key11 from '../../assets/thumb-magictree.webp'
import key12 from '../../assets/thumb-umbrellagirl.webp'

import fullkey00 from '../../assets/fullkey00.webp';
import fullkey01a from '../../assets/fullkey01a.webp';
import fullkey01b from '../../assets/fullkey01b.webp';
import fullkey01c from '../../assets/fullkey01c.webp';
import fullkey02 from '../../assets/fullkey02.webp';
import fullkey03 from '../../assets/fullkey03.webp';
import fullkey04 from '../../assets/fullkey04.webp';
import fullkey05 from '../../assets/fullkey05.webp';
import fullkey06a from '../../assets/fullkey06a.webp';
import fullkey06b from '../../assets/fullkey06b.webp';
import fullkey06c from '../../assets/fullkey06c.webp';
import fullkey07 from '../../assets/fullkey07.webp';
import fullkey08 from '../../assets/fullkey08.webp';
import fullkey09 from '../../assets/fullkey09.webp';
import fullkey10 from '../../assets/fullkey10.webp';
import fullkey11 from '../../assets/fullkey11.webp';
import fullkey12 from '../../assets/fullkey12.webp';

const Keychains = () => {

    const displayImage = fullkey00

    const keychainsData = [
        { thumb: key01a, full: fullkey01a },
        { thumb: key01b, full: fullkey01b },
        { thumb: key01c, full: fullkey01c },
        { thumb: key02, full: fullkey02 },
        { thumb: key03, full: fullkey03 },
        { thumb: key04, full: fullkey04 },
        { thumb: key05, full: fullkey05 },
        { thumb: key06a, full: fullkey06a },
        { thumb: key06b, full: fullkey06b },
        { thumb: key06c, full: fullkey06c },
        { thumb: key07, full: fullkey07 },
        { thumb: key08, full: fullkey08 },
        { thumb: key09, full: fullkey09 },
        { thumb: key10, full: fullkey10 },
        { thumb: key11, full: fullkey11 },
        { thumb: key12, full: fullkey12 }
    ]

    const keychainsInfo = [
        'Chaveiros em acrílico',
        'Imagens na frente e verso (podendo serem iguais ou não)',
        'Impressão com cores vivas em papel fotográfico matte',
        'Conta com aplicação de verniz com proteção UV, para maior proteção e durabilidade',
        'Produtos exclusivos com artes do VFO Studio'
    ]

    return (
        <section>
            <Hero bgimage={heroKeys} />
            <SectionTitle><span className="mobileHide">✦</span> Chaveiros</SectionTitle>
            <Gallery 
                displayImage={displayImage}
                thumbs={keychainsData}
            />
            <ItemDescription info={keychainsInfo} />
        </section>
    )
}

export default Keychains
