import React from 'react'
import { Link } from 'react-router-dom';
import { foodNews } from '../../utilities/foodInfo'
import './News.css';
const News = () => {
    return (
        <>
            <section className="news-main-area">
                <div className="container">
                    <div className="choose-us-title-area">
                        <h1>News for Food</h1>
                        <div className="line1"></div>
                    </div>

                    <div className="news-grid-layout">
                        {
                            foodNews.map((item) => {
                                return (
                                    <div className="news-card">
                                        <img src={item.img} alt=""/>

                                        <h5>{item.title}</h5>
                                        <p>{item.p2}</p>

                                        <Link style={{textDecoration:'none'}} to = {`/news/${item.id}`}><button>Read more</button></Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>   
        </>
    )
}

export default News
