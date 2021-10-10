import React from "react";
import "../styles/card.css";
import { AiFillStar } from "react-icons/ai";
import { BiTimeFive, BiPlayCircle } from "react-icons/bi";
import { HiChevronDoubleUp } from "react-icons/hi";

const Card = ({ img, title, price, realPrice, time, episode, difficult }) => {
    return (
        <div className='card'>
            <div className='image'>
                <img src={img} alt='' />
            </div>
            <h4 className='title text-reguler'>{title}</h4>
            <div className='price'>
                <p className='discPrice text-bold'>Rp. {price}</p>
                <span className='realPrice text-reguler'>Rp. {realPrice}</span>
            </div>
            <div className='details text-reguler'>
                <div className='time'>
                    <BiTimeFive className='icon' />
                    {time} Jam
                </div>
                <div className='episode'>
                    <BiPlayCircle className='icon' />
                    {episode} Episode
                </div>
                <div className='difficult'>
                    <HiChevronDoubleUp className='icon' />
                    {difficult}
                </div>
            </div>
            <div className='rating'>
                <div className='star'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <p>(285)</p>
            </div>
        </div>
    );
};
const CardTesti = ({ img, name, profresion, testi }) => {
    return (
        <div className='cardTesti'>
            <div className='cardColumn'>
                <img src={img} alt='' />
                <div className='star'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
            </div>
            <p className='name text-reguler'>{name}</p>
            <p className='profesion text-reguler'>{profresion}</p>
            <p className='testi text-reguler'>{testi}</p>
        </div>
    );
};
const CardEvent = ({
    img,
    title,
    organizer,
    description,
    people,
    time,
    date,
}) => {
    return (
        <div className='cardEvent'>
            <div className='img'>
                <img src={img} alt='' />
            </div>
            <a href='/challenge'>
                <h5 className='title text-reguler'>{title}</h5>
            </a>
            <p className='organizer text-reguler'>
                Penyelenggara : {organizer}
            </p>
            <p className='description text-reguler'>{description}</p>
            <div className='info'>
                {!date ? (
                    <>
                        <div className='people'>{people} Pemenang</div>
                        <div className='time'>{time} Hari lagi</div>
                    </>
                ) : (
                    <div className='date'>{date}</div>
                )}
            </div>
        </div>
    );
};

export { Card, CardTesti, CardEvent };
