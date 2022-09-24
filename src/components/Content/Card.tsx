import axios from "axios";
import { useState } from 'react';

function Card({item}: any) {
    const [img, setImg] = useState('');
    const options = {
      method: 'GET',
      url: 'https://pexelsdimasv1.p.rapidapi.com/v1/search',
      params: {query: item.tag.en, locale: 'en-US', per_page: '1', page: '1'},
      headers: {
        Authorization: '563492ad6f91700001000001692697fded6c41cb9d80c43577e2d08a',
        'X-RapidAPI-Key': '934e2328d9msh9e6f388587d46d0p10d8d4jsnad491ee8fa2d',
        'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
      }
    };
    
    axios.request(options)
    .then((response) => {
      console.log(response.data);
      setImg(response.data.photos[0].src.medium);
    })
    .catch((error) => {
      console.error(error);
    });

    return ( 
        <article className="card card--1">
        <div className="card__info-hover">
          <svg className="card__like" viewBox="0 0 24 24">
            <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
          </svg>
        </div>
        <div className="card__img" style={{
          backgroundImage:  `url(${img})`
        }}></div>
        <div className="card_link">
          <div className="card__img--hover" style={{
            backgroundImage: `url(${img})`
          }}></div>
        </div>
        <div className="card__info">
          <span className="card__category">{parseFloat(item.confidence).toFixed(2)}%</span>
          <h3 className="card__title">{item.tag.en}</h3>
        </div>
      </article>
    );
}

export default Card;