import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardTesti } from "../components/Card";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "../styles/pages/home.css";

import imgHeader from "../assets/img-header.png";
import imgCurriculum from "../assets/img-curriculum.png";
import imgFunfact from "../assets/img-funfact.png";

import partnerGoogle from "../assets/partner-google.png";
import partnerIbm from "../assets/partner-ibm.png";
import partnerKominfo from "../assets/partner-kemkominfo.png";
import partnerAws from "../assets/partner-aws.png";
import partnerIntel from "../assets/partner-intel.png";
import partnerMicrosoft from "../assets/partner-microsoft.png";
import partnerSamsung from "../assets/partner-samsung.png";

import koding from "../assets/dropdown-koding.png";
import bahasa from "../assets/dropdown-bahasa.png";
import desain from "../assets/dropdown-desain.png";
import lpath from "../assets/dropdown-path.png";

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

function Home() {
    const clickAccordion = (e) => {
        e.target.parentElement.classList.toggle("active");
    };
    return (
        <>
            <div className='header'>
                <div className='headerText'>
                    <p className='sideText'>RAIH IMPIANMU!</p>
                    <h1 className='headerTitle'>
                        KUASAI SKILL IMPIAN HANYA DALAM 3 BULAN
                    </h1>
                    <p className='description font-description font-medium'>
                        Belajar terarah, jadi profresional bukanlah sekedar
                        mimpi. Kamu tak akan kehilangan arah, pilih learning
                        path dan jadilah profresional
                    </p>
                    <button className='button btnSecondary'>
                        Akses 3 Bulan GRATIS!{" "}
                        <IoIosArrowForward className='icon' />
                    </button>
                </div>
                <div className='headerImage'>
                    <img src={imgHeader} alt='' />
                </div>
            </div>
            <div className='partner'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={50}
                    loop={true}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src={partnerGoogle} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partnerIbm} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partnerKominfo} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partnerAws} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partnerIntel} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partnerMicrosoft} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partnerSamsung} alt='' />
                    </SwiperSlide>
                </Swiper>
            </div>
            <section>
                <div className='sectionText'>
                    <p className='sideText'>PERDALAM SKILL IMPIAN</p>
                    <h2 className='headerTitle'>
                        Kami sediakan berbagai kelas berkualitas untuk anda
                    </h2>
                </div>
                <div className='sectionContent'>
                    <div className='cardContainer'>
                        <NavLink to='/class' className='cardKelas primary'>
                            <div className='cardHeader'>
                                <img src={lpath} alt='' />
                                <IoIosArrowForward className='headerTitle' />
                            </div>
                            <div className='cardDescription'>
                                <h3 className='text-bold'>Learning Path</h3>
                                <p className='text-reguler'>
                                    Belajar mudah dan terarah
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to='/class' className='cardKelas'>
                            <div className='cardHeader'>
                                <img src={koding} alt='' />
                                <IoIosArrowForward className='headerTitle' />
                            </div>
                            <div className='cardDescription'>
                                <h3 className='text-bold'>Kelas Koding</h3>
                                <p className='text-reguler'>
                                    Aplikasi & Website
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to='/class' className='cardKelas '>
                            <div className='cardHeader'>
                                <img src={desain} alt='' />
                                <IoIosArrowForward className='headerTitle' />
                            </div>
                            <div className='cardDescription'>
                                <h3 className='text-bold'>Kelas Desain</h3>
                                <p className='text-reguler'>
                                    Desain Grafis & UI/UX
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to='/class' className='cardKelas '>
                            <div className='cardHeader'>
                                <img src={bahasa} alt='' />
                                <IoIosArrowForward className='headerTitle' />
                            </div>
                            <div className='cardDescription'>
                                <h3 className='text-bold'>Kelas Bahasa</h3>
                                <p className='text-reguler'>
                                    Inggris, Jepang & Korea
                                </p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </section>
            <section>
                <div className='sectionText'>
                    <p className='sideText'>KENAPA HARUS KAMI</p>
                    <h2 className='headerTitle'>
                        Kami sajikan kurikulum berstandar industri
                    </h2>
                </div>
                <div className='sectionContent'>
                    <div className='sectionFlex'>
                        <div className='accordion'>
                            <div
                                className='accordionList'
                                onClick={clickAccordion}
                            >
                                <h3 className='label'>
                                    Kurikulum berstandar industri internasional
                                </h3>
                                <p className='content font-description'>
                                    kelas dalam platform ini kamu buat dengan
                                    kerjasama industri untuk menyesuaikan
                                    kebutuhan saat ini
                                </p>
                            </div>
                            <div
                                className='accordionList'
                                onClick={clickAccordion}
                            >
                                <h3 className='label'>
                                    Belajar sesuai learning path
                                </h3>
                                <p className='content font-description'>
                                    Belajar terstruktur dan terarah untuk
                                    menjadi profresional, telah di desain sesuai
                                    alur yang ada
                                </p>
                            </div>
                            <div
                                className='accordionList'
                                onClick={clickAccordion}
                            >
                                <h3 className='label'>Komunitas yang besar</h3>
                                <p className='content font-description'>
                                    Komunitas dapat membantu siswa untuk
                                    meningkatkan ketrampilannya
                                </p>
                            </div>
                            <div
                                className='accordionList'
                                onClick={clickAccordion}
                            >
                                <h3 className='label'>
                                    Langsung direview oleh profresional
                                    dibidangnya
                                </h3>
                                <p className='content font-description'>
                                    Project kelas akan direview langsung oleh
                                    praktisi yang mahir dibidangnya
                                </p>
                            </div>
                        </div>
                        <div className='contentImage'>
                            <img src={imgCurriculum} alt='' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt'>
                <div className='sectionText'>
                    <p className='sideText'>KELAS POPULER BULAN INI</p>
                    <h2 className='headerTitle'>
                        Yuk segera mulai belajar skill impian sekarang
                    </h2>
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
            <section>
                <div className='sectionText center ma'>
                    <p className='sideText'>FUN FACT</p>
                    <h2 className='headerTitle'>
                        Belajar skill impian jadi lebih mudah dan terarah
                    </h2>
                </div>
                <div className='sectionContent fd'>
                    <div className='contentImage jcc ma'>
                        <img src={imgFunfact} alt='' />
                    </div>
                    <div className='data'>
                        <div className='dataColumn'>
                            <p className='side'>34.540</p>
                            <p className='text-reguler'>Happy Member</p>
                        </div>
                        <div className='dataColumn'>
                            <p className='side'>86</p>
                            <p className='text-reguler'>Total Course</p>
                        </div>
                        <div className='dataColumn'>
                            <p className='side'>8</p>
                            <p className='text-reguler'>Learning Path</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='sectionText'>
                    <p className='sideText'>HAPPY MEMBER</p>
                    <h2 className='headerTitle'>Kata mereka tentang kami</h2>
                </div>
                <div className='sectionContent'>
                    <div className='card-flex'>
                        <CardTesti
                            img={user1}
                            name={"Rayhan Aswiansyah"}
                            profresion={"UI UX Desainer"}
                            testi={
                                "Kelas yang sangat bermanfaat, skill yang saya impikan bisa saya dapat disini, penjelasan materinya mudah dimengerti"
                            }
                        />
                        <CardTesti
                            img={user2}
                            name={"Mikhel Swara B"}
                            profresion={"UI UX Desainer"}
                            testi={
                                "Kelas yang sangat bermanfaat, skill yang saya impikan bisa saya dapat disini, penjelasan materinya mudah dimengerti"
                            }
                        />
                        <CardTesti
                            img={user3}
                            name={"Robert Pambudi"}
                            profresion={"Chef"}
                            testi={
                                "Saya belajar bahasa inggris di sini, alhamdulillah saya bisa ngomong bahasa inggris dengan lebih baik."
                            }
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
