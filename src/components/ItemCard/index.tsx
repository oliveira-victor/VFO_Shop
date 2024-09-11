import * as S from './styles'

type Props = {
    title: string
    img: string
    url: string
    tag: boolean
    tagTxt: string
}

const ItemCard = ({ title, img, url, tag, tagTxt }: Props) => {
    return (
        <S.Card onClick={() => console.log(url)}>
            {tag && <S.CardTag>{tagTxt}</S.CardTag>}
            <S.CardImg style={{backgroundImage: `url(${img})`}}></S.CardImg>
            <S.CardTitle>
                <h2>{title}</h2>
            </S.CardTitle>
        </S.Card>
    )
}

export default ItemCard