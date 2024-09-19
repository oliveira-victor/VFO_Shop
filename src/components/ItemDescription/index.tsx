import * as S from './styles'

type Props = {
    info: string[]
}

const ItemDescription = ({ info }: Props) => {
    return (
        <S.DescriptionList>
            {info.map((topic, index) => (
                <li key={index}>
                    {topic}
                </li>
            ))}
        </S.DescriptionList>
    )
}

export default ItemDescription
