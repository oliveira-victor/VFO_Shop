import { useState } from "react"

import Hero from "../components/Hero"

import * as S from './styles'

import heroKeys from '../assets/hero-keys.webp'
import key01 from '../assets/key01.webp'
import key02 from '../assets/key02.webp'
import key03 from '../assets/key03.webp'
import key04 from '../assets/key04.webp'
import key05 from '../assets/key05.webp'
import key06 from '../assets/key06.webp'
import key07 from '../assets/key07.webp'
import key08 from '../assets/key08.webp'
import key09 from '../assets/key09.webp'
import key10 from '../assets/key10.webp'
import key11 from '../assets/key11.webp'
import key12 from '../assets/key12.webp'

import fullkey00 from '../assets/fullkey00.webp';
import fullkey01 from '../assets/fullkey01.webp';
import fullkey02 from '../assets/fullkey02.webp';
import fullkey03 from '../assets/fullkey03.webp';
import fullkey04 from '../assets/fullkey04.webp';
import fullkey05 from '../assets/fullkey05.webp';
import fullkey06 from '../assets/fullkey06.webp';
import fullkey07 from '../assets/fullkey07.webp';
import fullkey08 from '../assets/fullkey08.webp';
import fullkey09 from '../assets/fullkey09.webp';
import fullkey10 from '../assets/fullkey10.webp';
import fullkey11 from '../assets/fullkey11.webp';
import fullkey12 from '../assets/fullkey12.webp';



const Keychains = () => {

    const [displayImage, setDisplayImage] = useState(fullkey00)

    const keychainsData = [
        { thumb: key01, full: fullkey01 },
        { thumb: key02, full: fullkey02 },
        { thumb: key03, full: fullkey03 },
        { thumb: key04, full: fullkey04 },
        { thumb: key05, full: fullkey05 },
        { thumb: key06, full: fullkey06 },
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
