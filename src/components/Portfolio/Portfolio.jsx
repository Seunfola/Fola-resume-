import React from "react";
import "./portfolio.css";
import AdviceGen from "../../img/Advice-Gen.jpg";
import Emart2 from "../../img/Emart2.jpg";
import Real from '../../img/Real.jpg'



const Portfolio = () => {
  return (
    <>
      <div className="wrapper">
        <span className="none-one d-block text-center" style={{
          color: "grey",
          fontSize: "2rem",
          fontWeight: "bold"
        }}>Recent Projects</span>
        <span className="none-two text-center" style={{
          color: "#004987",
          fontSize: "2.5rem",
          fontWeight: "bold"
        }}>Portfolio</span>
      </div>
      <div className="p-wrapper">
        <div
          id="carouselExampleCaptions"
          className="carousel slide rounded m-3"
          width="100%"
          
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active me-1"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              className="me-2"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Real}
                className="d-block h-sm w-100"
href="https://bulb-capstone-9b12.vercel.app/home"
                alt="image for the mart"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw-bolder font-monospace fs-2">
                  Online Store
                </h5>

              </div>
            </div>
            <div className="carousel-item">
              <img src={AdviceGen} className="d-block w-100" alt="..." href="" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw-bolder font-monospace fs-2">
                  Advice Generator
                </h5>

              </div>
            </div>
            <div className="carousel-item">
              <img
                src={Emart2}
                className="d-block w-100"
href=""
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw-bolder font-monospace fs-2">

                </h5>

              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
