import { Link } from 'react-router-dom'
import * as S from './styles'

type Props = {
    title: string
    img: string
    link: string
    tag: boolean
    tagTxt: string
}

const ItemCard = ({ title, img, link, tag, tagTxt }: Props) => {
    return (
        <Link to={link}>
            <S.Card>
                {tag && <S.CardTag>{tagTxt}</S.CardTag>}
                <S.CardImg style={{ backgroundImage: `url(${img})` }}></S.CardImg>
                <S.CardTitle>
                    <h2>{title}</h2>
                </S.CardTitle>
            </S.Card>
        </Link>
    )
}

export default ItemCard