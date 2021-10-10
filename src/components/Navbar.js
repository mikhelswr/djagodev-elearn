/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo.png";
import { NavLink, Link, useLocation } from "react-router-dom";
import dropdownKoding from "../assets/dropdown-koding.png";
import dropdownBahasa from "../assets/dropdown-bahasa.png";
import dropdownDesain from "../assets/dropdown-desain.png";
import dropdownPath from "../assets/dropdown-path.png";
import dropdownBiaya from "../assets/dropdown-biaya.png";
import dropdownSemua from "../assets/dropdown-semua.png";
import { BiDownArrow } from "react-icons/bi";
import "../styles/navbar.css";

function Navbar() {
    let location = useLocation();
    const dropdown = () => {
        document.querySelector(".dropdownContent").classList.toggle("dflex");
    };

    return (
        <nav className='navbar'>
            <div className='navMenu'>
                <NavLink to='/'>
                    <img className='navTitle' src={logo} alt='' />
                </NavLink>
                <div className='navLink'>
                    <div className='dropdown'>
                        <div
                            className={
                                location.pathname === "/class"
                                    ? "link active"
                                    : "link"
                            }
                            to='/kelas'
                            onClick={() => dropdown()}
                        >
                            Kelas <BiDownArrow className='icon' />
                        </div>
                        <div className='dropdownContent'>
                            <Link to='/class'>
                                <div className='dropCard'>
                                    <img src={dropdownKoding} alt='' />
                                    <div className='content'>
                                        <p className='text-bold'>
                                            Kelas Koding
                                        </p>
                                        <p className='text-light'>
                                            Aplikasi & Website
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/class'>
                                <div className='dropCard'>
                                    <img src={dropdownSemua} alt='' />
                                    <div className='content'>
                                        <p className='text-bold'>Semua Kelas</p>
                                        <p className='text-light'>
                                            Cari kelas impian
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/class'>
                                <div className='dropCard'>
                                    <img src={dropdownDesain} alt='' />
                                    <div className='content'>
                                        <p className='text-bold'>
                                            Kelas Desain
                                        </p>
                                        <p className='text-light'>
                                            Desain Grafis & UI/UX
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <NavLink>
                                <div to='/class' className='dropCard'>
                                    <img src={dropdownPath} alt='' />
                                    <div className='content'>
                                        <p className='text-bold'>
                                            Learning Path
                                        </p>
                                        <p className='text-light'>
                                            Belajar mudah dan terarah
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                            <Link to='/class'>
                                <div className='dropCard'>
                                    <img src={dropdownBahasa} alt='' />
                                    <div className='content'>
                                        <p className='text-bold'>
                                            Kelas Bahasa
                                        </p>
                                        <p className='text-light'>
                                            Inggris, Jepang & Korea
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/class'>
                                <div className='dropCard'>
                                    <img src={dropdownBiaya} alt='' />
                                    <div className='content'>
                                        <p className='text-bold'>
                                            Benefit & Biaya
                                        </p>
                                        <p className='text-light'>
                                            Benefit & biaya mulai dari Rp. 0
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <NavLink
                        to='/challenge'
                        className='link'
                        activeClassName='active'
                        exact
                    >
                        Challenge
                    </NavLink>
                    <NavLink
                        to='/event'
                        className='link'
                        activeClassName='active'
                        exact
                    >
                        Event
                    </NavLink>
                    <NavLink
                        to='/about'
                        className='link'
                        activeClassName='active'
                        exact
                    >
                        About
                    </NavLink>
                </div>
            </div>
            <button className='button btnPrimary'>Masuk</button>
        </nav>
    );
}

export default Navbar;
