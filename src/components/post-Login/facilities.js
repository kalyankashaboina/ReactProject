import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Facilities = () => {
  const para=useParams()
  const home=useNavigate()

const[Facilty,SetFacility]=useState([])
// console.log(para)
useEffect(()=>{handleEvent()},[])

  const handleEvent=()=>{
    axios.get(`http://localhost:3031/users/${para.id}/`)
    .then(response => {
      SetFacility(response.data);
      // console.log(response.data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
};
const handle=()=>{
  home("/home")
}

  return (<>
    <div> the facilities</div>
    <button onClick={handle}>Home</button>
    
    {console.log(Facilty)}
    

        <h4>{Facilty.name}</h4>
<div style={{width:400,display:'flex',alignItems:'center'}}>
        <Carousel  >
                <div >
                    <img src={Facilty.image1}/>
                    <p className="legend"  >Beds</p>
                </div>
                <div >
                    <img src={Facilty.image2} />
                    <p className="legend" >Dinning room</p>
                </div>
                <div >
                    <img src={Facilty.image3} />
                    <p className="legend"  >Laundry place</p>
                </div>
            </Carousel>
            </div>


      







    </>
  )
}

export default Facilities

