import { Link } from 'react-router-dom'
import * as S from './styles'

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
                    <a href="#">
                        Quadros MDF
                    </a>
                </li>
                <li>✦</li>
                <li>
                    <a href="https://vfostudio.vercel.app/links-pt.html" target='_blank'>
                        VFO links
                    </a>
                </li>
            </S.MenuList>
        </S.Nav>
    )
}

export default Menu
