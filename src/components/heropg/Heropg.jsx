import React, { useState } from "react";
import "./heropg.scss";
import Counter from "../counter/Counter";
import { MdOutlineBedroomParent } from "react-icons/md";
import { CgBoy } from "react-icons/cg";
import { FaHatCowboy } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
const Heropg = () => {
  const [showDropdwon,setShowDropdown] =useState(false)
  const [adults, setadults] = useState(0)
  const [child, setchild] = useState(0);
  const [rooms, setrooms] = useState(0);
  
  const adjustAdults = (x)=>{
    setadults(x)
  }
   const adjustRooms = (x) => {
     setrooms(x);
   };
    const adjustChild = (x) => {
      setchild(x);
    };


  return (
    <div className="heropg">
      <div className="gard"></div>
      <div className="list">
        <div className="alldropdown">
          <input type="date" className="DateDrop" />
          <span className="drop">
            &nbsp; &nbsp; Check in
            <MdDateRange size={30} />
          </span>

          <input
            type="date"
            style={{ marginLeft: "13.5vw" }}
            className="DateDrop"
          />
          <span className="drop">
            &nbsp; &nbsp; Check out
            <MdDateRange size={30} />
          </span>
          <div>
            <div
              className="total"
              onClick={() => setShowDropdown(!showDropdwon)}
            >
              {adults} Adults . {child} Childrens . {rooms} Rooms
            </div>
            {showDropdwon ? (
              <div className="dropdown">
                <div>
                  <span>
                    <small>Maximum and minimum amount</small>
                  </span>
                </div>
                <div className="tiles">
                  <div className="tiles-info">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <MdOutlineBedroomParent />
                      <h4>Rooms</h4>
                    </div>

                    <span>
                      <small>Maximum and minimum amount</small>
                    </span>
                  </div>
                  <div className="tiles-counter">
                    <Counter callback={adjustRooms} />
                  </div>
                </div>
                <div className="tiles">
                  <div className="tiles-info">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <FaHatCowboy />
                      <h4>Adult</h4>
                    </div>
                    <span>
                      <small>(Maximum and minimum amount)</small>
                    </span>
                  </div>
                  <div className="tiles-counter">
                    <Counter callback={adjustAdults} />
                  </div>
                </div>
                <div className="tiles">
                  <div className="tiles-info">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CgBoy />
                      <h4>Children</h4>
                    </div>
                    <span>
                      <small>(Maximum and minimum amount)</small>
                    </span>
                  </div>
                  <div className="tiles-counter">
                    <Counter callback={adjustChild} />
                  </div>
                </div>
                <div className="tiles">
                  <button onClick={() => setShowDropdown(!showDropdwon)}>
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <button className="cheakAvl">Check Avaibality</button>
      </div>
    </div>
  );
};

export default Heropg;
