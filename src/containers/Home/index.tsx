import ItemCard from "../../components/ItemCard"
import Hero from "../../components/Hero"

import * as S from './styles'

import heroImg from '../../assets/hero.webp'
import product1 from '../../assets/product1.webp'
import product2 from '../../assets/product2.webp'
import product3 from '../../assets/product3.webp'
import product4 from '../../assets/product4.webp'

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
            title: 'Prints A4/A3',
            img: product2,
            link: '/prints',
            tag: false,
            tagTxt: ''
        },
        {
            id: 3,
            title: 'Cartões',
            img: product3,
            link: '/cartoes',
            tag: false,
            tagTxt: ''
        },
        {
            id: 4,
            title: 'Quadros MDF',
            img: product4,
            link: '/quadros',
            tag: false,
            tagTxt: ''
        }
    ]

    return (
        <>
            <Hero bgimage={heroImg} />
            <div className="container">
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
            </div>
        </>
    )
}

export default Home
