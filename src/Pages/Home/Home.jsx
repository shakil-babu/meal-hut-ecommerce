import React from 'react'
import Choose from '../../Components/Choose/Choose';
import FreshFruits from '../../Components/FreshFruits/FreshFruits';
import Header from '../../Components/Header/Header';
import Meals from '../../Components/Meals/Meals';
import News from '../../Components/News/News';
import Services from '../../Components/Services/Services';
import './Home.css';
const Home = () => {
    return (
        <>
            <section className='home-main-area'>
                <Header/>
                <Services/>
                <Meals/>
                <Choose/>
                <FreshFruits/>
                <News/>
            </section>   
        </>
    )
}

export default Home
