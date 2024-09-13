import * as S from './styles'

type Props = {
    bgimage: string
}

const Hero = ({ bgimage }: Props) => {
    return (
        
        <S.Hero style={{backgroundImage: `url(${bgimage})`}}>
        </S.Hero>
    )
}

export default Hero
