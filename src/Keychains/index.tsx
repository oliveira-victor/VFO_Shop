import { useState } from "react"

import Hero from "../components/Hero"

import * as S from './styles'

const Keychains = () => {

    const [displayImage, setDisplayImage] = useState('https://placehold.it/1080x1080')

    const keychainsData = [
        'https://placehold.it/1080x1080',
        'https://placehold.it/100x100',
        'https://placehold.it/80x80',
        'https://placehold.it/1080x1080',
        'https://placehold.it/100x100',
        'https://placehold.it/80x80',
        'https://placehold.it/1080x1080',
        'https://placehold.it/100x100',
        'https://placehold.it/80x80',
        'https://placehold.it/1080x1080'
    ]

    return (
        <>
            <Hero bgimage='https://placehold.it/1080x1080' />
            <S.KeysContainer className="container">
                <S.MainImage>
                    <img className="display-img" src={displayImage} alt="" />
                </S.MainImage>
                <S.KeysList>
                    {keychainsData.map((img) => (
                        <li>
                            <img onMouseEnter={() => setDisplayImage(img)} src={img} alt="" />
                        </li>
                    ))}
                </S.KeysList>
            </S.KeysContainer>
        </>
    )
}

export default Keychains
