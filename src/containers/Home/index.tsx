import ItemCard from "../../components/ItemCard"

import * as S from './styles'

import product1 from '../../assets/product1.webp'
import Hero from "../../components/Hero"

const Home = () => {

    const items = [
        {
            id: 1,
            title: 'Chaveiros',
            img: product1,
            link: '/chaveiros',
            tag: true,
            tagTxt: 'Novo!'
        },
        {
            id: 2,
            title: 'Prints',
            img: 'https://vfostudio.vercel.app/dist/images/pf01.jpg',
            link: '#',
            tag: false,
            tagTxt: ''
        },
        {
            id: 3,
            title: 'Cartões',
            img: 'https://vfostudio.vercel.app/dist/images/pf01.jpg',
            link: '#',
            tag: false,
            tagTxt: ''
        },
        {
            id: 4,
            title: 'Quadros MDF',
            img: 'https://vfostudio.vercel.app/dist/images/pf01.jpg',
            link: '#',
            tag: false,
            tagTxt: ''
        }
    ]

    return (
        <>
            <Hero />
            <main className="container">
                <S.ItemsList>
                    {items.map((item) => (
                        <ItemCard
                            key={item.id}
                            title={item.title}
                            img={item.img}
                            link={item.link}
                            tag={item.tag}
                            tagTxt={item.tagTxt}
                        />
                    ))}
                </S.ItemsList>
            </main>
        </>
    )
}

export default Home