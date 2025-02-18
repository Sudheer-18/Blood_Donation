import React from 'react';
import './log.css';
import CenterComponent from './CenterComponent';

const Login = () => {
  return (
    <div>
      {/* Original container */}
      <div className="container">
        {/* Render original circles */}
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

        {/* Render original small circles */}
        <div className='smallc'>
          <img src='https://img.freepik.com/free-vector/cartoon-style-heart-illustration_52683-81515.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid-rr-similar'/>
        </div>
        <div className='smallc1'>
          <img src='https://img.freepik.com/free-vector/hand-holding-blood-bag-type-o-donation_1308-113625.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid-rr-similar'/>
        </div>
        <div className='smallc2'>
          <img src='https://img.freepik.com/free-vector/hand-drawn-blood-cartoon-illustration_23-2150722068.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid-rr-similar'/>
        </div>
        <div className='smallc3'>
          <img src='https://img.freepik.com/free-vector/flat-design-volunteer-donating-blood_23-2148273548.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid'/>
        </div>
        <div className='smallc4'>
          <img src='https://img.freepik.com/premium-vector/blood-bag-holder-hand-donor_169241-1396.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid'/>
        </div>
        {/*verysmall circle*/}
        <div className='vsmallc'>
          <img src='https://img.freepik.com/premium-photo/drop-water-with-cross-it_1277842-42427.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid'/>
        </div>
        <div className='vsmallc1'>
          <img src='https://img.freepik.com/premium-photo/heart-with-blood-drop-blood-drop_1099577-2574.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid'/>
        </div>
        <div className='vsmallc2'>
          <img src='https://img.freepik.com/premium-photo/print_1050053-5676.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid'/>
        </div>
      </div>
      <CenterComponent/>

      {/* New container for bottom-right corner */}
      <div className="container container-bottom-right">
        {/* Render duplicate circles */}
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

        {/* Render duplicate small circles */}
        <div className='smallc'>
          <img src='https://img.freepik.com/free-vector/cartoon-style-heart-illustration_52683-81515.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid-rr-similar'/>
        </div>
        <div className='smallc1'>
          <img src='https://img.freepik.com/free-vector/hand-holding-blood-bag-type-o-donation_1308-113625.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid-rr-similar'/>
        </div>
        <div className='smallc2'>
          <img src='https://img.freepik.com/free-vector/hand-drawn-blood-cartoon-illustration_23-2150722068.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid-rr-similar'/>
        </div>
        <div className='smallc3'>
          <img src='https://img.freepik.com/free-vector/flat-design-volunteer-donating-blood_23-2148273548.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid'/>
        </div>
        <div className='smallc4'>
          <img src='https://img.freepik.com/premium-vector/blood-bag-holder-hand-donor_169241-1396.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid'/>
        </div>
        {/*verysmall circle*/}
        <div className='vsmallc'>
          <img src='https://img.freepik.com/premium-photo/drop-water-with-cross-it_1277842-42427.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid'/>
        </div>
        <div className='vsmallc1'>
          <img src='https://img.freepik.com/premium-photo/heart-with-blood-drop-blood-drop_1099577-2574.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid'/>
        </div>
        <div className='vsmallc2'>
          <img src='https://img.freepik.com/premium-photo/print_1050053-5676.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid'/>
        </div>
      </div>
    </div>
  );
};

export default Login;
