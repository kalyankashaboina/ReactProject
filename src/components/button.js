import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./post-Login/searchbar";

const Button = () => {
  const pages = useNavigate();

  useEffect(() => {
    handleClick();
  }, []);

  const [insfom, setInform] = useState([]);

  const [filteredHostels, setFilteredHostels] = useState([]);

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
    const filteredHostels = insfom.filter(
      (hostel) =>
        hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hostel.price.toString().includes(searchTerm)
    );
    setFilteredHostels(filteredHostels);
  };

  const PageClick = () => {
    pages("/hostels/:id");
  };
  const FacPage = () => {
    pages("facilities:id");
  };

  return (
    <> <SearchBar onSearch={handleSearch}/>

      {(filteredHostels.length > 0 ? filteredHostels : insfom).map((value, index) => {
        return (

          <>
        
         
            <div>
              <h1 key={index}>{value.name}</h1>

              <Link to={`/hostels/${value.id}`}>
                <button> See More</button> </Link>

              <Link to={`/facilities/${value.name}/${value.id}`}>
                <button onClick={FacPage} className="click">
                  facility pages
                </button>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Button;
