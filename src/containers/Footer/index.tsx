import * as S from './styles'

import vfologo from '../../assets/vfo-logo.svg'
import instagram from '../../assets/ig-icon.svg'

const Footer = () => {
    return (
        <S.Footer>
            <p>Design e desenvolvimento por <a href='https://victoroliveira.vercel.app/' target='_blank' className='author'>Victor Freire Oliveira</a></p>
            <p>Toda arte feita por <a href='https://victoroliveira.vercel.app/' target='_blank' className='author'>VFO Studio</a></p>
            <S.FooterIcons>
                <a href="https://vfostudio.vercel.app/" target='_blank'>
                    <img src={vfologo} alt="VFO Studio logo" />
                </a>
                <a href="https://www.instagram.com/vfo.studio" target='_blank'>
                    <img src={instagram} alt="Instagram icon" />
                </a>
            </S.FooterIcons>
            <p className='email'>vfostudio@gmail.com</p>
        </S.Footer>
    )
}

export default Footer
