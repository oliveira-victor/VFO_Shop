import Hero from "../../components/Hero"

import heroBoard from '../../assets/hero-boards.webp'

const Boards = () => {
    return (
        <>
            <Hero bgimage={heroBoard} />
            <h2 style={{ textAlign: 'center' }}>Em breve.</h2>
        </>
    )
}

export default Boards
