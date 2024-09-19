import { SectionTitle } from "../../styles"
import * as S from './styles'

import aboutPic from '../../assets/floating-sisters.webp'

const About = () => {
    return (
        <S.About>
            <SectionTitle><span className="mobileHide">✦</span> Sobre VFO Shop</SectionTitle>
            <S.AboutDescription className="container">
                <div>
                    <p>
                        VFO Shop é uma iniciativa do <a className="strongLink" href="https://vfostudio.vercel.app/" target="_blank">VFO Studio</a>, estúdio de artes e design multimídia criado por Victor Freire Oliveira. O objetivo é divulgar produtos personalizados com artes exclusivas, que podem ser adquiridas com o autor ou feitas sob encomenda. Atualmente localizado em Maceió - AL, Brasil, o Estúdio já atendeu clientes de diferentes nacionalidades, fornecendo tanto produtos físicos quanto digitais, trazendo inspiração para seus seguidores através de uma arte com um estilo próprio que encanta.
                    </p>
                    <p>
                        Esta página do VFO Shop atualmente foca em divulgação de produtos físicos apenas, atuando principalmente na região de sua sede. Para mais informações e saber também sobre produtos digitais, entre em contato através do formulário ou email.
                    </p>
                </div>
                <img src={aboutPic} alt="Two floating girls illustration in digital watercolour" />
            </S.AboutDescription>
        </S.About>
    )
}

export default About
