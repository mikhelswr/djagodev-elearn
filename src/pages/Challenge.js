import React from "react";
import { CardEvent } from "../components/Card";

import imgChallenge from "../assets/challenge1.png";
import imgChallenge2 from "../assets/challenge2.png";

function Challenge() {
    return (
        <section className='top'>
            <div className='sectionText flex'>
                <h2 className='text-bold mb10'>Challenge</h2>
                <p className='text-medium'>
                    Tingkatkan kemampuan kamu dengan tantangan bersama para
                    penantang lain
                </p>
                <div className='inputButton'>
                    <input type='text' placeholder='Challenge desain' />
                    <button>Cari</button>
                </div>
            </div>
            <div className='sectionContent'>
                <div className='flexEvent'>
                    <CardEvent
                        img={imgChallenge}
                        title={
                            "ITFEST : Challange membuat website E-Learning berbasis Frontend"
                        }
                        organizer={"Djagodev Indonesia"}
                        description={
                            "ITFEST perlombaan membuat website E-Learning untuk pertumbuhan pendidikan indonesia semakin maju"
                        }
                        people={10}
                        time={30}
                    />
                    <CardEvent
                        img={imgChallenge2}
                        title={
                            "ITFEST : Challange membuat Desain UI/UX E-Learning "
                        }
                        organizer={"Djagodev Indonesia"}
                        description={
                            "ITFEST perlombaan membuat UI/UX E-Learning untuk pertumbuhan pendidikan indonesia semakin maju"
                        }
                        people={10}
                        time={30}
                    />
                </div>
            </div>
        </section>
    );
}

export default Challenge;
