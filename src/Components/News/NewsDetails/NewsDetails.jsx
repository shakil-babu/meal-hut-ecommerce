import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { foodNews } from '../../../utilities/foodInfo';
import {BiLeftArrowCircle} from 'react-icons/bi';
import './NewsDetails.css';
const NewsDetails = () => {
    const {NewsId} = useParams();
    const findNews = foodNews.find((item) => item.id === NewsId);

    // filter news
    const filterdNews = foodNews.filter(news => news.id !== NewsId);

    const { date,img, p1, p2, p3, title} = findNews ;
    return (
        <>
            <section className="news-details-main-area">
                <div className="container">
                    <div className="news-location">
                        <h3>Home / News / {title}</h3>
                    </div>
                    
                    <div className="news-info-and-others-info-flex">
                        <div className="news-inforamtion-area">
                        <Link style={{textDecoration:'none', width:'150px'}} to='/'><button className='back-btn'><BiLeftArrowCircle className='icon'/>Back</button></Link>
                            <div className="news-img-main-box">
                                <img src={img} alt="img"/>
                                <p>{date}</p>
                                <hr/>
                            </div>

                            <p>{p1}</p>
                            <p>{p2}</p>
                            <p>{p3}</p>
                            
                            <div className="take-food">
                                <div className="take-line"></div>
                                <h4>Take Food , Stay Good</h4>
                                <div className="take-line"></div>
                            </div>
                        </div>

                        <div className="other-news-area">
                            <h3>Other News</h3>
                            <div className="other-line"></div>
                            {
                                filterdNews.map((item) => {
                                    return (
                                        <Link to={`/news/${item.id}`}>
                                            <div className="other-news-main-info-area">
                                                <img src={item.img} alt="img"/>

                                                <div className="title-and-data">
                                                    <h5>{item.title}</h5>
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default NewsDetails
