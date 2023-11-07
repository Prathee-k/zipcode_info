import React from 'react'
import { PiHouseDuotone } from "react-icons/pi";
import { BiMapPin } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
const Info = ({ data }) => {
  console.log(data);
  return (
    <div className='card'>
      <div className="info">
        <div className="list">
          <BiMapPin className='icon' />

          <h3> Placename :            {data?.places[0]['place name']}

          </h3>
        </div>

        <div className='list2'>

          <PiHouseDuotone className='icon' />
          <h3>
            State :  {data?.places[0]?.state}

          </h3>
        </div>
        <div className="list3">

          <FaGlobe className='icon' />
          <h3>
            Country :  {data?.country}

          </h3>

        </div>


      </div>

    </div>
  )
}

export default Info