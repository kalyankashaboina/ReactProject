import axios from "axios"
import { useEffect, useState } from "react"
import { Carousel } from "react-responsive-carousel"
import { useNavigate, useParams } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./hostel.css"

const HostelsInfo=()=>{
    const hostel=useParams()
    const home=useNavigate()
    // console.log(hostel)

    const[Item,SetItem]=useState([])
    useEffect(()=>{handleEvent()},[])

    const handleEvent=()=>{
        axios.get(`http://localhost:3031/users/${hostel.id}`)
        .then(response => {
          SetItem(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    };
    const handle=()=>{
        home("/home")
    }
    let a=0
    const follow=()=>{
      let p=document.getElementById("fw")
      if(a==0){
        p.style.width="100%"
        p.style.transition="0.5s"
        p.style.color="white"
        p.style.fontWeight="600"
        a++
      }
      else{
        p.style.width="68%"
        p.style.transition="0.5s"
        p.style.color="black"
        p.style.fontWeight="500"
        a--
      }
    }
    
    return(<>

    {/* <h2>Hostels</h2>
   
    <h3>name--{Item.name}</h3>
    <h4>place---{Item.place}</h4>
    <img src={Item.image} alt="no image"></img>
    <h5>pirce--${Item.price}</h5>
    <img src={Item.image1} alt="no image"></img>
    <img src={Item.image2} alt="no image"></img>
    <img src={Item.image3} alt="no image"></img> */}
   
   
    <button onClick={handle} className="click">home</button>



    <div id="mainhostel">
  <div className="d1hostel">
    <div id="imagehostel">
      <img src="https://images.unsplash.com/photo-1703533136832-2e91ef1a746f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" />
    </div>
    <div id="namehostel">{Item.name} boys hostel</div>
    <div id="buttonssdiv">
      <button id="f" onClick={follow}><div id="fw">Following</div></button>
      <button id="m">Message</button>
    </div>
    <div id="stats">
      <div>
        <p>Total Views</p>
        <p className="t">7.9k</p>
      </div>
      <div>
        <p>All-time rank</p>
        <p className="t">100.9k</p>
      </div>
      <div>
        <p>30-day price</p>
        <p className="t">{Item.price}</p>
      </div>
    </div>
  </div>
  <div className="d2">
    <div>
      <button className="button1">Highlights</button>
      <button  className="button1">Gallery</button>
      <button  className="button1">Collections</button>
      <button  className="button1">Statistics</button>
      <button  className="button1">Followers</button>
      <button  className="button1">Following</button>
    </div>
    <div>
      <select>
        <option>Photos and videos</option>
        <option>videos</option>
        <option>photos</option>
      </select>
      <select>
        <option>Recency</option>
        <option>Popularity</option>
      </select>
    </div>
  </div>
  <div className="d3">
    <div className="img">
    <img src={Item.image} alt="no image" className="lazy-image" />
    </div>
    <div  className="img">
    <img src={Item.image1} alt="no image" className="lazy-image" />
    </div>
    <div>
    <img src={Item.image2} alt="no image" className="lazy-image"/>
    </div>
    <div>
    <img src={Item.image3} alt="no image" className="lazy-image"/>
    </div>
    <div>
    <img src={Item.image} alt="no image" className="lazy-image"/>
    </div>
    <div>
    <img src={Item.image2} alt="no image" className="lazy-image"/>
    </div>
  </div>
</div>


    
    </>)
}
export default HostelsInfo