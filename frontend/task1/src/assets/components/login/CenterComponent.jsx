import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './center.css';
import Log from './login'; // Import the login component

const CenterComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <div className="center-container">
      <div className='side1'>
        <div className="side1-text">
          Hello Donors...
        </div>
        <Slider {...settings}>
          <div>
            <img src='https://img.freepik.com/premium-vector/illustration-person-donating-blood-social-active-youth-life-saving-impact-blood_1140815-3918.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid' alt="Slide 1" />
          </div>
          <div>
            <img src='https://img.freepik.com/premium-vector/illustration-blood-donation-cheerful-cartoon-character-encouraging-blood-donation_1300528-6560.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid' alt="Slide 2" />
          </div>
          <div>
            <img src='https://img.freepik.com/free-vector/set-people-donating-blood_52683-20754.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid' alt="Slide 3" />
          </div>
          <div>
            <img src='https://img.freepik.com/premium-photo/world-blood-donor-day_793999-4657.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid' alt="Slide 4" />
          </div>
          <div>
            <img src='https://img.freepik.com/premium-vector/world-blood-day-concept-vector-flat-illustrations_199064-821.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid' alt="Slide 5" />
          </div>
          <div>
            <img src='https://img.freepik.com/premium-photo/people-blood-donation-concept-volunteers-donated-blood-medical-charity-concept_1154968-110506.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid' alt="Slide 6" />
          </div>
        </Slider>
      </div>

      <div className='side2'>
      <div className="cube">
        <div className="face front"><img src="https://img.freepik.com/free-vector/illustration-people-donating-blood_52683-22259.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid" alt="Front" /></div>
        <div className="face back"><img src="https://img.freepik.com/premium-photo/interesting-illustrations-welcome-healthy-world-heart-day_750792-90566.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid" alt="Back" /></div>
        <div className="face right"><img src="https://img.freepik.com/premium-vector/illustration-blood-donation-cheerful-cartoon-character-encouraging-blood-donation_1300528-6300.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid" alt="Right" /></div>
        <div className="face left"><img src="https://img.freepik.com/free-vector/human-hand-with-blood-icon-donation_1308-131695.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid" alt="Left" /></div>
        <div className="face top"><img src="https://img.freepik.com/premium-vector/illustration-blood-donation-cheerful-cartoon-character-encouraging-blood-donation_1300528-9536.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid" alt="Top" /></div>
        <div className="face bottom"><img src="https://img.freepik.com/free-vector/hand-drawn-blood-cartoon-illustration_23-2150682068.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid" alt="Bottom" /></div>
      </div>
        <center><h3>Become hero by donating blood...</h3></center>
        <Log /> {/* Insert the Login component here */}
      </div>
    </div>
  );
};

export default CenterComponent;
