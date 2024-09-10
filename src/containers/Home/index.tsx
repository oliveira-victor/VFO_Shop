import ItemCard from "../../components/ItemCard"

import * as S from './styles'

const Home = () => {

    const items = [
        {
            id: 1,
            title: 'Chaveiros',
            img: 'https://vfostudio.vercel.app/dist/images/pf01.jpg',
            alt: 'descricao',
            url: '#',
            tag: true,
            tagTxt: 'Promoção'
        },
        {
            id: 2,
            title: 'Prints A4',
            img: 'https://vfostudio.vercel.app/dist/images/pf01.jpg',
            alt: 'descricao',
            url: '#',
            tag: true,
            tagTxt: 'Novo'
        },
        {
            id: 3,
            title: 'Cartões',
            img: 'https://vfostudio.vercel.app/dist/images/pf01.jpg',
            alt: 'descricao',
            url: '#',
            tag: true,
            tagTxt: 'Promoção'
        },
        {
            id: 4,
            title: 'Quadros MDF',
            img: 'https://vfostudio.vercel.app/dist/images/pf01.jpg',
            alt: 'descricao',
            url: '#',
            tag: true,
            tagTxt: 'Novo'
        }
    ]

    return (
        <S.Home>
            <S.ItemsList>
                {items.map((item) => (
                    <ItemCard 
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        alt={item.alt}
                        url={item.url}
                        tag={item.tag}
                        tagTxt={item.tagTxt}
                    />
                ))}
            </S.ItemsList>
        </S.Home>
    )
}

export default Home