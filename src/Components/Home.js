import React from 'react';
import Svg from '../assets/sprite.svg';

const Home = () => {
    return (
        <>
            <h1 className="heading">Image Search</h1>

            <div className="search">
                <input className="search__input" type="text" placeholder="Find Image" />
                <button className="search__btn">
                    <svg className="search__svg">
                        <use xlinkHref={`${Svg}#icon-search`}></use>
                    </svg>
                </button>
            </div>

            <div className="catalogue">
                <div className="imageCard">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default Home;
