import React, { useState } from 'react'
import Info from './Info'
import { BsFillSendFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import map from './images/map.jpg'
import error from './images/error.jpg'
import { MagnifyingGlass } from 'react-loader-spinner'
const Display = () => {

  let [val, setVal] = useState(null)
  const [load, setLoad] = useState(false)
  const [inp, setInp] = useState()
  const [err, setErr] = useState(false)
  const [disp, setDisp] = useState(false)
  let fetchdata = async (inp) => {
    try {
      let res = await fetch(`https://api.zippopotam.us/in/${inp}`)
      if (res.status === 200) {
        let data = await res.json()
        setVal(data)
        setLoad(false)
        setDisp(true)
      }
      else {
        setLoad(false)
        setErr(true)
      }
    }
    catch (error) {
      console.log(error);
      setErr(true)

    }
  }


  let handleForm = (e) => {
    e.preventDefault()
    fetchdata(inp)
    setLoad(true)
    setInp("")
  }


  let clear = (e) => {
    e.preventDefault()
    setInp("")
    setDisp(false)
    setErr(false)

  }


  return (
    <div className='box'>

      <img className="image" src={map} alt="" />
      <form onSubmit={handleForm}>
        <div className="title">
          <span>
            <BiCurrentLocation className='tit-icn' />

          </span>
          <h1>Zipcode Information </h1>

        </div>
        <input type="text" maxLength={6} placeholder='  Enter your postalcode....' onChange={(e) => { setInp(e.target.value); setErr(false); setDisp(false) }} value={inp} />
        <div className="sub">
          <button type='submit' className='btn'><BsFillSendFill className='icn' />Submit</button>

        </div>

      </form>


      {load && <div className='spin'>

        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor='transparent'
          color='black'
        />
      </div>
      }
      {disp && <Info data={val} />}
      {(err || disp) && <div><button onClick={clear} className='btn-2'><BsFillTrashFill className='icn6' />Clear</button></div>}

      {err && <div className='error'><img className='errimg' src={error} style={{ marginRight: "5px" }} height={50} alt="" />
        <h2>    Location unavailable</h2></div>}


    </div>
  )
}

export default Display

