import { useState } from "react"

import Hero from "../components/Hero"

import * as S from './styles'

import heroKeys from '../assets/hero-keys.webp'
import key01a from '../assets/key01a.webp'
import key01b from '../assets/key01b.webp'
import key01c from '../assets/key01c.webp'
import key02 from '../assets/key02.webp'
import key03 from '../assets/key03.webp'
import key04 from '../assets/key04.webp'
import key05 from '../assets/key05.webp'
import key06a from '../assets/key06a.webp'
import key06b from '../assets/key06b.webp'
import key06c from '../assets/key06c.webp'
import key07 from '../assets/key07.webp'
import key08 from '../assets/key08.webp'
import key09 from '../assets/key09.webp'
import key10 from '../assets/key10.webp'
import key11 from '../assets/key11.webp'
import key12 from '../assets/key12.webp'

import fullkey00 from '../assets/fullkey00.webp';
import fullkey01a from '../assets/fullkey01a.webp';
import fullkey01b from '../assets/fullkey01b.webp';
import fullkey01c from '../assets/fullkey01c.webp';
import fullkey02 from '../assets/fullkey02.webp';
import fullkey03 from '../assets/fullkey03.webp';
import fullkey04 from '../assets/fullkey04.webp';
import fullkey05 from '../assets/fullkey05.webp';
import fullkey06a from '../assets/fullkey06a.webp';
import fullkey06b from '../assets/fullkey06b.webp';
import fullkey06c from '../assets/fullkey06c.webp';
import fullkey07 from '../assets/fullkey07.webp';
import fullkey08 from '../assets/fullkey08.webp';
import fullkey09 from '../assets/fullkey09.webp';
import fullkey10 from '../assets/fullkey10.webp';
import fullkey11 from '../assets/fullkey11.webp';
import fullkey12 from '../assets/fullkey12.webp';



const Keychains = () => {

    const [displayImage, setDisplayImage] = useState(fullkey00)

    const keychainsData = [
        { thumb: key01a, full: fullkey01a },
        { thumb: key01b, full: fullkey01b },
        { thumb: key01c, full: fullkey01c },
        { thumb: key02, full: fullkey02 },
        { thumb: key03, full: fullkey03 },
        { thumb: key04, full: fullkey04 },
        { thumb: key05, full: fullkey05 },
        { thumb: key06a, full: fullkey06a },
        { thumb: key06b, full: fullkey06b },
        { thumb: key06c, full: fullkey06c },
        { thumb: key07, full: fullkey07 },
        { thumb: key08, full: fullkey08 },
        { thumb: key09, full: fullkey09 },
        { thumb: key10, full: fullkey10 },
        { thumb: key11, full: fullkey11 },
        { thumb: key12, full: fullkey12 }
    ]

    return (
        <>
            <Hero bgimage={heroKeys} />
            <S.KeysContainer className="container">
                <S.MainImage>
                    <img className="display-img" src={displayImage} alt="Miniatura do chaveiro" />
                </S.MainImage>
                <S.KeysList>
                    {keychainsData.map((img, index) => (
                        <li key={index}>
                            <img onMouseEnter={() => setDisplayImage(img.full)} src={img.thumb} alt="" />
                        </li>
                    ))}
                </S.KeysList>
            </S.KeysContainer>
        </>
    )
}

export default Keychains
