import React from "react";
import "./Style.css";
import myData from "./data.json";

function HomePage() {
  return (
    <div className="root">
      <h1>This is the home page</h1>
      <input type="text" placeholder="Search ... " />
      <button>Search</button>
      <div>
        <div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">
            Select a country :
          </button>
          <div id="myDropdown" class="dropdown-content">
            <input
              type="text"
              placeholder="Search.."
              id="myInput"
              onkeyup="filterFunction()"
            />
            <a href="#about">About</a>
            <a href="#base">Base</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#custom">Custom</a>
            <a href="#support">Support</a>
            <a href="#tools">Tools</a>
          </div>
        </div>
      </div>
      <div>
        {myData.map((Product) => {
          return (
            <div className="product-container">
              <img
                src={Product.image}
                className="product-img"
                alt={Product.prod_name}
              />
              <div className="product-discribe">{Product.prod_name}</div>
              <div className="product-discribe">Price : £{Product.price}</div>
              <button className="add-btn">Add </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

// import React , {useState} from "react";

// const Video = () => {

//     return(
//         <span className="video_container">
//             <h3>My Video</h3>

//          {/* /* put add  search component */}
//             {mydata.map( (movie)=>
//             <VideoDetails movie={movie}/>
//           )}

//         </span>
//     )
// };

// export default Video ;
