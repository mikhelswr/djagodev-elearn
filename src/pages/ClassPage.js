import React from "react";
import { Card } from "../components/Card";
import "../styles/pages/classPage.css";

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

function ClassPage() {
    return (
        <section className='top'>
            <div className='sectionText flex'>
                <h2 className='text-bold mb10'>Daftar Kelas</h2>
                <p className='text-medium'>
                    Kelas didesain dengan profresional dibidangnya dari tingkat
                    kelas Dasar hingga Expert
                </p>
                <div className='inputButton'>
                    <input type='text' placeholder='Kelas javascript' />
                    <button>Cari</button>
                </div>
            </div>
            <div className='sectionContent'>
                <div className='card-flex'>
                    <Card
                        img={card1}
                        title='UI UX Desain Studi Kasus E-Learning'
                        price={"187.000"}
                        realPrice={"250.000"}
                        time={12}
                        episode={20}
                        difficult='Dasar'
                    />
                    <Card
                        img={card2}
                        title='Full stack MERN Studi kasus Agency'
                        price='634.000'
                        realPrice='950.000'
                        time={72}
                        episode={50}
                        difficult='Menengah'
                    />
                    <Card
                        img={card3}
                        title='Bahasa Inggris Dasar'
                        price={"200.000"}
                        realPrice={"250.000"}
                        time={12}
                        episode={20}
                        difficult='Dasar'
                    />
                    <Card
                        img={card4}
                        title='Kelas Dasar Pemrograman Web'
                        price='500.000'
                        realPrice='850.000'
                        time={48}
                        episode={50}
                        difficult='Menengah'
                    />
                </div>
            </div>
        </section>
    );
}

export default ClassPage;
