import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Add from "../components/Add";


function Home() {
       
  return (
    <div className="container mt-4 mb-5">
      <Carousel>
        <Carousel.Item style={{ height: "700px" }}>
          <img
            style={{
              objectFit: "cover",
              top: "0px",
              left: "0px",
              minHeight: "100%",
            }}
            className="d-block w-100 rounded "
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00370432-fljvblmqpq-landscape.jpg"
            alt="no image"
          ></img>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "700px" }}>
          <img
            style={{
              objectFit: "cover",
              top: "0px",
              left: "0px",
              minHeight: "100%",
            }}
            className="d-block rounded  w-100 h-100"
            src="https://images.deccanherald.com/deccanherald/2023-08/6c6af2c0-1244-4067-a88b-9c53e3156a9c/Jailer_Movie_Posters__4_.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
            alt="no image"
          ></img>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "700px" }}>
          <img
            style={{
              objectFit: "cover",
              top: "0px",
              left: "0px",
              minHeight: "100%",
            }}
            className="d-block rounded w-100 h-100"
            src="https://wallpapercave.com/wp/wp6843670.jpg "
            alt="no image"
          ></img>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="movie-reviews mt-5">
        <h3 className="text-center mt-2 mb-3">Expolre the movie reviews</h3>
            <Add/>
     
      </div>
    </div>
  );
}

export default Home;
