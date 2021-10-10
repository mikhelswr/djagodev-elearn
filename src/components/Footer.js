import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.png";
import logoUNS from "../assets/logo_UNS.png";
import logoMikroptik from "../assets/logo_MikroptikUNS.png";
import logoBytefests from "../assets/logo_Bytesfest.png";

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
                        <a href='#desain'>Kelas Desain</a>
                        <a href='#koding'>Kelas Koding</a>
                        <a href='#bahasa'>Kelas Bahasa</a>
                    </div>
                    <div className='colChild'>
                        <h4 className='text-medium'>Explore</h4>
                        <a href='#cariKelas'>Cari Kelas</a>
                        <a href='#learningPath'>Learning Path</a>
                        <a href='#class'>Semua Kelas</a>
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
                        <a href='#home'>Home</a>
                        <a href='#class'>Kelas</a>
                        <a href='#challenge'>Challenge</a>
                        <a href='#event'>Event</a>
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
