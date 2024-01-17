import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import NavBarPage from "./navbar";
import "./home.css"
import img1 from '../images/like.png'


const HomePage = () => {
  const pages = useNavigate();

  
  const [insfom, setInform] = useState([]);
  const [filteredHostels, setFilteredHostels] = useState([]);

  
 
  useEffect(() => {
    
    handleClick();
  }, []);
  const handleClick = () => {
    axios
      .get(`http://localhost:3031/users/`)
      .then((response) => {
        setInform(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  
  const handleSearch = (searchTerm) => {
    if (typeof searchTerm === 'string') {
      const filteredHostels = insfom.filter(
        (hostel) =>
          hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hostel.price.toString().includes(searchTerm)
      );
      setFilteredHostels(filteredHostels);
    }
  };



  // const handleSearch = (searchTerm) => {
  //   if (typeof searchTerm === 'string') {
  //     const searchTermLowerCase = searchTerm.toLowerCase();
  
  //     // Filter by name or price
  //     const filteredHostelsByNameOrPrice = insfom.filter(
  //       (hostel) =>
  //         hostel.name.toLowerCase().includes(searchTermLowerCase) ||
  //         hostel.price.toString().includes(searchTermLowerCase)
  //     );
  
  //     // Filter by maximum price (less than or equal to)
  //     const maxPrice = parseFloat(searchTerm);
  //     const filteredHostelsByMaxPrice = insfom.filter(
  //       (hostel) => parseFloat(hostel.price) <= maxPrice
  //     );
  
  //     // Combine both filters
  //     const combinedFilter = filteredHostelsByNameOrPrice.concat(
  //       filteredHostelsByMaxPrice
  //     );
  
  //     setFilteredHostels(combinedFilter);
  //   }
  // };

 

  const PageClick = () => {
    pages("/hostels/:id");
  };
  const FacPage = () => {
    pages("facilities:id");
  };
  let a1=0
  const like=()=>{
    let lb=document.getElementById("likebtn")
    let i=document.getElementById("icon")
      if(a1==0){
  lb.style.backgroundColor="blue"
  a1++
  }
  else{
    lb.style.backgroundColor="white"
    a1--
  }
}
  
  return (
    <>
      {/* <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark"> */}

      {/* </nav> */}
      {/* <NavBarPage/> */}

      <NavBarPage handleSearch={handleSearch} handleClick={handleClick}/>
      {/* <div className="div1"> */}
        {/* {" "} */}
        <div className="parentdiv">
        {/* <br></br> */}
       {(filteredHostels.length > 0 ? filteredHostels : insfom).map(
          (value, index) => {
            return (
              <>
                {/* {console.log(insfom)}

                <div>
                  <h1 key={index} className="click2">
                    {value.name}
                  </h1>

                  <Link to={`/hostels/${value.id}`}>
                    <button className="click1"> See More</button>{" "}
                  </Link>

                  <Link to={`/facilities/${value.name}/${value.id}`}>
                    <button onClick={FacPage} className="click">
                      facility pages
                    </button>
                  </Link>
                </div> */}

                {/* stylingpart */}

                <div id="maine" key={index}>
                  <div className="d1home">
                    <p>
                      3 BHK Flat In {value.name}, Kukatpally For Sale In
                      Vasavi Signature
                    </p>
                    <Link>
                      KPHB 5th Phase, {value.place}, Hyderabad, Telangana 500072,
                      India
                    </Link>
                  </div>
                  <div className="d2home">
                    <div className="start">
                      starting at: &nbsp;<div>{value.price}/Month</div>
                    </div>
                    <div className="Availability">
                      Availability :&nbsp;<div> Yes</div>
                    </div>
                  </div>
                  <div className="d3home">
                    <div className="carouseles">
                      <img src={value.image} className="imagehostel" />
                    </div>
                    <div className="facilitiesbox">
                      <div className="facilities">
                        <div>24/7 Water facility</div>
                        <div>High speed Wifi</div>
                        <div>Hygenic food</div>
                        <div>Form individual to four sharing</div>
                      </div>
                      <div id="buttonsdiv">
                      <Link style={{textDecoration: 'none'}} to={`/hostels/${value.id}`}>
                        <button id="knowmorebtn" >Know More</button>
                        </Link>
                        <button id="likebtn" onClick={like}>
                          <img id="icon" src={img1}></img>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              
              </>
            );
          }
        )}
        </div>
      {/* </div> */}
    </>
  );
};

export default HomePage;
