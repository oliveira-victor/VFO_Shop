import * as S from './styles'

const Menu = () => {
    return (
        <S.Nav>
            <S.MenuList>
                <li>
                    <a href="#">
                        Início
                    </a>
                </li>
                <li>✦</li>
                <li>
                    <a href="#">
                        Chaveiros
                    </a>
                </li>
                <li>✦</li>
                <li>
                    <a href="#">
                        Prints
                    </a>
                </li>
                <li>✦</li>
                <li>
                    <a href="#">
                        Cartões
                    </a>
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