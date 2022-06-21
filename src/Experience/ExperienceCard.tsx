import { IonCol, IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, Pagination, Scrollbar, Navigation} from "swiper"
import "./Experience.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import "swiper/css/pagination";

const ExperienceCard = () => {
  return (
    <IonPage>
        <IonContent>
            <Swiper
                modules={[Autoplay, Pagination, Scrollbar, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination
                autoplay
            >
                <SwiperSlide className="PTTimeline-Index">
                        <div className="PTTimeline-Body">
                            <div>Physical Therapist Experience</div>
                            <ul>Internship Experience
                                <hr />
                                <li>Maharaj Hospital
                                    <ul>
                                        <li>Orthopedic Field</li>
                                        <li>Neuropathy Field</li>
                                        <li>Infant Field</li>
                                        <li>Chest Field</li>
                                        <li>Elder Field</li>
                                    </ul>  
                                </li>
                                <hr />
                                <li>Sermngam Hospital
                                    <ul>
                                        <li>Orthopedic Field</li>
                                        <li>Neuropathy Field</li>
                                        <li>Public Health Field</li>
                                    </ul>
                                </li>
                                <hr/>
                                <li>SriSangWon Hospital
                                    <ul>
                                        <li>Orthopedic Field</li>
                                        <li>Neuropathy Field</li>
                                        <li>Public Health Field</li>
                                    </ul>
                                </li>
                                <hr />
                                <li>MaeSot Hospital
                                    <ul>
                                        <li>Orthopedic Field</li>
                                        <li>Neuropathy Field</li>
                                        <li>Public Health Field</li>
                                    </ul>
                                </li>
                            </ul>
                            <ul>Working Experience
                                <hr />
                                <li>Freelancer
                                    <ul>
                                        <li>20 Patients In past 3 Years</li>
                                    </ul>
                                </li>
                                <hr />
                                <li>Part Timer
                                    <ul>
                                        <li>Ban Phak Jai Nursing Home</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                </SwiperSlide>
            </Swiper>
        </IonContent>
    </IonPage>
  )
}

export default ExperienceCard