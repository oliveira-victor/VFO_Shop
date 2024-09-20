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
                <S.Form action="https://formsubmit.co/vfostudio@gmail.com" method="POST">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name='name' required />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name='email' required />
                    <label htmlFor="message">Mensagem</label>
                    <input type="hidden" name="_subject" value="New submission!" />
                    <input type="hidden" name="_autoresponse"
                        value="Thank you for contacting VFO Studio! This is just to confirm that your message has been successfully sent. It will be read and you'll get a reply ASAP." />
                    <textarea name="message" id="message" required></textarea>
                    <button type="submit">Enviar</button>
                    <p>Ou envie um email para: <strong><a href="mailto:vfostudio@gmail.com">vfostudio@gmail.com</a></strong></p>
                </S.Form>
            </S.ContactContainer>
        </section>
    )
}

export default Contact
