import React, { useEffect, useState } from 'react'
import "./counter.scss"
import { IoMdAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
export default function Counter({callback=()=>{}}) {
    const [number, setnumber] = useState(0)
    useEffect(()=>{
        if(number <0){
            setnumber(0)
        }else{
          callback(number)
        }
    },[number])
  return (
    <div className="number">
      <div onClick={() => setnumber(number - 1)}>
        <GrSubtractCircle size={20} />
      </div>
      <div>{number}</div>
      <div onClick={() => setnumber(number + 1)}>
        <IoMdAddCircle size={20} />
      </div>
    </div>
  );
}
