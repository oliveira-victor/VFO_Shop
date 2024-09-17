import { Link } from 'react-router-dom'

import * as S from './styles'

import externalLink from '../../assets/external-link.svg'

const Menu = () => {
    return (
        <S.Nav>
            <S.MenuList>
                <li>
                    <Link to='/'>
                        Início
                    </Link>
                </li>
                <li>✦</li>
                <li>
                    <Link to='/chaveiros'>
                        Chaveiros
                    </Link>
                </li>
                <li>✦</li>
                <li>
                    <Link to='/prints'>
                        Prints
                    </Link>
                </li>
                <li>✦</li>
                <li>
                    <Link to='/cartoes'>
                        Cartões
                    </Link>
                </li>
                <li>✦</li>
                <li>
                    <Link to='/quadros'>
                        Quadros MDF
                    </Link>
                </li>
                <li>✦</li>
                <li>
                    <a href="https://vfostudio.vercel.app/links-pt.html" target='_blank'>
                        VFO links
                        <img className='external-link' src={externalLink} alt="External link icon" />
                    </a>
                </li>
            </S.MenuList>
        </S.Nav>
    )
}

export default Menu
