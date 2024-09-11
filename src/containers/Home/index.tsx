import ItemCard from "../../components/ItemCard"

import * as S from './styles'

import product1 from '../../assets/product1.webp'

const Home = () => {

    const items = [
        {
            id: 1,
            title: 'Chaveiros',
            img: product1,
            url: '#',
            tag: true,
            tagTxt: 'Novo!'
        },
        {
            id: 2,
            title: 'Prints',
            img: 'https://vfostudio.vercel.app/dist/images/pf01.jpg',
            url: '#',
            tag: false,
            tagTxt: ''
        },
        {
            id: 3,
            title: 'Cartões',
            img: 'https://vfostudio.vercel.app/dist/images/pf01.jpg',
            url: '#',
            tag: false,
            tagTxt: ''
        },
        {
            id: 4,
            title: 'Quadros MDF',
            img: 'https://vfostudio.vercel.app/dist/images/pf01.jpg',
            url: '#',
            tag: false,
            tagTxt: ''
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