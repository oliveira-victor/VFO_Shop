import * as S from './styles'
import { SectionTitle } from "../../styles"

import vfoInstagram from '../../assets/vfo-instagram.webp'

const Contact = () => {
    return (
        <section className="container">
            <SectionTitle><span className="mobileHide">✦</span> Contato</SectionTitle>
            <S.ContactContainer>
                <a href="https://www.instagram.com/vfo.studio" target='_blank'>
                    <img src={vfoInstagram} alt="Digital watercolor illustration of characters with Instagram logo" />
                </a>
                <S.Form>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" required />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" required />
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="message" required></textarea>
                    <button type="submit">Enviar</button>
                </S.Form>
            </S.ContactContainer>
        </section>
    )
}

export default Contact
