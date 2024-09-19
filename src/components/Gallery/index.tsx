import { useState } from 'react'
import * as S from './styles'

const Gallery = ({ displayImage, thumbs }: GalleryProps) => {

    const [mainImg, setMainImg] = useState(displayImage)

    return (
        <>
            <S.GalleryContainer className="container">
                <S.MainImage>
                    <img className="display-img" src={mainImg} alt="Mockup do chaveiro" />
                </S.MainImage>
                <S.ThumbList>
                    {thumbs.map((img, index) => (
                        <li key={index}>
                            <img onMouseEnter={() => setMainImg(img.full)} src={img.thumb} alt="Miniatura do chaveiro" />
                        </li>
                    ))}
                </S.ThumbList>
            </S.GalleryContainer>
        </>
    )
}

export default Gallery
