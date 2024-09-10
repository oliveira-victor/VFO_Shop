import * as S from './styles'

type Props = {
    title: string
    img: string
    alt: string
    url: string
    tag: boolean
    tagTxt: string
}

const ItemCard = ({ title, img, alt, url, tag, tagTxt }: Props) => {
    return (
        <S.Card onClick={() => console.log(url)}>
            {tag && <S.CardTag>{tagTxt}</S.CardTag>}
            <img src={img} alt={alt} />
            <S.CardTitle>
                <h2>{title}</h2>
            </S.CardTitle>
        </S.Card>
    )
}

export default ItemCard