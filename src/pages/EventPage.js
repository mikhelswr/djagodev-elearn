import React from "react";
import { CardEvent } from "../components/Card";

import imgEvent from "../assets/event1.png";
import imgEvent2 from "../assets/event2.png";

function EventPage() {
    return (
        <section className='top'>
            <div className='sectionText flex'>
                <h2 className='text-bold mb10'>Event</h2>
                <p className='text-medium'>
                    Tingkatkan kemampuan kamu dengan bertemu expert secara
                    langsung
                </p>
                <div className='inputButton'>
                    <input type='text' placeholder='Challenge desain' />
                    <button>Cari</button>
                </div>
            </div>
            <div className='sectionContent'>
                <div className='flexEvent'>
                    <CardEvent
                        img={imgEvent}
                        title={
                            "Event Design UI/UX How tome make UI/UX and testing for real user"
                        }
                        organizer={"Djagodev Indonesia"}
                        description={
                            "Event kali ini kita akan belajar tentang bagaimana cara membuat desain UI/UX yang mudah digunakan oleh user, serta testing terhadap user"
                        }
                        date={"06 Oktober 2021"}
                    />
                    <CardEvent
                        img={imgEvent2}
                        title={
                            "Event Webinar improve ilustration skill for beginner in the new era"
                        }
                        organizer={"Djagodev Indonesia"}
                        description={
                            "Tingkatkan skill membuat gambar ilustrasi dari melakukan sket dengan kertas hingga membuat gambar secara digital"
                        }
                        date={"09 Oktober 2021"}
                    />
                </div>
            </div>
        </section>
    );
}

export default EventPage;
