import React, { useState } from "react";
import './ProcedureCss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tilt from 'react-parallax-tilt';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Nav2 from "../navbarpages/nav2";
import Footer from "../footer/footer";

export const ProcedurePage = () => {    
    const [flippedCard, setFlippedCard] = useState(null);

    const toggleFlip = (cardIndex) => {
        setFlippedCard(flippedCard === cardIndex ? null : cardIndex);
    };

    return (
        <>
            <Nav2/>
            <div className="main">
                <div className="MainHead">
                    <div className="matter">
                        <h1>What happens to donated blood?</h1>
                        <p>It changes lives. The person receiving your blood may have cancer, a difficult pregnancy or lifelong medical condition. You can help them live the 'normal' life we often take for granted.</p>
                    </div>
                </div>
                <div className="heading1">Watch the journey of blood</div>
                <div className="content1">
                    <div className="video">
                        <iframe
                            className="youtubelink"
                            src="https://www.youtube.com/embed/mO5qHxY0IFU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="videoMatter">
                        <p>Before your life-saving donation reaches people in need, it goes through a complex process to ensure we maintain one of the safest blood supplies in the world. Watch this video for an overview.</p>
                    </div>
                </div>

                <div className="heading2">Follow your blood on its journey</div>
                <div className="content2">
                    <Tilt>
                {/* Card 1 */}
                <div 
                    className={`flip-card ${flippedCard === 1 ? 'flipped' : ''}`}
                    onClick={() => toggleFlip(1)}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="img1">
                                <img src="./public/blood-delivery-van.png" alt="Blood Delivery Van" />
                            </div>
                            <div className="cnt1">
                                <h3 style={{top:"10px"}}>1) First, it's tested</h3>
                                <p>Your donation is carefully packed and sent from the donor centre to a processing centre there are four across Australia. In the processing centre, we test your blood so we know it’s safe for a patient.</p>
                                <div className="anchortag1">
                                    Learn how blood is tested
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="flip-card-back">
                <div className="testheading">Why we test blood</div>
                <div className="testimg">
                    <img src="./public/testing.jpg" />
                </div>
                <div className="testmatter">
                    <p>Safety is our number one priority. All of our policies and guidelines are based on the latest medical research, and what it tells us is safest for donors and patients. </p>
                    <p>The people who receive blood are often already quite sick. This makes them more likely to be infected by viruses, bacteria and other nasties, and to have a higher chance of worse outcomes if they do.</p>
                    <p>So, to protect them we do a lot of testing to make sure everything’s OK first.</p>
                </div>
                        </div>
                    </div>
                </div>
                </Tilt>
                {/* Card 2 */}
                <Tilt>
                <div 
                    className={`flip-card ${flippedCard === 2 ? 'flipped' : ''}`}
                    onClick={() => toggleFlip(2)}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="img1">
                                <img src="./public/blood-test-tubes.png" alt="Blood Test Tubes" />
                            </div>
                            <div className="cnt1">
                                <h3 style={{top:"10px"}}>2) Then, processed</h3>
                                <p>If tests come back negative, we put it in a centrifuge. This spins the blood really fast until it separates into red blood cells, plasma, and something called a ‘buffy coat’ (white blood cells and platelets).</p>
                                <div className="anchortag1">
                                    Making blood components
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="flip-card-back">
                <div className="testheading">How Blood Components are Separated</div>
                <div className="testimg">
                    <img src="./public/testTube2.jpg" />
                </div>
                <div className="testmatter">
                    <p>Red Blood Cells (RBCs): These cells carry oxygen to tissues throughout the body. They are often used for patients suffering from anemia or undergoing surgery. </p>
                    <p>Plasma: Plasma is the liquid portion of blood, which contains water, salts, and proteins. It’s commonly used to treat patients with liver conditions, burns, or severe infections.</p>
                    <p>Platelets: From the buffy coat, platelets are separated and used for patients undergoing chemotherapy.</p>
                </div>
                        </div>
                    </div>
                </div>
                </Tilt>

                {/* Card 3 */}
                <Tilt>
                <div 
                    className={`flip-card ${flippedCard === 3 ? 'flipped' : ''}`}
                    onClick={() => toggleFlip(3)}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="img1">
                                <img src="./public/doctors.png" alt="Doctors" />
                            </div>
                            <div className="cnt1">
                                <h3 style={{top:"10px"}}>3) Sent to hospitals</h3>
                                <p>Once your donation is separated, it’s put into a press. This squashes the red cells into one new bag and the plasma into another. Your blood components are sent out to where they’re needed most.</p>
                                <div className="anchortag1">
                                Learn how Blood Reaches Patients in Need
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="flip-card-back">
                <div className="testheading">How Blood Reaches Patients in Need</div>
                <div className="testimg">
                    <img src="./public/doctorsDetail.jpg" />
                </div>
                <div className="testmatter">
                    <p>Understanding how blood reaches patients in need involves recognizing the interconnected roles of donors, healthcare providers, patients, blood banks, and regulatory bodies.</p>
                    <p>Blood products are sent out based on demand. Blood banks and hospitals coordinate closely to ensure that blood is delivered where it’s needed most, such as trauma centers, surgical units, or cancer wards.</p>
                    <p>Special temperature-controlled containers are used to ensure that blood remains safe and usable during transport.</p>
                </div>
                        </div>
                    </div>
                </div>
                </Tilt>
            </div>
        </div>
        <Footer/>
        </>
    );
};
