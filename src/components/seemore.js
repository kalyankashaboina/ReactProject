import React, { useEffect, useState } from 'react'
import img1 from './images/pexels-adrienne-andersen-2254065.jpg'
import axios from 'axios'

function ImagesPaths() {
  const[Item,SetItem]=useState([])
  const [loading, setLoading] = useState(true);
  useEffect(()=>{handleEvent()},[])

  const handleEvent=()=>{
    axios.get(`http://localhost:3031/users/1`)
    .then(response => {
      SetItem(response.data);
      setLoading(false); 
      console.log(response.data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
};
  return (
  <> 
    <div>ImagesPaths</div>
    <img src={Item.image} alt="no image"/>
    
    </>
  )
}

export default ImagesPaths