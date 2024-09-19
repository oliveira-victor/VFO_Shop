import { Link, useLocation } from 'react-router-dom'

import * as S from './styles'

import externalLink from '../../assets/external-link.svg'

const Menu = () => {

    const location = useLocation()

    return (
        <S.Nav>
            <S.MenuList>
                <li className={location.pathname === '/' ? 'highlight' : ''}>
                    <Link to='/'>
                        Início
                    </Link>
                </li>
                <li>✦</li>
                <li className={location.pathname === '/chaveiros' ? 'highlight' : ''}>
                    <Link to='/chaveiros'>
                        Chaveiros
                    </Link>
                </li>
                <li>✦</li>
                <li className={location.pathname === '/prints' ? 'highlight' : ''}>
                    <Link to='/prints'>
                        Prints
                    </Link>
                </li>
                <li>✦</li>
                <li className={location.pathname === '/cartoes' ? 'highlight' : ''}>
                    <Link to='/cartoes'>
                        Cartões
                    </Link>
                </li>
                <li>✦</li>
                <li className={location.pathname === '/quadros' ? 'highlight' : ''}>
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
