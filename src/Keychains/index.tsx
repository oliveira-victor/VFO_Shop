import { useState } from "react"

import Hero from "../components/Hero"

import * as S from './styles'

import heroKeys from '../assets/hero-keys.webp'
import key01 from '../assets/key01.jpg'

const Keychains = () => {

    const [displayImage, setDisplayImage] = useState('https://placehold.it/1080x1080')

    const keychainsData = [
        { thumb: key01, full: 'https://vfostudio.vercel.app/dist/images/portfolio/a03+.jpg' },
        { thumb: key01, full: 'https://placehold.it/80x80' },
        { thumb: key01, full: 'https://placehold.it/1080x1080' },
        { thumb: key01, full: 'https://placehold.it/100x100' },
        { thumb: key01, full: 'https://placehold.it/80x80' },
        { thumb: key01, full: 'https://placehold.it/1080x1080' },
        { thumb: key01, full: 'https://placehold.it/100x100' },
        { thumb: key01, full: 'https://placehold.it/80x80' },
        { thumb: key01, full: 'https://placehold.it/1080x1080' },
        { thumb: key01, full: 'https://placehold.it/100x100' },
        { thumb: key01, full: 'https://placehold.it/1080x1080' },
        { thumb: key01, full: 'https://placehold.it/100x100' }
    ]

    return (
        <>
            <Hero bgimage={heroKeys} />
            <S.KeysContainer className="container">
                <S.MainImage>
                    <img className="display-img" src={displayImage} alt="" />
                </S.MainImage>
                <S.KeysList>
                    {keychainsData.map((img) => (
                        <li>
                            <img onMouseEnter={() => setDisplayImage(img.full)} src={img.thumb} alt="" />
                        </li>
                    ))}
                </S.KeysList>
            </S.KeysContainer>
        </>
    )
}

export default Keychains
