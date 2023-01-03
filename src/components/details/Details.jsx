import React from 'react'
import './details.scss'
import SomeImg from "../someImg/SomeImg";
import Footer from '../Footer/Footer.jsx';

const Details = () => {
  return (
    <div className="allInfo">
      <div className="allDetails">
        <SomeImg />
        <div className="head">
          <div className="headInfo">
            <h3>Hotal Vishal @ Airport</h3>
            <span>
              <b>104/2/2,</b> National Highway 8, Mahipaipur, New &nbsp;&nbsp;
              <a href="https://drive.google.com/file/d/10KngJN9ykoudva7m0qK4dUVADDsMUCbz/view">
                View
              </a>
              <br></br>New Delhi 110098, India{" "}
            </span>
            <span>+91 9876543210 , 9123456780</span>
            <div className="nearby">
              <ul>
                <li>Freeparking</li>
                <li>Confrance room</li>
                <li>ATM</li>
                <li>Pools</li>
              </ul>
            </div>
          </div>
          <img
            src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora
          a us nihil nobs officiis quibusdam excepturi, molestias ex suscipit
          pariatur culpa eaque magnam repellat placeat. Dolores, ratione magnam
          quidem harum ipsa, voluptatem illum unde eum perspiciatis libero quam
          excepturi sint dolorem doloribus tempora, esse pariatur. Dolorem
          laudantium ipsum consectetur!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Details