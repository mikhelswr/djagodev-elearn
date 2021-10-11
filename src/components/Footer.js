import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.png";
import logoUNS from "../assets/logo_UNS.png";
import logoMikroptik from "../assets/logo_MikroptikUNS.png";
import logoBytefests from "../assets/logo_Bytesfest.png";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className='footerDesc'>
                <div className='col'>
                    <img src={logo} alt='' />
                    <p>
                        Platform untuk belajar skill baru dengan terstruktur
                        dari mentor yang profresional dibidangnya masing-masing.
                    </p>
                </div>
                <div className='col colFlex'>
                    <div className='colChild'>
                        <h4 className='text-medium'>Kelas</h4>
                        <NavLink to='/class'>Kelas Desain</NavLink>
                        <NavLink to='/class'>Kelas Koding</NavLink>
                        <NavLink to='/class'>Kelas Bahasa</NavLink>
                    </div>
                    <div className='colChild'>
                        <h4 className='text-medium'>Explore</h4>
                        <NavLink to='/class'>Cari Kelas</NavLink>
                        <NavLink to='/class'>Learning Path</NavLink>
                        <NavLink to='/class'>Semua Kelas</NavLink>
                    </div>
                    <div className='colChild'>
                        <h4 className='text-medium'>Tentang Kami</h4>
                        <a href='#contact'>Contact</a>
                        <a href='#careers'>Careers</a>
                        <a href='#instagram'>Instagram</a>
                    </div>
                </div>
                <div className='col'>
                    <h4>Office</h4>
                    <p>
                        PT. Djagodev Indonesia Kokap, Senden, Ngawen, Klaten,
                        Jawa Tengah, Indonesia
                    </p>
                    <p className='email'>Djagodev@gmail.com</p>
                </div>
            </div>
            <div className='footer'>
                <div className='col'>
                    <div className='link'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/class'>Kelass</NavLink>
                        <NavLink to='/challenge'>Challenge</NavLink>
                        <NavLink to='/event'>Event</NavLink>
                    </div>
                </div>
                <div className='col cr'>
                    <p className='center'>
                        © Djagodev 2021 all rights reserved
                    </p>
                </div>
                <div className='col support'>
                    <p>Support By</p>
                    <div className='logo'>
                        <img src={logoUNS} alt='' />
                        <img src={logoMikroptik} alt='' />
                        <img src={logoBytefests} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
