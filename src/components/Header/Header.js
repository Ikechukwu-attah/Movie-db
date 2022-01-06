import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import  profileImage  from '../../images/profileImage.jpg'
import './Header.scss'
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submiteHandler = (e)=>{
    e.preventDefault();

    if(term === ""){
      return alert("please enter correct search term")
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));

   

    setTerm("");
  }
  return (
    <div className="header">
      
        <div className="logo">
        <Link to="/">
          Movie App
          </Link>
          </div>

          <div className="search-bar">
            <form onSubmit={submiteHandler}>
              <input type="text" value={term}  placeholder="Search Movies or Shows"
               onChange={(e)=>setTerm(e.target.value)} />
              <button><i className="fa fa-search"></i></button>
            </form>
          </div>
      

      <div className="user-image">
         <img src={profileImage} alt="user" className="img1" />
      </div>
    </div>
  );
};

export default Header;
